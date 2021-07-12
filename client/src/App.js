//Importing all my componenets 
import React from 'react';
import ReactDOM  from 'react';
import Particles from 'react-particles-js'
import './App.css';
import Header from './components/Header';
import HomeParticle from './components/HomeParticle';
import Arrow from './components/Arrow'
import Nav from './components/Nav'
import Projects from './components/Projects';
import About from './components/About'



function App() {
   /*Will eventually end up only having componenets and not container classes} */
  return (
   
    
    <div className="App">
     
      <div className="home-page">
      <HomeParticle className="particles" />
      <Header />
      </div>
     
     <div className="project-page">
       <Projects />
     </div>

     <div className="about-page"> 
        <About />
     </div>

     <div className="history-page">
    
     </div>
    </div>
  );
}

export default App;
