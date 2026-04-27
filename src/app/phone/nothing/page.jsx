import NothingCard from '@/Components/AllCards/NothingCard';

import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'Nothing Phone',
    description: '...',
}



const NothingPage = async () => {
    const data = await fetch("https://mobile-shop-git-main-jahidhasan909s-projects.vercel.app/data.json")
    const res = await data.json()
    const nothing = res.phone.nothing
    return (
        <div>
            <div className=" container mx-auto my-10">
                <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / phones</p>
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">Nothing</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of phones</h3>
                    </div>

                 

                </div>

                <div className="grid grid-cols-4 gap-4 my-5">
                    {nothing.map(nothings => <NothingCard key={nothings.id} nothings={nothings}></NothingCard>)}
                </div>



            </div>
        </div>
    );
};

export default NothingPage;