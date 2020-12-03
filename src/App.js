import React, { useState, useEffect } from 'react'
import WeatherCard from './components/Weather/WeatherCard'
import { WeatherContainer } from './components/Weather/WeatherContainer'
import { useDispatch, useSelector } from 'react-redux'



export default function App() {



  return (
    <>
      <WeatherContainer />
    </>
  );
}

