import React from 'react';
import contactImg from "../../Images/backgroundImg.png"
import { TbBrandTelegram } from 'react-icons/tb'

const Contact = () => {
    return (
        <div className="w-[100vw] md:py-10 mx-auto px-4 md:pt-5 md:pb-0 bg-[#DEF7E3]">
            <div className="row pt-5 pb-0">
                <div className="col-md-6 px-4">
                    <h2 className='fs-1' style={{ fontFamily: "Kaisei Opti" }}>Let’s Talk</h2>
                    <p className="mb-5 fs-5" style={{ fontFamily: "Poppins", lineHeight: "25px" }}>Have an interesting idea for conservation, sustainability or gaming? Let’s get in touch and build a better future. </p>
                    <ul className="list-unstyled pl-md-5 mb-5">
                        <div className="d-flex text-black mb-2" style={{ fontFamily: "Poppins", lineHeight: "25px", fontSize: "20px" }}>
                            <div className="mr-3" ><i style={{ color: "#00A642" }} className="fa-solid fa-globe"></i></div> Mumbai, India
                        </div>

                        <div className="d-flex text-black" style={{ fontFamily: "Poppins", lineHeight: "25px", fontSize: "20px" }}>
                            <div className="mr-3"><i style={{ color: "#00A642" }} className="fa-solid fa-envelope"></i></div> Sagar@zuraverse.xyz
                        </div>
                    </ul>
                    <div className="flex justify-start pt-0 gap-4 socials">

                        <div className="relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block"><a target="_blank" >
                                <i className="social-links fa-solid fa-envelope text-white bg-[#00A642] rounded-full leading-4 p-2 h-8 w-8"></i>
                            </a></span>
                        </div>
                        <div className="relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block"><a target="_blank" >
                                <i className="social-links fa-brands fa-facebook text-white bg-[#00A642] rounded-full leading-4 p-2 h-8 w-8"></i>
                            </a></span>
                        </div>
                        <div className="relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block"><a target="_blank" >
                                <i className="social-links fa-brands fa-linkedin text-white bg-[#00A642] rounded-full leading-4 p-2 h-8 w-8"></i>
                            </a></span>
                        </div>
                        <div className="relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block"><a target="_blank" >
                                <i className="social-links fa-brands fa-reddit text-white bg-[#00A642] rounded-full leading-4 p-2 h-8 w-8"></i>
                            </a></span>
                        </div>
                        
                        <div className="relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block">
                                <a target="_blank" >
                                    <TbBrandTelegram className="social-links text-white bg-[#00A642] rounded-full leading-4 p-2 h-8 w-8" />
                                </a>
                            </span>
                        </div>

                    </div>
                </div>
                <div className="col-md-6 px-4">
                    <form className="mb-5" method="post" id="contactForm" name="contactForm" noValidate>
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <label style={{ fontFamily: "Poppins" }} htmlFor="name" className="col-form-label">Name</label>
                                <input style={{ fontFamily: "Poppins" }} type="text" className="form-control" name="name" id="name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <label style={{ fontFamily: "Poppins" }} htmlFor="email" className="col-form-label">Email</label>
                                <input style={{ fontFamily: "Poppins" }} type="text" className="form-control" name="email" id="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <label style={{ fontFamily: "Poppins" }} htmlFor="project" className="col-form-label">What topic are you interested in</label>
                                <input style={{ fontFamily: "Poppins" }} type="text" className="form-control" name="project" id="project" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <label style={{ fontFamily: "Poppins" }} htmlFor="message" className="col-form-label">Message</label>
                                <textarea style={{ fontFamily: "Poppins" }} className="form-control" name="message" id="message" cols="30" rows="4"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <button style={{ fontFamily: "Poppins" }} type="submit" className="contactBtn btn my-4 btn-dark rounded-0 py-2 px-4 w-full" >Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact