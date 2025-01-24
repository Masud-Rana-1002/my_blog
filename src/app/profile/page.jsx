'use client';

import { useEffect, useState } from 'react';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation'; // Next.js router for redirection

const Profile = () => {
  const { user, isLoading, error } = useKindeBrowserClient();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      setIsRedirecting(true);
      router.push('/api/auth/login'); 
    }
  }, [isLoading, user, error, router]);

  if (isLoading) return <p>Loading...</p>; 

  if (isRedirecting) return <p>Redirecting...</p>; 

  return (
    <div className="container mx-auto w-11/12 bg-[#943232] py-10 rounded-lg px-4 mt-10">
      {user ? (
        <>
          <h1 className="text-3xl text-white">Welcome to your profile, {user?.given_name}!</h1>
          <p className="text-white mt-4">This is a protected page. You must be logged in to view it.</p>
        </>
      ) : (
        <div>
          <h1 className="text-3xl text-white">You are not logged in</h1>
          <p className="text-white mt-4">Redirecting to Kinde login...</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
