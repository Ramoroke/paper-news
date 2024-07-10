import React from "react";

function AdvertCard({ item }) {
  return (
    <div className="bg-white rounded-3xl h-96 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] relative">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-contain rounded-3xl"
      />
    </div>
  );
}

export default AdvertCard;
