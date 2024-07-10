import React from "react";
import { BiMusic, BiNews } from "react-icons/bi";
import { MdAutoGraph, MdSportsMartialArts } from "react-icons/md";
import { GiHeartInside } from "react-icons/gi";
import { BsChat } from "react-icons/bs";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-blue-950 text-white mt-2 fixed z-10 w-full"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link
        to="/"
        className="flex flex-row justify-center items-center p-4 gap-1"
      >
        <BiNews size={24} />
        NEWS
      </Link>
      <Link
        to="/business"
        className="flex flex-row justify-center items-center p-4 gap-1"
      >
        <MdAutoGraph size={24} />
        BUSINESS
      </Link>
      <Link
        to="/sports"
        className="flex flex-row justify-center items-center p-4 gap-1"
      >
        <MdSportsMartialArts />
        SPORTS
      </Link>
      <Link
        to="/entertainment"
        className="flex flex-row justify-center items-center p-4 gap-1"
      >
        <BiMusic />
        ENTERTAINMENT
      </Link>
      <Link
        to="/art-and-lifestyle"
        className="flex flex-row justify-center items-center p-4 gap-1"
      >
        <GiHeartInside />
        ART & LIFESTYLE
      </Link>
      <Link
        to="/opinion"
        className="flex flex-row justify-center items-center p-4 gap-1"
      >
        <BsChat />
        OPINION
      </Link>
      <Link
        to="/about-us"
        className="flex flex-row justify-center items-center p-4 gap-1"
      >
        ABOUT
      </Link>
    </div>
  );
};

export default Dropdown;
