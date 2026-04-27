
import { CiBookmarkCheck } from "react-icons/ci";
import { SiTheplanetarysociety } from "react-icons/si";
import { TbReplaceFilled } from "react-icons/tb";
import { FaRegCalendar } from "react-icons/fa";
import { BookmarkFill } from "@gravity-ui/icons";
const MiniBanner = () => {
    return (
        <div className="container bg-neutral-200 py-10 text-black rounded-sm  mx-auto flex justify-center gap-7 my-10">

            <div className="flex items-center gap-1">
                <span className="text-green-700"> <CiBookmarkCheck /></span>
                <p>100% Genuine Products</p>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-blue-500"> <SiTheplanetarysociety /></span>
                <p>Super fast Delivery</p>
            </div>
            <div className="flex items-center gap-1">

                <span className="text-orange-300"><FaRegCalendar /></span>
                <p>36 Months Installments</p>
            </div>
            <div className="flex items-center gap-1">

                <span className="text-purple-500"><TbReplaceFilled /></span>
                <p>2 Years Replacement</p>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-orange-600"> <BookmarkFill></BookmarkFill></span>
                <p>Best Price in BD</p>
            </div>

        </div>
    );
};

export default MiniBanner;