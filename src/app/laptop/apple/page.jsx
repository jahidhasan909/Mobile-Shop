import AppleLaptopCard from '@/Components/AllCards/laptopCard/AppleLaptopCard';

import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';

export const metadata = {
    title: 'Apple Laptop',
    description: '...',
}



const AppleLaptop = async () => {
    const data = await fetch("https://mobile-shop-ju0niybvj-jahidhasan909s-projects.vercel.app/.json")
    const res = await data.json()
    const appleLaptop = res.laptop.apple

    return (
        <div>
  <div className="container mx-auto my-10">
            <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Laptop</p>
            <div className="bg-white p-5 rounded-md my-4">
                <Button className="bg-black text-white" variant="outline">Apple</Button>
            </div>
            <div className="flex justify-between items-center gap-3">
                <div className="bg-neutral-200 w-full p-4 rounded-md">
                    <h3>Products of Laptop</h3>
                </div>

              

            </div>


            <div className="grid grid-cols-4 gap-3 my-5">
                {
                    appleLaptop.map(appleLaptops => <AppleLaptopCard key={appleLaptops.id} appleLaptops={appleLaptops}></AppleLaptopCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default AppleLaptop
    ;