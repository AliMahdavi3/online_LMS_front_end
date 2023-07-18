import React from "react";
import About from "./About";
import TopCourses from "./TopCourses";
import OnlineClasses from "./OnlineClasses";
import Subscription from "./Subscription";
import HomeFooter from "./HomeFooter";
import MainCarousel from "./carousel/MainCarousel";

const Home = () => {
  return (
    <main>
      {/* carousel */}
      <MainCarousel />
      <hr className="w-8/12 container mt-10" />
      {/* About us */}
      <About />
      <hr className="w-8/12 container my-10" />
      {/* top courses */}
      <TopCourses />
      <hr className="w-8/12 container mt-10" />
      {/* online classes */}
      <OnlineClasses />
      <hr className="w-8/12 container my-10" />
      {/* subscription */}
      <Subscription />
      <hr className="w-8/12 container my-10" />
      {/* footer */}
      <HomeFooter />
    </main>
  );
};

export default Home;
