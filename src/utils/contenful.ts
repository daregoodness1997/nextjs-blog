import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_APIKEY || "",
});
