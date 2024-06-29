import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {

    const links = <>

        <li className="text-black font-semibold"><NavLink to='/'>Home</NavLink></li>
        <li className="text-black font-semibold"><NavLink to='/ListedBooks'>Listed Books</NavLink></li>
        <li className="text-black font-semibold"><NavLink to='/PagesToRead'>Pages to Read</NavLink></li>

    </>


    return (
        <div className="bg-white pb-10 pt-5">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-black font-bold text-xl">Book Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <NavLink to='SignIn' className="px-3 py-2 rounded-lg text-white font-bold bg-green-600">Sign In</NavLink>
                    <NavLink to='SignUp' className="px-3 py-2 rounded-lg text-white font-bold bg-sky-500">Sign Up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;