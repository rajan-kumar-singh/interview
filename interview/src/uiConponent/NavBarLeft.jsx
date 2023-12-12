import React from 'react'
import './css/nav.css'
import { SiWindows } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { CiMedicalCase } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { BiHeart } from "react-icons/bi";

import { IoSettingsOutline } from "react-icons/io5";



const NavBarLeft = () => {
  return (
    <div>
      <div className="container">
        <div className="sidebar">
          <div style={{height:'80px', width:'80px', backgroundColor:'blue', borderRadius:'50%', marginRight:'10px', display:'flex', justifyContent:'center', justifyItems:'center', alignItems:'center', marginLeft:"-15px"}}>
           
          </div>
         
            <ul>
           
            <li><SiWindows/></li>
             
                <li><BiHeart/></li>
              
                  <li><CiMedicalCase /></li>
                  <li><CiCalendarDate /></li>
                  <li><CiMail/></li>
                  <li>< IoSettingsOutline/></li>
            </ul> 
        </div>
        
    </div>
      
    </div>
  )
}

export default NavBarLeft
