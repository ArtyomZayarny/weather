import axios from 'axios'

export const apiClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})