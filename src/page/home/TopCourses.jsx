import React from "react";
import { Button, Card } from "flowbite-react";

const TopCourses = () => {
  return (
    <div className="h-full pb-20">
      <div className="container">
        <h1 className="pt-10 font-semibold text-2xl underline text-yellow-700">دوره های پر بازدید</h1>
        <div className="gap-5 place-items-center grid grid-cols-3 mt-10">
          <Card
            className="w-72 shadow-violet-600 shadow-lg col-span-3 lg:col-span-1 hover:scale-x-105 duration-200"
            // imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./assets/image/team-job.jpg"
          >
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
            <Button className="bg-cyan-600">view</Button>
          </Card>
          <Card
            className="w-72 shadow-violet-600 shadow-lg col-span-3 lg:col-span-1 hover:scale-x-105 duration-200"
            // imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./assets/image/team-job.jpg"
          >
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
            <Button className="bg-cyan-600">view</Button>
          </Card>
          <Card
            className="w-72 shadow-violet-600 shadow-lg col-span-3 lg:col-span-1 hover:scale-x-105 duration-200"
            // imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./assets/image/team-job.jpg"
          >
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
            <Button className="bg-cyan-600">view</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
