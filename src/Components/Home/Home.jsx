import React from "react";
// import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../../TextChange";

const Home = () => {
  return (
    <div
      className="text-white flex w-full justify-between items-start p-10 md:p-20 mb-[140px]">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          {/* <TextChange /> */}
          <TextChange />

        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          I'am deeply passionate about front-end development, constantly striving to create engaging and user-friendly interfaces.
        </p>
        <div id="#Footer">
          <button

            className="mt-7 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] ">
            Contact Me
          </button>
        </div>
      </div>
      <div>

      </div>
      <div>
        <img src="Image/Image.jpg" className=" rounded-xl mr-14 md:h-80" alt="" />
      </div>
    </div>
  );
};

export default Home;