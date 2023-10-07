import React, { useState } from "react";
import { FaAlignJustify, FaWindowClose } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
let Links = [
  { name: "فروشگاه", src: "/shop" },
  { name: "پرسش و پاسخ", src: "/question" },
  { name: "مدرسین", src: "/teachers" },
  { name: "بلاگ", src: "/" },
];
const MainNavbar = () => {
  let [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const loginToken = JSON.parse(localStorage.getItem('Token'));

  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate('/login');
  }

  return (
    <div className="shadow-md w-full z-50 fixed navbar top-0 left-0">
      <div className="md:flex items-center navbar justify-between bg-cyan-900 py-2 md:px-10 px-7">

        {/* logo section */}

        <div className="font-bold text-2xl bg-cyan-900 cursor-pointer flex justify-end gap-1">
          <a href="/" className="text-blue-400 text-2xl font-extrabold">
            <img src="/assets/image/lms.png" alt="lms" className="w-20" />
          </a>
        </div>

        {/* Menu icon */}

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-10 text-2xl cursor-pointer md:hidden w-7 h-7"
        >
          {open ? (
            <FaWindowClose className="text-red-700" />
          ) : (
            <FaAlignJustify className="text-yellow-400" />
          )}
        </div>

        {/* linke items */}

        <ul
          className={`md:flex -mr-7 mt-6 md:mt-0 md:mr-0
           md:items-center md:pb-0 pb-12 absolute md:static
            bg-cyan-900 w-full md:w-auto md:pl-0 transition-all duration-700 ease-in ${open ? "top-14" : "top-[-490px]"
            }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="text-center md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.src}
                className="text-white hover:text-blue-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex  justify-center">
            {
              loginToken ? (

                <button onClick={handleLogout} className="btn text-center cursor-pointer w-20 pb-2 
            rounded-full bg-white hover:bg-slate-400
             text-black md:ml-8 font-semibold px-3 py-1 duration-300 md:static">
                  خروج
                </button>
              ) : (

                <a href="login" className="btn text-center cursor-pointer w-20 pb-2 
            rounded-full bg-white hover:bg-slate-400
             text-black md:ml-8 font-semibold px-3 py-1 duration-300 md:static">
                  ورود
                </a>
              )
            }

          </div>
        </ul>
      </div>
    </div>
  );
};

export default MainNavbar;
