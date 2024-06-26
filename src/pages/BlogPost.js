import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { withRouter } from "react-router-dom";
import '../blogPage.css';

const BlogPost = ({match}) => {
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
    const id = match.params.id;

    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const getContent = () => {
        setIsLoading(true);
        window.fetch(`https://cms.webaily.com/api/article.php/?id=${id}`)
        .then(res => res.json())
        .then(data => {
            if(data.category === 'Leszekk.eu' || data.category === 'Webaily'){
                setResponse(data)
                setIsLoading(false);
            }else{
                setError(true);
                setIsLoading(false);
            }
        })
        .catch(err => {
            setError(true);
            setIsLoading(false);
        })
    }
    useEffect(() => {
        document.title = 'Leszekk.eu | Article';
        if(id){
            getContent();
        }
    }, []);
    return(
        <>
            <motion.div variants={variants} initial='hidden' animate='show' className='blogPost cnt'>
                {!isLoading && response !== null ? (
                    <>
                        <h1>{response.title}</h1>
                        <div className='blogPostContent'>
                            <div dangerouslySetInnerHTML={{__html: response.content}} className='content'></div>
                            <p>Updated {response.time}</p>
                            <p>Source: {response.category}</p>
                        </div>
                    </>
                ): (
                    null
                )}   
                {isLoading ? (
                    <h3>Loading...</h3>
                ): ( null)}
                {error ? (
                    <h1>404 - Not Found</h1>
                ) : (null)}                
            </motion.div>
        </>
    )
}
export default withRouter(BlogPost);