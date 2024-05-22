const API_KEY = 'f614c0abbaedc501ab4394e97ab6da96'
const BASR_URL = 'https://api.openweathermap.org/data/2.5'

// https://api.openweathermap.org/data/2.5/weather?q=Tokyo& -> appid <- =f614c0abbaedc501ab4394e97ab6da96

// https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=f614c0abbaedc501ab4394e97ab6da96

// url(BASR_URL -> sb api ak dorner i hoy tai base url  +  -> tar por / new adrrass boshe  '/' +  -> any location  infoType) 
const getweatherData = (infoType, searchParams) => {
    const url = new URL(BASR_URL + '/' + infoType);
    
    // {...searchParams ==  , appid: API_KEY}
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY } )

    return fetch(url)
        .then(res => res.json())
}

export default getweatherData