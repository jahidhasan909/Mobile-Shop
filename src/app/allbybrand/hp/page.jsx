import HpLaptopCard from '@/Components/AllCards/laptopCard/HpLaptopCard';
import DropHpLaptop from '@/Components/DropDownInner/LaptopDrop/DropHpLaptop';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'Hp',
    description: '...',
}


const HPBrand = async() => {
  const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const hpLaptop = res.laptop.hp
    return (
        <div>
            <div className="container mx-auto my-10">
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">HP</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Hp</h3>
                    </div>

              
                </div>


                <div className="grid grid-cols-4 gap-3 my-5">
                    {
                        hpLaptop.map(hpLaptops => <HpLaptopCard key={hpLaptops.id} hpLaptops={hpLaptops}></HpLaptopCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HPBrand;