'use client';

import Link from 'next/link';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

const Navbar = () => {
    const { user, isLoading, error, login, logout } = useKindeBrowserClient();

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="container mx-auto w-11/12">
            <div className="p-4 flx flex items-center justify-between">
                <h1 className="text-3xl font-bold">My Blog</h1>
                <ul className="flex space-x-4  ">
                    <li className='text-white'><Link href="/">Home</Link></li>
                    <li className='text-white'><Link href="/profile">Profile</Link></li>
                </ul>
                <div className="flex items-center space-x-4">
                    {user ? (
                        <div className="flex items-center  Log">
                            <p className='mr-4 '>Welcome, {user?.given_name}</p>
                            <LogoutLink>
                                <button onClick={logout} className=" p-3 ml-6 rounded btn ">
                                    Log out
                                </button>
                            </LogoutLink>
                        </div>
                    ) : (
                        <>
                            <LoginLink className='btn'>Sign in</LoginLink>
                            <RegisterLink className="btn">Register</RegisterLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
