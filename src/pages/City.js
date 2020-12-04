import React from 'react'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { setCity } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Weathercard from '../components/Weather/WeatherCard'

export default function City(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const weatherData = useSelector(state => state.weatherData);

    const handleBack = () => {
        dispatch(setCity(''))
    }

    return (
        <>
            <Button onClick={handleBack}>Click Here</Button>
            <Weathercard {...weatherData} />
        </>
    )
}
