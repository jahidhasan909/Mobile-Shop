import RedmiCard from '@/Components/AllCards/RedmiCard';
import RedmiDropDown from '@/Components/DropDownInner/RedmiDropDown';
import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';

const Redmipage = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const redmi = res.phone.redmi
    return (
        <div>
            <div className=" container mx-auto my-10">
                <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / phones</p>
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">Redmi</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of phones</h3>
                    </div>

                    <RedmiDropDown></RedmiDropDown>
                </div>

                <div className="grid grid-cols-4 gap-4 my-5">
                    {redmi.map(redmis => <RedmiCard key={redmis.id} redmis={redmis}></RedmiCard>)}
                </div>



            </div>
        </div>
    );
};

export default Redmipage;