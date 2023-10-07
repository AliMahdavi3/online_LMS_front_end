import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import BackButton from "../backButton/BackButton";
import axios from 'axios';

const Translate = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/translates').then(res => {
      console.log(res.data.translates);
      setData(res.data.translates);
    }).catch(error => {
      console.log(error.message);
    })
  }, []);
  return (
    <>
      <div className="mt-32">

        <div className="flex justify-between my-5 mx-10">
          <h1 className="font-semibold text-2xl underline text-slate-600">
            ترجمه ها
          </h1>
          <BackButton />
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 mx-5">
          {
            Array.isArray(data) ?
              data.map((d, index) => (
                <div key={index} className="grid col-span-2 md:col-span-1">
                  <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {d.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {d.author}
                    </p>
                    <Button className="flex items-center">
                      <FaArrowRight className="me-1" />
                      <p>Read more</p>
                    </Button>
                  </Card>
                </div>

              )) : null
          }
        </div>
      </div>
    </>
  );
};

export default Translate;
