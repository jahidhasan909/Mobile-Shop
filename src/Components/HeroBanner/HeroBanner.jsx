import ImageSlider from "../ImageSilder/ImageSilder";


const HeroBanner = () => {
    return (
        <div className="grid grid-cols-2 my-7 gap-3">
            <div className="">
                <ImageSlider></ImageSlider>
            </div>
            <div className="h-[600px] space-y-2">
                <img className="h-[300px] w-full rounded" src="https://i.ibb.co.com/21wPp5v0/windows.webp" alt="" />
                <img className="h-[300px] w-full rounded" src="https://i.ibb.co.com/FbW8d4BD/website.jpg" alt="" />
            </div>
        </div>
    );
};

export default HeroBanner;