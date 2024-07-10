import React from "react";
import { BsChevronRight } from "react-icons/bs";

const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute right-[30px] -top-[50px]" onClick={onClick}>
      <div className="bg-[#253b92] h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer text-white text-2xl">
        <BsChevronRight size={32} />
      </div>
    </div>
  );
};

export default NextArrow;
