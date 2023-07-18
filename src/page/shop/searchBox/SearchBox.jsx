import { Button } from "flowbite-react";
import React from "react";
import { FaSearch, FaCaretDown, FaShoppingCart } from "react-icons/fa"

const SearchBox = () => {
  return (
    <div className="flex flex-col justify-around mx-3 md:mx-0 md:flex-row items-center py-5 bg-white rounded-xl shadow-lg hover:shadow-xl duration-500">
      <div className="flex flex-col justify-around mx-3 md:mx-0 md:flex-row items-center">
        <div className="flex items-center bg-gray-100 p-4 w-60 sm:w-72 space-x-4 rounded-lg">
          <FaSearch className="me-2 text-gray-500" />
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder="...هرچی میخوای جستجو کن"
          />
        </div>
        <div className="flex my-5 mx-5 items-center rounded-lg text-gray-500 font-semibold cursor-pointer">
          <span className="mx-2">دسته بندی ها</span>
          <FaCaretDown />
        </div>
        <div>
          <Button gradientDuoTone="greenToBlue">جستجو</Button>
        </div>
      </div>
      <div className="shadow-md py-2 px-3 rounded-xl shadow-indigo-700 hover:bg-pink-600 cursor-pointer duration-200 mt-4 md:mt-0 flex items-center justify-center">
        <FaShoppingCart className="font-semibold text-2xl text-indigo-700" />
        <h2 className="mx-2 text-base font-semibold">سبدخرید</h2>
      </div>
    </div>
  );
};

export default SearchBox;
