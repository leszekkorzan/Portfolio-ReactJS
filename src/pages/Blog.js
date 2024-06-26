import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Blog = () => {
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
    const [response, setResponse] = useState([])
    useEffect(() => {
        document.title = 'Leszekk.eu | blog'
        window.fetch('https://cms.webaily.com/api/articles.php/?website=Leszekk.eu')
        .then(res => res.json())
        .then(data => setResponse(data))
        .catch(err => window.alert("Sorry, error. Try again later."))
    }, []);
    return(
        <>
            <motion.div variants={variants} initial='hidden' animate='show' className='blog cnt'>
                <h1 className='home-h1'>Blog</h1>
                {response.length && response.success === undefined ? (
                    <div className='boxes'>
                        {response.map(obj =>
                            <Link key={obj.id} to={`/post/${obj.id}`}><motion.div variants={item}><Tilt className='box blog-box' scale={1.1} transitionSpeed={3000} tiltMaxAngleX={11} tiltMaxAngleY={11}><h1>{obj.title}</h1><p>updated {obj.time}</p></Tilt></motion.div></Link>
                        )}
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )}
                {response.success === false &&
                    <h2>No content.</h2>
                }
            </motion.div>
        </>
    )
}
export default Blog;