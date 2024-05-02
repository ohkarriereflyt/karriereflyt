import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,  
  dataset: "production",
  apiVersion: new Date().toISOString().slice(0, 10),
  useCdn: false,  
})
