import React from "react";
import ProjectsGrid from "./ProjectsGrid";
import AnimatedText from "../AnimatedText";

const MainSection: React.FC = () => {
  return (
    <main className="mt-52 md:mt-64 w-full max-w-7xl mb-10">
      <div className="max-w-md md:max-w-lg short-desc">
        <p className="text-xl lg:text-2xl">
          Witam, nazywam się Damian Knysak, jestem studentem Politechniki
          Częstochowskiej i stworzyłem tę stronę, aby w skrócie pokazać nad
          jakimi projektami ostatnio pracowałem.
        </p>
      </div>
      <section className="mt-10 flex flex-col md:flex-row items-start md:items-end justify-between  my-projects">
        <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl">
          <span className="leading-tight tracking-wider font-bold">
            Moje projekty aplikacji
          </span>
        </div>

        <div className="flex flex-col md:items-center mt-32">
          <div className="h-5 overflow-hidden">
            <AnimatedText
              text="damian.knysak1@gmail.com"
              withArrow={false}
              withGroupHover={false}
              href=""
            />
          </div>

          <span className="text-gray-500 text-sm">Przewijaj niżej</span>
        </div>
      </section>
      <ProjectsGrid />
    </main>
  );
};

export default MainSection;
