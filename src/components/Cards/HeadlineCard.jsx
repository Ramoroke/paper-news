import React from "react";
import { Link } from "react-router-dom";

function HeadlineCard({ item }) {
  return (
    <div>
      <Link to={`/story/${item.title.replace(/\s+/g, "-").toLowerCase()}`}>
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <p className="text-gray-600 mb-2">{item.date}</p>
        <p className="text-gray-700">{item.category}</p>
      </div>
      </Link>
    </div>
  );
}

export default HeadlineCard;
