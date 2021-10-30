import React, { useEffect, useState } from 'react';
import './App.css';
import Weather from './weather';

function App() {
  
  var flag=0;
  const getData=async ()=>{
  const weatherData=await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "8629496fc6mshc30412df8d63b40p10986cjsn1597e74869d6"
    }
  });
  
  const Data=await weatherData.json();
  console.log(Data);
  flag=0;
  setInfo(Data.location);
  setCurrent(Data.current);
  setcondition(Data.current.condition);
  
};
const [city,setCity]=useState("Salem");
const [infoLocation,setInfo]=useState(" ");
const [infoCurrent,setCurrent]=useState(" ");
const [infocondition,setcondition]=useState(" ");

useEffect(() => {
  getData(); 
}, [city]);
const [searchState,setState]=useState(" ");

const updateSearch=e=>{
  setState(e.target.value);
  console.log(searchState);
}
const updateCity=e=>{
  e.preventDefault();
  setCity(searchState);
  console.log(city);
}
return (
    <div className="App">
     <div className="SearchCity">
       <div className="FormDiv"> 
       <form action="submit" id="SearchForm">
         <input type="text" onChange={updateSearch}/>
         <button onClick={updateCity}>Search</button>
       </form>
       </div>
     </div>
     <div className="weatherDisp">
      <Weather Location={infoLocation} Current={infoCurrent} Condition={infocondition}/>
     </div>
    </div>
  );
}

export default App;
