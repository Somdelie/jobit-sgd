"use client"
import { useState, useEffect } from "react"
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api"
import { CircularProgress } from "@mui/material"
import Paragraph from "../front-office/Paragraph"
// import CustomMarkerIcon from "/location-pin2.png"

const Map = () => {
  const [userPositions, setUserPositions] = useState([]) // Array to store user positions
  const [selectedUser, setSelectedUser] = useState(null)
  const [map, setMap] = useState(null)
  const [center, setCenter] = useState({ lat: 0, lng: 0 })
  const [isLoading, setIsLoading] = useState(true)

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCnQeqdv0epe5miO_NrTzzUxv9USa5Ki4s", // Replace with your actual Google Maps API key
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
        // Simulating multiple user positions (replace with your actual user positions)
        const positions = [
          {
            id: 1,
            name: "User 1",
            address: "77 Thomas Street",
            lat: position.coords.latitude - +0.12,
            lng: position.coords.longitude + 0.02,
          },
          {
            id: 2,
            name: "Somdelie",
            address: "13 Maureen Street",
            lat: position.coords.latitude - +1.02,
            lng: position.coords.longitude - 0.2,
          },
          {
            id: 3,
            name: "Nomvula",
            address: "39 Thomas Street",
            lat: position.coords.latitude + 0.02,
            lng: position.coords.longitude - 0.02,
          },
          {
            id: 4,
            name: "Mnqobie",
            address: "15 Maureen Street",
            lat: position.coords.latitude - +0.42,
            lng: position.coords.longitude + 0.32,
          },
        ]
        setUserPositions(positions)
        setIsLoading(false)
      })
    }
  }, [])
  const mapStyles = {
    height: "100%",
    width: "100%",
  }

  const onLoad = (map) => {
    setMap(map)
  }

  const mapOptions = {
    disableDefaultUI: true, // Disable default UI controls including the Google logo
  }

  const onMarkerClick = (user) => {
    setSelectedUser(user)
  }

  const onCloseInfoWindow = () => {
    setSelectedUser(null)
  }

  return isLoaded ? (
    <div className="h-full w-full">
      {isLoading ? ( // Display loading spinner while map is loading
        <div className="flex justify-center items-center h-full">
          <CircularProgress /> <p>Loading...</p>
          {/* You can use a spinner component here */}
        </div>
      ) : (
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={center}
          zoom={15}
          options={mapOptions}
          onLoad={onLoad}>
          {/* User markers */}
          {userPositions.map((user, index) => (
            <Marker
              key={user.id}
              position={{ lat: user.lat, lng: user.lng }}
              onClick={() => onMarkerClick(user)}
              icon={{
                url: "/location-pin2.png",
                scaledSize: new window.google.maps.Size(60, 0), // Adjust the size as needed
              }}
            />
          ))}
          {/* Center marker for current user */}
          <Marker position={center} />

          {/* InfoWindow */}
          {selectedUser && (
            <InfoWindow
              position={{ lat: selectedUser.lat, lng: selectedUser.lng }}
              onCloseClick={onCloseInfoWindow}>
              <div
                style={{
                  background: "#13131A",
                  width: "200px",
                  padding: "10px",
                }}>
                <h2 className="text-text">{selectedUser.name}</h2>
                <Paragraph title={selectedUser.address} />
                {/* Add more user information as needed */}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  ) : (
    <></>
  )
}

export default Map
