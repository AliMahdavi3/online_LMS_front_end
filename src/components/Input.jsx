import { ErrorMessage, FastField } from 'formik'
import React from 'react'

const Input = ({label, type, name, placeholder, formik}) => {
    return (
        <div>
            <div className="mb-2 block">
                <label htmlFor="email">{label}</label>
            </div>
            <FastField className={`w-full py-2 px-2 border-2 rounded-xl
                       ${formik.errors[name] && formik.touched[name] ? "border-2 border-red-700" : null}`}
                type={type} placeholder={placeholder} name={name} />
            <div className='text-xs text-center text-red-700 mt-2'>
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}

export default Input
