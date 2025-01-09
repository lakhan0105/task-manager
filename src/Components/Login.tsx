import React from "react";
import googleIcon from "../assets/icons/google.svg";
import loginPageImg from "../assets/images/login-page-img.svg";
import circlesBg from "../assets/images/circles_bg.svg";
import { Logo } from "./index";

import { useDispatch } from "react-redux";
import { loginUser } from "../feature/auth/authSlice";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  // function to handle the login button click
  function handleLogin() {
    dispatch(loginUser());
  }

  return (
    <section className="w-full h-screen max-w-7xl mx-auto flex items-center gap-2 relative">
      {/* Left side (heading and login button) */}
      <div className="max-w-[365px] translate-x-10">
        {/* task management */}
        <div className="w-full max-w-[300px] mb-8">
          <Logo />

          <p className="font-medium text-xs ml-1.5 leading-[140%]">
            Streamline your workflow and track progress effortlessly with our
            all-in-one task management app.
          </p>
        </div>

        {/* google login button */}
        <button
          onClick={handleLogin}
          className="w-[363px] h-[59.65px] flex items-center justify-center rounded-2xl bg-[#292929] text-white gap-[12px]"
        >
          <span>
            <img src={googleIcon} alt="" />
          </span>
          <span className="font-bold text-xl">Continue with Google</span>
        </button>
      </div>

      {/* login page image */}
      <img
        src={loginPageImg}
        alt=""
        className="right-[-180px] top-[10%] z-10 fixed"
      />

      {/* circles vector */}
      <img src={circlesBg} alt="" className="fixed top-[5%] right-[0px] z-0 " />
    </section>
  );
};

export default Login;
