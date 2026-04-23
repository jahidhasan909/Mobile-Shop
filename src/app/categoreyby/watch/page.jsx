import AppleWatchCard from '@/Components/AllCards/watchCard/AppleWatchCard';
import SamsungWatchCrad from '@/Components/AllCards/watchCard/SamsungWatchCrad';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'All Watch',
    description: '...',
}




const AllWatch = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const appleWatch = res.watch.appleWatch
    const samsungwatch = res.watch.samsungWatch


    return (
        <div>
            <div className=" container mx-auto my-10">
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">All Watch</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Watch</h3>
                    </div>


                </div>

                <div className="grid grid-cols-4 gap-4 my-5">
                    {appleWatch.map(appleWatchs => <AppleWatchCard key={appleWatchs.id} appleWatchs={appleWatchs}></AppleWatchCard>)}
                    {samsungwatch.map(samsungWatchs => <SamsungWatchCrad key={samsungWatchs.id} samsungWatchs={samsungWatchs}></SamsungWatchCrad>)}
                </div>



            </div>
        </div>
    );
};

export default AllWatch;