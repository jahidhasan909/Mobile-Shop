import ImageSlider from "../ImageSilder/ImageSilder";


const HeroBanner = () => {
    return (
        <div className="flex items-center justify-center py-7 gap-3">
            <div className="">
                <ImageSlider></ImageSlider>
            </div>
            <div className="h-[590px] space-y-3">
                <img className="h-[292px] w-[450px]  rounded" src="https://i.ibb.co.com/21wPp5v0/windows.webp" alt="" />
                <img className="h-[292px] w-[450px] rounded" src="https://i.ibb.co.com/FbW8d4BD/website.jpg" alt="" />
            </div>
        </div>
    );
};

export default HeroBanner;