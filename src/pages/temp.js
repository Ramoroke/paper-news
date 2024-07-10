import React, { useState, useRef, useEffect } from "react";
import NewsCard from "../components/Cards/NewsCard";
import HeadlineCard from "../components/Cards/HeadlineCard";
import NewsSlider from "../components/Slider/NewsSlider";
import AdvertCard from "../components/Cards/AdvertCard";
import VideoSlider from "../components/Slider/VideoSlider";
import AudioContainer from "../components/AudioPlayer/AudioContainer";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

function Home() {
  const weatherData = {
    Maseru: "Sunny, 25°C",
    Mafeteng: "Cloudy, 20°C",
    "Mohale's Hoek": "Rainy, 18°C",
    Quthing: "Partly Cloudy, 22°C",
    "Qacha's Nek": "Windy, 19°C",
    "Botha Bothe": "Sunny, 24°C",
    Leribe: "Foggy, 17°C",
    Berea: "Rainy, 16°C",
    "Thaba Tseka": "Snowy, 0°C",
    Mokhotlong: "Cold, 5°C",
  };
  const audios = [
    {
      title:
        "TSELE LE TSELE: Puisano le sebueledi sa bosetshaba sa SAFTU, Trevor Shaku",
      description:
        "Goitseone Moremi o buisana le sebueledi sa bosetshaba sa SAFTU, Trevor S...",
      date: "Jun 5",
      audioSrc: "/assets/audios/lma.mp3",
    },
    {
      title: "Brandpunt 4 Junie 2024",
      description:
        "Erge storms, wind en hael saai verwoesting in KwaZulu-Natal en in die Oos-K...",
      date: "Jun 4",
      audioSrc: "/assets/audios/campus-market.mp3",
    },
    // Add more audio objects as needed
  ];
  const aud = [
    {
      title: "Audio for story 1",
      audio: "/assets/audios/lma.mp3",
    },
    {
      title: "Audio for story 2",
      audio: "/assets/audios/campus-market.mp3",
    },
    {
      title: "Audio for story 3",
      audio: "/assets/audios/winter.mp3",
    },
    {
      title: "Audio for story 2",
      audio: "/assets/audios/campus-market.mp3",
    },
    {
      title: "Audio for story 3",
      audio: "/assets/audios/winter.mp3",
    },
  ];
  const videos = [
    {
      title: "Video of story 1",
      img: "/assets/band.jpg",
      video: "/assets/videos/video_1.mp4",
    },
    {
      title: "Video of story 3",
      img: "/assets/football.jpg",
      video: "/assets/videos/video_2.mp4",
    },
    {
      title: "Video of story 3 ",
      img: "/assets/football.jpg",
      video: "/assets/videos/video_3.mp4",
    },
  ];
  const advertInfo = {
    title: "Top ten women in business this Woman's month",
    description: "Roof top sundays rock the weekend with Live band music",
    img: "/assets/women-in-business.jpg",
  };
  const headline = [
    {
      title: "Top ten women in business this Woman's month",
      date: "03 Jun 2024, 21:36",
      category: "Business",
      img: "/assets/women-in-business.jpg",
    },
  ];
  const newsItems = [
    {
      title: "Lioli scoops the league again after six years dry of a cup",
      date: "03 Jun 2024, 13:00 [SAST]",
      category: "Sports",
      img: "/assets/football.jpg",
    },
    {
      title: "Roof top sundays rock the weekend with Live band music",
      date: "03 Jun 2024, 12:32 [SAST]",
      category: "Entertainment",
      img: "/assets/rooftop.jpg",
    },
  ];
  const news = [
    {
      title: "Lioli scoops the league again after six years dry of a cup",
      date: "03 Jun 2024, 13:00 [SAST]",
      category: "Sports",
      img: "/assets/football.jpg",
    },
    {
      title: "Roof top sundays rock the weekend with Live band music",
      date: "03 Jun 2024, 12:32 [SAST]",
      category: "Entertainment",
      img: "/assets/rooftop.jpg",
    },
    {
      title: "Top ten women in business this Woman's month",
      date: "03 Jun 2024, 21:36",
      category: "Business",
      img: "/assets/women-in-business.jpg",
    },
    {
      title: "More News to play with",
      date: "03 Jun 2024, 21:36",
      category: "Business",
      img: "/assets/band.jpg",
    },
    {
      title: "Some news about sports",
      date: "03 Jun 2024, 21:36",
      category: "Sports",
      img: "/assets/basketball.jpg",
    },
  ];
  const [selectedDistrict, setSelectedDistrict] = useState("Maseru");

  const handleChange = (event) => {
    setSelectedDistrict(event.target.value);
  };
  const [audioList, setAudioList] = useState(audios);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAudioSelect = (index) => {
    const selectedAudio = audioList[index];
    const newAudioList = [
      selectedAudio,
      ...audioList.filter((_, i) => i !== index),
    ];
    setAudioList(newAudioList);
    setCurrentIndex(0); // Reset the index to the top item
  };
  const [currentAudioIndex, setCurrentAudioIndex] = useState(null);
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (currentAudioIndex !== null) {
        audioRef.current.play();
      }
    }
  }, [currentAudioIndex]);
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
      <div className="mt-8 p-4">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Latest News</h1>
          <NewsSlider news={news} />
        </div>
      </div>
      <div className="mt-8 p-4">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Advert</h1>
          <AdvertCard item={advertInfo} />
        </div>
      </div>
      <div className="mt-8 p-4">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Must Watch</h1>
          <VideoSlider news={videos} />
        </div>
      </div>
      <div className="max-w-md mx-auto bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center p-4 border-b border-gray-700">
          <button className="mr-4 bg-purple-600 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-5.197-3.024A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.024a1 1 0 000-1.664z"
              />
            </svg>
          </button>
          <div>
            <h2 className="text-lg font-bold">Podcast Player</h2>
            <p className="text-sm">Select an episode to play</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-gray-700 rounded-full h-2 mb-4">
            <div
              className="bg-gray-400 h-2 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
          <audio controls ref={audioRef} className="w-full">
            {currentAudioIndex !== null && (
              <source
                src={audios[currentAudioIndex].audioSrc}
                type="audio/mpeg"
              />
            )}
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">SABC News Podcasts</h3>
          <ul>
            {audios.map((audio, index) => (
              <li
                key={index}
                className={`border-t border-gray-700 py-2 ${
                  currentAudioIndex === index ? "bg-gray-800" : ""
                }`}
              >
                <button
                  className="flex items-center w-full text-left"
                  onClick={() => setCurrentAudioIndex(index)}
                >
                  <span className="bg-purple-600 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-5.197-3.024A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.024a1 1 0 000-1.664z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold">{audio.title}</p>
                    <p className="text-sm">{audio.description}</p>
                    <p className="text-xs text-gray-400">{audio.date}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 p-4">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Advert</h1>
          <AdvertCard item={advertInfo} />
        </div>
      </div>
      <div className="mt-8 p-4">
        <div className="container mx-auto px-4 py-4 bg-white shadow rounded">
          <h1 className="text-2xl font-bold mb-4">Weather</h1>
          <label
            htmlFor="districts"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Choose your Location
          </label>
          <select
            name="districts"
            value={selectedDistrict}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded-md"
          >
            {Object.keys(weatherData).map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          <div
            id="weatherDisplay"
            className="mt-4 text-lg font-medium text-gray-800"
          >
            Weather in {selectedDistrict}: {weatherData[selectedDistrict]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
