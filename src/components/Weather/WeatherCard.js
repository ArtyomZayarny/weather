import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'
import { Loader } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

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
    const weatherData = useSelector(state => state.weatherData);

    return (
        <Card style={{ 'height': 290, 'position': 'relative' }}>
            {Object.keys(weatherData).length > 0 ?
                <>
                    <Card.Content header={city} />
                    <Card.Content description={`temp: ${temp} °C`} />
                    <Card.Content description={`min: ${min} °C`} />
                    <Card.Content description={`max: ${max} °C`} />
                    <Card.Content description={`pressure: ${pressure} hPa`} />
                    <Card.Content description={`humidity: ${humidity} %`} />
                </>
                :
                <Loader active style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }} />}
        </Card>
    )
}
