import React, {useEffect} from 'react';
import { motion } from 'framer-motion';

const projectList = [
    {
        title: 'WebAily',
        description: 'Quickly and easily shorten the url. API also available and extension for Visual Studio Code.',
        url: 'https://webaily.web.app/'
    },
    {
        title: 'Code Leszno',
        description: 'I created Front-End site of Code Leszno. It\'s the organization that organizes meetings and workshops aimed at promoting IT ideas in Leszno.',
        url: 'https://code.leszno.eu/'
    },
    {
        title: 'L-CMS',
        description: 'PHP based post publishing system.',
        url: 'https://cms.leszekk.eu/'
    },
    {
        title: 'Web Devs',
        description: 'Best place to share your dev-profile in cloud!',
        url: 'https://web-devs.web.app/'
    },
    {
        title: 'App Form',
        description: 'This web application allows you to create your own forms, synchronized with the database.',
        url: 'https://form.leszekk.eu'
    },
    {
        title: 'DSC Servers',
        description: 'With this application you can create your own Discord invitation with a friendly url!',
        url: 'https://leszekk.eu/dsc/'
    },
    {
        title: 'Pass Upgrader',
        description: 'Password Upgrader allows you to improve the security of your password without giving up easy and liked words.',
        url: 'https://leszekk.eu/pass-upgrader/'
    },
    {
        title: 'Car Stats',
        description: 'Record tool for managing car route based on PWA and database.',
        url: 'https://carstats.web.app'
    }
]
const Projects = () => {
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
    useEffect(() => {
        document.title = 'Leszekk.eu | projects'
    }, []);
    return(
        <motion.div variants={variants} initial='hidden' animate='show' className='projects cnt'>
            <h1>Projects - more on <a className='link-text' rel='noopener' href='https://github.com/leszekkorzan'>GitHub</a></h1>
            <div className='boxes projects-box'>
                {projectList.map(i=>
                    <motion.a key={i.url} variants={item} target='_blank' rel='noopener' href={i.url}><div className='box'><h1>{i.title}</h1><p>{i.description}</p></div></motion.a>
                )}
            </div>
        </motion.div>
    )
}
export default Projects;