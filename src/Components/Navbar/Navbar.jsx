import React from "react";

const Navbar = () => {

    const navItems = [
        {
            id: 1,
            title : 'home',
            link : '/',
            active : true
        },
        {
            id: 2,
            title : 'works',
            link : '/'
        },
        {
            id: 1,
            title : 'about-me',
            link : '/'
        },
        {
            id: 1,
            title : 'contact',
            link : '/'
        },
    ]

    return (
    <div className="font-code hidden md:flex justify-between items-center  w-full sticky top-0 py-4 bg-backgroundSecondary text-white">
        
      <h3>Hashim</h3>
      <div className="flex justify-between gap-8 items-center">
        {navItems.map((item)=> (
            <div key={item.id} className={`${item.active ? 'opacity-100' : 'opacity-50'} flex text-lg`}>
                <h4 className="text-customPurple">#</h4>
                <h4>{item.title}</h4>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
