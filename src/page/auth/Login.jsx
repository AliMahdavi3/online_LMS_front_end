import { Button, Checkbox, Label } from 'flowbite-react'
import { Form, Formik } from 'formik'
import React from 'react'
import FormikControl from '../../components/FormikControl';
import { initialValues, onSubmit, validationSchema } from './core/loginCore';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => onSubmit(values, action, navigate)}
      validationSchema={validationSchema}
    >
      {
        formik => {
          return (
            <div className='mt-28 md:px-20 lg:px-56 flex justify-center items-center'>
              <div className='w-full h-full py-5 bg-slate-50 rounded-3xl shadow-md shadow-teal-800 grid grid-cols-2'>
                <div className='col-span-2 md:col-span-1 border-e-8'>

                  <Form className="flex mt-10 px-5 max-w-md flex-col gap-4">
                    <h4 className='text-center font-semibold'>ورود</h4>

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
                          مرا به خاطر بسپار
                        </p>

                      </Label>
                    </div>
                    <Button className='bg-cyan-900' type="submit">
                      ورود
                    </Button>


                  </Form>
                  <div className='flex flex-col text-center text-base'>
                    <a href="#" className='mt-3'>رمز عبور را فراموش کرده اید؟</a>
                    <a href="register" className='my-2 font-semibold text-blue-800 underline'>ثبت نام نکرده اید؟</a>
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
    </Formik>
  )
}

export default Login
