import React, { useState,useEffect } from 'react'
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown,MdOutlineMenu  } from "react-icons/md";

import { CiSearch, CiLocationOn} from "react-icons/ci";


import { LuUserCircle2 } from "react-icons/lu";
// import { useEffect } from 'react';
import './Navbar.css';


function Navbar() {
 
   

    let featuresList = ["Cars","Bikes","Scooters","Reviews","Features","News","Gallery","Motorsport"]
    const[flag,setFlag] = useState( featuresList.map(() => false))

    const showFeatures = (index) => {
        const updatedFlags = [...flag];
        updatedFlags[index] = true;
        setFlag(updatedFlags);
      };


      const hideFeatures = (index) => {
        const updatedFlags = [...flag];
        updatedFlags[index] = false;
        setFlag(updatedFlags);
      };


      const [isFixed, setIsFixed] = useState(false);

      useEffect(() => {
          const handleScroll = () => {
              if (window.scrollY > 180) {
                  setIsFixed(true);
              } else {
                  setIsFixed(false);
              }
          };
  
          window.addEventListener('scroll', handleScroll);
  
          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      }, []);
  return (
    <>
       <nav className={isFixed ? 'navbar fixed' : 'navbar'}>
            {/* Your navbar content goes here */}
    
        <div className='navbarContainer'>
            <div className='menubar'><MdOutlineMenu/></div>
            <ul className='navbarList'>
               {featuresList.map((item,index)=>(<li key={index}  className='listFeatures'  onMouseEnter={() => showFeatures(index)}
          onMouseLeave={() => hideFeatures(index)}>{item}{flag[index] ? (<span className='spanArrow'><MdOutlineKeyboardArrowUp /></span>) :(<span className='spanArrow'><MdKeyboardArrowDown/></span>)}</li>))}

                <li>Tech</li>

                <li style={{fontSize:'1.7vw'}}><CiSearch/></li>
            </ul>

            <ul className='navbarlist2'>
                <li className='infoUserlist'><span className='nav2icons'><CiLocationOn/></span>Select City</li>
                <li className='infoUserlist'><span className='nav2icons'><LuUserCircle2/></span>Login</li>
            </ul>
            <div className='responsiveicons'>
            <div className='searchiconresponsive'><CiSearch/></div>
            <div className='loginiconresponsive'><LuUserCircle2/></div>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar