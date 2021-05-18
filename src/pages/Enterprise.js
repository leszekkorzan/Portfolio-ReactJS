import React from 'react';
import { motion } from 'framer-motion'
import { DiGoogleAnalytics, DiTerminal, DiDatabase } from "react-icons/di";


const Enterprise = () => {
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
        <motion.div variants={variants} initial='hidden' animate='show' className="enterprise cnt">
            <h1>Korzan Dev Enterprise</h1>
            <h3>services, web applications, high performance hosting</h3>
            <br/>
            <h3>contact: enterprise@leszekk.eu</h3>
            <div className="boxes enterprise-box">
                <motion.div variants={item}><div className="enterprise-option"><h1>Web-Apps</h1><p>Professional designing, programming websites and applications using best technologies.</p><DiTerminal className='enterprise-icon'/></div></motion.div>
                <motion.div variants={item}><div className="enterprise-option"><h1>SEO</h1><p>SEO optimization of websites, internet marketing, product analytics.</p><DiGoogleAnalytics className='enterprise-icon'/></div></motion.div>
                <motion.div variants={item}><div className="enterprise-option"><h1>Hosting</h1><p>We provide efficient, secure hosting with many dedicated services such as encrypted mail.</p><DiDatabase className='enterprise-icon'/></div></motion.div>
            </div>
            <br></br>
            <br></br>
            <h2>Access to the services:</h2>
            <a href='https://mail.leszekk.eu/' className='link-enterprise'>Webmail</a>
            <a href='https://korzan-dev-enterprise-status.netlify.app/' className='link-enterprise'>Project Info</a>
        </motion.div>
    )
}
export default Enterprise;