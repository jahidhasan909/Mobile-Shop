import SonytvCard from '@/Components/AllCards/tvCard/SonytvCard';
import SonyDrop from '@/Components/DropDownInner/tvDrop/SonyDrop';
import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';

const SonyPage = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const sonytv = res.tv.sony

    return (

        <div>
            <div className=" container mx-auto my-10">
                <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Tv</p>
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">Sony</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Tv</h3>
                    </div>

                    <SonyDrop></SonyDrop>

                </div>

                <div className="grid grid-cols-4 gap-4 my-5">
                    {sonytv.map(sonytvs => <SonytvCard key={sonytvs.id} sonytvs={sonytvs}></SonytvCard>)}
                </div>



            </div>
        </div>

    );
};

export default SonyPage;