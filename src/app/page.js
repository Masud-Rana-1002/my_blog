
import { getPost } from "@/api/postApi";

import Image from "next/image";
import Link from "next/link";

export default async function    Home()  {

    const postData = await getPost();
    return (
      <div>
        
       <p>post{postData.length}</p>
       <div className='grid grid-cols-4 gap-6 '>
          {postData.map((post)=>(
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className='bg-white shadow-lg rounded-lg
             p-1  hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-2xl h-20 hover:cursor-pointer ' key={post.id}>
              <h2 className='text-lg font-medium p-1'>{post.title}</h2>
              
            </div>
            </Link>
          ))}
       </div>
      </div>
    );
  };