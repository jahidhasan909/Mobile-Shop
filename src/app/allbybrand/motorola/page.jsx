import MotorolaCard from '@/Components/AllCards/MotorolaCard';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'Motorola',
    description: '...',
}



const MotorolaBrand = async() => {
     const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const motorola = res.phone.motorola
    return (
        <div className=" container mx-auto my-10">
            <div className="bg-white p-5 rounded-md my-4">
                <Button className="bg-black text-white" variant="outline">Motorola</Button>
            </div>
            <div className="flex justify-between items-center gap-3">
                <div className="bg-neutral-200 w-full p-4 rounded-md">
                    <h3>Products of Motorola</h3>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 my-5">
                {motorola.map(motorolas => <MotorolaCard key={motorolas.id} motorolas={motorolas}></MotorolaCard>)}
            </div>



        </div>
    );
};

export default MotorolaBrand;