import Airpods from '@/Components/AllCards/gadgetCard/Airpods';
import AirpodsDrop from '@/Components/DropDownInner/gadgetDrop/AirpodsDrop';
import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';



export const metadata = {
    title: 'Airpods',
    description: '...',
}




const AirPodsPage = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const airpod = res.gadget.airpods
    return (
        <div>
            <div className="container mx-auto my-10">
                <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Gadget</p>
                <div className="bg-white p-5 rounded-md my-4">
                    <Button className="bg-black text-white" variant="outline">Airpods</Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-neutral-200 w-full p-4 rounded-md">
                        <h3>Products of AirPod</h3>
                    </div>

                    <AirpodsDrop></AirpodsDrop>

                </div>


                <div className="grid grid-cols-4 gap-3 my-5">
                    {
                        airpod.map(airpods => <Airpods key={airpods.id} airpods={airpods}></Airpods>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AirPodsPage;