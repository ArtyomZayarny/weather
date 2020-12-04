export const kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15)
}
export const normalizeData = (data) => {
    let result = {}
    result.temp = data.hasOwnProperty('temp') ? kelvinToCelsius(data.temp) : 0;
    result.feels = data.hasOwnProperty('feels_like') ? kelvinToCelsius(data.feels_like) : 0;
    result.min = data.hasOwnProperty('temp_min') ? kelvinToCelsius(data.temp_min) : 0;
    result.max = data.hasOwnProperty('temp_max') ? kelvinToCelsius(data.temp_max) : 0;
    result.pressure = data.hasOwnProperty('pressure') ? data.pressure : 0;
    result.humidity = data.hasOwnProperty('humidity') ? data.humidity : 0;
    result.city = data.hasOwnProperty('city') ? data.city : '';
    return result;
}