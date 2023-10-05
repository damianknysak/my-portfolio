import React from "react";
import ProjectsGrid from "../Home/ProjectsGrid";

const MainSection: React.FC = () => {
  return (
    <main className="mt-32 md:mt-36 w-full max-w-7xl mb-10">
      <section className="mt-10 flex flex-col items-start justify-between  my-projects">
        <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl">
          <span className="leading-tight tracking-wider font-bold">
            Projekty
          </span>
        </div>
        <div className="flex mt-20 w-full">
          <div className="flex-1">
            <div className=" max-w-[150px]">
              <span className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-wider">
                Technologie użyte do stworzenia projektów
              </span>
            </div>
          </div>

          <ul className="list-disc text-2xl pl-12 flex-1">
            <li>
              <div className="flex items-center space-x-2">
                <span>React Native</span>
                <img
                  alt="React Native"
                  className="h-6"
                  src={require("../../assets/logos/logo192.png")}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>React.js</span>
                <img
                  alt="React"
                  className="h-6"
                  src={require("../../assets/logos/logo192.png")}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>Laravel</span>
                <img
                  alt="Laravel"
                  className="h-6"
                  src={require("../../assets/logos/laravel.png")}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>Firebase</span>
                <img
                  alt="Firebase"
                  className="h-6"
                  src={require("../../assets/logos/firebase.png")}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>TypeScript</span>
                <img
                  alt="TypeScript"
                  className="h-6"
                  src={require("../../assets/logos/typescript.png")}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>Tailwind</span>
                <img
                  alt="Tailwind"
                  className="h-5"
                  src={require("../../assets/logos/tailwind.png")}
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <ProjectsGrid />
    </main>
  );
};

export default MainSection;
