import React from 'react';
import {Helmet} from "react-helmet";
import { motion } from 'framer-motion'
import { DiGoogleAnalytics, DiTerminal, DiDatabase } from "react-icons/di";
import '../enterprise.css';

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
        <>
            <Helmet
                title="Webaily"
                meta={[
                    {
                        name: "description",
                        property: "og:description",
                        content: "Webaily - coding enterprise. Services, web applications, high performance hosting."
                    },
                    { property: "og:title", content: "Webaily" },
                    { property: "og:url", content: "https://leszekk.eu/webaily" }
                ]}
            />
            <motion.div variants={variants} initial='hidden' animate='show' className="enterprise cnt">
                <h1 className='webaily-h1'><motion.b className='webaily' animate={{color: '#fa4028', transition: {delay: 1}}}>Webaily</motion.b> - Coding Enterprise</h1>
                <h3>services, web applications, high performance hosting</h3>
                <br/>
                <h3>contact: webaily@leszekk.eu</h3>
                <div className="boxes enterprise-box">
                    <motion.a href='/post/107' variants={item}><div className="enterprise-option"><h1>Web-Apps</h1><p>Professional designing, programming websites and applications using best technologies.</p><DiTerminal className='enterprise-icon'/></div></motion.a>
                    <motion.a href='/post/108' variants={item}><div className="enterprise-option"><h1>SEO</h1><p>SEO optimization of websites, internet marketing, product analytics.</p><DiGoogleAnalytics className='enterprise-icon'/></div></motion.a>
                    <motion.a href='/post/109' variants={item}><div className="enterprise-option"><h1>Hosting</h1><p>We provide efficient, secure hosting with many dedicated services such as encrypted mail.</p><DiDatabase className='enterprise-icon'/></div></motion.a>
                </div>
                <br></br>
                <br></br>
                <h2>Resources:</h2>
                <motion.a variants={item} href='https://mail.leszekk.eu/' className='link-enterprise'>Webmail</motion.a>
                <motion.a variants={item} target='_blank' href='https://cms.leszekk.eu/forms/?id=Leszekk.eu' className='link-enterprise'>Contact</motion.a>
                <br></br>
                <br></br>
                <br></br>
                <motion.a variants={item} href='/post/110' className='link-enterprise'>Share</motion.a>
                <br></br>
                <p className='copyright2'>2021 &copy; Webaily</p>
            </motion.div>
        </>
    )
}
export default Enterprise;