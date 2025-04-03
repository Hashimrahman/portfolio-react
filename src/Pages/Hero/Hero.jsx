import React from "react";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="bg-backgroundSecondary py-7 md:py-0 h-auto md:h-[100vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-white text-4xl mb-4 font-semibold md:leading-relaxed">
            Hashim is a <span className="text-customPurple ">web designer</span>{" "}
            and <span className="text-customPurple">front-end developer</span>
          </h1>
          <p className="text-customGray mb-6 text-lg w-[90%]">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="border border-customPurple px-4 py-2 text-white hover:bg-customPurple hover:text-white transition" >
            Contact Me !!
          </button>
        </div>
        {/* Right Image */}
        <div className="flex justify-center items-start flex-col">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-auto object-cover"
          />
          <div className="flex gap-2 border items-center w-[85%] p-1">
            <div className="w-5 h-5 bg-customPurple"></div>
            <p className="text-customGray">
            A {" "}
              <span className="text-white">Python {" "}</span>
              specialist crafting clean, scalable code.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center text-white font-code mt-10 ">
        <div className="inline-block">
          <p className="border border-opacity-10 p-4 text-xl tracking-widest">
            With great code comes great bugs
          </p>
          <div className=" inline-block text-right w-full mb-10">
            <p className="border border-opacity-10 p-4 text-xl text-right inline-block">
              -Dr. Who
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
