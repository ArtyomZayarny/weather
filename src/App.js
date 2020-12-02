import React, { useEffect, useState } from 'react';

export default function App() {
  const [geo, setGeo] = useState({})




  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {
      const geo = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
      setGeo(geo)
    })

  }, [])
  return (
    <>
      <h2>App</h2>
    </>
  );
}

