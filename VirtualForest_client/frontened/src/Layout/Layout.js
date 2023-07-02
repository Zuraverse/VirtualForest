
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../Components/Navbar"


const Layout = () => {
   
    return (
        <>
            <Navbar  outlet={<Outlet/>}/>
        </>

    )
}

export default Layout
