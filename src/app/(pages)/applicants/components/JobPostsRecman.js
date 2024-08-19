"use client";

import { useEffect, useState } from "react";
import JobPosts from "../../../components/JobPosts";

const apiKey = process.env.RECMAN_API_SECRET;

const branchToNorwegian = {
  "Banking / Finance / Insurance": "Bankvirksomhet / Finans / Forsikring",
  Consulting: "Konsulentvirksomhet",
  "Research / Development": "Forskning / Utvikling",
  "Health / Welfare": "Helse / Velferd",
  "Hotel / Restaurant": "Hotell / Restaurant",
  "Building / Construction / Mechanics": "Bygg / Anlegg / Mekanikk",
  "Industry / Manufacturing": "Industri / Produksjon",
  "Interest group": "Interesseorganisasjon",
  "IT / Telecom / Internet": "IT / Telekommunikasjon / Internett",
  "Farming / Forest / Hunting / Fishing": "Jordbruk / Skogbruk / Jakt / Fiske",
  "Arts / Culture": "Kunst / Kultur",
  "Media / Information / PR": "Media / Informasjon / PR",
  "Public service": "Offentlig tjeneste",
  "Offshore exploit": "Offshore utnyttelse",
  "Personal services": "Personlige tjenester",
  "Cleaning / Waste": "Rengjøring / Avfall",
  "Sales / Marketing": "Salg / Markedsføring",
  "Transport / Logistics / Warehouse": "Transport / Logistikk / Lager",
  "Education / Teaching / Research": "Utdanning / Undervisning / Forskning",
  Retail: "Detaljhandel",
  Other: "Annet",
  "Administration / Office / Personnel": "Administrasjon / Kontor / Personell",
  "Economy / Controlling": "Økonomi / Kontroll",
  Engineering: "Ingeniørvirksomhet",
  Tourism: "Turisme",
  "Plumbing / Heating / Sanitary": "VVS (Vann, Varme, Sanitær)",
  "Aviation / Aerospace": "Luftfart / Romfart",
  "Real estate": "Eiendom",
};

const jobTypeToNorwegian = {
  fullTime: "Fast",
  partTime: "Deltid",
};

export default function JobPostsRecman() {
  const [enhancedJobApi, setEnhancedJobApi] = useState([]);
  const [finishedBranch, setFinishedBranch] = useState([]);
  const [categoriesBranch, setCategoriesBranch] = useState({});
  const [uniqueRegions, setUniqueRegions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [jobs, jobBranches, branchCategories, jobRegionData, allRegions] =
          await Promise.all([
            fetchJobs(),
            fetchJobBranches(),
            fetchBranchCategories(),
            fetchJobRegions(),
            fetchRegions(),
          ]);

        const jobApi = jobs
          ? Object.values(jobs)
              .filter((job) => {
                const now = new Date();
                const endDate = new Date(job.endDate);
                return !isNaN(endDate) && endDate >= now;
              })
              .map((job) => {
                const position = job.position
                  ? jobTypeToNorwegian[job.position] || job.position
                  : "Not provided";
                return {
                  id: job.jobPostId,
                  name: job.name,
                  created: job.created,
                  title: job.title,
                  startDate: job.startDate,
                  endDate: job.endDate,
                  ingress: job.ingress,
                  body: job.body,
                  numberOfPositions: job.numberOfPositions,
                  logo: job.logo,
                  deadline: job.deadline,
                  postalCode: job.postalCode,
                  city: job.city,
                  applyUrl: job.applyUrl,
                  companyName: job.companyName,
                  workplace: job.workplace,
                  position,
                  positionType: job.positionType,
                  address1: job.address1,
                  contacts: job.contacts,
                  skills: job.skills,
                  accession: job.accession,
                  branchCategoryId: job.branchCategoryId || "Not provided",
                  regionId: job.regionId || "Not provided",
                };
              })
              .sort((a, b) => new Date(b.created) - new Date(a.created))
          : [];

        const uniqueJobs = {};
        jobBranches.forEach((job) => {
          if (!uniqueJobs[job.branchCategoryId]) {
            uniqueJobs[job.branchCategoryId] = job;
          }
        });

        const finishedBranch = Object.values(uniqueJobs);

        const categoriesBranch = {};
        branchCategories.branchCategoryList.forEach((category) => {
          const translated = branchToNorwegian[category.name] || category.name;
          categoriesBranch[category.branchCategoryId] = translated;
        });

        const regionMap = allRegions.reduce((acc, region) => {
          acc[region.regionId] = region.name;
          return acc;
        }, {});

        const enhancedJobApi = jobApi.map((job) => ({
          ...job,
          regionName: regionMap[job.regionId] || "Unknown",
        }));

        const uniqueRegionIds = new Set(
          jobRegionData.map((job) => job.regionId)
        );
        const uniqueRegions = Array.from(uniqueRegionIds).map((regionId) => ({
          regionId: regionId,
          regionName: regionMap[regionId] || "Unknown",
        }));

        setEnhancedJobApi(enhancedJobApi);
        setFinishedBranch(finishedBranch);
        setCategoriesBranch(categoriesBranch);
        setUniqueRegions(uniqueRegions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  async function fetchJobs() {
    const jobResponse = await fetch(
      `https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=projectId,name,title,ingress,body,numberOfPositions,startDate,endDate,logo,deadline,departmentId,facebook,linkedin,twitter,instagram,address1,address2,postalCode,city,country,web,salary,corporationId,created,updated,applyUrl,contacts,type,sector,accession,companyName,workplace,images,videoUrl,branchCategoryId,branchId,secondaryBranchCategoryId,secondaryBranchId,skills,countryId,regionId,cityId,position,positionType,socialMedia,finnUrl,locations`
    );
    if (!jobResponse.ok) throw new Error("Failed to fetch jobs");
    return jobResponse.json();
  }

  async function fetchBranchCategories() {
    const response = await fetch(
      `https://api.recman.no/v2/get/?key=${apiKey}&scope=branch`
    );
    const data = await response.json();
    return data.data;
  }

  async function fetchJobBranches() {
    const response = await fetch(
      `https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=branchCategoryId`
    );
    const data = await response.json();
    return data.data;
  }

  async function fetchJobRegions() {
    const regionResponse = await fetch(
      `https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=regionId`
    );
    const data = await regionResponse.json();
    return data.data;
  }

  async function fetchRegions() {
    const response = await fetch(
      `https://api.recman.no/v2/get/?key=${apiKey}&scope=location`
    );
    if (!response.ok) {
      console.error("Failed to fetch regions:", response.status);
      return [];
    }
    const data = await response.json();
    if (!data || !data.region) {
      console.error("Invalid region data structure:", data);
      return [];
    }
    return data.region;
  }

  return (
    <JobPosts
      jobApi={enhancedJobApi}
      finishedBranch={finishedBranch}
      categoriesBranch={categoriesBranch}
      uniqueRegions={uniqueRegions}
    />
  );
}
