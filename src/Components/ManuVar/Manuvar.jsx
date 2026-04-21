
import { Button } from "@heroui/react";
import { IoIosLaptop } from "react-icons/io";
import { FaTabletAlt } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";

import React from 'react';
import { DropdownManu } from "../DropDown/DropDown";
import { LayoutSideContent, LogoAcrobat, Smartphone } from "@gravity-ui/icons";
import { FaTv } from "react-icons/fa";
import { BsPciCardSound } from "react-icons/bs";

const Manuvar = () => {
    return (
        <div className="bg-white shadow-sm">
            <div className="grid grid-cols-8 items-center container mx-auto py-4 px-6">

                <DropdownManu></DropdownManu>


                <div className='relative group'>
                    <button className="flex items-center gap-1"> <Smartphone></Smartphone> PHONES</button>
                    <div className='absolute hidden top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col'>
                            <li>Iphone</li>
                            <li>Redmi</li>
                            <li>Google pixel</li>
                        </ul>
                    </div>
                </div>




                <div className=' relative group'>
                    <button className="flex items-center gap-1"> <FaTabletAlt /> TABLET</button>
                    <div className='absolute hidden top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col'>
                            <li>Iphone</li>
                            <li>Redmi</li>
                            <li>Google pixel</li>
                        </ul>
                    </div>
                </div>



                <div className=' relative group'>
                    <button className="flex items-center gap-1"><IoIosLaptop /> LAPTOP</button>
                    <div className='absolute hidden top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col'>
                            <li>Iphone</li>
                            <li>Redmi</li>
                            <li>Google pixel</li>
                        </ul>
                    </div>
                </div>



                <div className=' relative group'>
                    <button className="flex items-center gap-1"> <IoWatchOutline />
                        WATCH</button>
                    <div className='absolute hidden top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col'>
                            <li>Iphone</li>
                            <li>Redmi</li>
                            <li>Google pixel</li>
                        </ul>
                    </div>
                </div>

                <div className=' relative group'>
                    <button className="flex items-center gap-1"> <LogoAcrobat></LogoAcrobat> GADGET</button>
                    <div className='absolute hidden top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col'>
                            <li>Iphone</li>
                            <li>Redmi</li>
                            <li>Google pixel</li>
                        </ul>
                    </div>
                </div>



                <div className=' relative group'>
                    <button className="flex items-center gap-1">
                        <FaTv /> SMART TV</button>
                    <div className='absolute hidden top-full group-hover:block bg-white left-0 z-50'>
                        <ul className='flex flex-col'>
                            <li>Iphone</li>
                            <li>Redmi</li>
                            <li>Google pixel</li>
                        </ul>
                    </div>
                </div>


                <Button variant='outline' className='rounded bg-black text-white w-[160px]'>ONLINE EXCLUSIVE</Button>

            </div>
        </div>
    );
};

export default Manuvar;