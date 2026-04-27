import CardIphone from '@/Components/AllCards/CardIphone';
import HuaweiCard from '@/Components/AllCards/HuaweiCard';
import MotorolaCard from '@/Components/AllCards/MotorolaCard';
import NothingCard from '@/Components/AllCards/NothingCard';
import PixelCard from '@/Components/AllCards/PixelCard';
import RedmiCard from '@/Components/AllCards/RedmiCard';
import SamsungCard from '@/Components/AllCards/SamsungCard';
import { Button } from '@heroui/react';
import React from 'react';






export const metadata = {
    title: 'All Phone',
    description: '...',
}





const PhonePage = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const iphone = res.phone.iphone
    const huawei = res.phone.huawei
    const motorola = res.phone.motorola
    const nothing = res.phone.nothing
    const pixel = res.phone.pixel
    const redmi = res.phone.redmi
    const samsung = res.phone.samsung

    return (
        <div className=" container mx-auto my-10">
            <div className="bg-white p-5 rounded-md my-4">
                <Button className="bg-black text-white" variant="outline">AllPhone</Button>
            </div>
            <div className="flex justify-between items-center gap-3">
                <div className="bg-neutral-200 w-full p-4 rounded-md">
                    <h3>Products of phones</h3>
                </div>

            </div>

            <div className="grid grid-cols-4 gap-4 my-5">
                {iphone.map(iphones => <CardIphone key={iphones.id} iphones={iphones}></CardIphone>)}
                {
                    huawei.map(huaweis => <HuaweiCard key={huaweis.id} huaweis={huaweis}></HuaweiCard>)
                }
                {motorola.map(motorolas => <MotorolaCard key={motorolas.id} motorolas={motorolas}></MotorolaCard>)}
                {nothing.map(nothings => <NothingCard key={nothings.id} nothings={nothings}></NothingCard>)}
                {pixel.map(pixels => <PixelCard key={pixels.id} pixels={pixels}></PixelCard>)}
                {redmi.map(redmis => <RedmiCard key={redmis.id} redmis={redmis}></RedmiCard>)}
                {
                    samsung.map(samsungs => <SamsungCard key={samsungs.id} samsungs={samsungs}></SamsungCard>)
                }
            </div>



        </div>
    );
};

export default PhonePage;