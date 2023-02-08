import React from 'react'
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'
export default function IndexTemplate () {
  return (
    <div className='fixed w-full h-[100vh]'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
