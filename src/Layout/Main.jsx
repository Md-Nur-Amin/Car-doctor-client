import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div >
            <div className="lg:mx-10 ">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>

            <div className="my-5">
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Main;