import React from 'react';
import { Link } from 'react-router-dom' //helps in navigation from one page to another without refreshing the page

export default function SignUp() {

  return (
    <div className="bg-[#fcfcfc] w-[450px] h-[780px] mx-auto rounded-lg flex flex-col my-5 px-5">
      <div className=" mb-8 pt-16 text-[#2c2b2b] font-semibold text-2xl">Create an Account</div>
      <input type="text" placeholder="First Name" className="mb-6 p-4 bg-[#f1f1f1] rounded-lg" />
      <input type="text" placeholder="Last Name" className="mb-6 p-4 bg-[#f1f1f1] rounded-lg" />
      <input type="email" placeholder="Email" className="mb-6 p-4 bg-[#f1f1f1] rounded-lg" />
      <input type="password" placeholder="Password" className="mb-6 p-4 bg-[#f1f1f1] rounded-lg" />
      <div className="flex items-center mb-6">
        <input type="checkbox" className="accent-[#7f7f7f] mr-2" />
        <span className="text-[#7f7f7f] text-sm">By proceeding, I agree to all
          <span className="text-blue-500 underline"> T&C</span> and
          <span className="text-blue-500 underline"> Privacy Policy</span></span>
      </div>
      <Link to='/sign-in'>
        <button className="mb-6 p-4 w-full rounded-lg bg-gradient-to-r from-[#7BAAF7] to-[#a182f0] text-white text-lg font-semibold">
          Sign Up
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
        Already have an account? <Link to='/sign-in' ><span className="text-blue-600 font-semibold cursor-pointer">Login</span> </Link>
      </div>

    </div>
  )
}
