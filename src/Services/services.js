const API_KEY = 'f614c0abbaedc501ab4394e97ab6da96'
const BASR_URL = 'https://api.openweathermap.org/data/2.5'
import { DateTime } from "luxon";

// https://api.openweathermap.org/data/2.5/weather?q=Tokyo& -> appid <- =f614c0abbaedc501ab4394e97ab6da96


// url(BASR_URL -> sb api ak dorner i hoy tai base url  +  -> tar por / new adrrass boshe  '/' +  -> any location  infoType)
const getweatherData = (infoType, searchParams) => {
    const url = new URL(BASR_URL + '/' + infoType);

    // {...searchParams ==  , appid: API_KEY}
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

    return fetch(url)
        .then(res => res.json())
}

const formatCurrentWather = (data) => {
    // sb data get korchi and  return kore dichi ar
    // weather -> extralekhar karon weather []-> arr akare ache ar take {} korchi
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrice, sunset },
        weather,
        wind: { speed },

    } = data;

    const { main: details, icon } = weather[0];

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrice, sunset, details, icon, speed };
}

// amader sb data ar dorkar nai  tar jonnow
const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    // amader sb data ar dorkar nai  tar slice korlam
    daily = daily.slice(1,6).map(d => {
        return {
            title: FormatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        }
    })
    // amader sb data ar dorkar nai  tar slice korlam
    hourly = daily.slice(1,6).map(d => {
        return {
            title: FormatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        }
    })

    return { timezone, daily, hourly }
}



const getFormetdeWetherData = async (searchParams) => {
    const formattedCurrentData = await getweatherData('weather', searchParams).then(formatCurrentWather)
    // minutes and hourely weather change tar jonno api create ->
    // using units -> https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=f614c0abbaedc501ab4394e97ab6da96 & -> units <-  = change country
    const { lat, lon } = formatCurrentWather;

    const formettedForecastWeather = await getweatherData('onecal', {
        lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units
    }).then(formatForecastWeather);

    return { ...formattedCurrentData, ...formettedForecastWeather};
}

const FormatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy | Local time: 'hh:mm a' ") => {
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
}

const iconUrlFromCode = (code) =>{
    `http://openweathermap.org/img/wn/${code}@2x.png`;
}

export default getFormetdeWetherData;

export {FormatToLocalTime , iconUrlFromCode}