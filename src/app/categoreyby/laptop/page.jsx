import AppleLaptopCard from '@/Components/AllCards/laptopCard/AppleLaptopCard';
import AsusLaptopCard from '@/Components/AllCards/laptopCard/AsusLaptop';
import HpLaptopCard from '@/Components/AllCards/laptopCard/HpLaptopCard';
import HuaweiLaptopCard from '@/Components/AllCards/laptopCard/HuaweiLaptopCard';
import { Button } from '@heroui/react';
import React from 'react';




export const metadata = {
    title: 'All Laptop',
    description: '...',
}





const AllLaptop = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const appleLaptop = res.laptop.apple
    const asusLaptop = res.laptop.asus
    const hpLaptop = res.laptop.hp
    const huaweiLaptop = res.laptop.huawei
    return (
        <div>
            <div className="container mx-auto my-10">

                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">All Laptop</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Laptop</h3>
                    </div>



                </div>


                <div className="grid grid-cols-4 gap-3 my-5">
                    {
                        appleLaptop.map(appleLaptops => <AppleLaptopCard key={appleLaptops.id} appleLaptops={appleLaptops}></AppleLaptopCard>)
                    }
                    {
                        asusLaptop.map(asuslaptops => <AsusLaptopCard key={asuslaptops.id} asuslaptops={asuslaptops}></AsusLaptopCard>)
                    }
                    {
                        hpLaptop.map(hpLaptops => <HpLaptopCard key={hpLaptops.id} hpLaptops={hpLaptops}></HpLaptopCard>)
                    }
                      {
                        huaweiLaptop.map(huaweislaptops => <HuaweiLaptopCard key={huaweislaptops.id} huaweislaptops={huaweislaptops}></HuaweiLaptopCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllLaptop;