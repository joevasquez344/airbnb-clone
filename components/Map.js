import React, { useState } from 'react'
import Image from 'next/image'
import 'mapbox-gl/dist/mapbox-gl.css'

import Map, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import pinIcon from '../public/assets/images/pin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MapBox = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({})
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  console.log('Result: ', selectedLocation)

  const center = getCenter(coordinates)
  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/joevasquez344/cl2fd3ely000415n6cyxghm9e"
      mapboxAccessToken={process.env.mapbox_key}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offset={[-20, -10]}
          >
            <p
              role="img"
              className="animate-bounce cursor-pointer text-2xl text-red-400"
              onClick={() => setSelectedLocation(result)}
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* The popup that should show if we click on a Markder */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  )
}

export default MapBox
