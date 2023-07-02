
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../Components/Navbar"


const UserProfileLayout = () => {
   
    return (
        <>
            <Navbar outlet={<Outlet/>}/>
           
        </>

    )
}

export default UserProfileLayout
