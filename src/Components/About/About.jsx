import React from "react";
import { FaArrowRight } from "react-icons/fa";
// import { IoArrowForward } from "react-icons/io5";
const About = () => {
    return (
        <div
            id="About"
            className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 "
        >
            <div className="mb-[80px]">
                <h2 className="text-2xl md:text-4xl font-bold mb-[100px]">About My Skills</h2>
                <div className="md:flex flex-wrap flex-col md:flex-row items-center mt-[40px]">
                    <img className="md:h-80 rounded-lg mr-9" src="https://static.vecteezy.com/system/resources/previews/017/204/468/original/happy-man-points-to-something-character-for-advertisement-guy-shows-a-direction-with-a-hand-illustration-in-cartoon-style-vector.jpg" alt="About img" />

                    <ul>
                        <div className="flex gap-3 py-4">
                            {/* <IoArrowForward size={30} className="mt-1" /> */}
                            <FaArrowRight size={30} className="mt-1" />
                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Frontend developer
                                </h1>
                                <p className="text-sm md:text-md leading-tight">
                                    A front-end developer brings a website's design to life, making sure it looks great and works smoothly. They use tools like HTML, CSS, and JavaScript to create layouts and interactions that feel natural for users. Their job is to make sure everything runs perfectly, whether you’re on a phone, tablet, or computer.
                                </p>
                            </span>
                        </div>
                        <div className="flex gap-3 py-4">
                            {/* <IoArrowForward size={30} className="mt-1" /> */}
                            <FaArrowRight size={30} className="mt-1" />
                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    React developer
                                </h1>
                                <p className="text-sm md:text-md leading-tight">
                                    A React developer builds dynamic, interactive user interfaces using React, a JavaScript library. They focus on creating reusable components to make web applications more efficient and responsive.
                                </p>
                            </span>
                        </div>
                        <div className="flex gap-3 py-4">
                            {/* <IoArrowForward size={30} className="mt-1" /> */}
                            <FaArrowRight size={30} className="mt-1" />
                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Tailwind Css
                                </h1>
                                <p className="text-sm md:text-md leading-tight">
                                Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes to help developers style their web pages quickly
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;