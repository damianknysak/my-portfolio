import React from "react";

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl h-20 mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs lg:text-base">
      <p className="text-gray-500">
        Strona internetowa stworzona przez{" "}
        <span className="text-white">Damiana Knysak</span>
      </p>
      <p>damian.knysak1@gmail.com</p>
    </footer>
  );
}
