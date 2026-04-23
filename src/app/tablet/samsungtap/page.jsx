import Samsungtab from '@/Components/AllCards/Samsungtab';
import Tapdropsamsung from '@/Components/DropDownInner/Tapdropsamsung';
import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';

const SamsungTab = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const samsungtab = res.tablet.samsungTab
    return (
        <div>
            <div>
                <div className=" container mx-auto my-10">
                    <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Tablet</p>
                    <div className="bg-white p-5 rounded-md my-4">
                        <Button className="bg-black text-white" variant="outline">Apple Tap</Button>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <div className="bg-neutral-200 w-full p-4 rounded-md">
                            <h3>Products of phones</h3>
                        </div>
                       <Tapdropsamsung></Tapdropsamsung>
                    </div>

                    <div className="grid grid-cols-4 gap-4 my-5">
                        {samsungtab.map(samsungtabs => <Samsungtab key={samsungtabs.id} samsungtabs={samsungtabs}></Samsungtab>)}
                    </div>



                </div>
            </div>
        </div>
    );
};

export default SamsungTab;