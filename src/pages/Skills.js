import React from 'react';
import { motion } from 'framer-motion'

const Skills = () => {
    const variants = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 1
            }
        }
    }
    const item = {
        hidden:{opacity:0,y:50},
        show:{opacity:1,y:0,transition:{duration:0.2}}
    }
    return(
        <motion.div className='skills' variants={variants} initial='hidden' animate='show'>
            <h1>I'm focused on front-end technologies.</h1>
            <h3 className='h3'>Let's make the web better!</h3>
            <br></br>
            <h3>My Skills (Learning)</h3>
            <div className='skills-box'>
                <motion.span variants={item} className='skill'>HTML5</motion.span>
                <motion.span variants={item} className='skill'>CSS3</motion.span>
                <motion.span variants={item} className='skill'>JavaScript</motion.span>
                <motion.span variants={item} className='skill'>React.js</motion.span>
                <motion.span variants={item} className='skill'>Vue.js</motion.span>
                <motion.span variants={item} className='skill'>Firebase.js</motion.span>
                <motion.span variants={item} className='skill'>GSAP.js</motion.span>
                <motion.span variants={item} className='skill'>PWA</motion.span>
                <motion.span variants={item} className='skill'>PHP</motion.span>
                <motion.span variants={item} className='skill'>Python</motion.span>
            </div>
        </motion.div>
    )
}
export default Skills;