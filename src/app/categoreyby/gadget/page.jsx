
import KeyboardCard from '@/Components/AllCards/gadgetCard/keyboardCard';
import MouseCard from '@/Components/AllCards/gadgetCard/MouseCard';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'All Gadget',
    description: '...',
}




const AllGadget = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const keyboard = res.gadget.keyboard
    const mouse = res.gadget.mouse
    return (
        <div>
            <div className="container mx-auto my-10">
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">All Gadget</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Gadget</h3>
                    </div>
                </div>


                <div className="grid grid-cols-4 gap-3 my-5">
    
                    {
                        keyboard.map(keyboards => <KeyboardCard key={keyboards.id} keyboards={keyboards}></KeyboardCard>)
                    }
                    {
                        mouse.map(mouses => <MouseCard key={mouses.id} mouses={mouses}></MouseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllGadget;