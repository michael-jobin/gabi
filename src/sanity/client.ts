import { createClient } from "next-sanity";

export const client = createClient({
 projectId: "oi0khzzz",
 dataset: "production",
 apiVersion: "2024-01-01",
 useCdn: false,
});