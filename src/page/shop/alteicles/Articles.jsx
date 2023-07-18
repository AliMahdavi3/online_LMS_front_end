import { Card } from "flowbite-react";
import React from "react";

const Articles = () => {
  return (
    <>
      <h1 className="my-10 font-semibold text-2xl underline text-slate-600">
        مقالات
      </h1>
      <div className="grid grid-cols-2 gap-5 mx-5">
        <div className="grid col-span-2 md:col-span-1">
          <Card horizontal imgSrc="./assets/image/team-job.jpg">
            <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
          </Card>
        </div>
        <div className="grid col-span-2 md:col-span-1">
          <Card horizontal imgSrc="./assets/image/team-job.jpg">
            <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
          </Card>
        </div>
        <div className="grid col-span-2 md:col-span-1">
          <Card horizontal imgSrc="./assets/image/team-job.jpg">
            <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
          </Card>
        </div>
        <div className="grid col-span-2 md:col-span-1">
          <Card horizontal imgSrc="./assets/image/team-job.jpg">
            <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Articles;
