
export const WeatherMainInfo = ({weather}) => {
  return (
    <div className="mainInfo">
        <div className="city">{weather?.location.name}</div>
        <div className="country">{weather?.location.country}</div>
        <div className="row">
            <div>
                <img 
                    src={`http:${weather?.current.condition.icon}`} 
                    width='128' 
                    alt={weather?.location.name}
                />
            </div>
            <div className="weatherConditions">
                <div className="condition">{weather?.current.condition.text}</div>
                <div className="current">{weather?.current.condition.temp_c}°</div>
            </div>
        </div>
        <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
        
        
    </div>
  )
}

