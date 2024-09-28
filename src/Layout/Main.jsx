import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div >
            <div className="mx-10">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>

            <div className="">
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Main;