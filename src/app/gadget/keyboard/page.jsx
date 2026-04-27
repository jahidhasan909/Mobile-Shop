import KeyboardCard from '@/Components/AllCards/gadgetCard/keyboardCard';
import KeyboardDrop from '@/Components/DropDownInner/gadgetDrop/keyboardDrop';
import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';


export const metadata = {
    title: 'Keyboard',
    description: '...',
}





const keyBoardpage = async() => {
    const data = await fetch("https://mobile-shop-ju0niybvj-jahidhasan909s-projects.vercel.app/.json")
    const res = await data.json()
    const keyboard = res.gadget.keyboard
    return (
        <div>
            <div className="container mx-auto my-10">
            <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Gadget</p>
            <div className="bg-white p-5 rounded-md my-4">
                <Button className="bg-black text-white" variant="outline">Keyboard</Button>
            </div>
            <div className="flex justify-between items-center gap-3">
                <div className="bg-neutral-200 w-full p-4 rounded-md">
                    <h3>Products of Keyboard</h3>
                </div>

                <KeyboardDrop></KeyboardDrop>
            </div>


            <div className="grid grid-cols-4 gap-3 my-5">
                {
                    keyboard.map(keyboards=><KeyboardCard key={keyboards.id} keyboards={keyboards}></KeyboardCard>)
                    }
            </div>
        </div>
        </div>
    );
};

export default keyBoardpage;