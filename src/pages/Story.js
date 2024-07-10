import React from "react";
import { useParams } from "react-router-dom";
import { stories } from "../local-db/db";

function Story() {
  const { storyId } = useParams();
  const story = stories.find(
    (s) => s.title.replace(/\s+/g, "-").toLowerCase() === storyId
  );

  if (!story) {
    return <div className="p-4">Story not found</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">{story.title}</h1>
        <img
          src={story.image}
          alt={story.imageAlt}
          className="max-w-full mx-auto mb-4 p-4"
        />
        <p className="text-sm text-gray-500 mb-4">{story.date}</p>
        <button className="bg-black text-white py-2 px-4 mb-4">
          Listen to this
        </button>
        <div className="prose mb-4">
          <p>
            <strong>Reading Time: 2 minutes</strong>
          </p>
          {story.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src={story.videoUrl}
            title={`Video for ${story.title}`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Story;
