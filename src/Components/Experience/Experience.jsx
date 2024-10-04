import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiLinkedinLogo } from "react-icons/pi";
import { DiJavascript1 } from "react-icons/di";

const Experience = () => {
    return (
        <div id="Experience" className="p-10 md:p-24 ">
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Experience</h1>
            <div className="flex flex-wrap items-center justify-around">
                <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 ">
                    <span className="p-3 items-center rounded-2xl  hover:bg-slate-800">
                        <FaHtml5 color="#E34F26" size={70} />
                        <p className="text-white">Html</p>
                    </span>
                    <span className="text-white hover:bg-slate-800 ml-3.5">
                        <FaGithub color="#E34F26" size={70} />
                        Github
                    </span>
                    <span className="p-3 flex items-center rounded-2xl hover:bg-slate-800 ml-4">
                        <FaCss3 color="#1572B6" size={70} />
                        <p className="text-white">Css</p>
                    </span>
                    <span className="p-3  flex items-center rounded-2xl hover:bg-slate-800">
                        <FaReact color="#61DAFB" size={70} />
                        <p className="text-white">React</p>
                    </span>
                    <span className="hover:bg-slate-800 p-3 rounded-2xl">
                        <FcLinux size={70} />
                        <p className="text-white">Linux</p>
                    </span>
                    <span className="hover:bg-slate-800 p-3 rounded-2xl">
                    <PiLinkedinLogo color="white" size={70}/>
                        <p className="text-white">Linkedin</p>
                    </span>
                    <span className="hover:bg-slate-800 p-3 rounded-2xl">
                    <DiJavascript1 color="yellow" size={70}/>
                        <p className="text-white">Javascript</p>
                    </span>
                    <span className="hover:bg-slate-800 ml-6 p-3 rounded-2xl">
                    <RiTailwindCssFill color="lightblue" size={70}/>
                        <p className="text-white">Tailwind Css</p>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Experience;