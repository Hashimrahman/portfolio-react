import React from "react";
import skillsImage from "../../assets/skillSide.png";
import MagnetLines from "../../Components/ReactBits/MagnetLines";

const Skills = () => {
  return (
    <div className="bg-backgroundSecondary pt-16 pb-32">
      <div className="w-1/3 flex items-center gap-2">
        <h2 className="text-white text-3xl">
          <span className="text-customPurple">#</span>skills
        </h2>
        <div className="h-[0.5px] w-full bg-customPurple"></div>
      </div>
      <div className="grid grid-cols-3 mt-10 gap-6">
        {/* <div className="flex items-center justify-center">
          <img src={skillsImage} alt="" />
        </div> */}
        <div className="hidden md:flex col-span-1">
          <MagnetLines
            rows={9}
            columns={9}
            containerSize="40vmin"
            lineColor="#C778DD"
            lineWidth="0.4vmin"
            lineHeight="3vmin"
            baseAngle={0}
            style={{ margin: "2rem auto" }}
            // className="bg-fuchsia-400"
          />
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-between bg-gray-400">
          <div className="">
            <div className="border">
              <h3>Language</h3>
              <p>JavaScript</p>
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
