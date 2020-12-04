import React from 'react'
import { WeatherContainer } from '../components/Weather/WeatherContainer'
import { useHistory } from 'react-router-dom'
import { Select } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { fetchWeather } from '../redux/actions'


export default function Home(props) {
    const history = useHistory();
    const dispatch = useDispatch();


    const countryOptions = [
        { key: '1', value: 'Kabul', text: 'Kabul' },
        { key: '2', value: 'Madrid', text: 'Madrid' },
        { key: '3', value: 'Tbilisi', text: 'Tbilisi' },
        { key: '4', value: 'Athens', text: 'Athens' },
        { key: '5', value: 'Jakarta', text: 'Jakarta' },
        { key: '6', value: 'Jerusalem', text: 'Jerusalem' },
        { key: '7', value: 'Rome', text: 'Rome' },
        { key: '8', value: 'Tokyo', text: 'Tokyo' },
        { key: '9', value: 'Kyiv', text: 'Kyiv' },
        { key: '10', value: 'Washington', text: 'Washington' },
    ];
    const handleChange = (e, { value }) => {

        dispatch(fetchWeather(value))
        history.push(`/${value}`)

    }
    return (
        <>
            <WeatherContainer />
            <Select
                style={{ 'width': 290 }}
                placeholder='Select your city'
                options={countryOptions}
                onChange={handleChange}
            />
        </>
    )
}
