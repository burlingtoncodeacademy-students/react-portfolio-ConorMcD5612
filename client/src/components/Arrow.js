
import React, { useState } from 'react'
import '../App.css';


import { useSpring, animated } from '@react-spring/web';

//Arrow animation using react spring 

//Need two seperate color of arrows (black/white)

const blackArrow = {
    
}

const Arrow = () =>{
 //Using useSpring hook to make animation 
    const aniStyle = useSpring({
        //Infinite loop
        loop: true,
        //ms delay
        delay: 500,
        //Make the start up of the animation more springy 
        config: {tension: 200},
        //Full opacity when translating down
        from: {opacity: 1, transform:'translate(0px, 1vw)'},
        to: {opacity: .5, transform:'translate(0px, 0px)'}
    })
//Using animation componenet, useSpring hook as the styles
//Adding the arrow image being animated
    return <animated.div style={aniStyle}>
        
        <img className="down-arrow" src={require('../images/down-chevron.svg')}></img>
    </animated.div>
}

export default Arrow

