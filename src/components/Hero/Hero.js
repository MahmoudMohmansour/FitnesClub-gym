import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import HeroImg from '../../assets/hero_image.png'
import HeroImgBack from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transtion={type:'spring', duration:3}
    const mobile=window.innerWidth<=768?true:false
  return (
    <div className='hero' id='Home'>
        <div className='blur hero-blur'></div>
        <div className='left-h'>
            <Header/>
            {/*=====start the best ad===== */}
            <div className='the-best-ad'>
                <motion.div 
                initial={{left:mobile?"165px":"238px"}}
                whileInView={{left:'8px'}}
                transition={{...transtion , type:'tween'}}>
                    
                </motion.div>
                <span>The best fitness club in the twon</span>
            </div>
            {/*=====end the best ad===== */}
            {/*=====start Heading===== */}
            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                    </span>
                </div>
            </div>
            {/*=====end heading===== */}
            {/*=====start figures===== */}
            <div className='figuers'>
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='6' preFix="+"/>
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={978} start={800} delay='6' preFix="+"/>
                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={0} delay='4' preFix="+"/>
                    </span>
                    <span>fitnes programs</span>
                </div>
            </div>
            {/*=====end figures===== */}
            {/*=====start hero buttons===== */}
            <div className='hero-buttons'>
                <buttons className='btn'>Get Started</buttons>
                <buttons className='btn'>Learn More</buttons>
            </div>
            {/*=====end hero buttons===== */}

        </div>
        <div className='right-h'>
            <button className='btn'>Join Now</button>

            <motion.div
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transtion}
            className='heart-rate'>
                <img src={Heart} alt='heart image'/>
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>
            {/*==== start hero images==== */}
            <img src={HeroImg} alt='hero image' className='hero-image'/>
            <motion.img
            initial={{right:'11rem'}}
            whileInView={{right:'20rem'}}
            transition={transtion}
             src={HeroImgBack} alt='hero image back' className='hero-image-back'/>
            {/*==== end hero images==== */}
            {/*==== start calories==== */}
            <motion.div
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transtion}
             className='calories'>
                <img src={Calories} alt='calories image'/>
                <div>
                    <span>Calories Burend</span>
                    <span>220 kcal</span>
                </div>
                
            </motion.div>
            {/*==== end calories==== */}
        </div>
    </div>
  )
}

export default Hero