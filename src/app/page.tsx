import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Header from "./components/Header";
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
  const Data = await client.fetch(`*[_type == "blogposts"][0..2]{
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
    <div className="max-w-7xl mx-auto px-6 py-12 bg-black min-h-screen">
      <Header />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-center mb-12 text-white">
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 truncate">
                {blog.title}
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">
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
      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link href="/Blogs">
          <button className="px-8 py-3 text-lg sm:text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-[#da7509] to-[#b66b08] rounded-full shadow-xl hover:from-[#b66b08] hover:to-[#da7509] transition-all duration-300 transform hover:scale-110">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
