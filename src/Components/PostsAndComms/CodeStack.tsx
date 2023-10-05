import React from "react";

const CodeStack: React.FC = () => {
  return (
    <div className="flex mt-20 w-full short-desc">
      <div className="flex-1">
        <div className=" max-w-[150px] lg:max-w-xs">
          <span className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight tracking-wider">
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
            <span>MySql</span>
            <img
              alt="MySql"
              className="h-6"
              src={require("../../assets/logos/mysql.png")}
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
  );
};

export default CodeStack;
