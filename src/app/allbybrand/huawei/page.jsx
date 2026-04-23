import HuaweiCard from '@/Components/AllCards/HuaweiCard';
import HuaweiLaptopCard from '@/Components/AllCards/laptopCard/HuaweiLaptopCard';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'Huawei',
    description: '...',
}




const HuaweiBrand = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const huawei = res.phone.huawei
    const huaweiLaptop = res.laptop.huawei

    return (
        <div className="container mx-auto my-10">
            <div className="bg-white p-5 rounded-md my-4">
                <Button className="bg-black text-white" variant="outline">Huawei</Button>
            </div>
            <div className="flex justify-between items-center gap-3">
                <div className="bg-neutral-200 w-full p-4 rounded-md">
                    <h3>Products of Huawei</h3>
                </div>

            </div>


            <div className="grid grid-cols-4 gap-3 my-5">
                {
                    huawei.map(huaweis => <HuaweiCard key={huaweis.id} huaweis={huaweis}></HuaweiCard>)
                }
                {
                    huaweiLaptop.map(huaweislaptops => <HuaweiLaptopCard key={huaweislaptops.id} huaweislaptops={huaweislaptops}></HuaweiLaptopCard>)
                }
            </div>
        </div>
    );
};

export default HuaweiBrand;