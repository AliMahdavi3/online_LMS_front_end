import { Card } from "flowbite-react";
import React from "react";
import BackButton from "../backButton/BackButton";

const Books = () => {
  return (
    <>
      <div className="mt-32">
        <div className="flex justify-between my-5 mx-10">
          <h1 className="font-semibold text-2xl underline text-slate-600">
            کتاب ها
          </h1>
          <BackButton/>
        </div>
        <div className="grid grid-cols-3 gap-5 my-10 mx-5">
          <div className="grid col-span-3 md:col-span-1">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/assets/image/team-job.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          <div className="grid col-span-3 md:col-span-1">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/assets/image/team-job.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          <div className="grid col-span-3 md:col-span-1">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/assets/image/team-job.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          <div className="grid col-span-3 md:col-span-1">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/assets/image/team-job.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          <div className="grid col-span-3 md:col-span-1">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/assets/image/team-job.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          <div className="grid col-span-3 md:col-span-1">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/assets/image/team-job.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
      </div>

    </>
  );
};

export default Books;
