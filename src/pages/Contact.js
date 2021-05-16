import React from 'react';
import { motion } from 'framer-motion'

const Contact = () => {
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
        <motion.div variants={variants} initial='hidden' animate='show' className="contact">
            <h1>Contact via email is the best option - leszekk@leszekk.eu</h1>
            <h3 className="h3">Few another options:</h3>
            <div className="boxes contact-box">
                <motion.a variants={item} target="_blank" rel="noopener" href="https://github.com/leszekkorzan"><div className="contact-option"><h1><img className="contact-icon" src="img/github.svg"/>GitHub</h1><p>Check out my profile!</p></div></motion.a>
                <motion.a variants={item} target="_blank" rel="noopener" href="https://twitter.com/leszekkorzan"><div className="contact-option"><h1><img className="contact-icon" src="img/twitter.svg"/>Twitter</h1><p>Check out my Twitter profile!</p></div></motion.a>
                <motion.a variants={item} target="_blank" rel="noopener" href="https://leszekk.eu/web-devs"><div className="contact-option"><h1><img className="contact-icon" src="img/d-logo.svg"/>Discord</h1><p>Join to Web Devs Team server!</p></div></motion.a>
            </div>
        </motion.div>
    )
}
export default Contact;