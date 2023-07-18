import React from "react";
import { Carousel } from "flowbite-react";

const PosterCarousel = () => {
  return (
    <Carousel className="shadow-xl rounded-xl" slideInterval={3000}>
      <img className="h-full rounded-xl" src="./assets/image/lms/l (1).jpg" alt="..." />
      <img className="h-full rounded-xl" src="./assets/image/lms/l (1).png" alt="..." />
      <img className="h-full rounded-xl" src="./assets/image/lms/l (2).jpg" alt="..." />
      <img className="h-full rounded-xl" src="./assets/image/lms/l (2).png" alt="..." />
      <img className="h-full rounded-xl" src="./assets/image/lms/l (2).jpg" alt="..." />
    </Carousel>
  );
};

export default PosterCarousel;
