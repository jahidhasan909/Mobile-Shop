
import SamsungCard from '@/Components/AllCards/SamsungCard';
import Samsungtab from '@/Components/AllCards/Samsungtab';
import SamsungWatchCrad from '@/Components/AllCards/watchCard/SamsungWatchCrad';
import { Button } from '@heroui/react';




export const metadata = {
    title: 'Samsung',
    description: '...',
}




const SamsungBrand = async () => {

    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const samsung = res.phone.samsung
    const samsungwatch = res.watch.samsungWatch
    const samsungtab = res.tablet.samsungTab

    return (
        <div className=" container mx-auto my-10">
            <div className="bg-white p-5 rounded-md my-4">
                <Button className="bg-black text-white" variant="outline">Samsung</Button>
            </div>

            <div className="bg-neutral-200 w-full p-4 rounded-md">
                <h3>Products of Samsung</h3>
            </div>
            <div className="grid grid-cols-4 gap-4  my-5">
                {
                    samsung.map(samsungs => <SamsungCard key={samsungs.id} samsungs={samsungs}></SamsungCard>)
                }

                {samsungtab.map(samsungtabs => <Samsungtab key={samsungtabs.id} samsungtabs={samsungtabs}></Samsungtab>)}

                {samsungwatch.map(samsungWatchs => <SamsungWatchCrad key={samsungWatchs.id} samsungWatchs={samsungWatchs}></SamsungWatchCrad>)}
            </div>
        </div>
    );
};

export default SamsungBrand;