import loginImg from "../../assets/images/login/login.svg"
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";

const Login = () => {

    const {signIn} = useContext(AuthContext);


    const handleLogIn = event =>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error));
    }


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 mr-16 mt-20">
                        <img className="w-4/5" src={loginImg} alt="" />

                    </div>

                    <div className="card shrink-0 w-full max-w-sm  border rounded-3xl ">
                        <form  className="card-body">
                            <h1 className="text-3xl text-center font-bold my-5">Login </h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] text-white ">Login</button>
                            </div>
                            <div>
                                <p className="text-center text-sm mb-4 mt-2">Or Sign In with</p>
                            </div>

                            <div className="flex gap-x-4 justify-center mb-5">
                                <button className="btn-circle bg-[#F5F5F8] p-4"> <FaFacebookF /> </button>
                                <button className="btn-circle bg-[#F5F5F8] p-4"> <FaLinkedinIn /> </button>
                                <button className="btn-circle bg-[#F5F5F8] p-4"> <FcGoogle /> </button>
                            </div>

                            <div className="text-center mb-10">
                                <h2 className="text-[#737373] ">New to? <Link className="text-[#FF3811] font-bold " to="/signup" > Sign up </Link> </h2>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;