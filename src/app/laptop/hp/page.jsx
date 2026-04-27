import HpLaptopCard from '@/Components/AllCards/laptopCard/HpLaptopCard';

import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';





const HpLaptop = async () => {
    const data = await fetch("https://mobile-shop-five-psi.vercel.app/data.json")
    const res = await data.json()
    const hpLaptop = res.laptop.hp
    return (
        <div>
            <div className="container mx-auto my-10">
                <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Laptop</p>
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">HP</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Laptop</h3>
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

export default HpLaptop;