import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaInstagram, FaTelegram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Teachers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/teachers').then(res => {
        console.log(res.data.teachers);
        setData(res.data.teachers);
      }).catch(error => {
        console.log(error.message);
      })
    }, []);
    return (
        <div>
            <div className='mt-32 flex justify-center items-center'>
                <div className='grid grid-cols-4'>
                    {
                        Array.isArray(data) ?
                            data.map((d, index) => (
                                <div key={index} className='col-span-4 my-5 md:col-span-2 md:mx-10 md:w-56 lg:w-64 lg:col-span-1 w-72 h-96 shadow-2xl bg-stone-50 rounded-3xl'>
                                    <div className='flex justify-center items-center'>
                                        <img src={"http://localhost:5000/" + d.imageUrl} alt="avatar" className='w-20 rounded-full my-5' />
                                    </div>
                                    <hr />
                                    <div className='flex flex-col justify-end px-5 items-center'>
                                        <h4 className='my-2 font-semibold'>{d.name}</h4>
                                        <h5 className='my-1 font-semibold'>مدرس : {d.course}</h5>
                                    </div>
                                    <div className='flex justify-center items-center mt-5 px-5'>
                                        <a href={d.resume} className='py-2 text-white text-center font-semibold w-full rounded-2xl bg-blue-800'>مشاهده رزومه</a>
                                    </div>
                                    <div className='flex justify-around items-center mt-10 px-5'>
                                        <a href={d.email}><FaEnvelope className='text-2xl text-rose-800' /></a>
                                        <a href={d.instagram}><FaInstagram className='text-2xl text-amber-900' /></a>
                                        <a href={d.telegram}><FaTelegram className='text-2xl text-blue-800' /></a>
                                    </div>
                                </div>

                            )) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Teachers
