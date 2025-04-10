// import React from "react";

// const Navbar = () => {

//     const navItems = [
//         {
//             id: 1,
//             title : 'home',
//             link : '/',
//             active : true
//         },
//         {
//             id: 2,
//             title : 'works',
//             link : '/'
//         },
//         {
//             id: 1,
//             title : 'about-me',
//             link : '/'
//         },
//         {
//             id: 1,
//             title : 'contact',
//             link : '/'
//         },
//     ]

//     return (
//     <div className="font-code hidden md:flex justify-between items-center  w-full sticky top-0 py-4 bg-backgroundSecondary text-white">
        
//       <h3>Hashim</h3>
//       <div className="flex justify-between gap-8 items-center">
//         {navItems.map((item)=> (
//             <div key={item.id} className={`${item.active ? 'opacity-100' : 'opacity-50'} flex text-lg`}>
//                 <h4 className="text-customPurple">#</h4>
//                 <h4>{item.title}</h4>
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { RxCross2, RxTextAlignLeft } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, title: "home", link: "/", active: true },
    { id: 2, title: "works", link: "/" },
    { id: 3, title: "about-me", link: "/" },
    { id: 4, title: "contact", link: "/" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-code w-full sticky top-0 py-4 bg-backgroundSecondary text-white z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 md:px-8">
        <h3 className="text-xl font-bold">Hashim</h3>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`${
                item.active ? "opacity-100" : "opacity-50"
              } flex text-lg`}
            >
              <h4 className="text-customPurple">#</h4>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? (
            <RxCross2 className="text-3xl font-bold" />
          ) : (
            <RxTextAlignLeft className="text-3xl font-bold" />
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "opacity-100 h-screen flex flex-col gap-16 items-start px-4 mt-20 text-5xl"
            : "opacity-0 h-0"
        }`}
      >
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`${
              item.active ? "opacity-100" : "opacity-50"
            } flex`}
          >
            <h4 className="text-customPurple">#</h4>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
