
import { Button } from "@heroui/react";
import { IoIosLaptop } from "react-icons/io";
import { FaTabletAlt } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";

import React from 'react';

import { LogoAcrobat, Smartphone } from "@gravity-ui/icons";
import { FaTv } from "react-icons/fa";

import Link from "next/link";

const Manuvar = () => {
    return (
        <div className="bg-white shadow-sm">
            <div className="grid grid-cols-7 items-center container mx-auto py-4 px-6">




                <div className='relative group hover:cursor-pointer'>
                    <button className="flex items-center gap-1 hover:cursor-pointer"> <Smartphone></Smartphone> PHONES</button>
                    <div className='absolute rounded-md shadow-md hidden top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col p-5 w-[155px] space-y-2'>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/phone/iphone'>Iphone</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/phone/samsung'>Samsung</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/phone/pixel'>Google pixel</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/phone/huawei'>Huawei</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/phone/motorola'>Motorola</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/phone/nothing'>Nothing</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/phone/redmi'>Redmi</Link></li>
                        </ul>
                    </div>
                </div>




                <div className=' relative group hover:cursor-pointer'>
                    <button className="flex items-center gap-1 hover:cursor-pointer"> <FaTabletAlt /> TABLET</button>
                    <div className='absolute hidden rounded-md shadow-md top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col w-[120px] p-5 space-y-2'>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/tablet/iphonetap'>Iphone</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/tablet/samsungtap'>Samsung</Link></li>
                        </ul>
                    </div>
                </div>



                <div className=' relative group hover:cursor-pointer'>
                    <button className="flex items-center gap-1 hover:cursor-pointer"><IoIosLaptop /> LAPTOP</button>
                    <div className='absolute hidden rounded-md shadow-md top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col w-[120px] p-5 space-y-2'>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/laptop/apple'>Apple</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/laptop/huawei'>Huawei</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/laptop/hp'>Hp</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/laptop/asus'>Asus</Link></li>
                        </ul>
                    </div>
                </div>



                <div className=' relative group hover:cursor-pointer'>
                    <button className="flex items-center gap-1 hover:cursor-pointer"> <IoWatchOutline />
                        WATCH</button>
                    <div className='absolute hidden rounded-md shadow-md top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col w-[120px] p-5 space-y-2'>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/watch/applewatch'>Apple</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/watch/samsungwatch'>Samsung</Link></li>
                        </ul>
                    </div>
                </div>

                <div className=' relative group hover:cursor-pointer'>
                    <button className="flex items-center gap-1 hover:cursor-pointer"> <LogoAcrobat></LogoAcrobat> GADGET</button>
                    <div className='absolute hidden rounded-md shadow-md top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col w-[120px] p-5 space-y-2'>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/gadget/airpods'>Airpods</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/gadget/keyboard'>keyboard</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/gadget/mouse'>Mouse</Link></li>
                        </ul>
                    </div>
                </div>



                <div className=' relative group hover:cursor-pointer'>
                    <button className="flex items-center gap-1 hover:cursor-pointer">
                        <FaTv /> SMARTTV</button>
                    <div className='absolute hidden rounded-md shadow-md top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col p-5 w-[120px] space-y-2'>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/tv/walton'>walton</Link></li>
                            <li><Link className="hover:bg-neutral-300 hover:p-2 hover:rounded-md" href='/tv/sony'>Sony</Link></li>
                        </ul>
                    </div>
                </div>


                <Button variant='outline' className='rounded bg-black text-white w-[160px]'>ONLINE EXCLUSIVE</Button>

            </div>
        </div>
    );
};

export default Manuvar;