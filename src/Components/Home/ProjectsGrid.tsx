import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import AnimatedText from "../AnimatedText";
const ProjectsGrid: React.FC = () => {
  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 projects-grid">
      <article
        onClick={() => {
          window.location.href = "/projects/posts-and-comms";
        }}
        className="group cursor-pointer"
      >
        <div className="mb-7 relative h-96 bg-violet-300 rounded-3xl flex items-center justify-center overflow-hidden">
          <div className="absolute w-14 h-14 bg-white top-7 left-4 rounded-full flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <ArrowRightIcon className="w-9 h-9 text-black transition-all duration-500 group-hover:-rotate-45" />
          </div>
          <img
            alt="posts-comms-app"
            className="h-60 transition-all duration-500 group-hover:h-96"
            src={require("../../assets/posts-comms2.png")}
          />
        </div>
        <AnimatedText
          text="Posts & Comms App"
          withArrow={true}
          withGroupHover={true}
          href=""
          secondaryText="Aplikacja do tworzenia postów, komentarzy i reakcji"
        />
      </article>
      <article
        onClick={() => {
          window.location.href = "/projects/travel-active";
        }}
        className="group cursor-pointer"
      >
        <div className="mb-7 relative h-96 bg-violet-300 rounded-3xl flex items-center justify-center overflow-hidden">
          <div className="absolute w-14 h-14 bg-white top-7 left-4 rounded-full flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <ArrowRightIcon className="w-9 h-9 text-black transition-all duration-500 group-hover:-rotate-45" />
          </div>
          <img
            alt="travel-active-app"
            className="h-60 transition-all duration-500 group-hover:h-96"
            src={require("../../assets/travel-active.png")}
          />
        </div>
        <AnimatedText
          text="Our Trip App"
          withArrow={true}
          withGroupHover={true}
          href="/projects/travel-active"
          secondaryText="Aplikacja dla fanów podróżowania"
        />
      </article>
      <article className="group cursor-pointer">
        <div className="mb-7 relative h-96 bg-violet-300 rounded-3xl flex items-center justify-center overflow-hidden">
          <div className="absolute w-14 h-14 z-10 bg-white top-7 left-4 rounded-full flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <ArrowRightIcon className="w-9 h-9  text-black transition-all duration-500 group-hover:-rotate-45" />
          </div>
          <img
            alt="admin-panel-app"
            className="h-60 transition-all duration-500 group-hover:scale-150"
            src={require("../../assets/admin-panel2.png")}
          />
        </div>
        <AnimatedText
          text="Panel Administracyjny"
          withArrow={true}
          withGroupHover={true}
          href=""
        />
      </article>
      <article className="group cursor-pointer">
        <div className="mb-7 relative h-96 bg-violet-300 rounded-3xl flex items-center justify-center overflow-hidden">
          <div className="absolute w-14 h-14 bg-white top-7 left-4 rounded-full flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <ArrowRightIcon className="w-9 h-9 text-black transition-all duration-500 group-hover:-rotate-45" />
          </div>
          <img
            alt="posts-comms-app"
            className="h-60 transition-all duration-500 group-hover:h-96"
            src={require("../../assets/posts-comms2.png")}
          />
        </div>
        <AnimatedText
          text="To be continued"
          withArrow={true}
          withGroupHover={true}
          href=""
        />
      </article>
    </section>
  );
};

export default ProjectsGrid;
