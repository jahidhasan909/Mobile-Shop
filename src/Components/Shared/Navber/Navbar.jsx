import Link from "next/link";

const Navbar = () => {

    const search = <>
        <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input type="search" required placeholder="Search" />
        </label>
    </>




    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        {search}
                    </div>
                    <a className="btn btn-ghost text-xl">dazzle</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {search}
                </div>
                <div className="navbar-end">
                    <Link>
                        <button className="btn">CART</button>
                    </Link>
                    <Link>
                        <button className="btn">LOGIN</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;