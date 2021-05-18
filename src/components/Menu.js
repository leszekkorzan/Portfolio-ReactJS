import React, {useState} from 'react';
import menuIcon from '../img/fav/android-chrome-192x192.png';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const menuList = [
    {
        title: 'Skills',
        path: '/skills'
    },
    {
        title: 'My Projects',
        path: '/projects'
    },
    {
        title: 'Contact Me',
        path: '/contact'
    },
    {
        title: 'Enterprise',
        path: '/enterprise'
    }
]
const Menu = () =>{
    const [btnClass, setBtnClass] = useState('not-active')
    const [showMenu, setShowMenu] = useState('')
    const variants = {
        hidden: { y: 0, opacity: 0, transitionEnd: {display: 'none'}},
        visible: { display: 'block', y: 50, opacity: 1, transition: {delay: 0.4}},
    }
    const toggleMenu = () =>{
        if(btnClass === 'active'){
            setBtnClass('not-active');
            setShowMenu('hidden');
            setTimeout(()=>{
                document.querySelector('.cnt').classList.remove('hide')
            }, 400)
        }else{
            document.querySelector('.cnt').classList.add('hide')
            setShowMenu('visible')
            setBtnClass('active');
        }

    }
    return(
        <div className='menu'>
            <div className='menu-title'>
                <Link onClick={()=>btnClass==='active'&&toggleMenu()} to='/'>
                    <img alt='Logo' className='menu-logo' src={menuIcon}/>LESZEKK.eu
                </Link>
            </div>
            <div onClick={toggleMenu} className={`btn ${btnClass}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <motion.div transition={{duration:0.3}} animate={showMenu} variants={variants} className='menu-nav'>
                {menuList.map(i =>
                    <div onClick={()=>btnClass==='active'&&toggleMenu()} className='menu-el' key={i.path}>
                        <Link className='menu-link' to={i.path}>{i.title}</Link>
                    </div>
                )}
            </motion.div>
        </div>
    )
}
export default Menu;