import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './component/Home/home';
import Signup from './component/Signup/signup';
import Signin from './component/Signin/Signin';
import About from './component/AboutUs/about';
import Layout from './HOCs/layout';

class Routes extends Component{
    render(){
        return(
           
            <Layout>
                <Switch>
                    <Route   path ="/signup" component={Signup}/>
                    <Route   path ="/signin" component={Signin}/>
                    <Route   path ="/aboutus" component={About}/>
                    <Route  exact path ="/" component={Home}/>
                </Switch>
            </Layout>
    
           
        )
    }
}
export default Routes;