import React from 'react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";

const Home = () => {
    const variants = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 1
            }
        }
    }
    const item = {
        hidden:{opacity:0,y:80},
        show:{opacity:1,y:0,transition:{duration:1}}
    }
    return(
        <>
            <div className='animated-border'>
                <div className='animated-border-in'>
                    <span>
                        <img alt='L' className='logo-a-img' src={logo}/>
                    </span>
                </div>
            </div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className='animated-border-mobile'>
                <div className='animated-border-mobile-in'></div>
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className='abm2'>
                <div className='animated-border-mobile-in abm2in'></div>
            </motion.div>
            <motion.div variants={variants} initial='hidden' animate='show' className='home cnt'>
                <motion.h1 variants={item} className='home-h1'>Hello, I'm <motion.b animate={{color: '#ff4028', transition: {delay: 1.5}}} className='nameTitle'>Leszek Korzan</motion.b></motion.h1>
                <motion.h3 variants={item} className='h3'>Front-End Development is my passion.</motion.h3>
                <motion.div variants={item}>
                    <button className='black-btn showcontact'>
                        <Link className='white-a' to='/contact'>Contact</Link>
                    </button>
                    <button className='github-link'>
                        <a rel='noopener' href='https://github.com/leszekkorzan'>
                            <FaGithub className='icon-btn'/>GitHub
                        </a>
                    </button>
                </motion.div>
                <div className='copyright'>2016-2021 &copy; Leszekk.eu</div>
            </motion.div>
        </>
    )
}
export default Home;