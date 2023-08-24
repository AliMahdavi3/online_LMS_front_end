import React from 'react'
import HomeFooter from './HomeFooter'
import { FaMobile } from 'react-icons/fa'

const RoadMap = () => {
    return (
        <section>
            <div className='mt-32'>
                <div className='px-10'>
                    <div className="w-full h-full bg-slate-100 rounded-3xl shadow-lg my-10">
                        <div className='px-5 md:px-10'>
                            <h1 className='md:text-2xl font-semibold pt-10'>موضوعات ویژه</h1>
                            <h4 className='md:text-md text-gray-700'>موضوع مورد نظرت رو انتخاب کن</h4>
                            <hr className='my-10'/>
                            <div className='flex border-b-2 mt-10 border-black justify-start items-center'>
                                <div className='mb-10'>
                                    <img src="/assets/image/road/road (3).png" alt="road" className='w-14' />
                                </div>
                                <div className='md:text-2xl mx-3 md:mx-16 mb-10'>
                                    <a className='font-medium text-gray-700' href="#">نقشه راه یادگیری برنامه نویسی موبایل</a>
                                    <p className='font-medium text-gray-700 md:text-xl'>مدرس : سیدعلی مهدوی</p>
                                </div>
                            </div>
                            <div className='flex border-b-2 mt-10 border-black justify-start items-center'>
                                <div className='mb-10'>
                                    <img src="/assets/image/road/road (4).png" alt="road" className='w-14' />
                                </div>
                                <div className='md:text-2xl mx-3 md:mx-16 mb-10'>
                                    <a className='font-medium text-gray-700' href="#">نقشه راه یادگیری برنامه نویسی وب</a>
                                    <p className='font-medium text-gray-700 md:text-xl'>مدرس : سیدعلی مهدوی</p>
                                </div>
                            </div>
                            <div className='flex border-b-2 mt-10 border-black justify-start items-center'>
                                <div className='mb-10'>
                                    <img src="/assets/image/road/road (2).png" alt="road" className='w-14' />
                                </div>
                                <div className='md:text-2xl mx-3 md:mx-16 mb-10'>
                                    <a className='font-medium text-gray-700' href="#">نقشه راه یادگیری برنامه نویسی بک اند</a>
                                    <p className='font-medium text-gray-700 md:text-xl'>مدرس : سیدعلی مهدوی</p>
                                </div>
                            </div>
                            <div className='flex border-b-2 mt-10 border-black justify-start items-center'>
                                <div className='mb-10'>
                                    <img src="/assets/image/road/road (5).png" alt="road" className='w-14' />
                                </div>
                                <div className='md:text-2xl mx-3 md:mx-16 mb-10'>
                                    <a className='font-medium text-gray-700' href="#">نقشه راه یادگیری برنامه نویسی فرانت اند</a>
                                    <p className='font-medium text-gray-700 md:text-xl'>مدرس : سیدعلی مهدوی</p>
                                </div>
                            </div>
                            <div className='flex border-b-2 mt-10 border-black justify-start items-center'>
                                <div className='mb-10'>
                                    <img src="/assets/image/road/road (1).png" alt="road" className='w-14' />
                                </div>
                                <div className='md:text-2xl mx-3 md:mx-16 mb-10'>
                                    <a className='font-medium text-gray-700' href="#">نقشه راه یادگیری برنامه نویسی سئو (S.E.O)</a>
                                    <p className='font-medium text-gray-700 md:text-xl'>مدرس : سیدعلی مهدوی</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomeFooter />
        </section>
    )
}

export default RoadMap
