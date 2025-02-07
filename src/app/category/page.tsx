"use client"; // Ensures it runs on the client side

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Define TypeScript type for blog posts
interface BlogPost {
  image: string;
  title: string;
  description: string;
  category: string;
  Publisheddate: string;
}

// Function to fetch data from Sanity
async function fetchData(category: string = ""): Promise<BlogPost[]> {
  const query = category
    ? `*[_type== "blogposts" && category == "${category}"]{
        "image": image.asset->url,
        title,
        description,
        category,
        Publisheddate
      }`
    : `*[_type== "blogposts"]{
        "image": image.asset->url,
        title,
        description,
        category,
        Publisheddate
      }`;

  return await client.fetch(query);
}

export default function Page() {
  const [data, setData] = useState<BlogPost[]>([]); // ✅ Explicitly define type
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Fetch data when category changes
  useEffect(() => {
    async function loadData() {
      const result = await fetchData(selectedCategory);
      setData(result);
    }
    loadData();
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Latest Blog Posts</h1>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-6">
        {["All", "LivingroomDecor", "DinningandKitchen"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === "All" ? "" : category)}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.length > 0 ? (
          data.map((blog) => (
            <div key={blog.title} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <Image src={blog.image} alt={blog.title} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-bold">Category:</span> {blog.category}
                </p>
                <p className="text-gray-700 text-base mb-4">{blog.description}</p>
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Published:</span> {blog.Publisheddate}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No blog posts available.</p>
        )}
      </div>
    </div>
  );
}
