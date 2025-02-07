import { defineQuery } from "next-sanity";
import { client } from "./client";

export async function getProductsByCategory(categorySlug: string) {
    const query = `*[_type == "blogposts" && category->Slug.current == $categorySlug]{
   slug,
    "imageUrl": image.asset->url,
    title,
    description,
    Publisheddate
  }`;
  
    const params = { categorySlug };
    return await client.fetch(query, params);
  }

export const allproducts = defineQuery(`
    *[_type == "blogposts"]{
    "category": category->slug,
    slug,
    "imageUrl": image.asset->url,
    title,
    description,
    Publisheddate
  }
  `);
  