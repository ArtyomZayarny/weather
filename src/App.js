import React, { useState, useEffect } from 'react'
import { setGeoData } from './redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const geoData = useSelector(state => state.geo);

  useEffect(() => {
    //Request geo data
    if (Object.keys(geoData).length === 0) {
      setGeo()
    }
    //Geo data was recived
    if (Object.keys(geoData).length > 0) {
      setLoading(false)
    }
  }, [geoData])



  const setGeo = async () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const geo = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
      dispatch(setGeoData(geo))
    })
  }
  return (
    <>
      <h2>{isLoading ? 'Loading...' : 'App'}</h2>
    </>
  );
}

