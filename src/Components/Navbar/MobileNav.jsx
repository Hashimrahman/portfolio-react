import { RxCross2, RxTextAlignLeft } from "react-icons/rx";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      id: 1,
      title: "home",
      link: "/",
      active: true,
    },
    {
      id: 2,
      title: "works",
      link: "/",
    },
    {
      id: 3,
      title: "about-me",
      link: "/",
    },
    {
      id: 4,
      title: "contact",
      link: "/",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-code h-auto w-full sticky top-0 py-4 bg-backgroundSecondary text-white">
      <div className="flex justify-between px-4">
        <h3 className="text-xl font-bold">Hashim</h3>
        <button onClick={toggleMenu}>
          {isOpen ? (
            <RxCross2 className="text-3xl font-bold" />
          ) : (
            <RxTextAlignLeft className="text-3xl font-bold" />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "opacity-100 h-screen flex flex-col gap-16 items-left mt-20 text-5xl" : "opacity-0 h-0"
        } transition-all duration-300 ease-in-out`}
      >
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`${item.active ? "opacity-100" : "opacity-50"} flex`}
          >
            <h4 className="text-customPurple">#</h4>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;