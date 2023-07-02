import ChangeMapType from "../Map/Layers/ChangeMapType";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import Tree from "../../Images/tree 2.png";
import Seed from "../../Images/seed 8.png";
import Sprout from "../../Images/sprout 1.png";
import User2 from "../../Images/user2.png";
import Ellipse from "../../Images/Ellipse 4.png"
import Location from "../../Images/location 1.png"
import clock from "../../Images/clock (1) 1.png"
import Drop from "../../Images/water-drop 1.png"
import Compost from "../../Images/compost 1.png"


import { useEffect, useRef, useState } from "react";
import "./Map.css";

const Map = (props) => {
  const { isLoaded } = props;
  const [selectedMarker, setSelectedMarker] = useState("");
  const [markers, setMarkers] = useState([
    {
      name: `a`,
      status: "Seed",
      location: {
        lat: 30.3165,
        lng: 78.0322,
      },
    },
    {
      name: `b`,
      status: "Tree",
      location: {
        lat: 10.3165,
        lng: 78.0322,
      },
    },
    {
      name: `c`,
      status: "Seed",
      location: {
        lat: 18.3165,
        lng: 78.0322,
      },
    },
    {
      name: `d`,
      status: "Sprout",
      location: {
        lat: 25.3165,
        lng: 20.0322,
      },
    },
    {
      name: `e`,
      status: "Sprout",
      location: {
        lat: 16.3165,
        lng: 13.0322,
      },
    },
    {
      name: `f`,
      status: "Sprout",
      location: {
        lat: 48.3165,
        lng: 28.0322,
      },
    },
    {
      name: `g`,
      status: "Seed",
      location: {
        lat: 45.3165,
        lng: 71.0322,
      },
    },
    {
      name: `h`,
      status: "Seed",
      location: {
        lat: 57.3165,
        lng: 92.0322,
      },
    },
    {
      name: `i`,
      status: "Seed",
      location: {
        lat: 17.3165,
        lng: 34.0322,
      },
    },
    {
      name: `j`,
      status: "Tree",
      location: {
        lat: 34.3165,
        lng: 104.0322,
      },
    },
    {
      name: `k`,
      status: "Tree",
      location: {
        lat: 30.3165,
        lng: 52.0322,
      },
    },
    {
      name: `l`,
      status: "Tree",
      location: {
        lat: -2.3165,
        lng: -54.0322,
      },
    },
    {
      name: `m`,
      status: "Tree",
      location: {
        lat: 50.3165,
        lng: 46.0322,
      },
    },
    {
      name: `n`,
      status: "Tree",
      location: {
        lat: 21.3165,
        lng: 46.0322,
      },
    },
    {
      name: `o`,
      status: "Tree",
      location: {
        lat: 19.3165,
        lng: 100.0322,
      },
    },
    {
      name: `p`,
      status: "Tree",
      location: {
        lat: 42.3165,
        lng: -91.0322,
      },
    },
    {
      name: `q`,
      status: "Seed",
      location: {
        lat: 32.3165,
        lng: -94.0322,
      },
    },
    {
      name: `r`,
      status: "Seed",
      location: {
        lat: -1.3165,
        lng: 24.0322,
      },
    },
    {
      name: `s`,
      status: "Seed",
      location: {
        lat: 24.3165,
        lng: 30.0322,
      },
    },
 
 
  ]);

  const containerStyle = {
    width: "100vw",
    height: "60vh",
  };
  const center = {
    lat: 30.3165,
    lng: 78.0322,
  };

  const [changeMyTypeID, setToggleChangeMyTypeID] = useState(1);
  const mapRef = useRef(null);

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance;
    mapInstance.addListener("click", handleMapClick);
  };

  const handleMapClick = (event) => {
    const { latLng } = event;
    const lat = latLng.lat();
    const lng = latLng.lng();

    const newMarker = {
      name: `location-${markers.length + 1}`,
      status: "Seed",
      location: {
        lat,
        lng,
      },
    };

    setMarkers([...markers, newMarker]);

    // Send the new marker coordinates to the backend here
    // You can make an API request or trigger a callback function to handle the backend logic
  };

  const MapType = {
    roadmap: "roadmap",
    satellite: "satellite",
    hybrid: "hybrid",
    terrain: "terrain",
  };

  const handleMapToggle = () => {
    if (changeMyTypeID === 0) {
      setToggleChangeMyTypeID(1);
    } else if (changeMyTypeID === 1) {
      setToggleChangeMyTypeID(2);
    } else if (changeMyTypeID === 2) {
      setToggleChangeMyTypeID(3);
    } else if (changeMyTypeID === 3) {
      setToggleChangeMyTypeID(4);
    } else if (changeMyTypeID === 4) {
      setToggleChangeMyTypeID(1);
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      if (changeMyTypeID === 1) {
        mapRef.current.setMapTypeId(MapType.roadmap);
      } else if (changeMyTypeID === 2) {
        mapRef.current.setMapTypeId(MapType.terrain);
      } else if (changeMyTypeID === 3) {
        mapRef.current.setMapTypeId(MapType.satellite);
      } else if (changeMyTypeID === 4) {
        mapRef.current.setMapTypeId(MapType.hybrid);
      }
    }
  }, [changeMyTypeID]);

  return (
    isLoaded && (
      <>
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2.3}
          onLoad={onMapLoad}
          options={{
            disableDefaultUI: true, // Remove default UI controls
          }}
        >
          {markers.map((marker) => {
            return (
              <div key={marker.name}>
                <Marker
                  position={marker.location}
                  options={{
                    icon:
                      marker.status === "Tree"
                        ? Tree
                        : marker.status === "Sprout"
                          ? Sprout
                          : marker.status === "Seed"
                            ? Seed
                            : "",
                  }}
                  onClick={() => {
                    setSelectedMarker(marker);
                  }}
                />
              </div>
            );
          })}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.location}
              options={{
                pixelOffset: new window.google.maps.Size(0, -40),
              }}
            >
              <div className="bg-white flex flex-col gap-1" style={{ fontFamily: "Inter", fontWeight: "500", overflow: "hidden" }}>
                <div className="flex gap-2 items-center">
                  <div className="flex justify-center items-center w-[15px]">
                    <img src={User2} alt="User" className="w-full" />
                  </div>
                  <div>Owner : 0x72e...F434</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex justify-center items-center w-[15px]">
                    <img src={Seed} alt="Seed" className="w-full" />
                  </div>
                  <div>Stage: Seed</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex justify-center items-center w-[15px]">
                    <img src={clock} alt="clock" className="w-full" />
                  </div>
                  <div>Days to tree: 12</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex justify-center items-center w-[15px]">
                    <img src={Ellipse} alt="Ellipse" className="w-full" />
                  </div>
                  <div>Dies in 00:03:32 </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex justify-center items-center w-[15px]">
                    <img src={Location} alt="Map" className="w-full" />
                  </div>
                  <div className="flex flex-col">
                    <div>Lat: {selectedMarker.location.lat}</div>
                    <div>Lng: {selectedMarker.location.lng}</div>
                  </div>

                </div>
                <div className="flex gap-2 justify-center my-2 items-center">
                  <div className="w-[30px] h-[30px] bg-[#387E9D] p-1 cursor-pointer" style={{ borderRadius: "100%" }}>
                    <img src={Drop} alt="Drop" className="w-[100%]" />
                  </div>
                  <div className="w-[30px] h-[30px] bg-[#387E9D] p-1 cursor-pointer" style={{ borderRadius: "100%" }}>
                    <img src={Compost} alt="Compost" className="w-[100%]" />
                  </div>

                </div>
              </div>
            </InfoWindow>
          )}

          {/* <button onClick={handleMapToggle}>Change Map Type</button> */}
          <ChangeMapType handleMapToggle={handleMapToggle} />
        </GoogleMap>

        <div className="fixed-box flex " style={{fontFamily:"Inter"}}>
            <div className="first bg-[#75D63A] text-[#3D4917]  cursor-pointer" style={{borderRadius:"10px 0 0 10px"}}>User Map</div>
            <div className="second bg-[#D9D9D9] text-[#939393]  cursor-pointer" style={{borderRadius:"0px 10px 10px 0px"}}>World Map </div>
          </div>
        </div>
      </>
    )
  );
};

export default Map;
