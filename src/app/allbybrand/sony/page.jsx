import SonytvCard from '@/Components/AllCards/tvCard/SonytvCard';
import { Button } from '@heroui/react';
import React from 'react';




export const metadata = {
    title: 'Sony',
    description: '...',
}




const SonyBrand = async() => {
     const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const sonytv = res.tv.sony

    return (

        <div>
            <div className=" container mx-auto my-10">
                
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">Sony</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Sony</h3>
                    </div>

                 

                </div>

                <div className="grid grid-cols-4 gap-4 my-5">
                    {sonytv.map(sonytvs => <SonytvCard key={sonytvs.id} sonytvs={sonytvs}></SonytvCard>)}
                </div>



            </div>
        </div>

    );
};

export default SonyBrand;