import CardIphone from "@/Components/AllCards/CardIphone";
import InnerDropDown from "@/Components/DropDownInner/InnerDropDown";
import { Button } from "@heroui/react";




const IphonePage = async () => {
    const data = await fetch("http://localhost:3000/data.json")
    const res = await data.json()
    const iphone = res.phone.iphone

    return (
        <div className=" container mx-auto my-10">
            <p className="py-3"> Products / Categories / phones</p>
            <div className="bg-white p-5 rounded-md my-4">
                <Button className="bg-black text-white" variant="outline">Apple</Button>
            </div>
            <div className="flex justify-between items-center gap-3">
                <div className="bg-neutral-200 w-full p-4 rounded-md">
                    <h3>Products of phones</h3>
                </div>

                <InnerDropDown></InnerDropDown>

            </div>

            <div className="grid grid-cols-4 gap-4 my-5">
                {iphone.map(iphones => <CardIphone key={iphones.id} iphones={iphones}></CardIphone>)}
            </div>



        </div>
    );
};

export default IphonePage;