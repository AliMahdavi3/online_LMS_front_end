import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
  { id: 1, src: "./assets/image/shop/shop (1).avif" },
  { id: 2, src: "./assets/image/shop/shop (2).avif" },
  { id: 3, src: "./assets/image/shop/shop (3).avif" },
  { id: 4, src: "./assets/image/shop/shop (4).avif" },
  { id: 5, src: "./assets/image/shop/shop (5).avif" },
];

const MultiCarousel = () => {
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
              <img src={item.src} className="rounded-2xl h-72 shadow-xl" alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
