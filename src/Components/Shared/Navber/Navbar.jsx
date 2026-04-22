import { ThemeSwitch } from "@/Components/ThemeSwitch";
import { ShoppingCart } from "@gravity-ui/icons";
import { Button, SearchField } from "@heroui/react";
import Link from "next/link";


const Navbar = () => {






    return (
        <div className="w-full border-b border-separator bg-black  text-white  backdrop-blur-lg">
            <nav className="sticky top-0 z-40  container mx-auto">
                <header className="flex h-20 items-center justify-between px-6">
                    <div className="flex items-center">
                        <Link href='/'> <p className="font-bold text-4xl animate-pulse">dazzle</p></Link>
                    </div>

                    <SearchField name="search">
                        <SearchField.Group className='bg-white rounded'>
                            <SearchField.SearchIcon />
                            <SearchField.Input className="w-[300px] text-neutral-900" placeholder="Search..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>


                    <ul className="flex items-center gap-4">
                        <li><ThemeSwitch></ThemeSwitch></li>
                        <li><Link href="" className="flex items-center gap-1">
                            <Button className='rounded text-white' variant="outline"><ShoppingCart></ShoppingCart> CART</Button>
                        </Link></li>
                        <li><Link href="">
                            <Button className='rounded text-white' variant="outline">LOGIN</Button>
                        </Link></li>
                    </ul>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;