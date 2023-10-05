import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainSection from "../Components/Contact/MainSection";

const Contact: React.FC = () => {
  return (
    <div className="px-10 bg-black min-h-screen text-white">
      <div className="flex justify-center">
        <Header />
        <MainSection />
      </div>
      <div className="flex items-center justify-center absolute bottom-0  right-10 left-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
