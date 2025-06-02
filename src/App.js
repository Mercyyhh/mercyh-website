import React from 'react';
import { Contact, Arch, Post, Technology, Hero } from './components';
import './App.css';

const App = () => {
  return(
  <div className='App'>
    <div className='parent'>
      <div className='container'>
          <div className='main'>
            <div className='hero'><Hero /></div>
            <div className='info'>
              <div className='technology'><Technology /></div>
              <div className='core'>
                <div className='projects'><Post /></div>
                <div className='additional'>
                  <div className='arch'><Arch /></div>
                  <div className='contact'><Contact /></div>
                </div>
              </div>
            </div>
         </div> 
          <div className='blog'><Post /></div>
      </div>
    </div>
  </div>
  )
}

export default App
