import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import threeTree from "../../../Images/VirtualForestIcon 1.png"
import oneTree from "../../../Images/oneTree1.png"
import threeTree2 from "../../../Images/VirtualForestIcon 2.png"
import speedoMeter from "../../../Images/speedometer.png"

export default function RightBar() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderContent = () => {
        switch (value) {
            case 'one':
                return <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="col-span-1">
                            <div className="bg-[#CEE963] h-32 rounded-lg flex">
                                <div className="py-4 px-2 w-[50%]">
                                    <div className="text-[#3D4917]">Total Trees</div>
                                    <div className="text-[#3D4917] fs-4">137</div>
                                </div>
                                <div className="flex justify-center items-center w-[50%]">
                                    <div style={{ borderRadius: "100%", width: "60px", height: "60px" }} className='bg-white flex justify-center items-center'>
                                        <img src={threeTree} alt="" width="40px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-[#A7F3D0] h-32 rounded-lg flex">
                                <div className="py-4 px-2 w-[50%]">
                                    <div className="text-[#3D4917]">Current Stage</div>
                                    <div className="text-[#3D4917] fs-4">Garden</div>
                                </div>
                                <div className="flex justify-center items-center w-[50%]">
                                    <div style={{ borderRadius: "100%", width: "60px", height: "60px" }} className='bg-white flex justify-center items-center'>
                                        <img src={threeTree} alt="" width="40px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-[#AAED81] h-32 rounded-lg flex">
                                <div className="py-4 px-2 w-[50%]">
                                    <div className="text-[#3D4917]" style={{ fontFamily: "Inter" }}>Next Stage</div>
                                    <div className="text-[#3D4917] fs-4" style={{ fontFamily: "Inter" }}>Orchard</div>
                                    <p className="text-[#3D4917]" style={{ fontFamily: "Inter" }}>263 days to go</p>
                                </div>
                                <div className="flex justify-center items-center w-[50%]">
                                    <div style={{ borderRadius: "100%", width: "60px", height: "60px" }} className='bg-white flex justify-center items-center'>
                                        <img src={threeTree} alt="" width="40px" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="col-span-1">
                            <div className=''>
                                <h3 style={{ fontFamily: "Inter", fontWeight: "550" }} className='text-center text-[#3D4917] fs-4'>Plants Health</h3>
                                <div className="bg-[#ffffff] h-60 rounded-lg flex w-full py-3">
                                    <div className="w-full">
                                        <div className='flex justify-center items-center h-[45%]'>
                                            <img src={speedoMeter} alt="meter" className='h-[90%]' />
                                        </div>
                                        <div style={{ fontWeight: "300", fontFamily: "Inter" }} className="text-[#3D4917] fs-4 text-center">Optium</div>
                                        <div className='flex justify-center mt-4'>
                                            <button style={{ background: "#3D4917", borderRadius: "10px", color: "#ffffff", fontFamily: "Inter" }} className='btn'>Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className=''>
                                <h3 style={{ fontFamily: "Inter", fontWeight: "550" }} className='text-center text-[#3D4917] fs-4'>Collectibles Earned</h3>
                                <div className="bg-[#DEF7E3] h-60 rounded-lg flex w-full py-3 " >
                                    <div className="w-full">
                                        <div className='flex justify-center items-center h-[70%]'>
                                            <img src={oneTree} alt="threeTree" className='h-[100%]' />
                                        </div>

                                        <div style={{ fontWeight: "600", fontFamily: "Inter", marginTop: "12px" }} className="text-[#3D4917] fs-3 text-center">Tree NFT</div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className=''>
                                <h3 style={{ fontFamily: "Inter", fontWeight: "550" }} className='text-center text-[#3D4917] fs-4'>Refi Rewards</h3>
                                <div className="bg-[#AAED81] h-60 rounded-lg flex w-full flex justify-center items-center">
                                    <div className="w-full">
                                        <div style={{ fontWeight: "600", fontFamily: "Inter" }} className="text-[#3D4917] fs-2 text-center">From</div>
                                        <div style={{ fontWeight: "600", fontFamily: "Inter" }} className="text-[#3D4917] fs-2 text-center">Next</div>
                                        <div style={{ fontWeight: "600", fontFamily: "Inter" }} className="text-[#3D4917] fs-2 text-center">Level</div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <div className="bg-[#E6DA4D] h-60 rounded-lg flex w-full py-3">
                                <div className="w-full">
                                    <div style={{ fontWeight: "600", fontFamily: "Inter" }} className="text-[#3D4917] fs-4 text-center">Total</div>
                                    <div style={{ fontWeight: "600", fontFamily: "Inter" }} className="text-[#3D4917] fs-4 text-center">Contribution</div>
                                    <p style={{ fontWeight: "400", fontFamily: "Inter" }} className="text-[#3D4917] fs-5 text-center">Towards Planters</p>
                                    <div style={{ fontWeight: "600", fontFamily: "Inter" }} className="text-[#3D4917] fs-1 text-center">$169</div>
                                    <div className='flex justify-center'>
                                        <button style={{ background: "#3D4917", borderRadius: "10px", color: "#ffffff", fontFamily: "Inter" }} className='btn'>Breakdown</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-[#A7F3D0] h-60 rounded-lg flex w-full py-3 " >
                                <div className="w-full">
                                    <div className='flex justify-center items-center h-[70%]'>
                                        <img src={threeTree2} alt="threeTree" className='h-[100%]' />
                                    </div>

                                    <div style={{ fontWeight: "600", fontFamily: "Inter", marginTop: "12px" }} className="text-[#3D4917] fs-3 text-center">Garden NFT</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            case 'two':
                return <div>Content for Badges</div>;
            case 'three':
                return <div>Content for Friends</div>;
            default:
                return null;
        }
    };

    return (
        <Box sx={{ width: '65%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#3D4917', // Custom indicator color
                    },
                    '& .MuiTab-textColorInherit.Mui-selected': {
                        color: '#3D4917', // Custom text color for selected tab
                    },
                    '& .MuiTab-root': {
                        textTransform: 'capitalize', // Capitalize the button text
                        color: "#3D4917",
                        fontFamily: "Inter",
                        fontWeight: "500",
                        fontSize: "19px",
                        marginRight: "30px"

                    },
                }}
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="My Forest" />
                <Tab value="two" label="Badges" />
                <Tab value="three" label="Friends" />
            </Tabs>
            <div style={{ paddingTop: "30px", paddingRight: "30px" }}>

                {renderContent()}
            </div>
        </Box>
    );
}
