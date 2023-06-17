import React from 'react'
import DataPokemon from '../componenct/DataPokemon'
 import Navber from '../componenct/navber'
 import Footer from '../componenct/footer'
function home() {
  return (
    
    <>  
     <Navber/>
     <div style={{ height: "50px" }}></div>

      <div style={{ textAlign: "center" }}> <img  style={{width:"150px",height:"100px"}}src='https://cdn.vox-cdn.com/thumbor/ziEFgmJDOnPJC231zpvZsesOOsk=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/72009235/captain_pikachu.6.jpg'></img></div>
      <div style={{ height: "50px" }}></div>
   
       <DataPokemon />
      {/* <DataOnepiece2/> */}
      <div style={{ height: "50px" }}></div>

       {/* <Footer/> */}
    </>


  )
}

export default home