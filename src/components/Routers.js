import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Menu from './Menu';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
const Routers = () =>{
    return(
        <Router>
            <div className='container'>
                <Menu/>
                <Switch>
                    <Route path='/contact'>
                        <Contact/>
                    </Route>
                    <Route path='/projects'>
                        <Projects/>
                    </Route>
                    <Route path='/skills'>
                        <Skills/>
                    </Route>
                    <Route path='/post/:id'>
                        <BlogPost/>
                    </Route>
                    <Route path='/blog'>
                        <Blog/>
                    </Route>
                    <Route path='/webaily' component={()=>window.location.href = 'https://www.webaily.com'}/>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch> 
            </div>
        </Router>
    )
}
export default Routers;