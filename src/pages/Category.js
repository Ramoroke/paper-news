import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../components/Cards/NewsCard";
import HeadlineCard from "../components/Cards/HeadlineCard";

import { headline, newsItems, stories, advertInfo } from "../local-db/db";
import AdvertCard from "../components/Cards/AdvertCard";

function Category() {
  const { categoryPage } = useParams();
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">{categoryPage}</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
        <h1>News Headline</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {headline.map((item) => (
            <HeadlineCard item={item} />
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {newsItems.map((item, index) => (
              <NewsCard index={index} item={item} />
            ))}
          </div>
        </div>
        <h2>Advert</h2>
        <AdvertCard item={advertInfo[0]} />
        <h2>Some News</h2>
        <div>
          {stories.map((item, index) => (
            <NewsCard index={index} item={item} />
          ))}
        </div>
      </div>

      <h2>Advert</h2>
      <h2>More news</h2>
    </div>
  );
}

export default Category;
