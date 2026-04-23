import WaltonTvCard from '@/Components/AllCards/tvCard/waltonTvCard';
import WaltonDrop from '@/Components/DropDownInner/tvDrop/WaltonDrop';
import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';

const WaltonPage = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const waltontv = res.tv.walton

    return (
        <div>
            <div>
                <div className=" container mx-auto my-10">
                    <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Tv</p>
                    <div className="bg-white p-5 rounded-md my-4">
                        <Button className="bg-black text-white" variant="outline">Walton</Button>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <div className="bg-neutral-200 w-full p-4 rounded-md">
                            <h3>Products of Tv</h3>
                        </div>

                        <WaltonDrop></WaltonDrop>

                    </div>

                    <div className="grid grid-cols-4 gap-4 my-5">
                        {waltontv.map(waltontvs => <WaltonTvCard key={waltontvs.id} waltontvs={waltontvs}></WaltonTvCard>)}
                    </div>



                </div>
            </div>
        </div>
    );
};

export default WaltonPage;