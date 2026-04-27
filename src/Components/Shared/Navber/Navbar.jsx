"use client"
import { ThemeSwitch } from "@/Components/ThemeSwitch";
import { signOut, useSession } from "@/lib/auth-client";
import { ShoppingCart } from "@gravity-ui/icons";
import { Button, SearchField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";




import { HashLoader } from "react-spinners";
import OverlayPage from "../OverlayPage/OverlayPage";



const Navbar = () => {


    const { data, isPending } = useSession()
    const [openOverlay, setOpenOverlay] = useState(false)



    const user = data?.user

    if (isPending) {
        <div className='flex items-center justify-center min-h-screen'>
            <HashLoader />
        </div>
    }
    console.log(user);





    return (
        <div className="w-full border-b border-separator bg-black  text-white  backdrop-blur-lg">
            <nav className="sticky top-0 z-40  container mx-auto">
                <header className="flex h-20 items-center justify-between px-6">
                    <div className="flex items-center relative">
                        <Link href='/'> <p className="font-bold text-4xl animate-pulse " >dazzle</p></Link>
                    </div>

                    <div className="">
                        <SearchField name="search" onClick={() => setOpenOverlay(true)}>
                            <SearchField.Group className='bg-white rounded'>
                                <SearchField.SearchIcon />
                                <SearchField.Input className="w-[300px] text-neutral-900" placeholder="Search..." />
                                <SearchField.ClearButton />
                            </SearchField.Group>
                        </SearchField>


                        <div>

                        </div>
                    </div>

                    <ul className="flex items-center gap-4">
                        <li><ThemeSwitch></ThemeSwitch></li>
                        <li>{user ? <div className="text-white flex items-center gap-2">
                            <Button onClick={() => signOut()} variant="outline" className='text-white rounded-md'>Log Out</Button>
                            <div className="flex items-center gap-1">
                                <Image className=' rounded-full' src={user?.image || 'https://i.ibb.co.com/Fb8tByM9/user.png'} width={40} height={10} alt='man'></Image>
                                <div>
                                    <p>{user.name}</p>
                                    <p className="text-xs">{user.email}</p>
                                </div>
                            </div>
                        </div> : <Button className={'rounded-md bg-black text-white'} variant="outline"><Link href={'/login'}>LogIn</Link></Button>}</li>
                    </ul>

                </header>

            </nav>
            {openOverlay && <OverlayPage closeOverlay={() => setOpenOverlay(false)} ></OverlayPage>}
        </div>
    );
};

export default Navbar;