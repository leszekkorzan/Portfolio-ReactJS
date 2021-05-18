import React from 'react';
import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

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
        <motion.div variants={variants} initial='hidden' animate='show' className="contact cnt">
            <h1>Contact via email is the best option - <a className='link-text' href='mailto:leszekk@leszekk.eu'>leszekk@leszekk.eu</a></h1>
            <h3 className="h3">Few another options:</h3>
            <div className="boxes contact-box">
                <motion.a variants={item} target="_blank" rel="noopener" href="https://github.com/leszekkorzan"><div className="contact-option"><h1><FaGithub className="contact-icon"/>GitHub</h1><p>Check out my profile.</p></div></motion.a>
                <motion.a variants={item} target="_blank" rel="noopener" href="https://twitter.com/leszekkorzan"><div className="contact-option"><h1><FaTwitter className="contact-icon"/>Twitter</h1><p>Check out my Twitter profile.</p></div></motion.a>
                <motion.a variants={item} target="_blank" rel="noopener" href="https://linkedin.com/in/leszek-korzan"><div className="contact-option"><h1><FaLinkedin className="contact-icon"/>LinkedIn</h1><p>See my personal profile.</p></div></motion.a>
            </div>
        </motion.div>
    )
}
export default Contact;