import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './component/Home/home';
import Signup from './component/Signup/signup'
import Layout from './HOCs/layout';

class Routes extends Component{
    render(){
        return(
           
            <Layout>
                <Switch>
                    <Route  exact path ="/" component={Home}/>
                    <Route  exact path ="/signup" component={Signup}/>
                </Switch>
            </Layout>
    
           
        )
    }
}
export default Routes;