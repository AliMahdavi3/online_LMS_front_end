import React, { useState } from 'react'
import { Button, Checkbox, Label } from 'flowbite-react'
import { Form, Formik } from 'formik'
import FormikControl from '../../components/FormikControl';
import { initialValues, onSubmit, validationSchema } from './core/signupCore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [registered, setRegistered] = useState(false);
    const navigate = useNavigate();

    return (

        <Formik
            initialValues={initialValues}
            onSubmit={(values, action) => onSubmit(values, action, setRegistered, navigate)}
            validationSchema={validationSchema}
        >
            {
                formik => {
                    return (

                        <div className='mt-28 md:px-20 lg:px-56 flex justify-center items-center'>
                            <div className='w-full h-full bg-slate-50 rounded-3xl shadow-md shadow-teal-800 grid grid-cols-2'>
                                <div className='col-span-2 md:col-span-1 border-e-8'>

                                    <Form className="flex mt-10 px-5 max-w-md flex-col gap-4">
                                        <h4 className='text-center font-semibold'>ثبت نام</h4>

                                        <FormikControl
                                            formik={formik}
                                            control='input'
                                            type='text'
                                            name='name'
                                            label='نام کاربری'
                                        />

                                        <FormikControl
                                            formik={formik}
                                            control='input'
                                            type='email'
                                            name='email'
                                            placeholder='example@gmail.com'
                                            label='ایمیل'
                                        />

                                        <FormikControl
                                            formik={formik}
                                            control='input'
                                            type='password'
                                            name='password'
                                            label='رمز عبور'
                                        />


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
                                            ثبت نام
                                        </Button>
                                    </Form>
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
            }
        </Formik >
    )
}

export default Register
