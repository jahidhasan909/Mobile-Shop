
import ShopByCategory from "@/Components/Category/ShopByCategory";
import DetailsSection from "@/Components/DetailsSection/DetailsSection";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import Manuvar from "@/Components/ManuVar/Manuvar";
import MiniBanner from "@/Components/MiniBanner/MiniBanner";
import ShopByBrand from "@/Components/ShopByBrand/ShopByBrand";
import Tranddingproduct from "@/Components/TopProduct/Tranddingproduct";







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
            <Tranddingproduct></Tranddingproduct>
            <ShopByBrand></ShopByBrand>
            <DetailsSection></DetailsSection>
        </div>
    );
};

export default HomePage;