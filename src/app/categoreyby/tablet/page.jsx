import Samsungtab from '@/Components/AllCards/Samsungtab';
import TapIphoneCard from '@/Components/AllCards/TapIphoneCard';
import { Button } from '@heroui/react';
import React from 'react';




export const metadata = {
    title: 'All Tablet',
    description: '...',
}





const AllTablet = async () => {

    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const iphonetap = res.tablet.iphoneTab
    const samsungtab = res.tablet.samsungTab


    return (
        <div>
            <div className=" container mx-auto my-10">
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">All Taplet</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Tablet</h3>
                    </div>
              

                </div>

                <div className="grid grid-cols-4 gap-4 my-5">
                    {iphonetap.map(iphonetaps => <TapIphoneCard key={iphonetaps.id} iphonetaps={iphonetaps}></TapIphoneCard>)}
                     {samsungtab.map(samsungtabs => <Samsungtab key={samsungtabs.id} samsungtabs={samsungtabs}></Samsungtab>)}
                </div>



            </div>
        </div>
    );
};

export default AllTablet;