import React from 'react'
import Arrow from './Arrow'

const Projects = () =>{
//Going to make this so that that when you click on the project box a modal pops up 
//Need require in img src because not importing images
    return(
        <div>
          <h2 className="project-header">
            Projects
          </h2>
          <div className="box-container">

        <div className="box box-1">
          <img src={require('../images/tic-tac-toe.svg')}></img>
        </div>
         <div className="box box-2">
         <img src={require('../images/help.svg')}></img>
         </div>
          <div className="box box-3">
          <img src={require('../images/right-chevron.svg')}></img>
          </div>
          </div>
         
          </div>
          
    )
}

export default Projects