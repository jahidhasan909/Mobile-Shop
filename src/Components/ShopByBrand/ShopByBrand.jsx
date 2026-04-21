

const ShopByBrand = () => {
    return (
        <div className="bg-neutral-200 py-10 my-20">
            <h1 className="container mx-auto py-5 font-bold text-xl">Shop By Brands</h1>
            <div className="grid grid-cols-7 gap-3 container mx-auto">
                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                    <img className=" object-contain" src="https://i.ibb.co.com/k237VLTG/Apple-6176.png" alt="" />
                </div>

                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                    <img className="pt-8 object-contain" src="https://i.ibb.co.com/My5nD7Dw/Samsung-Logo-wine.png" alt="" />
                </div>


                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                    <img className="object-contain" src="https://i.ibb.co.com/Hp4QwnG6/hewlett-packard-logo-black-and-white.png" alt="" />
                </div>


                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                    <img className="object-contain" src="https://i.ibb.co.com/cc91TdZs/Logo-huawei-vector-transparent-PNG-removebg-preview.png" alt="" />
                </div>


                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                    <img className="p-3 object-contain" src="https://i.ibb.co.com/x4CgZvt/motorola-6-logo-png-transparent.png" alt="" />
                </div>


                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                    <img className="p-2 object-contain" src="https://i.ibb.co.com/9HtCq07n/png-transparent-google-pixel-smartphone-hd-logo-removebg-preview.png" alt="" />
                </div>

                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                    <img className="p-7 object-contain" src="https://i.ibb.co.com/kVCcgxVX/png-transparent-xiaomi-mi-logo-thumbnail-removebg-preview.png" alt="" />
                </div>


                <div className="bg-white p-4 h-40 flex items-center justify-center border rounded-lg">
                    <img
                        src="https://i.ibb.co.com/DPBpF00b/png-clipart-laptop-lenovo-logo-font-laptop-electronics-text-removebg-preview.png"
                        alt=""
                        className=" object-contain"
                    />
                </div>


                <div className="bg-white p-4 h-40 flex items-center justify-center border rounded-lg">
                    <img
                        src="https://i.ibb.co.com/wZzCfk9F/One-Plus-Logo-wine-removebg-preview.png"
                        alt="OnePlus"
                        className=" object-contain"
                    />
                </div>


                <div className="bg-white p-4 h-40 flex items-center justify-center border rounded-lg">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg"
                        alt="Nokia"
                        className="object-contain"
                    />
                </div>


                <div className="bg-white p-4 h-40 flex items-center justify-center border rounded-lg">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg"
                        alt="Sony"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default ShopByBrand;