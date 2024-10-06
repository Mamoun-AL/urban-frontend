import React, { Component } from 'react'
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx"
import Footer from "./Footer"


export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
    <div className=" flex-grow py-4 px-6  container mx-auto  ">
      <Header />
      <Outlet />
    </div>
      <Footer/>
      </div>
  )
}
