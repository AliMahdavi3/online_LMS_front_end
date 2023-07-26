import { Pagination } from 'flowbite-react';
import React, { useState } from 'react'
import { FaQuestion, FaHome, FaBuffer } from "react-icons/fa";
import HomeFooter from '../home/HomeFooter';

const Question = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = () => setCurrentPage();
  return (
    <div>
        <div className='px-10 mt-32 mb-10'>
            <div className='grid grid-cols-3 gap-5'>
                <div className='col-span-1 w-full rounded-3xl h-full bg-white shadow-xl'>
                    <ul className='px-10 font-semibold'>
                        <li className='py-5 flex items-center'><FaHome className='me-2'/><a href="#">خانه</a></li>
                        <li className='py-5 flex items-center'><FaQuestion className='me-2'/><a href="#">سوالات</a></li>
                        <li className='py-5 flex items-center'><FaBuffer className='me-2'/><a href="#">تگ ها</a></li>
                    </ul>
                    <hr />
                    <h1 className='text-center my-5 font-semibold'>پر تکرار ترین سوالات</h1>
                    <ul className='px-10'>
                        <li className='my-5 py-3 px-3 shadow-md rounded-xl'>
                            <a href="#">Lorem ipsum dolor sit amet.</a>
                            <div className='flex justify-between items-center text-xs my-3'>
                                <p className='flex items-center'><FaQuestion className='mx-2'/>123,000</p>
                                <p>12/11/1400</p>
                            </div>
                        </li>
                        <li className='my-5 py-3 px-3 shadow-md rounded-xl'>
                            <a href="#">Lorem ipsum dolor sit amet.</a>
                            <div className='flex justify-between items-center text-xs my-3'>
                                <p className='flex items-center'><FaQuestion className='mx-2'/>123,000</p>
                                <p>12/11/1400</p>
                            </div>
                        </li>
                        <li className='my-5 py-3 px-3 shadow-md rounded-xl'>
                            <a href="#">Lorem ipsum dolor sit amet.</a>
                            <div className='flex justify-between items-center text-xs my-3'>
                                <p className='flex items-center'><FaQuestion className='mx-2'/>123,000</p>
                                <p>12/11/1400</p>
                            </div>
                        </li>
                        <li className='my-5 py-3 px-3 shadow-md rounded-xl'>
                            <a href="#">Lorem ipsum dolor sit amet.</a>
                            <div className='flex justify-between items-center text-xs my-3'>
                                <p className='flex items-center'><FaQuestion className='mx-2'/>123,000</p>
                                <p>12/11/1400</p>
                            </div>
                        </li>
                        <li className='my-5 py-3 px-3 shadow-md rounded-xl'>
                            <a href="#">Lorem ipsum dolor sit amet.</a>
                            <div className='flex justify-between items-center text-xs my-3'>
                                <p className='flex items-center'><FaQuestion className='mx-2'/>123,000</p>
                                <p>12/11/1400</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='col-span-2 px-10 w-full rounded-3xl h-full bg-white shadow-xl'>
                    <div className='flex my-5 justify-between'>
                        <button>همه سوالات</button>
                        <button className='py-2 px-3 bg-teal-700 text-white rounded-xl'>پرسش سوال</button>
                    </div>
                    <hr />
                    <div className='my-5'>
                        <h1>2100 سوال</h1>
                    </div>
                    <div className='mt-32 mb-10'>
                        <button className='py-2 px-3 bg-cyan-700 text-white rounded-xl'>فیلتر</button>
                    </div>
                    <hr />
                    <div className='grid grid-cols-3 my-5 border-b-2'>
                        <div className='col-span-1'>پاسخ 0</div>
                        <div className='col-span-2'>
                            <a className='my-3 py-1 px-3 bg-teal-900 text-white rounded-lg' href="#">پایتون</a>
                            <p className='my-10'>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit.
                            </p>
                            <div className='flex justify-between items-center'>
                                <button href="#" className='py-2 my-3 rounded-xl px-3 bg-purple-200'>پایتون</button>
                                <p className='my-3'>12/11/1400</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 my-5 border-b-2'>
                        <div className='col-span-1'>پاسخ 0</div>
                        <div className='col-span-2'>
                            <a className='my-3 py-1 px-3 bg-teal-900 text-white rounded-lg' href="#">پایتون</a>
                            <p className='my-10'>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit.
                            </p>
                            <div className='flex justify-between items-center'>
                                <button href="#" className='py-2 my-3 rounded-xl px-3 bg-purple-200'>پایتون</button>
                                <p className='my-3'>12/11/1400</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 my-5 border-b-2'>
                        <div className='col-span-1'>پاسخ 0</div>
                        <div className='col-span-2'>
                            <a className='my-3 py-1 px-3 bg-teal-900 text-white rounded-lg' href="#">پایتون</a>
                            <p className='my-10'>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit.
                            </p>
                            <div className='flex justify-between items-center'>
                                <button href="#" className='py-2 my-3 rounded-xl px-3 bg-purple-200'>پایتون</button>
                                <p className='my-3'>12/11/1400</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-5'>
                <Pagination
                dir='ltr'
                currentPage={1}
                onPageChange={page=>{setCurrentPage(page)}}
                totalPages={100}
                />
            </div>
        </div>
        <HomeFooter/>
    </div>
  )
}

export default Question
