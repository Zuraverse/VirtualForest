import  React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import seedBtn from "../Images/Seed Button.png"
import icon1 from "../Images/image 1.svg"
import upIcon from "../Images/up.png"
import downIcon from "../Images/down.png"

export default function BuySeedPopup({ open2, setOpen2 }) {
    const [quantity,setQuantity] = useState(0)

    const handleUp =()=>{
        setQuantity(quantity+1)
    }
    const handleDown =()=>{
        if(quantity>0){
            setQuantity(quantity-1)
        }
    }
    return (
        <div>
            <Dialog open={open2} onClose={() => setOpen2(false)} style={{ zIndex: "10001", fontFamily: "Inter" }}>
                <div className='py-2 px-2' style={{ background: "#3D4917" }}>
                    <div className='popupCrossBtn flex justify-center items-center' onClick={() => setOpen2(false)} style={{ width: "20px", height: "20px", borderRadius: "100%", background: "#F67777", cursor: "pointer" }}>
                        <i className="fa-solid fa-xmark" style={{ color: "#3D4917", visibility: "hidden" }}></i>
                    </div>
                </div>
                <div className='bg-white text-[#3D4917] flex flex-col justify-center px-5'>
                    <div className='text-center fs-4 my-1'>Seed Pouch</div>
                    <div className='flex justify-center mb-1'>
                        <img src={seedBtn} alt="seedBtn" className='w-[80px]' />
                    </div>
                    <div className='text-center mb-3 mt-1' style={{ fontWeight: "540" }}> Let’s you plant additional seeds </div>
                    <div className='text-center flex gap-3'>
                        <div>No. of seeds</div>
                        <div className='flex gap-1'>
                            <div>
                                <input type="text" style={{background:"#DEF7E3",color:"#3D4917",width:"50px",border:"1px solid #3D4917",textAlign:"center"}} value={quantity}  disabled/>
                            </div>
                            <div>
                                <div className='bg-[#DEF7E3] h-50 flex justify-center items-center cursor-pointer' style={{border:"1px solid #3D4917"}} onClick={handleUp}>
                                    <img src={upIcon} alt="upIcon" />
                                </div>
                                <div className='bg-[#DEF7E3] h-50 flex justify-center items-center cursor-pointer' style={{border:"1px solid #3D4917"}} onClick={handleDown}>
                                    <img src={downIcon} alt="downIcon" />
                                </div>
                            </div>
                        </div>
                        {/* <input type="number" min="0" max="100" step="5" value="50" style={{backgroundColor: "#DEF7E3", color: "#ffffff"}}/> */}

                    </div>
                    <div className='flex justify-center items-center gap-3 mb-3 mt-2'>
                        <div className='text-center'>Total Amount: $5</div>
                        <div className='flex justify-center'>
                            <button style={{ background: "#3D4917", color: "#ffffff", fontWeight: "600" }} className='btn btn-sm px-3' >Pay <img style={{ display: "inline" }} src={icon1} alt="" /></button>
                        </div>
                    </div>

                </div>
            </Dialog>
        </div>
    );
}