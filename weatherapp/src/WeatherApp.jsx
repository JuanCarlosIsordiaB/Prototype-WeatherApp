import { useEffect, useState } from 'react'
import { WeatherForm } from './components/WeatherForm'
import { WeatherMainInfo } from './components/WeatherMainInfo';

export const WeatherApp = () => {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    document.title = `weather | ${weather?.location.name ?? ''} `;
  }, [weather]);

  const laodInfo = async(city ) => {
    try {
      const req = await fetch(`http://api.weatherapi.com/v1/current.json?key=40010e7385ef4e36918183948232312&q=${city}&aqi=no`);
      console.log(req);

      const res = await req.json();

      //Ingresamos la respuesta json a la variable weather
      setWeather(res);

      console.log(weather);
    } catch (error) {
      console.log(error);
    }
  }

  const onChangeCity = (city) => {
    setWeather(null);
    console.log(`JSON: ${city}`)
    laodInfo(city);
  }

  return (
    <div className='weatherContainer'>
      <h1>WeatherApp</h1>
      <WeatherForm onChangeCity={onChangeCity} />
      <WeatherMainInfo weather={weather}/>
    </div>
  )
}
