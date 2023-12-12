import React from 'react'
import NavBarLeft from './uiConponent/NavBarLeft'
import HomeNav from './uiConponent/Home/HomeNav'

const Home = () => {
  return (
    <div>
    
         <div style={{display:'flex', margin:'10px',}}>
      <div style={{width:"10%", position:'fixed'}}>
    <NavBarLeft />
    </div>
    <div style={{width:'90%',marginLeft:'140px'}}>
     <HomeNav/>
</div>
    </div>
      
    </div>
  )
}

export default Home
