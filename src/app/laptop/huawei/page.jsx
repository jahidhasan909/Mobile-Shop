import HuaweiLaptopCard from '@/Components/AllCards/laptopCard/HuaweiLaptopCard';
import HuaweiDropDown from '@/Components/DropDownInner/HuaweiDropDown';
import HuaweiLaptopDrop from '@/Components/DropDownInner/LaptopDrop/HuaweiLaptopDrop';
import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'Huawei Laptop',
    description: '...',
}





const HuaweiLaptop = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const huaweiLaptop = res.laptop.huawei
    return (
        <div>
            <div className="container mx-auto my-10">
                <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Laptop</p>
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">Huawei</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Laptop</h3>
                    </div>

                    <HuaweiLaptopDrop></HuaweiLaptopDrop>
                </div>


                <div className="grid grid-cols-4 gap-3 my-5">
                    {
                        huaweiLaptop.map(huaweislaptops => <HuaweiLaptopCard key={huaweislaptops.id} huaweislaptops={huaweislaptops}></HuaweiLaptopCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HuaweiLaptop;