import ShopByCategory from "@/Components/Category/ShopByCategory";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import Manuvar from "@/Components/ManuVar/Manuvar";
import MiniBanner from "@/Components/MiniBanner/MiniBanner";


const HomePage = () => {
    return (
        <div className="">
            <Manuvar></Manuvar>
            <div className="bg-neutral-200">
                <div className="container mx-auto">
                    <HeroBanner></HeroBanner>
                </div>
            </div>

            <MiniBanner></MiniBanner>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default HomePage;