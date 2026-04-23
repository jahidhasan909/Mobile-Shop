import SamsungWatchCrad from '@/Components/AllCards/watchCard/SamsungWatchCrad';
import WatchSamsungDrop from '@/Components/DropDownInner/WatchDrop/WatchSamsungDrop';
import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'Samsung Watch',
    description: '...',
}




const SamsungWatchPage = async () => {


    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const samsungwatch = res.watch.samsungWatch

    return (
        <div>
            <div className=" container mx-auto my-10">
                <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Watch</p>
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">Sumsung Watch</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Watch</h3>
                    </div>
                    <WatchSamsungDrop></WatchSamsungDrop>

                </div>

                <div className="grid grid-cols-4 gap-4 my-5">
                    {samsungwatch.map(samsungWatchs => <SamsungWatchCrad key={samsungWatchs.id} samsungWatchs={samsungWatchs}></SamsungWatchCrad>)}
                </div>



            </div>
        </div>
    );
};

export default SamsungWatchPage;