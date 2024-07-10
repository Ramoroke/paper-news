import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute right-[100px] -top-[50px]" onClick={onClick}>
      <div className="bg-[#253b92] h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer text-white text-2xl">
        <BsChevronLeft size={32} />
      </div>
    </div>
  );
};

export default PrevArrow;
