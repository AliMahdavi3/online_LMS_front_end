import React from 'react'
import MainNavbar from './navbar/MainNavbar'
import Content from '../page/Content'

const Index = () => {
  return (
    <div>
        <MainNavbar/>
        <section className='content_section'>
          <Content/>
        </section>
    </div>
  )
}

export default Index