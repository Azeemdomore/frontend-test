import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="h-screen w-full flex md:justify-center items-center">
      <div className="md:bg-secondary rounded-2xl flex justify-center sm:p-5 p-2 w-[27rem] md:border md:shadow-xl">
        <div className="w-11/12 h-4/5 flex flex-col">
          <h1 className="pb-3 text-4xl text-white">Welcome back</h1>
          <p className="text-sm pb-7 text-gray-300">
            Welcome back! Please enter your details
          </p>
          <label className="w-full pb-6">
            <p className="text-gray-300 text-sm pb-1">Username</p>
            <input
              type="text"
              className="w-full border-b focus:outline-none focus:ring-0 border-0 border-b-gray-300 focus:border-b-gray-500 placeholder-gray-500 text-sm caret-white text-gray-300 bg-transparent"
            />
          </label>
          <label className="w-full pb-6">
            <p className="text-gray-300 text-sm pb-1">Password</p>
            <input
              type="Password"
              className="w-full border-b focus:outline-none focus:ring-0 border-0 border-b-gray-300 focus:border-b-gray-500 placeholder-gray-500 text-sm caret-white text-gray-300 bg-transparent"
            />
          </label>
          <div className="w-full flex justify-between pb-5">
            <div className="space-x-2">
              <input
                id="remember"
                type="checkbox"
                className="h-6 w-6 border rounded-md bg-secondary transition duration-200 cursor-pointer sm:text-primary text-secondary focus:outline-none focus:ring-offset-0 focus:ring-0"
              />
              <label
                htmlFor="remember"
                className="text-sm cursor-pointer select-none text-gray-300"
              >
                Remember Me
              </label>
            </div>
            <a href="#" className="text-gray-300 text-sm cursor-pointer">
              Forgot Password?
            </a>
          </div>
          <div className="w-full">
            <Link to="/">
              <button className="md:bg-primary bg-secondary text-white h-10 w-full rounded-lg">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
