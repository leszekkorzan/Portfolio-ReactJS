import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Menu from './Menu';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Enterprise from '../pages/Enterprise';

const Routers = () =>{
    return(
        <Router>
            <div className='container'>
                <Menu/>
                <Switch>
                    <Route path='/enterprise'>
                        <Enterprise/>
                    </Route>
                    <Route path='/contact'>
                        <Contact/>
                    </Route>
                    <Route path='/projects'>
                        <Projects/>
                    </Route>
                    <Route path='/skills'>
                        <Skills/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch> 
            </div>

        </Router>
    )
}
export default Routers;