import React from 'react'
import { BiBell } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import TotalArrived from '../BookingH/TotalArrived';
import SaidBar from './SaidBar';
import { Link, useNavigate } from 'react-router-dom'

const HomeNav = () => {
  const navigate = useNavigate()
  return (
    <>
    <div style={{display:'flex',justifyContent:"space-between", color:"slateblue"}}>
        <div>
            <h2>WELCOME TO</h2>
            <span>Don't forget to chech your activity</span>
        
        </div>
        <div style={{display:'flex', justifyContent:'center',fontSize:'50px', gap:'40px'}}>
            <BiBell/>
            <h4>
            <p>Owner</p>
            <h6>name</h6>
            </h4>
            
            <CgProfile/>
            <select style={{fontSize:'20px', margin:'10px', border:'none'}}>
              <option value="" onClick={()=>navigate('/appointment')}><Link to={'/appointment'}></Link></option>
              <option value=""></option>
              
            </select>
           

        </div>
       
    
    </div>
    <div style={{display:'flex', justifyContent:'center'}}>
      <div style={{width:'60%'}}>
    <TotalArrived/>
    </div>
    <div style={{width:'35%'}}>
<SaidBar/>
    </div>
    </div>

    </>
  )
}

export default HomeNav
