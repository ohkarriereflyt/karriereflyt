import TransitionLine from "./TransitionLine";
import Link from "next/link";
import { client } from '../sanity';

const EVENTS_QUERY = `*[_type == "contact"][0]{
  contactAddress,
  contactPhoneNumber,
  contactEmail,
}`;

export default async function Footer({ transitionLine = true }) {

  let footerData = await client.fetch(EVENTS_QUERY);

  const socialMediaLinks = {
    facebook: "https://www.facebook.com/karriereflyt/",
    instagram: "https://www.instagram.com/karriereflyt/",
    linkedin: "https://www.linkedin.com/company/karriereflyt/"
  };

  const footerItems = [
    {
      header: "Karriereflyt AS",
      items: [
        "Org. nr: 930 011 428",
        "Rekruttering og bemanning"
      ]
    },
    {
      header: "Kontakt oss",
      items: [
        "E-post: " + footerData.contactEmail,
        "Telefon: " + footerData.contactPhoneNumber,
        "Adresse: " + footerData.contactAddress
      ],
    },
    {
      header: "Sider",
      items: [
        { name: "Hjem", href: "/" },
        { name: "Ledige stillinger", href: "/applicants" },
        { name: "Tjenester", href: "/services" },
        { name: "Om oss", href: "/about" },
        { name: "Kontakt oss", href: "/contact" },
        { name: "Personvernserklæring", href: "/policy" },
      ],
    },
  ];

  return (
    <footer className="relative w-full">
      {transitionLine ? (
        <div className="mb-[-2px]">
          <TransitionLine />
        </div>
      ) : (
        <div className="w-full h-4 slate-gray-background">
          <div className="w-full h-1 light-background opacity-10"></div>
        </div>
      )}
      <div className="w-full flex flex-col items-center bg-slate-gray-flat text-text-flat-inverted">
        <div className="w-full max-w-7xl flex md:flex-row justify-between flex-wrap">
          {footerItems.map((footerItem, index) => (
            <div key={index} className="text-nowrap flex-shrink-0 p-4">
              <h3>{footerItem.header}</h3>
              {footerItem.header === "Sider" ? (
                footerItem.items.map((item, index) => (
                  <Link key={index} href={item.href} passHref>
                    <button className="text-footer block text-left pb-1 hover:underline">{item.name}</button>
                  </Link>
                ))
              ) : (
                footerItem.items.map((item, index) => (
                  <p key={index} className="text-footer pb-1">{item}</p>
                ))
              )}
            </div>
          ))}
        </div>
        <div className="w-full max-w-7xl flex justify-center items-center flex-row p-4 ">
          {socialMediaLinks.linkedin != null && (
            <Link
              href={socialMediaLinks.linkedin}
              className={`hover:scale-105 noStyle w-8 h-8 flex-col justify-center items-center inline-flex`}>
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path className="light-fill" fillRule="evenodd" clipRule="evenodd" d="M1.8 -0.00390625H16.2C17.19 -0.00390625 18 0.806094 18 1.79609V16.1961C18 17.1861 17.19 17.9961 16.2 17.9961H1.8C0.81 17.9961 0 17.1861 0 16.1961V1.79609C0 0.806094 0.81 -0.00390625 1.8 -0.00390625ZM2.70703 4.49047C2.70703 5.21047 3.24703 5.75047 4.05703 5.75047C4.95703 5.75047 5.49705 5.21047 5.49705 4.49047C5.49705 3.77047 4.95703 3.23047 4.14703 3.23047C3.24703 3.23047 2.70703 3.77047 2.70703 4.49047ZM2.70703 14.3806H5.49705V6.64062H2.70703V14.3806ZM15.2986 14.3806H12.5086V10.1506C12.5086 8.98063 11.7886 8.71062 11.5186 8.71062C11.2486 8.71062 10.3486 8.89062 10.3486 10.1506V14.3806H7.55859V6.64062H10.3486V7.72062C10.7086 7.09062 11.4286 6.64062 12.7786 6.64062C14.1286 6.64062 15.2986 7.72062 15.2986 10.1506V14.3806Z" />
              </svg>
            </Link>
          )}
          {socialMediaLinks.facebook != null && (
            <Link
              href={socialMediaLinks.facebook} className={`hover:scale-105 noStyle w-8 h-8 flex-col justify-center items-center inline-flex`}>
              <svg width="10" height="19" viewBox="0 0 10 19" xmlns="http://www.w3.org/2000/svg">
                <path className="light-fill" d="M6.36902 18.9347V10.7387H9.07829L9.481 7.52965H6.36902V5.48565C6.36902 4.55965 6.62182 3.92565 7.92403 3.92565H9.57409V1.06465C8.7716 0.97665 7.9642 0.93465 7.15681 0.93765C4.76208 0.93765 3.1179 2.42965 3.1179 5.16865V7.52365H0.42627V10.7326H3.12378V18.9347H6.36902Z" />
              </svg>
            </Link>
          )}
          {socialMediaLinks.twitter != null && (
            <Link
              href={socialMediaLinks.twitter} className={`hover:scale-105 noStyle w-8 h-8 flex-col justify-center items-center inline-flex`}>
              <svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                <path className="light-fill" d="M10.6755 8.55927L17.2323 0.9375H15.6785L9.98524 7.55538L5.43803 0.9375H0.193359L7.06963 10.9449L0.193359 18.9375H1.7472L7.75946 11.9488L12.5616 18.9375H17.8063L10.6751 8.55927H10.6755ZM8.54726 11.0331L7.85055 10.0366L2.30708 2.10721H4.69369L9.16734 8.50645L9.86405 9.50296L15.6793 17.821H13.2926L8.54726 11.0335V11.0331Z" />
              </svg>
            </Link>
          )}
          {socialMediaLinks.instagram != null && (
            <Link
              href={socialMediaLinks.instagram} className={`hover:scale-105 noStyle w-8 h-8 flex-col justify-center items-center inline-flex`}>
              <svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                <path className="light-fill" fillRule="evenodd" clipRule="evenodd" d="M13.4095 0.9375H4.59094C2.16604 0.9375 0.181641 2.96182 0.181641 5.4375V14.4375C0.181641 16.9123 2.16604 18.9375 4.59094 18.9375H13.4095C15.8344 18.9375 17.8188 16.9123 17.8188 14.4375V5.4375C17.8188 2.96182 15.8344 0.9375 13.4095 0.9375ZM9.01318 13.6874C6.98358 13.6874 5.33869 12.008 5.33869 9.93758C5.33869 7.86623 6.98358 6.1875 9.01318 6.1875C11.0419 6.1875 12.6877 7.86623 12.6877 9.93758C12.6877 12.008 11.0419 13.6874 9.01318 13.6874ZM12.6916 5.0625C12.6916 5.68372 13.1845 6.1875 13.7939 6.1875C14.4033 6.1875 14.8962 5.68372 14.8962 5.0625C14.8962 4.44128 14.4033 3.9375 13.7939 3.9375C13.1845 3.9375 12.6916 4.44128 12.6916 5.0625Z" />
              </svg>
            </Link>
          )}
          {socialMediaLinks.youtube != null && (
            <Link
              href={socialMediaLinks.youtube} className={`hover:scale-105 noStyle w-8 h-8 flex-col justify-center items-center inline-flex`}>
              <svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
                <path className="light-fill" fillRule="evenodd" clipRule="evenodd" d="M19.6515 0.593399C20.5939 0.718701 21.4945 1.65401 21.6091 2.62941C22.0148 6.20413 22.0148 9.67054 21.6091 13.2441C21.4945 14.2195 20.5939 15.156 19.6515 15.2802C13.9053 16.0089 8.09417 16.0089 2.34961 15.2802C1.40642 15.1557 0.505785 14.2195 0.391194 13.2441C-0.0145127 9.67026 -0.0145127 6.20413 0.391194 2.62941C0.505785 1.65401 1.40642 0.718423 2.34961 0.593399C8.09417 -0.1353 13.905 -0.1353 19.6515 0.593399ZM9.17184 4.22461V11.65L14.6286 7.93744L9.17184 4.22461Z" />
              </svg>
            </Link>
          )}
        </div>
        <p className="text-footer pb-4 opacity-50">Karriereflyt AS © 2024</p>
      </div>
    </footer>
  );
}
