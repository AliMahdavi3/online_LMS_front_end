import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Course = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses').then(res => {
      console.log(res.data.courses);
      setData(res.data.courses);
    }).catch(error => {
      console.log(error.message);
    })
  }, []);

  return (
    <>
      <h1 className="my-10 font-semibold text-2xl underline text-slate-600">
        دوره ها
      </h1>
      <div className="grid grid-cols-3 gap-5 my-10 mx-5">
        {
          Array.isArray(data) ?
            data.map((d, index) => (
              <div key={index} className="grid col-span-3 md:col-span-1">
                <Card
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={"http://localhost:5000/" + d.imageUrl}
                >
                  <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                    {d.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {d.teacher}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {d.price}
                  </p>
                </Card>
              </div>
            )) : null
        }
      </div>
    </>
  );
};

export default Course;
