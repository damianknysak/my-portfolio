import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import AnimatedText from "./AnimatedText";

const Header: React.FC = () => {
  const [isHamburgerMenuActive, setIsHamburgerMenuAtive] = useState(false);
  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`${
          isHamburgerMenuActive ? "max-h-48 border-t" : "max-h-0"
        } transition-all duration-500 ease sm:hidden overflow-hidden fixed w-full border-black z-50 top-20 bg-black/75 backdrop-filter backdrop-blur-sm`}
      >
        <ul className="flex flex-col items-center space-y-4 py-8">
          <li className="">
            <AnimatedText
              href="/projects"
              text="Projekty"
              withArrow={false}
              withGroupHover={false}
            />
          </li>
          <li>
            <AnimatedText
              href="/about"
              text="O mnie"
              withArrow={false}
              withGroupHover={false}
            />
          </li>
          <li className="bg-white p-2 px-10 border border-gray-700 text-black rounded-full transition ease-in duration-200 hover:bg-black hover:text-white cursor-pointer">
            <a href="/contact">Kontakt</a>
          </li>
        </ul>
      </div>
      <header className="fixed  z-50 flex w-full max-w-7xl justify-between items-center px-10 h-20 bg-black/75 backdrop-filter backdrop-blur-sm">
        {/* Logo */}
        <div className="h-7 overflow-hidden">
          <div className="animatedScroll flex flex-col">
            <a className="text-xl font-semibold" href="/">
              Damian Knysak
            </a>
            <a className="text-xl font-semibold text-gray-500" href="/">
              Damian Knysak
            </a>
          </div>
        </div>

        <HamburgerButton
          isMenuActive={isHamburgerMenuActive}
          setIsMenuActive={setIsHamburgerMenuAtive}
        />

        <nav className="hidden sm:block">
          <ul className="flex items-center space-x-5">
            <li className="h-6 overflow-hidden">
              <AnimatedText
                text="Projekty"
                withArrow={false}
                withGroupHover={false}
                href="/projects"
              />
            </li>
            <li className="h-6 overflow-hidden">
              <AnimatedText
                text="O mnie"
                withArrow={false}
                withGroupHover={false}
                href="/about"
              />
            </li>
            <li className="bg-white p-2 border border-gray-700 text-black rounded-full transition ease-in duration-200 hover:bg-black hover:text-white cursor-pointer">
              <a href="/contact">Kontakt</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
