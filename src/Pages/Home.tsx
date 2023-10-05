import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainSection from "../Components/Home/MainSection";

const Home: React.FC = () => {
  return (
    <div className="px-10 bg-black min-h-screen text-white">
      <div className="flex justify-center">
        <Header />
        <MainSection />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
