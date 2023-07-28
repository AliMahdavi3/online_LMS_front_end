import React from "react";
import MultiCarousel from "./caousel/MultiCarousel";
import HomeFooter from "../home/HomeFooter";
import Course from "./course/Course";
import Books from "./books/Books";
import Articles from "./alteicles/Articles";
import Pudcast from "./pudcast/Pudcast";
import Translate from "./translate/Translate";
import Pagination from "./pagination/Pagination";
import Tabs from "./tabs/Tabs";
import SearchBox from "./searchBox/SearchBox";

const Shop = () => {
  return (
    <div className="mt-28">
      <div className="container">
      {/* search box */}
      <SearchBox/>
      {/* tabs */}
      <Tabs/>
      {/* carousel */}
      <div className="h-full -mt-10">
        <MultiCarousel/>
      </div>
      {/* courses */}
      <div id="course">
        <Course/>
      </div>
      {/* <div id="books">
        <Books/>
      </div>
      <div id="articles">
        <Articles/>
      </div>
      <div id="pudcast">
         <Pudcast/>
      </div>
      <div id="translate">
        <Translate/>
      </div> */}
      {/* pagination */}
      <Pagination/>
      </div>
      <HomeFooter/>
    </div>
  );
};

export default Shop;
