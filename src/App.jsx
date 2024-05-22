
import './App.css'
import getweatherData from './Services/services'
import Forecase from './components/Forecast/Forecase'
import TemperatureDetails from './components/TemperatureDetails/TemperatureDetails'
import TimeAndLocations from './components/TimeAndLocations/TimeAndLocations'
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopBtn/TopButtons'
import Input from './components/input.jsx/Input'
// f614c0abbaedc501ab4394e97ab6da96
// b512eb571bdbdcd6476359b2bd914e2b

// https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=f614c0abbaedc501ab4394e97ab6da96

function App() {

  const fetchWeather = async () =>{
    const data = await getweatherData('weather' , {q : 'london'} )
    console.log(data);
  }

  
  <button className='btn' onClick={fetchWeather()}> hi </button>

  return (
    <>
      <div className='mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-r from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 '>
        <TopButtons/>
        <Input/>
        <TimeAndLocations/>
        <TemperatureDetails/>
        <Forecase title={'hourly forecast'} />
        <Forecase title={'hourly forecast'} />
      </div>
    </>
  )
}

export default App
