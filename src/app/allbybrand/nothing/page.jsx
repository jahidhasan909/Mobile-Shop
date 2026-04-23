import NothingCard from '@/Components/AllCards/NothingCard';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'Nothing',
    description: '...',
}



const NothingBrand = async() => {
 const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const nothing = res.phone.nothing
    return (
        <div>
            <div className=" container mx-auto my-10">
             
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">Nothing</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of Nothing</h3>
                    </div>


                </div>

                <div className="grid grid-cols-4 gap-4 my-5">
                    {nothing.map(nothings => <NothingCard key={nothings.id} nothings={nothings}></NothingCard>)}
                </div>



            </div>
        </div>
    );
};

export default NothingBrand;