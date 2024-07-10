import React from "react";
import { Link } from "react-router-dom";
import { stories } from "../local-db/db";
import NewsCard from "../components/Cards/NewsCard";
import HeadlineCard from "../components/Cards/HeadlineCard";
import NewsSlider from "../components/Slider/NewsSlider";
import AdvertCard from "../components/Cards/AdvertCard";
import VideoSlider from "../components/Slider/VideoSlider";
import AudioContainer from "../components/AudioPlayer/AudioContainer";
import Weather from "../components/Weather";
import {
  audios,
  videos,
  weatherData,
  advertInfo,
  headline,
  news,
  newsItems,
} from "../local-db/db";
import Subscription from "../components/Cards/Subscription";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">News Portal</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
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
      </div>
      {/* <div className="p-4">
        {stories.map((story, index) => (
          <div key={index} className="mb-8">
            <Link
              to={`/story/${story.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-blue-500 hover:underline"
            >
              <h2 className="text-xl font-bold mb-2">{story.title}</h2>
            </Link>
            <p className="text-sm text-gray-500 mb-4">{story.date}</p>
            <p>{story.content[0].substring(0, 100)}...</p>
          </div>
        ))}
      </div> */}
      <div className="z-100000">
        <Subscription />
      </div>
      <div className="mt-8 p-4">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Latest News</h1>
          <NewsSlider news={news} />
        </div>
      </div>
      <div className="mt-8 p-4">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Advert</h1>
          <AdvertCard item={advertInfo[0]} />
        </div>
      </div>
      <div className="mt-8 p-4">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Must Watch</h1>
          <VideoSlider news={videos} />
        </div>
      </div>
      <div className="mt-8 p-4">
        <AudioContainer audios={audios} />
      </div>
      <div className="mt-8 p-4">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Advert</h1>
          <AdvertCard item={advertInfo[1]} />
        </div>
      </div>
      <div className="mt-8 p-4">
        <Weather weatherData={weatherData} />
      </div>
    </div>
  );
}

export default Home;
