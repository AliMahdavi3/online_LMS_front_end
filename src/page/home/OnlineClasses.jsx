import React from "react";
import { Button } from "flowbite-react";

const OnlineClasses = () => {
  return (
    <div className="h-full">
      <div className="container shadow-lg shadow-sky-800 rounded-3xl">
        <h1 className="pt-10 font-semibold ms-10 text-2xl underline text-purple-700">کلاس آنلاین</h1>
        <div className="lg:px-10 grid grid-cols-2">
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <div className="w-full lg:px-5 lg:mt-10">
              <h4 className="text-center pt-5">about</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                impedit adipisci odit nisi voluptates aperiam in quasi unde et
                officiis culpa tempore similique corrupti modi at, aut explicabo
                consectetur. Rem corporis est corrupti temporibus laudantium
                nulla perferendis vel totam animi! Culpa hic debitis esse!
                Autem! consectetur adipisicing elit. Ducimus impedit adipisci
                odit nisi voluptates aperiam in quasi unde et officiis culpa
                tempore similique corrupti modi at, aut explicabo consectetur.
                Rem corporis est corrupti temporibus laudantium nulla
                perferendis vel totam animi! Culpa hic debitis esse! Autem!
              </p>
            </div>
            <div className="mt-5 pb-5">
              <Button className="bg-cyan-600">شروع کلاس</Button>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <img
              className="mt-20 w-full rounded-3xl  shadow-slate-500 shadow-xl hover:scale-110 duration-200"
              src="./assets/image/team-job.jpg"
              alt="lms"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineClasses;
