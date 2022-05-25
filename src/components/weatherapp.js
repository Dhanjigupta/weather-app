import react, {useEffect, useState} from "react";
import "./css/style.css";

const WeatherApp = ()=>{
  
    const [location,setLocation]=useState(null);
    const [current,setCurrent]=useState(null);
    const [search,setSearch]=useState("Bengaluru");

    useEffect(()=>{
        const fetchApi = async ()=>{
           const url = `http://api.weatherapi.com/v1/current.json?key=df324c6899c4479da5d181956222305&q=${search}
           ondon&aqi=no`; 
           const response = await fetch(url);
           const resJson = await response.json();
          // console.log(resJson);
          setLocation(resJson.location);
          setCurrent(resJson.current);
          document.body.style.backgroundImage =
          "url('https://source.unsplash.com/1600x900/?" + search + "')";
        }
        fetchApi();
    },[search] )
    

    return(
        <>
          <div className="box">
             <div className="inputData">
                 <input type="search" value={search} className="inputField"
                 onChange={(event)=>{
                      setSearch(event.target.value)  
                 }} />
             </div>
             
             {
              !location ? (
                  <p className="errorMsg">Data not found !!</p>
              ) : (
                 <>
                 <div className="info">
                    <h2 className="location">
                        <i className="fa fa-street-view"> {search}</i>
                   </h2>
                    <h1 className="temp">
                        {current.temp_c}&deg; Cel
                    </h1>
                    <h3 className="tempmin_max"> Lat: {location.lat} | Lon: {location.lon} </h3>
                 </div>
                 
                 </>
              )
             }

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
         </div>
        </>
    )
}

export default WeatherApp;