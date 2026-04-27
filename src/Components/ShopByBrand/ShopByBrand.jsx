
import Image from "next/image";

import Marquee from "react-fast-marquee";


const ShopByBrand = () => {
    return (
        <div className="bg-neutral-200 py-10 my-20 text-black">
            <h1 className="container mx-auto py-5 font-bold text-xl">Our Brands</h1>



            <div className=" container mx-auto">
                <Marquee className="h-50" speed={100}>

                    <div className="w-[200px] bg-white  h-40 flex items-center justify-center border rounded-lg mr-4">

                        <Image height={100} width={100} className=" object-contain" src="https://i.ibb.co.com/k237VLTG/Apple-6176.png" alt="" />

                    </div>


                    <div className="w-[200px]  bg-white h-40 pb-3  flex items-center justify-center border rounded-lg mr-4">

                        <Image width={100} height={100} src={'https://i.ibb.co.com/My5nD7Dw/Samsung-Logo-wine.png'} alt="logo"></Image>

                    </div>





                    <div className="w-[200px] bg-white h-40  p-4 flex items-center justify-center border rounded-lg mr-4">

                        <img className="object-contain" src="https://i.ibb.co.com/Hp4QwnG6/hewlett-packard-logo-black-and-white.png" alt="" />

                    </div>





                    <div className="w-[200px] bg-white h-40 p-4 flex  items-center justify-center border rounded-lg mr-4">

                        <img className="object-contain" src="https://i.ibb.co.com/cc91TdZs/Logo-huawei-vector-transparent-PNG-removebg-preview.png" alt="" />

                    </div>







                    <div className=" w-[200px] bg-white h-40 p-4  flex items-center justify-center border rounded-lg mr-4">

                        <img className="p-3 object-contain" src="https://i.ibb.co.com/x4CgZvt/motorola-6-logo-png-transparent.png" alt="" />

                    </div>





                    <div className=" w-[200px] bg-white h-40 p-4 flex items-center justify-center border rounded-lg mr-4">

                        <img className="p-2 object-contain" src="https://i.ibb.co.com/9HtCq07n/png-transparent-google-pixel-smartphone-hd-logo-removebg-preview.png" alt="" />

                    </div>



                    <div className=" w-[200px] bg-white  h-40 p-4 flex items-center justify-center border rounded-lg mr-4">

                        <img className="p-7 object-contain" src="https://i.ibb.co.com/kVCcgxVX/png-transparent-xiaomi-mi-logo-thumbnail-removebg-preview.png" alt="" />

                    </div>





                    <div className="w-[200px] bg-white p-4 h-40  flex items-center justify-center border rounded-lg mr-4">

                        <img
                            src="https://i.ibb.co.com/LdxWXQwD/asus-6630-logo-png-transparent-removebg-preview.png"
                            alt=""
                            className=" object-contain"
                        />

                    </div>





                    <div className="w-[200px] bg-white  p-4 h-40 flex items-center justify-center border rounded-lg mr-4">

                        <img
                            src="https://i.ibb.co.com/1tgVcbqN/channels4-profile.jpg"
                            alt="OnePlus"
                            className=" object-contain"
                        />

                    </div>





                    <div className="w-[200px] bg-white p-4 h-40  flex items-center justify-center border rounded-lg mr-4">

                        <img
                            src="https://i.ibb.co.com/3ykwPwDv/nothing-mobile-company-brand-official-logo-icon-and-symbol-high-quality-digital-download-free-vector.jpg"
                            alt="Nokia"
                            className="object-contain"
                        />

                    </div>






                    <div className="w-[200px] bg-white  p-4 h-40 flex items-center justify-center border rounded-lg mr-4">

                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg"
                            alt="Sony"
                            className="object-contain"
                        />

                    </div>



                </Marquee>
            </div>

        </div>
    );
};

export default ShopByBrand;