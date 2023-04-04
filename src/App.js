import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/portfolio'
import Layout from './Component/Layout/Layout'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'

let routers=createHashRouter([
  {path:'',element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:'About',element:<About/>},
    {path:'Portfolio',element:<Portfolio/>},
    {path:'Contact',element:<Contact/>},
  ]}
])
export default function App() {
  return <>
      <RouterProvider router={routers}></RouterProvider>
    </>
}

