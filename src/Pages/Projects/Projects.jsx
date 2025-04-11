// import React from "react";
// import { HiArrowUpRight } from "react-icons/hi2";
// import { MdOutlineArrowRightAlt } from "react-icons/md";
// import projectImage from "../../assets/project.jpg";
// import { TbArrowsDoubleSwNe } from "react-icons/tb";

// const Projects = () => {
//   return (
//     <div className="bg-backgroundSecondary pt-5 pb-10">
//       <div className="grid grid-cols-3 gap-4 items-center py-20">
//         <div className="col-span-2 flex items-center gap-2">
//           <h2 className="text-white text-3xl">
//             <span className="text-customPurple">#</span>projects
//           </h2>
//           <div className="h-[0.5px] w-full bg-gray-200"></div>
//         </div>
//         <div className="flex items-center justify-end text-white gap-2">
//           View All
//           <HiArrowUpRight className="text-2xl" />
//         </div>
//       </div>
//       <div className="grid grid-cols-3 gap-10 w-full">
//         <div className="border-[1px] ">
//           <img src={projectImage} alt="" className="w-full" />
//           <h2 className="text-customGray text-lg p-2">HTML CSS Python Flask</h2>
//           <div className="p-4 border-t-[1px] flex flex-col gap-3 items-start">
//             <h1 className=" text-white text-2xl ">
//               Chat App
//             </h1>
//             <p className="text-customGray">Minecraft servers hosting </p>
//             <button className="flex items-center text-white gap-2 border  border-customPurple py-3 px-6">Live <TbArrowsDoubleSwNe className="text-xl" /></button>
//           </div>
//         </div>
//         <div className="border-[1px]">
//           <img src={projectImage} alt="" className="w-full" />
//           <h2 className="text-customGray text-lg p-2">HTML CSS Python Flask</h2>
//           <div className="p-4 border-t-[1px] flex flex-col gap-3 items-start">
//             <h1 className=" text-white text-2xl ">
//               Chat App
//             </h1>
//             <p className="text-customGray">Minecraft servers hosting </p>
//             <button className="flex items-center text-white gap-2 border  border-customPurple py-3 px-6">Live <TbArrowsDoubleSwNe className="text-xl" /></button>
//           </div>
//         </div>
//         <div className="border-[1px]">
//           <img src={projectImage} alt="" className="w-full" />
//           <h2 className="text-customGray text-lg p-2">HTML CSS Python Flask</h2>
//           <div className="p-4 border-t-[1px] flex flex-col gap-3 items-start">
//             <h1 className=" text-white text-2xl ">
//               Chat App
//             </h1>
//             <p className="text-customGray">Minecraft servers hosting </p>
//             <button className="flex items-center text-white gap-2 border  border-customPurple py-3 px-6">Live <TbArrowsDoubleSwNe className="text-xl" /></button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import projectImage from "../../assets/project.jpg";
import Aidnet from "../../assets/projects/aidnet.png"
import SoleStyle from "../../assets/projects/solestyle.png"
import DigiClock from "../../assets/projects/digi-clock.png"
import { TbArrowsDoubleSwNe } from "react-icons/tb";

const projects = [
  {
    title: "Aidnet",
    description: "Disaster Relief Management System",
    technologies: "DRF Microservice TS ReactQuery",
    image: Aidnet,
  },
  {
    title: "SoleStyle",
    description: "Fashion Product Showcase",
    technologies: "React TailwindCSS Python Django",
    image: SoleStyle,
  },
  {
    title: "Digital Clock",
    description: "A Digital Clock",
    technologies: "React TailwindCSS ",
    image: DigiClock,
  },
];

const Projects = () => {
  return (
    <div className="bg-backgroundSecondary pt-5 pb-10">
      <div className="grid grid-cols-3 gap-4 items-center py-20">
        <div className="col-span-2 flex items-center gap-2">
          <h2 className="text-white text-3xl">
            <span className="text-customPurple">#</span>projects
          </h2>
          <div className="h-[0.5px] w-full bg-gray-200"></div>
        </div>
        <div className="flex items-center justify-end text-white gap-2">
          View All
          <HiArrowUpRight className="text-2xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
        {projects.map((project, index) => (
          <div key={index} className="border-[1px]">
            <img src={project.image} alt="" className="w-full" />
            <h2 className="text-customGray text-lg p-2">{project.technologies}</h2>
            <div className="p-4 border-t-[1px] flex flex-col gap-3 items-start">
              <h1 className="text-white text-2xl">{project.title}</h1>
              <p className="text-customGray">{project.description}</p>
              <button className="flex items-center text-white gap-2 border border-customPurple py-3 px-6 hover:bg-customPurple">
                Code <TbArrowsDoubleSwNe className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;