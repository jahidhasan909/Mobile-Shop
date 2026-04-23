import CardIphone from '@/Components/AllCards/CardIphone';
import AppleLaptopCard from '@/Components/AllCards/laptopCard/AppleLaptopCard';
import TapIphoneCard from '@/Components/AllCards/TapIphoneCard';
import AppleWatchCard from '@/Components/AllCards/watchCard/AppleWatchCard';
import { House } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';


export const metadata = {
    title: 'Apple',
    description: '...',
}



const AppleBrandPage = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const iphone = res.phone.iphone
    const appleWatch = res.watch.appleWatch
    const iphonetap = res.tablet.iphoneTab
    const appleLaptop = res.laptop.apple
    return (
        <div className=" container mx-auto my-10">
            <div className="bg-white p-5 rounded-md my-4">
                <Button className="bg-black text-white" variant="outline">Apple</Button>
            </div>

            <div className="bg-neutral-200 w-full p-4 rounded-md">
                <h3>Products of Apple</h3>
            </div>
            <div className="grid grid-cols-4 gap-4  my-5">
                {iphone.map(iphones => <CardIphone key={iphones.id} iphones={iphones}></CardIphone>)}
                {appleWatch.map(appleWatchs => <AppleWatchCard key={appleWatchs.id} appleWatchs={appleWatchs}></AppleWatchCard>)}
                {iphonetap.map(iphonetaps => <TapIphoneCard key={iphonetaps.id} iphonetaps={iphonetaps}></TapIphoneCard>)}
                {
                    appleLaptop.map(appleLaptops => <AppleLaptopCard key={appleLaptops.id} appleLaptops={appleLaptops}></AppleLaptopCard>)
                }
            </div>
        </div>
    );
};

export default AppleBrandPage;