import { LocationArrow, LogoFacebook, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";


const Footer = () => {
    return (
        <div className="bg-black text-white">
            <footer className="grid grid-cols-5 container mx-auto p-20">
                <aside className="space-y-3">
                    <h1 className="text-5xl animate-pulse font-bold">Jazzdle</h1>
                    <Button className='text-white rounded' variant="outline"><LocationArrow></LocationArrow> Store Location</Button>
                    <div className="flex items-center gap-2">
                        <LogoFacebook></LogoFacebook>
                        <LogoLinkedin></LogoLinkedin>
                        <LogoGithub></LogoGithub>
                    </div>
                    <p>
                        Email:admin@gmail.com
                        <br />
                        Phone:0948747577
                    </p>
                </aside>
                <nav className="flex flex-col space-y-2">
                    <h6 className="text-xl font-semibold">COMPANY</h6>
                    <a className="">About Us</a>
                    <a className="">Career</a>
                    <a className="">Our Brands</a>
                    <a className="">Blogs</a>
                </nav>
                <nav className="flex flex-col space-y-2">
                    <h6 className="text-xl font-semibold">HELP CENTER</h6>
                    <a className="">FAQ</a>
                    <a className="">Support Center</a>
                    <a className="">Corporate</a>
                    <a className="">Feedback</a>
                </nav >
                <nav className="flex flex-col space-y-2">
                    <h6 className="text-xl font-semibold">TERMS & <br />CONDITIONS</h6>
                    <a className="">Terms & Conditions</a>
                    <a className="">Refund Policy</a>
                    <a className="">Privacy Policy</a>
                    <a className="">Warranty Policy</a>
                </nav>
                <nav className="flex flex-col space-y-2">
                    <h6 className="text-xl font-semibold">STAY CONNECTED</h6>
                    <a className="">Branch 1: Shop No. 021C & 021D, North Court, Block - B, 4th floor, Jamuna Future Park, Dhaka.</a>
                    <a className="">
                        Branch 3: Shop No - 414 & 429, 4th floor, finlay Square, east nasirabad, chittagong. </a>
                    <a className="">  Branch 4: Shop No 35 to 51, Block C, Level 7 (Gold Floor), Bashundhara City Shopping mall, Dhaka</a>
                    <a className=""> Branch 5: Shop-88, 89 Level-6, Block D, Bashundhara City Shopping Mall, Dhaka. ( Laptop, Tablet & Gadgets)</a>
                </nav>
            </footer>
            <div className="text-center bg-white/90 text-black font-semibold">© 2026 Thanks From Dazzle™ Ltd. | All rights reserved</div>
        </div>
    );
};

export default Footer;