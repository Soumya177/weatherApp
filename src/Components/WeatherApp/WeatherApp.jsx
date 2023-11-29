// import React, { useState } from 'react';
// import cloud_icon from "../Assests/cloud.png";
// import humidity_icon from "../Assests/humidity.png";
// import wind_icon from "../Assests/wind.png";
// import './WeatherApp.css';

// const WeatherApp = () => {
//     const [api_key] = useState("1ef381420d4451192f2d8522d7610f15");
//     const [weatherData, setWeatherData] = useState({
//         humidity: "",
//         wind: "",
//         temperature: "",
    
//     });

//     const search = async () => {
//         const element = document.getElementsByClassName("cityInput")[0];
//         if (element.value === "") {
//             return 0;
//         } else {
//             let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`;

//             let response = await fetch(url);
//             let data = await response.json();

//             setWeatherData({
//                 humidity: `${data.main.humidity}%`,
//                 wind: `${data.wind.speed} km/h`,
//                 temperature: `${data.main.temp}℃`,
//                 location: data.name,
//             });
//         }
//     };

//     return (
//         <div className='container'>
//             <div className="top-bar">
//                 <input type="text" className="cityInput" placeholder='Search' />
//                 <div className="search-icon">
//                     <button onClick={() => search()}>Search</button>
//                 </div>
//             </div>
//             <div className="Weather-image">
    
//       <img src={cloud_icon} alt="" style={{height:"100px",width:"150px",display:'flex',justifyContent:'center',alignItems:'center'}}/>
//               </div>

//             <div className="Weather-temp">{weatherData.temperature}</div>
//             <div className="Weather-location">{weatherData.location}</div>
//             <div className="data-container">
//                 <div className="element">
//                     <div className="data">
//                         <div className="humidity-percent">{weatherData.humidity}</div>
//                         <img src={humidity_icon}  alt=""style={{height:50,width:50}}/>
//                         <div className="text">humidity</div>
//                     </div>
//                 </div>
//                 <div className="element">
//                     <div className="data">
//                         <div className="wind-rate">{weatherData.wind}</div>
//                         <img src={wind_icon} alt="" style={{height:50,width:50}}/>
//                     </div>
//                     <div className="text">Wind Speed</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WeatherApp;
// import React, { useState } from 'react';
// import cloud_icon from "../Assests/cloud.png";
// import humidity_icon from "../Assests/humidity.png";
// import wind_icon from "../Assests/wind.png";
// import './WeatherApp.css';

// const Weather = () => {
//     const [api_key] = useState("1ef381420d4451192f2d8522d7610f15");
//     const [weatherData, setWeatherData] = useState({
//         humidity: "",
//         wind: "",
//         temperature: "",
//         location: "",
//     });

//     const search = async () => {
//         const element = document.getElementsByClassName("cityInput")[0];
//         if (element.value === "") {
//             return 0;
//         } else {
//             let url =`https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`;

//             let response = await fetch(url);
//             let data = await response.json();

//             setWeatherData({
//                 humidity: `${data.main.humidity}%`,
//                 wind: `${data.wind.speed} km/h`,
//                 temperature:`${data.main.temp}°C`,
//                 location: data.name,
//             });
//         }
//     };

//     return (
//         <div className='container'>
//             <div className="top-bar">
//                 <input type="text" className="cityInput" placeholder='Search' />
//                 <div className="search-icon">
//                     <button onClick={() => search()}>Search</button>
//                 </div>
//             </div>
//             <div className="Weather-image" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//             <img src={cloud_icon}alt="" style={{height:"125px",width:"125px" }}/>
//             </div>
//             <div style={{textalign:'centre'}}></div>
//             <div className="Weather-temp">{weatherData.temperature}</div>
//             <div className="Weather-location">{weatherData.location}</div>
//             <div className="data-container">
//                 <div className="element">
//                     <div className="data">
//                         <div className="humidity-percent">{weatherData.humidity}</div>
//                         <img src={humidity_icon}  alt=""style={{height:50,width:50}}/>
//                         <div className="text">humidity</div>
//                     </div>
//                 </div>
//                 <div className="element">
//                     <div className="data">
//                         <div className="wind-rate">{weatherData.wind}</div>
//                         <img src={wind_icon} alt="" style={{height:50,width:50}}/>
//                     </div>
//                     <div className="text">Wind Speed</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Weather;
import React,{useState} from 'react';
import  cloud_icon  from "../Assests/cloud.png";
import wind_icon from "../Assests/wind.png"
import humidity_icon from "../Assests/humidity.png" 
import './WeatherApp.css'
const WeatherApp = () => {
    const [api_key] = useState("1ef381420d4451192f2d8522d7610f15");
    const [weatherData, setWeatherData] = useState({
        humidity: "",
        wind: "",
        temperature: "",
        location: "",
    });

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")[0];
        if (element.value === "") {
            return 0;
        } else {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`;

            let response = await fetch(url);
            let data = await response.json();

            setWeatherData({
                humidity: `${data.main.humidity}%`,
                wind:` ${data.wind.speed} km/h`,
                temperature:`${data.main.temp}°C`,
                location: data.name,
            });
        }
    };

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="search-icon">
                    <button onClick={() => search()}>Search</button>
                </div>
            </div>
            <div className="Weather-image" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src={cloud_icon}alt="" style={{height:"150px",width:"150px" }}/>
            </div>
             <div style={{textAlign:'center'}}>
             <div className="Weather-temp">{weatherData.temperature} </div>
            <div className="Weather-location">{weatherData.location}</div>
             </div>
            <div className="data-container">
                <div className="element">
                    <div className="data">
                        <div className="humidity-percent">{weatherData.humidity}</div>
                        <img src={humidity_icon}  alt=""style={{height:50,width:50}}/>
                        <div className="text">humidity</div>
                    </div>
                </div>
                <div className="element">
                    <div className="data">
                        <div className="wind-rate">{weatherData.wind}</div>
                        <img src={wind_icon} alt="" style={{height:50,width:50}}/>
                    </div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;