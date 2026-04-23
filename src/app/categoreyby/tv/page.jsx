import SonytvCard from '@/Components/AllCards/tvCard/SonytvCard';
import WaltonTvCard from '@/Components/AllCards/tvCard/waltonTvCard';
import { Button } from '@heroui/react';
import React from 'react';





export const metadata = {
    title: 'All Tv',
    description: '...',
}





const AllTv = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const sonytv = res.tv.sony
    const waltontv = res.tv.walton

    return (

        <div>
            <div className=" container mx-auto my-10">

                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">All Tv</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Tv</h3>
                    </div>



                </div>

                <div className="grid grid-cols-4 gap-4 my-5">
                    {sonytv.map(sonytvs => <SonytvCard key={sonytvs.id} sonytvs={sonytvs}></SonytvCard>)}
                    {waltontv.map(waltontvs => <WaltonTvCard key={waltontvs.id} waltontvs={waltontvs}></WaltonTvCard>)}
                </div>



            </div>
        </div>

    );
};

export default AllTv;