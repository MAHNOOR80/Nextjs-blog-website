import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import Link from "next/link";

// Type definition for blog post interface
interface BlogPost {
  category: {
    slug: {
      current: string;
    };
  };
  slug: {
    current: string;
  };
  imageUrl: string;
  title: string;
  description: string;
  Publisheddate: string;
}

async function FetchData() {
  const Data = await client.fetch(`*[_type == "blogposts"]{
    "category": category->slug, 
    "slug": slug, 
    "imageUrl": image.asset->url,
    title,
    description,
    Publisheddate
  }`);
  return Data;
}

async function Page() {
  const Data: BlogPost[] = await FetchData();
  console.log(Data);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-black min-h-screen ">
      <Header />
      <h1 className="text-5xl font-extrabold text-center mb-12 text-white">
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Data.map((blog: BlogPost) => (
          <div
            key={blog.slug.current}
            className="bg-gray-800 shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3 truncate">
                {blog.title}
              </h2>

              <p className="text-xs text-gray-400 font-medium">
                <span className="font-semibold">Published:</span> {blog.Publisheddate}
              </p>
              {/* Read More Button */}
              <Link href={`/dynamicblog/${blog.slug.current}`}>
                <button className="mt-4 w-full px-5 py-3 text-white font-semibold bg-[#da7509] hover:bg-[#b66b08] transition-all duration-300 rounded-lg shadow-md">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Page;
