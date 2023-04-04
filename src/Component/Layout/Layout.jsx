import React from 'react'
import NavBAr from '../NavBar/NavBAr'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return <>
  <NavBAr/>
  <Outlet></Outlet>
  <Footer/>
  </>
}
