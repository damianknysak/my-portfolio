import { PlayIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

interface VideoSlideProps {
  title: string;
  image: any;
  video: any;
}

const VideoSlide: React.FC<VideoSlideProps> = ({ title, image, video }) => {
  const [showRegisterVideo, setShowRegisterVideo] = useState(false);

  return (
    <div className="swiper-slide p-5 md:p-20 ">
      <div className="flex justify-center">
        {showRegisterVideo ? (
          <video
            onEnded={() => {
              setShowRegisterVideo(false);
            }}
            className="w-[200px] md:w-[400px] aspect-[9/19]"
            muted
            controls
            autoPlay
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video type
          </video>
        ) : (
          <div
            onClick={() => {
              setShowRegisterVideo(true);
            }}
            className="relative cursor-pointer"
          >
            <div className="bg-black/75 rounded-full w-52 h-52 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center text-center">
              <PlayIcon className="w-20 h-20" />
              <p className=" text-lg font-semibold">{title}</p>
            </div>
            <img className="w-[200px] md:w-[400px] blur-md" src={image} />
          </div>
        )}
      </div>
    </div>
  );
};
export default VideoSlide;
