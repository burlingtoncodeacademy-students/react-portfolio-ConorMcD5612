import Particles from "react-particles-js"
import React from "react"

//Particle effect on landing page using react-particles-js

const HomeParticle = () =>{
	//Played around with values untill I got a bubble effect I liked
	//bug where tabbing out of the page and coming back later makes the particles go way faster
	//Need to find a way to make this more responsive 
    return(
        <Particles 
    params={{
		// How many particles
	    "particles": {
	        
			//If they should move or not
            "move": {
                "enable": true,

            },
			//val
			"number": {
	            "value": 100,
	        },
			//Size set to random to have variation
	        "size": {
	            "value": 40,
	            "random": true,
	            "anim": {
	                "speed": 10,
	                "size_min": 1
	            }
	        },
			//make the particles not connect to each other
	        "line_linked": {
	            "enable": false
	        },
	       
	    }
	    
	}} />
    )
}

export default HomeParticle