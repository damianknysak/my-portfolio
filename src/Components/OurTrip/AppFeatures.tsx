import {
  AdjustmentsHorizontalIcon,
  BoltIcon,
  Cog8ToothIcon,
  EnvelopeOpenIcon,
  LockClosedIcon,
  PaintBrushIcon,
  MapIcon,
  CameraIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const AppFeatures: React.FC = () => {
  return (
    <main className="mt-32 md:mt-36 w-full max-w-7xl mb-10">
      <section className="mt-10 flex flex-col items-start justify-between  my-projects">
        <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl">
          <span className="leading-tight tracking-wider font-bold">
            Our Trip
          </span>
        </div>
        <div className="mt-20 w-full space-y-10 max-w-5xl">
          <div className="flex flex-col sm:flex-row place-items-center justify-between">
            <div className="max-w-md md:max-w-lg short-desc">
              <p className="text-xl lg:text-2xl">
                W skrócie <b>Our Trip</b> to aplikacja pozwalająca użytkownikom
                na dzielenie się ze znajomymi miejscami, które odwiedzili czy
                tworzenie wyzwań w oparciu o trasy, które mogą sami wyznaczyć.
              </p>
            </div>
            <img
              alt="our-trip-logo"
              className="h-72"
              src={require("../../assets/OurTrip/our-trip.png")}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center space-y-10 project-featuers">
        <div className="max-w-xs text-center space-y-2">
          <h1 className="text-2xl font-semibold">Cechy aplikacji</h1>
          <p className="text-gray-600">
            Główne funkcjonalności zaimplementowane w aplikacji Our Trip
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row space-y-10 md:space-y-0">
          <div className="flex-1 flex flex-col items-center md:items-end justify-between space-y-2">
            <div className="flex-1 flex flex-col items-center md:items-end space-y-2 text-center md:text-end max-w-xs">
              <LockClosedIcon className="w-10 h-10 text-violet-500" />
              <h1 className="text-lg lg:text-xl font-semibold">
                Bezpieczeństwo aplikacji
              </h1>
              <p className="text-xs lg:text-sm text-gray-600">
                Sprawdzone rozwiązanie Firebase Authentication do zabezpieczenia
                twoich danych.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-end space-y-2 text-center md:text-end max-w-xs">
              <MapIcon className="w-10 h-10 text-violet-500" />
              <h1 className="text-lg lg:text-xl font-semibold">Google Maps</h1>
              <p className="text-xs lg:text-sm text-gray-600">
                Sprawdzaj aktywność znajomych i twórzy wyzwania na trasach
                dzięki Google Maps.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-end space-y-2 text-center md:text-end max-w-xs">
              <CameraIcon className="w-10 h-10 text-violet-500" />
              <h1 className="text-lg lg:text-xl font-semibold">Zdjęcia</h1>
              <p className="text-xs lg:text-sm text-gray-600">
                Rób zdjęcia w aplikacji bez konieczności przechodzenia do
                domyślnego aparatu w twoim smartfonie.
              </p>
            </div>
          </div>

          <div className="mx-14 flex justify-center">
            <img
              alt="posts-and-comms"
              className="h-96 lg:h-[550px]"
              src={require("../../assets/travel-active.png")}
            />
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start justify-between space-y-2">
            <div className="flex-1 flex flex-col items-center md:items-start space-y-2 text-center md:text-start max-w-xs">
              <BoltIcon className="w-10 h-10 text-violet-500" />
              <h1 className="text-lg lg:text-xl font-semibold">Szybkość</h1>
              <p className="text-xs lg:text-sm text-gray-600">
                Połączenie React Native + Firebase zapewnia szybkie działanie
                aplikacji.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start space-y-2 text-center md:text-start max-w-xs">
              <PaintBrushIcon className="w-10 h-10 text-violet-500" />
              <h1 className="text-lg lg:text-xl font-semibold">
                Nowoczesny Design
              </h1>
              <p className="text-xs lg:text-sm text-gray-600">
                Nowoczesny layout został stworzony przy użyciu Tailwind.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start space-y-2 text-center md:text-start max-w-xs">
              <MapPinIcon className="w-10 h-10 text-violet-500" />
              <h1 className="text-lg lg:text-xl font-semibold">Lokalizacja</h1>
              <p className="text-xs lg:text-sm text-gray-600">
                Zapisuj zdjęcia czy wyzwania wraz z adresem, w którym zostały
                zrobione.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppFeatures;
