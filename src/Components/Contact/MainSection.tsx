import React from "react";
import { Link } from "react-router-dom";

export default function MainSection() {
  return (
    <main className="mt-32 md:mt-36 w-full max-w-7xl mb-10">
      <section className="mt-10 flex flex-col items-start justify-between  my-projects">
        <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl">
          <span className="leading-tight tracking-wider font-bold">
            Porozmawiajmy
          </span>
        </div>
        <div className="w-full max-w-5xl flex flex-col space-y-5 sm:flex-row items-center justify-between">
          <div className="max-w-md md:max-w-lg short-desc mt-5">
            <p className="text-xl lg:text-2xl">
              Jeśli masz ofertę pracy nad jakimś projektem, chcesz mnie poznać
              lub po prostu pogadać, to napisz do mnie, chętnie odpowiem.
            </p>
          </div>
          <img
            alt="Talking"
            className="h-64 md:h-96"
            src={require("../../assets/talking.png")}
          />
        </div>

        <div className="mt-16 text-xl md:text-4xl lg:text-5xl xl:text-6xl max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl">
          <span className="leading-tight tracking-wider font-bold cursor-pointer">
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:damian.knysak1@gmail.com";
                e.preventDefault();
              }}
            >
              {" "}
              damian.knysak1@gmail.com
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}
