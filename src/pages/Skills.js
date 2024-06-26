import React, {useEffect} from 'react';
import { motion } from 'framer-motion';

import { FaHtml5, FaCss3, FaJs, FaPhp, FaPython, FaReact, FaVuejs, FaGitAlt, FaFigma, FaNode, FaGoogle, FaAws, FaServer } from "react-icons/fa";
import { DiPhotoshop, DiVisualstudio, DiDatabase, DiApple, DiWindows } from "react-icons/di";
import { SiFirebase, SiGatsby, SiJquery, SiTypescript} from "react-icons/si";

import Tilt from 'react-parallax-tilt';

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
    useEffect(() => {
        document.title = 'Leszekk.eu | skills'
    }, []);
    return(
        <motion.div className='skills cnt' variants={variants} initial='hidden' animate='show'>
            <h1>I'm focused on web technologies.</h1>
            <h3 className='h3'>Let's make the web better!</h3>
            <br></br>
            <h3>My Skills (always learning more)</h3>
            <div className='skills-box'>
                <Tilt className='skills-category' scale={1.06} transitionSpeed={3000} glareEnable={true} glareMaxOpacity={0.3} glareColor="lightblue" glarePosition="all" tiltMaxAngleX={11} tiltMaxAngleY={11}>
                    <h2>Languages</h2>
                    <div className='skills-category-elms'>
                        <motion.span variants={item} className='skill'><FaHtml5/> HTML5</motion.span>
                        <motion.span variants={item} className='skill'><FaCss3/> CSS & Sass</motion.span>
                        <motion.span variants={item} className='skill'><FaJs/> JavaScript</motion.span>
                        <motion.span variants={item} className='skill'><SiTypescript/> TypeScript</motion.span>
                        <motion.span variants={item} className='skill'><FaPhp/> PHP</motion.span>
                        <motion.span variants={item} className='skill'><FaPython/> Python</motion.span> 
                    </div>
                </Tilt>
                <Tilt className='skills-category' scale={1.06} transitionSpeed={3000} glareEnable={true} glareMaxOpacity={0.3} glareColor="lightblue" glarePosition="all" tiltMaxAngleX={11} tiltMaxAngleY={11}>
                    <h2>Freamworks</h2>
                    <div className='skills-category-elms'>
                        <motion.span variants={item} className='skill'><FaReact/>React.js</motion.span>
                        <motion.span variants={item} className='skill'><FaVuejs/>Vue.js</motion.span>
                    </div>
                </Tilt>
                <Tilt className='skills-category' scale={1.06} transitionSpeed={3000} glareEnable={true} glareMaxOpacity={0.3} glareColor="lightblue" glarePosition="all" tiltMaxAngleX={11} tiltMaxAngleY={11}>
                    <h2>Tools</h2>
                    <div className='skills-category-elms'>
                        <motion.span variants={item} className='skill'><DiVisualstudio/> VS Code</motion.span>
                        <motion.span variants={item} className='skill'><FaGitAlt/> Git</motion.span>
                        <motion.span variants={item} className='skill'>npm & yarn</motion.span>
                        <motion.span variants={item} className='skill'>Insomnia</motion.span>
                        <motion.span variants={item} className='skill'><FaFigma/> Figma</motion.span>
                        <motion.span variants={item} className='skill'><DiPhotoshop/> Photoshop</motion.span>
                    </div>
                </Tilt>
                <Tilt className='skills-category' scale={1.06} transitionSpeed={3000} glareEnable={true} glareMaxOpacity={0.3} glareColor="lightblue" glarePosition="all" tiltMaxAngleX={11} tiltMaxAngleY={11}>
                    <h2>Other</h2>
                    <div className='skills-category-elms'>
                        <motion.span variants={item} className='skill'><SiFirebase/> Firebase.js</motion.span>
                        <motion.span variants={item} className='skill'>GSAP.js</motion.span>
                        <motion.span variants={item} className='skill'>Framer Motion</motion.span>
                        <motion.span variants={item} className='skill'><FaNode/> Node.js</motion.span>
                        <motion.span variants={item} className='skill'><SiGatsby/> Gatsby.js</motion.span>
                        <motion.span variants={item} className='skill'>Express.js</motion.span>
                        <motion.span variants={item} className='skill'><SiJquery/>JQuery.js</motion.span>
                        <motion.span variants={item} className='skill'><DiDatabase/> SQL</motion.span>
                    </div>
                </Tilt>
                <Tilt className='skills-category' scale={1.06} transitionSpeed={3000} glareEnable={true} glareMaxOpacity={0.3} glareColor="lightblue" glarePosition="all" tiltMaxAngleX={11} tiltMaxAngleY={11}>
                    <h2>Working on</h2>
                    <div className='skills-category-elms'>
                        <motion.span variants={item} className='skill'><DiApple/> macOS</motion.span>
                        <motion.span variants={item} className='skill'><DiWindows/> Windows</motion.span>
                    </div>
                </Tilt>
                <Tilt className='skills-category' scale={1.06} transitionSpeed={3000} glareEnable={true} glareMaxOpacity={0.3} glareColor="lightblue" glarePosition="all" tiltMaxAngleX={11} tiltMaxAngleY={11}>
                    <h2>Cloud Computing</h2>
                    <div className='skills-category-elms'>
                        <motion.span variants={item} className='skill'><FaAws/> AWS</motion.span>
                        <motion.span variants={item} className='skill'><FaGoogle/> Cloud</motion.span>
                        <motion.span variants={item} className='skill'><FaServer/> Self-hosted</motion.span>
                    </div>
                </Tilt>
            </div>
        </motion.div>
    )
}
export default Skills;