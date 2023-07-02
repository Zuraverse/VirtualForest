import { useJsApiLoader } from "@react-google-maps/api";
import Map from "../Components/Map/Map";
import { mapOptions } from "../Components/Map/MapConfiguration";
import SeedBag from "../Images/Seed Bag Image.png"
import Water from "../Images/water-drop 1.png"
import Compost from "../Images/compost 1.png"
import Seeds from "../Images/seeds 1.png"
import Ad from "../Images/ads1.png"
import Seed1 from "../Images/seed 8.png"
import Tree from "../Images/tree 2.png";
import Sprout from "../Images/sprout 1.png";
import compost2 from "../Images/compost 2.png"
import upcomingTree from "../Images/TreeNFT.gif"
import { useEffect, useState } from "react";
import BuySeedPopup from "./buySeedPopup";
import ManureSeedPopup from "./ManureSeedPopup";
// import MintButton from "../Components/Demo";



const Home = () => {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  const handleSeedBuy = ()=>{
    setOpen2(true)
  }
  const handleCompostBuy = ()=>{
    setOpen(true)
  }

  return (
    <>
    <BuySeedPopup open2={open2} setOpen2={setOpen2}/>
    <ManureSeedPopup open={open} setOpen={setOpen}/>
    {/* <MintButton/> */}
      <Map isLoaded={isLoaded} />
      
      <div className="p-2 w-[100vw] bg-[#DEF7E3]">
      <div className="flex flex-wrap bg-[#DEF7E3] gap-y-4">
        <div className="w-1/2  lg:w-1/6 xl:w-1/6">
          <div style={{ fontWeight: "400", fontFamily: "Inter" }} className="flex items-center ">Seed Bags <span style={{ fontWeight: "200", fontSize: "10px" }}>( Refill Everyday)</span></div>
          <div className="flex gap-3 items-center ">
            <div  style={{ borderRadius: "100%" }} className="bg-[#E6DA4D] w-[50px] h-[50px] flex justify-center items-center p-2 cursor-pointer">
              <img src={SeedBag} alt="" className="w-[100%]" />
            </div>
            <div style={{ fontFamily: "Inter" }}>Total : 1</div>
          </div>
        </div>
        <div className="w-1/2  lg:w-1/6 xl:w-1/6">
          <div style={{ fontWeight: "400" }} className="flex items-center ">Water <span style={{ fontWeight: "200", fontSize: "10px" }}>(Unlimited)</span></div>
          <div className="flex gap-3 items-center ">
            <div style={{ borderRadius: "100%" }} className="bg-[#387E9D] w-[50px] h-[50px] flex justify-center items-center p-2 cursor-pointer">
              <img src={Water} alt="" className="w-[100%]" />
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#3D4917", fontFamily: "Inter", fontWeight: "400" }}>Needed</div>
              <div style={{ fontSize: "12px", color: "#3D4917", fontFamily: "Inter", fontWeight: "400" }}>Everyday</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-full  lg:w-2/6 xl:w-2/6">
          <div style={{ fontWeight: "400", fontFamily: "Inter" }} className="flex items-center ">Manure <span style={{ fontWeight: "200", fontSize: "10px" }}>(Speed up growth)</span></div>
          <div className="flex gap-3 items-center ">
            <div style={{ borderRadius: "100%" }} className="bg-[#D09951] w-[50px] h-[50px] p-2 flex justify-center items-center cursor-pointer" onClick={()=>handleCompostBuy()}>
              <img src={Compost} alt="" className="w-[100%]" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <div style={{ fontFamily: "Inter" }}>Total : 1</div>
              <div className="flex flex-col sm:justify-center sm:items-center">
                <div className="sm:ml-5">
                  <button style={{ background: "#00A642", borderRadius: "7px", color: "#ffffff", padding: "2px 12px" }} className="btn" onClick={()=>handleCompostBuy()}>Buy Now</button>
                  <button style={{ background: "#3D4917", borderRadius: "7px", color: "#ffffff", padding: "2px 12px" }} className="btn ml-3">Watch Ad</button>
                </div>
                <div style={{ color: "#224E34", fontSize: "12px" }} className="sm:pl-5">Proceeds go to Planters Organization</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-full  lg:w-2/6 xl:w-2/6 bg-[#75D63A] p-3">
          <div className="flex gap-3 items-center ">
            <div style={{ borderRadius: "100%" }} className="bg-[#387E9D] w-[50px] h-[50px] p-2 flex justify-center items-center ">
              <img src={Seeds} alt="" className="w-[100%]" />
            </div>
            <div className="flex sm:items-center flex-col sm:flex-row">
              <div>
                <div style={{ fontSize: "12px", color: "#3D4917", fontFamily: "Inter", fontWeight: "400" }}>Get Extra and Rare Seeds</div>
                <div style={{ fontSize: "12px", color: "#3D4917", fontFamily: "Inter", fontWeight: "400" }}>Proceeds go to Planters Organization</div>
              </div>
              <div className="sm:ml-5">
                <button style={{ background: "#3D4917", borderRadius: "7px", color: "#ffffff", padding: "2px 12px" }} className="btn" onClick={()=>handleSeedBuy()}>Buy Now</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
      
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-full md:w-10/12">
          <img
            src={Ad}
            alt="Ad"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 lg:w-2/12 bg-[#CEE963]">
          <div className="text-sm mb-1 text-center" style={{ fontFamily: "Inter", lineHeight: "17px", color: "224E34", padding: "10px" }}>Ads Support the Planters Organization.Subscribe to Remove</div>
          <button
            style={{ background: "#00A642", borderRadius: "7px", color: "#ffffff", padding: "2px 12px", fontFamily: "Inter", }}
            className="btn mb-2"
          >
            Buy Now
          </button>
        </div>
      </div>


      <div className="flex flex-col md:flex-row w-full p-4 gap-3 lg:gap-0" style={{ fontFamily: "Inter" }}>
        <div className="flexWrap w-full lg:w-6/12 flex">
          <div className="w-full lg:w-6/12 flex flex-col ">
            <div className="flex flex-col gap-1">
              <div style={{ fontSize: "15px", color: "#1E1E1E", fontWeight: "700", lineHeight: "15px" }}>Stages</div>
              <div className="flex flex-col gap-1">
                <div className="flex">
                  <div style={{ width: "25px" }} className="flex">
                    <img className="w-full" src={Seed1} alt="Water" />
                  </div>
                  <div style={{ fontSize: "15px", color: "#1E1E1E" }} className="ml-2"> Seed (Day 0-4) </div>
                </div>
                <div className="flex">
                  <div style={{ width: "25px" }} className="flex justify-center items-center">
                    <img className="w-full" src={Sprout} alt="Tree" />
                  </div>
                  <div style={{ fontSize: "15px", color: "#1E1E1E" }} className="ml-2"> Sapling (Day 5-14) </div>
                </div>
                <div className="flex">
                  <div style={{ width: "25px" }} className="flex justify-center items-center">
                    <img className="w-full" src={Tree} alt="Tree" />
                  </div>
                  <div style={{ fontSize: "15px", color: "#1E1E1E" }} className="ml-2"> Tree (Day 15) </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 flex flex-col ">
            <div className="flex flex-col gap-1">
              <div style={{ fontSize: "15px", color: "#1E1E1E", fontWeight: "700", lineHeight: "15px" }}>Tools</div>
              <div className="flex flex-col gap-1">
                <div className="flex">
                  <div style={{ width: "25px" }} className="flex items-center justify-center">
                    <img className="w-full" src={Water} alt="Water" />
                  </div>
                  <div style={{ fontSize: "15px", color: "#1E1E1E" }} className="ml-2 break-words">Water: Needed everyday </div>
                </div>
                <div className="flex">
                  <div style={{ width: "25px" }} className="flex justify-center items-center">
                    <img className="w-full" src={compost2} alt="Tree" />
                  </div>
                  <div style={{ fontSize: "15px", color: "#1E1E1E" }} className="ml-2"> Manure: Speeds up by 2 days. </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 " style={{ fontFamily: "Inter" }}>
          <div className="pb-3 " style={{ fontSize: "20px", color: "#3D4917", fontWeight: "500", fontFamily: "Inter" }}>Upcoming Collectible</div>
          <div className="flex flex-col md:flex-row w-full gap-4">
            <div className="w-full md:w-50 md:block flex">
              <img className="w-full" src={upcomingTree} alt="upcomingTree" />
            </div>
            <div className="w-full sm:w-50">
              <h2 style={{ color: "#3D4917" }}>Tree NFT</h2>
              <div style={{ color: "#3D4917" }}>The virtual twin of a real world sapling planted by your efforts and contributions. This sapling would be geotagged and its updates would be stored on hashgraph, a distributed ledger to ensure transparency and authenticity, and will keep it monitorable and tamper-proof. </div>
              <div style={{ color: "#3D4917" }} className="fs-4">12 days to go! </div>
              <div>
                <button className="btn cursor-pointer" disabled>Mint Now</button>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default Home