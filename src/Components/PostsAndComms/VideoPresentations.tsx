import { PlayIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import VideoSlide from "./VideoSlide";
import PostsCommsRegisterImage from "../../assets/PostsAndComms/posts-comms.png";
import PostsCommsRegisterVideo from "../../assets/PostsAndComms/app_register.mp4";

import PostsCommsScrollVideo from "../../assets/PostsAndComms/app_scroll.mp4";

import PostsCommsEditDeleteVideo from "../../assets/PostsAndComms/app_edit_delete.mp4";

import PostsCommsAddVideo from "../../assets/PostsAndComms/app_adding.mp4";

import PostsCommsProfileVideo from "../../assets/PostsAndComms/app_profile.mp4";

const VideoPresentations: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(false);
  const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  });
  useEffect(() => {
    swiper.init();
  }, []);
  return (
    <div className="flex flex-col items-center mt-10 short-desc">
      <div className="max-w-xs text-center space-y-2">
        <h1 className="text-2xl font-semibold">Zobacz jak działa aplikacja</h1>
        <p className="text-gray-600">
          Poniżej znajdziesz nagrania wideo działającej aplikacji i jej
          poszczególnych funkcjonalności
        </p>
      </div>
      <div className="w-[350px] md:w-[500px] flex items-center">
        <div className="swiper">
          <div className="swiper-wrapper">
            <VideoSlide
              video={PostsCommsRegisterVideo}
              image={PostsCommsRegisterImage}
              title="Proces Rejestracji"
            />
            <VideoSlide
              video={PostsCommsScrollVideo}
              image={PostsCommsRegisterImage}
              title="Strona główna"
            />
            <VideoSlide
              video={PostsCommsAddVideo}
              image={PostsCommsRegisterImage}
              title="Dodawanie postów i komentarzy"
            />
            <VideoSlide
              video={PostsCommsEditDeleteVideo}
              image={PostsCommsRegisterImage}
              title="Usuwanie i edycja"
            />

            <VideoSlide
              video={PostsCommsProfileVideo}
              image={PostsCommsRegisterImage}
              title="Edycja profilu"
            />
          </div>
          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPresentations;
