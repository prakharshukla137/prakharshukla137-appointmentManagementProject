import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';


export default function App() {
  return (
    <div>
       <CookiesProvider>
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
        </CookiesProvider>
    </div>
  )
}
