import React from "react";
import { FaDiscourse, FaBehance, FaPodcast, FaBook, FaGlide } from "react-icons/fa"

const Tabs = () => {
  return (
    <div>
      <div>
        <ul className="md:flex-row flex flex-wrap items-center justify-around mt-10 mb-20">
          <li className="flex my-3 items-center shadow-lg shadow-teal-700 bg-slate-100 hover:bg-pink-600 rounded-lg duration-300 px-2 py-3 font-semibold">
            <a href="#course" className="cursor-pointer mx-2">
              دوره ها
            </a>
            <FaDiscourse className="text-purple-800" />
          </li>
          <li className="flex my-3 items-center shadow-lg shadow-teal-700 bg-slate-100 hover:bg-pink-600 rounded-lg duration-300 px-2 py-3 font-semibold">
            <a href="#books" className="cursor-pointer mx-2">
              کتاب ها
            </a>
            <FaBook className="text-purple-800" />
          </li>
          <li className="flex my-3 items-center shadow-lg shadow-teal-700 bg-slate-100 hover:bg-pink-600 rounded-lg duration-300 px-2 py-3 font-semibold">
            <a href="#pudcast" className="cursor-pointer mx-2">
              پادکست ها
            </a>
            <FaPodcast className="text-purple-800" />
          </li>
          <li className="flex my-3 items-center shadow-lg shadow-teal-700 bg-slate-100 hover:bg-pink-600 rounded-lg duration-300 px-2 py-3 font-semibold">
            <a href="#translate" className="cursor-pointer mx-2">
              ترجمه ها
            </a>
            <FaBehance className="text-purple-800" />
          </li>
          <li className="flex my-3 items-center shadow-lg shadow-teal-700 bg-slate-100 hover:bg-pink-600 rounded-lg duration-300 px-2 py-3 font-semibold">
            <a href="#articles" className="cursor-pointer mx-2">
              مقالات ها
            </a>
            <FaGlide className="text-purple-800" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
