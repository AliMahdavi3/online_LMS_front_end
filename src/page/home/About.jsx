import React from "react";
import { Button } from "flowbite-react";

const About = () => {
  return (
    <div className="flex lg:mt-12 shadow-sky-900 shadow-xl rounded-3xl container justify-center items-center w-full h-full">
      <div className="grid grid-cols-2">
        <div className="col-span-2 items-center flex justify-center md:col-span-1">
          <img
            className="w-10/12 rounded-xl shadow-2xl hover:scale-110 duration-200"
            src="./assets/image/team-job.jpg"
            alt="lms"
          />
        </div>
        <div className="flex flex-col items-center col-span-2 md:col-span-1">
          <div className="w-full lg:px-10 lg:mt-20">
            <h4 className="text-center font-semibold text-2xl py-3">درباره ما</h4>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              impedit adipisci odit nisi voluptates aperiam in quasi unde et
              officiis culpa tempore similique corrupti modi at, aut explicabo
              consectetur. Rem corporis est corrupti temporibus laudantium nulla
              perferendis vel totam animi! Culpa hic debitis esse! Autem!
              consectetur adipisicing elit. Ducimus impedit adipisci odit nisi
              voluptates aperiam in quasi unde et officiis culpa tempore
              similique corrupti modi at, aut explicabo consectetur. Rem
              corporis est corrupti temporibus laudantium nulla perferendis vel
              totam animi! Culpa hic debitis esse! Autem!
            </p>
          </div>
          <div className="mt-5 pb-5">
            <Button className="bg-cyan-600">بیشتر بدانید</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
