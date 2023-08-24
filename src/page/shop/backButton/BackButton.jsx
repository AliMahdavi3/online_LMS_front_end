import React from 'react'
import { NavLink } from 'react-router-dom'

const BackButton = () => {
  return (
    <div>
      <button className='py-2 px-3 bg-yellow-600 text-white font-semibold rounded-lg'><NavLink to="/shop">بازگشت</NavLink></button>
    </div>
  )
}

export default BackButton
