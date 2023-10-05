import React from "react";

interface HamburgerButtonProps {
  isMenuActive: boolean;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isMenuActive,
  setIsMenuActive,
}) => {
  const genericHamburgerLine = `h-0.5 w-8 my-1 bg-white rounded-full transition ease transform duration-300`;
  return (
    <button
      className="sm:hidden  flex flex-col h-12 w-12 rounded justify-center items-center group"
      onClick={() => setIsMenuActive(!isMenuActive)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isMenuActive
            ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isMenuActive ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isMenuActive
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
