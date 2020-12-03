import React, { useEffect } from 'react'
import PropTypes from 'prop-types';

Weathercard.propTypes = {
    temp: PropTypes.number.isRequired,
    feels: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired
}

Weathercard.defaultProps = {
    temp: 0,
    feels: 0,
    min: 0,
    max: 0,
    pressure: 0,
    humidity: 0,
    city: 'Odessa'
}

export default function Weathercard({ city, temp, min, max, pressure, humidity }) {


    return (
        <>
            <h3>Weather Card</h3>
            <h2>City: {city}</h2>
            <p>temp: {temp} °C</p>
            <p>min: {min}</p>
            <p>max: {max}</p>
            <p>pressure: {pressure}</p>
            <p>humidity: {humidity}</p>
        </>
    )
}
