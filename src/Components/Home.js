import React from "react";
import Image from './swrs.jpg'
import { Typography } from "@mui/material";
import ReactPlayer from 'react-player'
const Home=()=>{
    return (
        <div>
            <Typography>
                <h1>
                    About WeatherApp
                </h1>
                Weather is the state of the atmosphere,
                describing for example the degree to which 
                it is hot or cold, wet or dry, calm or stormy, 
                clear or cloudy. On Earth, most weather phenomena
                occur in the lowest layer of the planet's atmosphere, 
                the troposphere, just below the stratosphere.


                The day-to-day conditions of the atmosphere at a place with respect to elements
                 like humidity, temperature, wind speed, rainfall, etc. is called the weather of 
                 that place. Weather can be cloudy, sunny, rainy, stormy or clear.
            </Typography>
            <img src={Image} alt="srws.jpg" style={{height:"300px",width:"600px"}} />
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'margin', alignItems: 'margin', flexDirection: 'column' }}></div>
            <Typography>
                <h3>
                    Extreme Geographical Weather Clips
                </h3>
            Weather has always been one of the most dynamic and complex forces shaping our planet, but now it's intensifying in varied and complex ways. The feature film 'Extreme Weather' takes us to the frontlines where few have gone
Among the melting tidewater glaciers of Alaska, National Geographic Emerging Explorer Dr. Erin Pettit leads a young team of researchers into the splash zone at the face of Dawes Glacier aboard a boat custom-designed to get as close as possible to the calving ice. Using a variety of instruments, her team works to measure the rate of melting to help build a more accurate model of global ocean level rise.
In the Great Plains of the United States, Oklahoma native Justin Walker tries to place pods of sensors inside tornados as part of an effort to determine if tornado outbreaks are growing more extreme. Working with driver Herb Stein, he races across the farm roads of the Heartland to get his instruments in direct contact with one of the most destructive forces on the planet.
A prolonged draught in California has caused the death of huge swaths of forest, creating a dangerous surge in the intensity of wildfires. Firefighters battle through smoke so thick it looks like night and so shockingly close to the heat that out-of-control flames lick at the lens. These growing infernos are themselves speeding the rate of polar ice melt, influenced by and also an influence on our increasingly extreme weather.
            </Typography>
            <ReactPlayer url={'https://youtu.be/yrOYxLt9SCI'} height={300}  width={600}controls />
       </div>
    )  
}
export default Home
// import React, { useState } from 'react'
// import Image from './shree.jpg'
// import ReactPlayer from 'react-player'
// import './Body.css'
// const Body = () => {
//     const [likes, setLikes] = useState(0) // likes=15
//     function count() {
//         setLikes(likes + 1);  //(15+1)
//     }
//     const [text, setText] = useState('')
//     function reset() {
//         setText('')
//     }
//     const [dramas, setDramas] = useState([
//       { drama: 'angels last mission' },
//       { drama: 'love o2o' },
//       { drama: 'the mask' },
//       { drama: 'my secret life of my secratory'},
//       { drama: 'my girlfriend is an alien'},
//       { drama: 'put your head on my shoulders'},
//       { drama: 'do you like brahms'}
//   ])
//   const [index, setIndex] = useState(0)  // 1
//   function change() {  //0+1%7
//       const newIndex = (index + 1) % dramas.length
//       setIndex(newIndex)
//   }

    

//     return (
//         <div>
//             <div>
//                 <img src={Image} alt="images" /> <br />
//                 <p>likes: {likes}</p>
//                 {/* destructuring */}
//                 <button onClick={count}>Like</button>
//             </div>
//             <div style={{ paddingTop: 'px' }}>
//                 <label htmlFor="Name">Name : </label>
//                 <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//                 <p>onutput : {text}</p>
//                 <button onClick={reset}>Reset</button>
//             </div>
//             <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'margin', alignItems: 'margin', flexDirection: 'column' }}>
//                 {/* pass down url link in url attribuite */}
//                 <ReactPlayer url={'https://www.youtube.com/watch?v=LLgtNiYgHQQ'} height={200}  width={200}controls />
//                 <div>
//                     <p>kdrama:i like this </p>
//                 </div>
//             </div>
//             <p>i like this {dramas[index].drama}</p>
//             <button onClick={change}>Change me</button>
//         </div>
//     )
// }
// export default Body