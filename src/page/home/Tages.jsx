import React from "react";

const Tages = () => {
  return (
    <div className="w-screen mt-24 lg:-mt-5 lg:w-80">
      <div className="flex hover:scale-110 duration-300 my-5 py-3 px-4 shadow-2xl background font-semibold text-blue-900 rounded-xl justify-between items-center">
        <div className="text-center ms-10">
          <a href="#" className="block mb-2">
            آموزش رایگان
          </a>
          <span className="text-xs">آموزش های رایگان وبسایت</span>
        </div>
        <img src="./assets/image/list.png" className="w-20" alt="" />
      </div>
      <div className="flex hover:scale-110 duration-300 my-5 py-3 px-4 shadow-2xl background font-semibold text-amber-900 rounded-xl justify-between items-center">
        <div className="text-center ms-10">
          <a href="#" className="block mb-2">
            نقشه راه
          </a>
          <span className="text-xs">مسیرت رو مشخص کن</span>
        </div>
        <img src="./assets/image/list-2.png" className="w-20" alt="" />
      </div>
      <div className="flex hover:scale-110 duration-300 my-5 py-3 px-4 shadow-2xl background font-semibold text-fuchsia-900 rounded-xl justify-between items-center">
        <div className="text-center ms-10">
          <a href="#" className="block mb-2">
            پرسش و پاسخ
          </a>
          <span className="text-xs">با دیگران در تعامل باش</span>
        </div>
        <img src="./assets/image/list-3.png" className="w-20" alt="" />
      </div>
      <div className="flex hover:scale-110 duration-300 my-5 py-3 px-4 shadow-2xl background font-semibold text-teal-900 rounded-xl justify-between items-center">
        <div className="text-center ms-10">
          <a href="#" className="block mb-2">
            ترجمه ها
          </a>
          <span className="text-xs">دروس و مقالات ترجمه شده</span>
        </div>
        <img src="./assets/image/list-1.png" className="w-20" alt="" />
      </div>
    </div>
  );
};

export default Tages;
