import React from "react";
import Home from "./home/Home";
import Shop from "./shop/Shop";
import { Route, Routes } from "react-router-dom";
import Course from "./shop/course/Course";
import Books from "./shop/books/Books";
import Articles from "./shop/alteicles/Articles";
import Pudcast from "./shop/pudcast/Pudcast";
import Translate from "./shop/translate/Translate";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Question from "./question/Question";
import Teachers from "./teachers/Teachers";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop" element={<Course />} />
      <Route path="/shop/books" element={<Books />} />
      <Route path="/shop/articles" element={<Articles />} />
      <Route path="/shop/pudcast" element={<Pudcast />} />
      <Route path="/shop/translate" element={<Translate />} />
      <Route path="/question" element={<Question />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/teachers" element={<Teachers/>} />
    </Routes>
  );
};

export default Content;
