import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import BackButton from "../backButton/BackButton";
import axios from "axios";

const Books = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books').then(res => {
      console.log(res.data.books);
      setData(res.data.books);
    }).catch(error => {
      console.log(error.message);
    })
  }, []);
  return (
    <>
      <div className="mt-32">
        <div className="flex justify-between my-5 mx-10">
          <h1 className="font-semibold text-2xl underline text-slate-600">
            کتاب ها
          </h1>
          <BackButton />
        </div>
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
      </div>

    </>
  );
};

export default Books;
