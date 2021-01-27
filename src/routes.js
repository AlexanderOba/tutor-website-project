import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './component/Home/home';
import Signup from './component/Signup/signup';
import About from './component/AboutUs/about';
import Layout from './HOCs/layout';

class Routes extends Component{
    render(){
        return(
           
            <Layout>
                <Switch>
                    <Route  exact path ="/" component={Home}/>
                    <Route   path ="/signup" component={Signup}/>
                    <Route   path ="/aboutus" component={About}/>
                </Switch>
            </Layout>
    
           
        )
    }
}
export default Routes;