import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AppFeatures from "../Components/OurTrip/AppFeatures";
import VideoPresentations from "../Components/OurTrip/VideoPresentations";

const OurTrip: React.FC = () => {
  return (
    <div className="px-10 bg-black min-h-screen text-white">
      <div className="flex justify-center">
        <Header />
        <main className="w-full max-w-7xl">
          <AppFeatures />
          <VideoPresentations />
          {/* <AppFeatures />
          <VideoPresentations />
          <CodeStack />
          <TechnicalDesc /> */}
        </main>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default OurTrip;
