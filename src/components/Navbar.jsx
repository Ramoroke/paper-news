import React from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = ({ toggle, isOpen }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-blue-950 text-white sticky top-0 shadow-sm font-mono z-10"
      role="navigation"
    >
      <Link to="/" className="pl-8 font-bold text-2xl">
        <p>Informative</p>
      </Link>
      <div className="px-4 font-bold text-4xl cursor-pointer" onClick={toggle}>
        {isOpen ? <FaTimes /> : <CgMenuRight />}
      </div>
      {/* <div className="pr-8 md:block  hidden">
        <Link to="/" className="p-4">
          home
        </Link>
        <Link to="/vintage" className="p-4">
          vintage
        </Link>
        <Link to="/modern" className="p-4">
          modern
        </Link>
        <Link to="/info" className="p-4">
          info
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
