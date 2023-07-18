import React from "react";
import { Card } from "flowbite-react";
import { FaCheckCircle } from "react-icons/fa";

const Subscription = () => {
  return (
    <div className="h-full pb-20">
      <div className="container">
        <h1 className="pt-10">دوره های پر بازدید</h1>
        <div className="gap-5 place-items-center grid grid-cols-3 mt-10">
          <Card className="w-72 shadow-violet-600 shadow-lg col-span-3 lg:col-span-1 hover:scale-x-105 duration-200">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Standard plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl mx-2 font-extrabold tracking-tight">
                49
              </span>
              <span className="ml-1 mx-2 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="my-7 space-y-5">
              <li className="flex space-x-3">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
              <li className="flex space-x-3">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  20GB Cloud storage
                </span>
              </li>
              <li className="flex space-x-3">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  Sketch Files
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  API Access
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  Complete documentation
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  24×7 phone & email support
                </span>
              </li>
            </ul>
            <button
              className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              type="button"
            >
              <p>Choose plan</p>
            </button>
          </Card>
          <Card className="w-72 shadow-violet-600 shadow-lg col-span-3 lg:col-span-1 hover:scale-x-105 duration-200">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Standard plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl mx-2 font-extrabold tracking-tight">
                49
              </span>
              <span className="ml-1 mx-2 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="my-7 space-y-5">
              <li className="flex space-x-3">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
              <li className="flex space-x-3">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  20GB Cloud storage
                </span>
              </li>
              <li className="flex space-x-3">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  Sketch Files
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  API Access
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  Complete documentation
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  24×7 phone & email support
                </span>
              </li>
            </ul>
            <button
              className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              type="button"
            >
              <p>Choose plan</p>
            </button>
          </Card>
          <Card className="w-72 shadow-violet-600 shadow-lg col-span-3 lg:col-span-1 hover:scale-x-105 duration-200">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Standard plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl mx-2 font-extrabold tracking-tight">
                49
              </span>
              <span className="ml-1 mx-2 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="my-7 space-y-5">
              <li className="flex space-x-3">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
              <li className="flex space-x-3">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  20GB Cloud storage
                </span>
              </li>
              <li className="flex space-x-3">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  Sketch Files
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  API Access
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  Complete documentation
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <FaCheckCircle className="mx-2" />
                <span className="text-base font-normal leading-tight text-gray-500">
                  24×7 phone & email support
                </span>
              </li>
            </ul>
            <button
              className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              type="button"
            >
              <p>Choose plan</p>
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
