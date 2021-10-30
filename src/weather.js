import React from "react";
import "./weather.css";
function Weather({Location,Condition,Current})
{
    return(
        <div className="WeatherDisp">
            <div>
                <h1 id="LocName" className="h1tag">{Location['name']}</h1>
                <h2>{Location.region},{Location.country} </h2>
                <h1>Current Temp {Current.temp_c}<span> &#176;C </span></h1>
                <img src={Condition.icon} alt="" />
                <h1>{Condition.text}</h1>
                <h2>Feels Like {Current.feelslike_c} <span>&#176;</span>C</h2>
    
            </div>
            <div className="windAndVis">
                <p>Uv-{Current.uv}</p>
                <p>Wind Direction- {Current.wind_dir}</p>
                <p>Wind Speed-{Current.wind_kph}</p>
                <p>Visibility-{Current.vis_km}</p>
                <p>Humidity-{Current.humidity}</p>
            </div>
            
        </div>
        
    );
}
export default Weather;
//{name,region,country,tempC,condition,lastUpdate,icon,feelsLike}

/*<h1>{name}</h1>
        <h2>{region},{country}</h2>
        <h1>{tempC} <span>&#176;</span>C </h1>
        <h1>Feels Like:{feelsLike} <span>&#176;</span>C  </h1>
        <img src={icon} alt="" />
        <h2>{condition}</h2>
        <h2>{lastUpdate}</h2>
        */