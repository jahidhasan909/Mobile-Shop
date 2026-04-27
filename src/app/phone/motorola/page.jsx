import MotorolaCard from '@/Components/AllCards/MotorolaCard';

import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'Motorola Phone',
    description: '...',
}



const MotorolaPage = async () => {
    const data = await fetch("https://mobile-shop-git-main-jahidhasan909s-projects.vercel.app/data.json")
    const res = await data.json()
    const motorola = res.phone.motorola
    return (
        <div className=" container mx-auto my-10">
            <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / phones</p>
            <div className="bg-white p-5 rounded-md my-4">
                <Button className="bg-black text-white" variant="outline">Motorola</Button>
            </div>
            <div className="flex justify-between items-center gap-3">
                <div className="bg-neutral-200 w-full p-4 rounded-md">
                    <h3>Products of phones</h3>
                </div>

               

            </div>

            <div className="grid grid-cols-4 gap-4 my-5">
                {motorola.map(motorolas => <MotorolaCard key={motorolas.id} motorolas={motorolas}></MotorolaCard>)}
            </div>



        </div>
    );
};

export default MotorolaPage;