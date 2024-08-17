import React from "react";

const Header = () => {
    return (
        <div className="absolute  w-full z-50 bg-gradient-to-b from-black to-transparent px-12 p-4">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <img className="w-32 md:w-44" src="https://i.postimg.cc/fLtp5pJ0/Netflix-Logo-PMS.png" alt="Netflix Logo"/>
            </div>
        </div>
    );
};

export default Header;
