import React from 'react';
import { motion } from 'framer-motion'

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
        <motion.div variants={variants} initial='hidden' animate='show' className="enterprise">
            <h1 className="enterpriseElm">Korzan Dev Enterprise</h1>
            <h3 className="enterpriseElm">services, web applications, high performance hosting</h3>
            <br/>
            <h3 className="enterpriseElm">contact: enterprise@leszekk.eu</h3>
            <br/>
            <h2 className="enterpriseElm">Access to the services:</h2>
            <div className="boxes enterprise-box">
                <motion.a variants={item} target="_blank" rel="noopener" href="https://mail.leszekk.eu/"><div className="enterprise-option"><h1>Webmail</h1><p>Access to your mailbox.</p></div></motion.a>
                <motion.a variants={item} target="_blank" rel="noopener" href="https://korzan-dev-enterprise-status.netlify.app/"><div className="enterprise-option"><h1>Analytics System</h1><p>Access to Leszekk.eu Analytics System by Project Status Checker.</p></div></motion.a>
                <motion.a variants={item} target="_blank" rel="noopener" href="https://korzan-dev-enterprise-status.netlify.app/"><div className="enterprise-option"><h1>Project Info</h1><p>Access to your project informations in Project Status Checker.</p></div></motion.a>
            </div>
        </motion.div>
    )
}
export default Enterprise;