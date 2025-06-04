import React from 'react';
import './technology.css';


const Technology = ({Icon}) => {
  return(
  <div className='icon-container'>
   <img src={Icon.link} alt={Icon.name}/>
  </div>
  )
}

export default Technology 
