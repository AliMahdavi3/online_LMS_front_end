import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
  { id: 1, src: "./assets/image/carousel/mult (1).jpg" },
  { id: 2, src: "./assets/image/carousel/mult (2).jpg" },
  { id: 3, src: "./assets/image/carousel/mult (3).jpg" },
  { id: 4, src: "./assets/image/carousel/mult (4).jpg" },
  { id: 5, src: "./assets/image/carousel/mult (5).jpg" },
];

const CarouselMulti = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-14">
      <Carousel
        className="z-0"
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
      >
        {items.map((item) => {
          return (
            <div key={item.id} className="mx-5">
              <img src={item.src} className="rounded-2xl shadow-xl" alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselMulti;
