import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.svg"
import { useContext } from "react";
import { useAuth } from "../../../Providers/Authprovider";





const Navbar = () => {

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }


    const Navlink = <>
        <li className="font-semibold" ><Link to="/"> Home </Link></li>
        <li className="font-semibold"><Link to=""> About </Link></li>
        <li className="font-semibold"><Link to="/allservices"> Services </Link></li>
        <li className="font-semibold"><Link to=""> Blog </Link></li>
        <li className="font-semibold"><Link to="/myBookings"> My Bookings </Link></li>

        {
            user?.email ? <li> <button className="font-semibold" onClick={handleLogOut}>Log Out </button > </li>
                : <li className="font-semibold"><Link to="/login"> Login </Link></li>
        }



        {/* <li className="font-semibold"><Link to="/signup"> Sign Up </Link></li> */}


    </>


    return (
        <div>
            <div className="navbar bg-base-100 h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {Navlink}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        <img src={logo} alt="" className="w-16" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
                </div>
            </div>
            {/* <div className="navbar fixed top-0 left-0 w-full bg-white text-gray-800 shadow-md h-20 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52">
                            {Navlink}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        <img src={logo} alt="Logo" className="w-16" />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navlink}
                    </ul>
                </div>

                <div className="navbar-end">
                    <button className="btn btn-outline btn-warning">Appointment</button>
                </div>
            </div> */}


        </div>
    );
};

export default Navbar;