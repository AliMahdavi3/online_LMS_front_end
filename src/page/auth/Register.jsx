import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'

const Register = () => {
    return (
        <div className='mt-28 md:px-20 lg:px-56 flex justify-center items-center'>
            <div className='w-full h-full bg-slate-50 rounded-3xl shadow-md shadow-teal-800 grid grid-cols-2'>
                <div className='col-span-2 md:col-span-1 border-e-8'>

                    <form className="flex mt-10 px-5 max-w-md flex-col gap-4">
                        <h4 className='text-center font-semibold'>ثبت نام</h4>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email2"
                                    value="ایمیل"
                                />
                            </div>
                            <TextInput
                                id="email2"
                                placeholder="example@gmail.com"
                                required
                                shadow
                                type="email"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password2"
                                    value="رمز عبور"
                                />
                            </div>
                            <TextInput
                                id="password2"
                                required
                                shadow
                                type="password"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="repeat-password"
                                    value="تکرار رمز عبور"
                                />
                            </div>
                            <TextInput
                                id="repeat-password"
                                required
                                shadow
                                type="password"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="agree" />
                            <Label
                                className="flex"
                                htmlFor="agree"
                            >
                                <p>
                                    با قوانین و مقررات وبسایت موافقم
                                </p>

                            </Label>
                        </div>
                        <Button className='bg-cyan-900' type="submit">
                            ورود
                        </Button>


                    </form>
                    <div className='flex flex-col text-center text-base'>
                        <a href="login" className='my-5 font-semibold text-blue-800 underline'>قبلا ثبت نام کرده اید؟</a>
                    </div>

                </div>
                <div className='hidden md:col-span-1 my-10 md:flex justify-center'>
                    <img src="/assets/image/mult (6).jpg" className='w-60 h-60 my-auto border-8 border-emerald-300 rounded-full' alt="login" />
                </div>
            </div>
        </div>
    )
}

export default Register
