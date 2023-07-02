import React from 'react'
import PlanterImg from "../../Images/planterImg.png"
import VirtualForest from "../../Images/Screenshot 2023-06-24 at 5.28 1.png"
import Image3 from "../../Images/ZV images.png"

const About = () => {
    return (
        <div
            id="about"
            className="sm:p-10 md:pt-12 md:px-24 sm:p-10  bg-white w-[100vw]"
        >
            <section className="about-us container mx-auto">
                <h2
                    className='"bigHeading pt-1 pb-5 font-bold xl:text-4xl lg:text-3xl md:text-3xl text-2xl lg:leading-[2.5rem] 2xl:leading-[3.7rem]"'
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <span className="text-[#3D4917]" style={{ fontFamily: "Kaisei Opti" }}>
                        {' '}
                        About Us{' '}
                    </span>
                </h2>
                <div
                    style={{ maxWidth: '1200px', margin: 'auto', }}
                    className="flex flex-wrap mb-3"
                >
                    <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
                        <div className="smallHeading text-xl text-[#170F49] pb-2" style={{ fontFamily: "DM Sans" }}>
                            Virtual Forest
                        </div>
                        <p className="text-[#6F6C90] text-lg pb-10" style={{ fontFamily: "DM Sans" }}>
                            Zuraverse is a novel Play-Earn-Conserve model of narrative based Web3 gaming. We are very passionate about nature conservation and thus Virtual Forest would help immensely to establish the PEC model .
                        </p>
                    </div>

                    <div className="lg:w-1/2 pr-4 lg:pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 flex justify-center items-center">
                        <div className='flex justify-center items-center'>

                            <img
                                className=" lg:pl-20 py-8"
                                  src={VirtualForest}
                                style={{ width: '85%' }}
                                alt="Vision Image"
                            />
                        </div>

                    </div>
                </div>
                
                <div
                    style={{ maxWidth: '1200px', margin: 'auto' }}
                    className="flex flex-wrap-reverse items-center justify-center mb-3"
                >
                    <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 flex justify-center items-center">
                        <div className=''>
                            <img
                                className="my-10 lg-pt-10"
                                src={PlanterImg}
                                style={{ width: '90%' }}
                                alt="Mission Image"
                            />
                        </div>

                    </div>

                    <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
                        <h2 className="smallHeading text-xl text-[#170F49]" style={{ fontFamily: "DM Sans" }}>
                            Planters Organizations
                        </h2>
                        <p className="text-[#6F6C90] text-lg pb-10" style={{ fontFamily: "DM Sans" }}>
                            Zuraverse is a novel Play-Earn-Conserve model of narrative based Web3 gaming. We are very passionate about nature conservation and thus Virtual Forest would help immensely to establish the PEC model .
                        </p>


                    </div>
                </div>

                <div
                    style={{ maxWidth: '1200px', margin: 'auto', }}
                    className="flex flex-wrap mb-5 md:mb-0"
                >
                    <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
                        <div className="smallHeading text-xl text-[#170F49] pb-2" style={{ fontFamily: "DM Sans" }}>
                        Zuraverse
                        </div>
                        <p className="text-[#6F6C90] text-lg pb-10" style={{ fontFamily: "DM Sans" }}>
                        Zuraverse is a novel Play-Earn-Conserve model of Web3 gaming. All our games and experiences are being made interoperable and thus Virtual Forest would be an integral part of the ecosystem to establish PEC model. 
                        </p>
                    </div>

                    <div className="lg:w-1/2 pr-4 lg:pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 flex justify-center items-center">
                        <div>

                            <img
                                className=" lg:pl-20 py-8"
                                  src={Image3}
                                style={{ width: '90%' }}
                                alt="Vision Image"
                            />
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default About