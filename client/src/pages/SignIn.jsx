import React, { useState } from 'react';
import { Link } from 'react-router-dom' //helps in navigation from one page to another without refreshing the page
export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-[#fcfcfc] w-[450px] h-[780px] mx-auto rounded-lg flex flex-col my-5 px-5">
            <div className="mb-8 pt-16 text-[#2c2b2b] font-semibold text-2xl">Welcome Back</div>
            <input type="email" placeholder="Email" className="mb-6 p-4 bg-[#f1f1f1] rounded-lg" />

            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="mb-6 p-4 bg-[#f1f1f1] rounded-lg w-full"
                />
                <div
                    className="absolute top-4 right-3 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <img
                        src={showPassword ? "https://img.icons8.com/material-outlined/24/000000/visible--v2.png" : "https://img.icons8.com/material-outlined/24/000000/invisible--v2.png"}
                        alt="password visibility toggle"
                    />
                </div>
            </div>


            <div className="flex items-center mb-6">
                <span className="text-[#7f7f7f] text-sm underline">Forgot your Password?</span>
            </div>
            <Link to='/goals'>
                <button className=" w-full mb-6 p-4 mt-[160px] rounded-lg bg-gradient-to-r from-[#7BAAF7] to-[#a182f0] text-white text-lg font-semibold ">
                    Sign In
                </button>
            </Link>
            <div className="mb-6 flex justify-between items-center">
                <div className="bg-[#7f7f7f] h-[0.5px] w-2/5" />
                <span className="text-[#2c2b2b] text-sm mx-3">Or</span>
                <div className="bg-[#7f7f7f] h-[0.5px] w-2/5" />
            </div>
            <div className="flex justify-center gap-4 mb-6">
                <div className="  p-2 border-2 border-[#7f7f7f] rounded-lg">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                </div>
                <div className="p-2 border-2 border-[#7f7f7f] rounded-lg">
                    <img width="48" height="48" src="https://img.icons8.com/material-rounded/48/228BE6/facebook-f--v1.png" alt="facebook-f--v1" />
                </div>
            </div>
            <div className="text-center text-[#2c2b2b] text-sm ">
                Don't have an account? <Link to='/sign-up'><span className="text-blue-600 font-semibold">SignUp</span></Link>
            </div>
        </div>
    )
}
