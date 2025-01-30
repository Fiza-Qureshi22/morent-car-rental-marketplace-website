// sanityClient.js
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'hrt7a6r2', // Sanity project ID
  dataset: 'production', // Dataset ka naam
  apiVersion: '2023-01-01', // API version
  useCdn: false, // Realtime data ke liye
});
