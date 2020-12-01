import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavMenu } from './components/NavMenu';
import { Home } from './components/Home';
import { Partners } from './components/Partners';
import { ThisPartner } from './components/ThisPartner';
import { Services } from './components/Services';
import { News } from './components/News';
import { ThisNews } from './components/ThisNews';

import './custom.css'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="App">

                        <NavMenu />
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/home' component={Home} />
                            <Route path='/partners' exact component={Partners} />
                            <Route path='/partners/:username' component={ThisPartner} />
                            <Route path='/services' component={Services} />
                            <Route path='/news' component={News} />
                            <Route path='/news/:id' component={ThisNews} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    };

}