import React from "react";

const MainSection: React.FC = () => {
  return (
    <main className="mt-32 md:mt-36 w-full max-w-7xl mb-10">
      <section className="mt-10 flex flex-col items-start justify-between  my-projects">
        <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl">
          <span className="leading-tight tracking-wider font-bold">
            Poznajmy się
          </span>
        </div>
        <div className="mt-20 w-full space-y-10 max-w-5xl">
          <div className="flex flex-col sm:flex-row place-items-center justify-between">
            <div className="max-w-md md:max-w-lg short-desc">
              <p className="text-xl lg:text-2xl">
                Witam, nazywam się Damian Knysak, jestem studentem Politechniki
                Częstochowskiej i niedawno ukończyłem trzeci rok studiów.
                Interesuje mnie tworzenie aplikacji mobilnych i internetowych,
                jestem otwarty na naukę nowych rzeczy.
              </p>
            </div>
            <img
              alt="programming"
              className="h-60"
              src={require("../../assets/programming.png")}
            />
          </div>
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between">
            <img
              alt="brain"
              className="h-60"
              src={require("../../assets/brain.png")}
            />
            <div className="max-w-md md:max-w-lg short-desc">
              <p className="text-xl lg:text-2xl">
                Do nowych wyzwań podchodzę rzetelnie i z pasją. Jestem
                zmotywowany by rozwijać swoją więdzę i karierę zawodową w IT.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-5">
            <div className="max-w-md md:max-w-lg short-desc">
              <p className="text-xl lg:text-2xl">
                W wolnym czasie lubię uprawiać sport oraz poznawać nowe pasje.
              </p>
            </div>
            <img
              alt="active"
              className="h-60"
              src={require("../../assets/active.png")}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
