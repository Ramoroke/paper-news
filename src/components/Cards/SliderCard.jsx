import React from "react";
import { Link } from "react-router-dom";

function SliderCard({ item, index }) {
  return (
    <div key={index} className="max-w-30 max-h-50 m-2 flex-[1 0 25rem] bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/story/${item.title.replace(/\s+/g, "-").toLowerCase()}`}>
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-2">{item.date}</p>
        <p className="text-gray-700">{item.category}</p>
      </div>
      </Link>
    </div>
  );
}

export default SliderCard;
