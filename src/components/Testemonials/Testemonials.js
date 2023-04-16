import React, { useState } from 'react'
import './Testemonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'

const Testemonials = () => {
    const transtion={type:'spring', duration:3}
    const [selceted, setSelceted] = useState(0)
    const tLength= testimonialsData.length
  return (
    <div className='testemonial' id='testemonials'>
        {/*==== start left testemonials==== */}
        <div className='left-teste'>
            <span>TESTIMONIALS</span>
            <span className='stroke-text'>WHAT THEY</span>
            <span>SAY ABOUT US</span>
            <motion.span
            key={selceted}
            initial={{opacity:0 , x:-100}}
            animate={{opacity:1 , x:0}}
            exit={{opacity:0 , x:-100}}
            transition={transtion}
            >
                {testimonialsData[selceted].review}
            </motion.span>
            <span>
                <span style={{color:"var(--orange)"}}>
                    {testimonialsData[selceted].name}
                </span>{" "}
                -{testimonialsData[selceted].status}
            </span>
        </div>
        {/*==== end left testemonials==== */}
        {/*==== start right testemonials==== */}
        <div className='right-teste'>
            <motion.div
            initial={{opacity:0,x:-100}}
            transition={{...transtion , duration:2}}
            whileInView={{opacity:1 , x:0}}
            ></motion.div>
            <motion.div
            initial={{opacity:0,x:100}}
            transition={{...transtion , duration:2}}
            whileInView={{opacity:1 , x:0}}
            ></motion.div>
            <motion.img
            key={selceted}
            initial={{opacity:0 , x:100}}
            animate={{opacity:1 , x:0}}
            exit={{opacity:0 , x:-100}}
            transition={transtion}
             src={testimonialsData[selceted].image} alt=''/>
            <div className='arrows'>
                <img 
                onClick={()=>{
                    selceted===0
                    ?setSelceted(tLength-1)
                    :setSelceted((prev)=>prev-1)
                }}
                src={leftArrow} alt=''/>
                <img
                 onClick={()=>{
                    selceted===tLength-1
                    ?setSelceted(0)
                    :setSelceted((prev)=>prev+1)
                }}
                 src={rightArrow} alt=''/>
            </div>

        </div>
        {/*==== end right testemonials==== */}
    </div>
  )
}

export default Testemonials