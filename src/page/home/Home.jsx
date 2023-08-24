import React from "react";
import About from "./About";
import TopCourses from "./TopCourses";
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
      <h1 className="pt-10 container font-semibold text-2xl underline text-yellow-700">دوره های پر بازدید</h1>
      <TopCourses />
      <hr className="w-8/12 container mt-10" />
      {/* free Course */}
      <h1 className="pt-10 container font-semibold text-2xl underline text-yellow-700">به روز رسانی ها</h1>
      <TopCourses/>
      <hr className="w-8/12 container my-10" />
      {/* footer */}
      <HomeFooter />
    </main>
  );
};

export default Home;
