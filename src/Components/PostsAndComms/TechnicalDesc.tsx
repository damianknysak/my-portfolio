import React from "react";
import AnimatedText from "../AnimatedText";
const TechnicalDesc: React.FC = () => {
  return (
    <div className="w-full flex justify-start mt-20 space-y-10 md:space-y-0 flex-col md:flex-row short-desc">
      <div className="max-w-xs">
        <span className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight tracking-wider">
          Jak projekt został stworzony?
        </span>
      </div>

      <div className="max-w-sm lg:max-w-md">
        <div className="flex items-center space-x-4 mb-2">
          <img
            className="w-8 lg:w-10"
            src={require("../../assets/logos/github.png")}
            alt="github"
          />
          <p className="text-gray-600 text-xl lg:text-2xl font-semibold">
            Backend
          </p>
          <div className="flex items-center space-x-2">
            <AnimatedText
              text={"zobacz kod"}
              withArrow={true}
              withGroupHover={false}
              href={"https://github.com/damianknysak/posts-and-comms-laravel"}
            />
          </div>
        </div>

        <span className="text-lg">
          Aplikacja oparta jest na backendzie stworzonym w <b>Laravel</b>. Dane
          przechowywany są w bazie <b>MySql</b>. Aplikacja mobilna stworzona w{" "}
          <b>React Native</b> komunikuje się z backendem za pomocą{" "}
          <b>Laravel REST Api </b>
          (autoryzacja tokenowa). Dostęp do Rest API mają tylko użytkownicy ze
          zweryfikowanymi mailami. Do dodawania zdjęć czy wysyłania e-mailów
          wykorzystałem kolejkę, która asynchronicznie zajmuje się
          zasobochłonnymi czynnościami.
        </span>
        <div className="flex items-center space-x-4 mt-20 mb-2">
          <img
            className="w-8 lg:w-10"
            src={require("../../assets/logos/github.png")}
            alt="github"
          />
          <p className="text-gray-600 text-xl lg:text-2xl font-semibold">
            Frontend
          </p>
          <div className="flex items-center space-x-2">
            <AnimatedText
              text={"zobacz kod"}
              withArrow={true}
              withGroupHover={false}
              href={
                "https://github.com/damianknysak/posts-and-comms-react-native"
              }
            />
          </div>
        </div>
        <span className="text-lg">
          Layout został wykonany przy użyciu głównie <b>Tailwinda. </b>
          Płynne nawigowanie pomiędzy widokami przy użyciu{" "}
          <b>React Navigation</b>. Ponadto kilka mniejszych bibliotek, do
          funkcjonalności jak kalendarz, "Bouncy checkbox" czy "Progress bar".
        </span>
      </div>
    </div>
  );
};

export default TechnicalDesc;
