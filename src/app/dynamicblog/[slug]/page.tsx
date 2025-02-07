"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Image from "next/image";

interface BlogPost {
  title: string;
  description: string;
  imageUrl: string;
  Publisheddate: string;
  content: string;
}

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null); // Store blog post data
  const [comments, setComments] = useState<string[]>([]); // State to store comments
  const [newComment, setNewComment] = useState(""); // State to manage new comment input

  // Fetch blog post by slug
  useEffect(() => {
    async function fetchBlogPost() {
      const slug = params.slug;
      if (!slug) return;

      const query = `*[_type == "blogposts" && slug.current == $slug][0]{
        title,
        description,
        "imageUrl": image.asset->url,
        Publisheddate,
        content
      }`;

      const fetchedBlogPost = await client.fetch(query, { slug });
      if (fetchedBlogPost) {
        setBlogPost(fetchedBlogPost);
      } else {
        notFound();
      }
    }
    fetchBlogPost();
  }, [params.slug]);

  // Handle new comment input
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  // Add a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment(""); // Reset input after comment is added
    }
  };

  // Delete a comment
  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments); // Remove the comment from state
  };

  // Render loading state if blog post is not fetched yet
  if (!blogPost) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Blog Image */}
      <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
        <Image
          src={blogPost.imageUrl}
          alt={blogPost.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Blog Title and Meta Data */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-[#da7509] leading-tight">{blogPost.title}</h1>
        <span className="block text-sm text-[#da7509] mt-2">Published on {blogPost.Publisheddate}</span>
      </div>

      {/* Blog Description */}
      <p className="text-lg text-gray-700 mt-4">{blogPost.description}</p>

      {/* Blog Content */}
      <div className="prose prose-lg text-gray-800 mt-8 max-w-full">
        <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-[#da7509] mb-4">Comments</h2>

        {/* Displaying Existing Comments */}
        <div className="space-y-4 mb-6">
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="p-4 border border-[#da7509] rounded-lg shadow-sm flex justify-between items-center">
                <p className="text-gray-800">{comment}</p>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="ml-4 text-red-600 hover:text-red-800 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Comment Input and Button */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
            className="p-3 border border-[#da7509] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da7509]"
          />
          <button
            onClick={handleAddComment}
            className="px-6 py-3 bg-[#da7509] text-white rounded-lg shadow-md hover:bg-[#c56b07] focus:outline-none"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
