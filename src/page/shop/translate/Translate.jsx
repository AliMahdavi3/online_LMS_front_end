import { Button, Card } from "flowbite-react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Translate = () => {
  return (
    <>
      <h1 className="my-10 font-semibold text-2xl underline text-slate-600">
        ترجمه ها
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-10 mx-5">
        <div className="grid col-span-2 md:col-span-1">
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
            <Button className="flex items-center">
              <FaArrowRight className="me-1" />
              <p>Read more</p>
            </Button>
          </Card>
        </div>
        <div className="grid col-span-2 md:col-span-1">
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
            <Button className="flex items-center">
              <FaArrowRight className="me-1" />
              <p>Read more</p>
            </Button>
          </Card>
        </div>
        <div className="grid col-span-2 md:col-span-1">
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
            <Button className="flex items-center">
              <FaArrowRight className="me-1" />
              <p>Read more</p>
            </Button>
          </Card>
        </div>
        <div className="grid col-span-2 md:col-span-1">
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
            <Button className="flex items-center">
              <FaArrowRight className="me-1" />
              <p>Read more</p>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Translate;
