import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './contextapi/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Home
