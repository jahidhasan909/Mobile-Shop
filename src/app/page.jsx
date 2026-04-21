import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import Manuvar from "@/Components/ManuVar/Manuvar";


const HomePage = () => {
    return (
        <div>
            <Manuvar></Manuvar>
            <div className="bg-neutral-200">
                <div className="container mx-auto">
                    <HeroBanner></HeroBanner>
                </div>
            </div>
        </div>
    );
};

export default HomePage;