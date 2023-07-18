import React from "react";
import PosterCarousel from "./PosterCarousel";
import CarouselMulti from "./CarouselMulti";
import Tages from "../Tages";

const MainCarousel = () => {
  return (
    <div dir="ltr" className="container mt-32 lg:gap-10 grid grid-cols-3">
      {/* left section */}
      <div className="h-56 mx-5 mb-72 col-span-3 lg:col-span-2 sm:h-64 xl:h-80 2xl:h-96">
        <PosterCarousel />
        <CarouselMulti />
      </div>
      {/* right section */}
      <Tages />
    </div>
  );
};

export default MainCarousel;
