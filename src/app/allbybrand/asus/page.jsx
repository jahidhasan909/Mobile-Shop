import AsusLaptopCard from '@/Components/AllCards/laptopCard/AsusLaptop';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'Asus',
    description: '...',
}




const AsusBrand = async() => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const asusLaptop = res.laptop.asus
    return (
        <div>
            <div className="container mx-auto my-10">
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">Asus</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Asus</h3>
                    </div>
                </div>


                <div className="grid grid-cols-4 gap-3 my-5">
                    {
                        asusLaptop.map(asuslaptops => <AsusLaptopCard key={asuslaptops.id} asuslaptops={asuslaptops}></AsusLaptopCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AsusBrand;