import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route, Redirect } from 'react-router-dom';
import './Body.css';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Products from './Products'

class Body extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className='bodyContent'>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/aboutUs" component={About}></Route>
                        <Route path="/contactUs" component={Contact}></Route>
                        <Route path="/services" component={Products}></Route>
                        <Redirect to="/"></Redirect>
                    </Switch>
                </div>
            </>
        );
    }
}

export default Body;