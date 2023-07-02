import React from 'react'
import backgroundImg from "../../Images/backgroundImg.png"
import RightBar from './UserProfile/RightBar'
import Sidebar from './UserProfile/sidebar'
import userImg from "../../Images/demo.svg"

const UserProfile = () => {
    return (
        <>
            <div style={{ position: "relative" }}>
                <div style={{ width: "100%" }}>
                    <img src={backgroundImg} alt="" style={{ width: "100%" }} />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Sidebar />
                <div style={{ display: "flex", justifyContent: "space-between" }} className='w-full'>
                    <div>
                        <img src={userImg} alt="" style={{ position: "relative", top: "-25%" }} className='demoImg w-70 hidden md:block' />
                    </div>
                    <RightBar />
                </div>

            </div>


        </>
    )
}

export default UserProfile