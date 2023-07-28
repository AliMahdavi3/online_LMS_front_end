import React from "react";
import { FaDiscourse, FaBehance, FaPodcast, FaBook, FaGlide } from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Tabs = () => {
  return (
    <div>
      <div>
        <ul className="md:flex-row flex flex-wrap items-center justify-around mt-10 mb-20">
          <li className="flex my-3 items-center shadow-lg shadow-teal-700 bg-slate-100 hover:bg-pink-600 rounded-lg duration-300 px-2 py-3 font-semibold">
            <NavLink to="/shop/course" className="cursor-pointer mx-2">
              دوره ها
            </NavLink>
            <FaDiscourse className="text-purple-800" />
          </li>
          <li className="flex my-3 items-center shadow-lg shadow-teal-700 bg-slate-100 hover:bg-pink-600 rounded-lg duration-300 px-2 py-3 font-semibold">
            <NavLink to="/shop/books" className="cursor-pointer mx-2">
              کتاب ها
            </NavLink>
            <FaBook className="text-purple-800" />
          </li>
          <li className="flex my-3 items-center shadow-lg shadow-teal-700 bg-slate-100 hover:bg-pink-600 rounded-lg duration-300 px-2 py-3 font-semibold">
            <NavLink to="/shop/pudcast" className="cursor-pointer mx-2">
              پادکست ها
            </NavLink>
            <FaPodcast className="text-purple-800" />
          </li>
          <li className="flex my-3 items-center shadow-lg shadow-teal-700 bg-slate-100 hover:bg-pink-600 rounded-lg duration-300 px-2 py-3 font-semibold">
            <NavLink to="/shop/translate" className="cursor-pointer mx-2">
              ترجمه ها
            </NavLink>
            <FaBehance className="text-purple-800" />
          </li>
          <li className="flex my-3 items-center shadow-lg shadow-teal-700 bg-slate-100 hover:bg-pink-600 rounded-lg duration-300 px-2 py-3 font-semibold">
            <NavLink to="/shop/articles" className="cursor-pointer mx-2">
              مقالات ها
            </NavLink>
            <FaGlide className="text-purple-800" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
