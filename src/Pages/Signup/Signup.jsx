import React, { useContext } from 'react';

import loginImg from "../../assets/images/login/login.svg"
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Providers/Authprovider';

const Signup = () => {

    const {createUser} = useContext(AuthContext);


    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch( error=> console.log(error))
    }



    return (
        <div>
            <div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className=" w-1/2 mr-16 mt-20">
                            <img className="w-4/5" src={loginImg} alt="" />

                        </div>

                        <div className="card shrink-0 w-full max-w-sm  border rounded-3xl ">
                            <form onSubmit={handleSignUp} className="card-body">
                                <h1 className="text-3xl text-center font-bold my-5">Sign Up </h1>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your name" className="input input-bordered" name='name' required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                                </div>

                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF3811] text-white ">Sign Up</button>
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
                                    <h2 className="text-[#737373] ">Already have an account? <Link className="text-[#FF3811] font-bold " to="/login" > Login </Link>  </h2>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;