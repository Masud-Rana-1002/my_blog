// app/posts/[id]/page.js
import { getPostDetails } from '@/api/postApi'; // Import the function to fetch post details
import React from 'react';

// Dynamic page component for fetching and displaying post details
const Page = async ({ params }) => {
  try {
    // Fetch post details using the `id` from the dynamic route
    const postDetails = await getPostDetails(params.id);

    console.log(postDetails); // Log the data for debugging purposes

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Details</h1>
          {postDetails ? (
            <div className="space-y-4">
              <div className="text-gray-600">
                <p className="text-sm font-semibold text-gray-500">Post ID:</p>
                <p className="text-lg">{postDetails.id}</p>
              </div>
              <div className="text-gray-600">
                <p className="text-sm font-semibold text-gray-500">User ID:</p>
                <p className="text-lg">{postDetails.userId}</p>
              </div>
              <div className="text-gray-600">
                <p className="text-sm font-semibold text-gray-500">Title:</p>
                <p className="text-lg font-medium">{postDetails.title}</p>
              </div>
              <div className="text-gray-600">
                <p className="text-sm font-semibold text-gray-500">Content:</p>
                <p className="text-lg">{postDetails.body}</p>
              </div>
            </div>
          ) : (
            <p className="text-red-500 font-medium text-center">
              Post not found!
            </p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching post details:', error); // Log errors to help debugging
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 font-medium">Something went wrong. Please try again later.</p>
      </div>
    );
  }
};

export default Page;
