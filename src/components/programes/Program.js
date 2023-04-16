import React from 'react'
import './Program.css'
import { programsData } from '../../data/programsData'
import  rightArrow  from "../../assets/rightArrow.png";
const Program = () => {
  return (
    <div className='programs' id='programs'>
        {/*==== start header program===== */}
        <div className='program-header' id='program'>
            <span className='stroke-text'>Exploure our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        {/*==== end header program===== */}

        {/*==== start program category==== */}
        <div className='program-categories'>
            {programsData.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'>
                        <span>join Now</span>
                        <img src={rightArrow}/>
                    </div>
                </div>
            ))}
        </div>    
        {/*==== end program category==== */}
    </div>
  )
}

export default Program