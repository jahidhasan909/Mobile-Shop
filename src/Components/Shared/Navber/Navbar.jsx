"use client"
import { ThemeSwitch } from "@/Components/ThemeSwitch";
import { signOut, useSession } from "@/lib/auth-client";
import { ShoppingCart } from "@gravity-ui/icons";
import { Button, SearchField } from "@heroui/react";
import Link from "next/link";
import { IoPersonCircleSharp } from "react-icons/io5";

import { HashLoader } from "react-spinners";


const Navbar = () => {


    const { data, isPending } = useSession()

    const user = data?.user

    if (isPending) {
        <div className='flex items-center justify-center min-h-screen'>
            <HashLoader />
        </div>
    }



    return (
        <div className="w-full border-b border-separator bg-black  text-white  backdrop-blur-lg">
            <nav className="sticky top-0 z-40  container mx-auto">
                <header className="flex h-20 items-center justify-between px-6">
                    <div className="flex items-center relative">
                        <Link href='/'> <p className="font-bold text-4xl animate-pulse " >dazzle</p></Link>
                    </div>

                    <SearchField name="search">
                        <SearchField.Group className='bg-white rounded'>
                            <SearchField.SearchIcon />
                            <SearchField.Input className="w-[300px] text-neutral-900" placeholder="Search..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>


                    <ul className="flex items-center gap-4">
                        <li><ThemeSwitch></ThemeSwitch></li>
                        <li>{user && <div className="text-white flex items-center gap-2">
                            <Button onClick={() => signOut()} variant="outline" className='text-white rounded-md'>Log Out</Button>
                            <div className="flex items-center gap-1">
                                <span className="bg-white text-black rounded-full"> <IoPersonCircleSharp className="w-9 h-9" /></span>
                                <div>
                                    <p>{user.name}</p>
                                    <p className="text-xs">{user.email}</p>
                                </div>
                            </div>
                        </div>}</li>
                    </ul>
                    
                </header>
            </nav>
        </div>
    );
};

export default Navbar;