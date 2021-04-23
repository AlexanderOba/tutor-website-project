import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './component/Home/home';
import Signup from './component/Signup/signup';
import parentSignup from './component/Parent_signup/parentsignup';
import tutorSignup from './component/Tutor_signup/tutorsignup';
import Signin from './component/Signin/signin';
import About from './component/AboutUs/about';
import Layout from './HOCs/layout';
import parentDashboard from './component/Parent_dashboard/parent_dashboard';

class Routes extends Component{
    render(){
        return(
           
            <Layout>
                <Switch>
                    <Route   path ="/signup" component={Signup}/>
                    <Route   path ="/parent_dashboard" component={parentDashboard}/>
                    <Route   path ="/parent_signup" component={parentSignup}/>
                    <Route   path ="/tutor_signup" component={tutorSignup}/>
                    <Route   path ="/signin" component={Signin}/>
                    <Route   path ="/aboutus" component={About}/>
                    <Route  exact path ="/" component={Home}/>
                </Switch>
            </Layout>
    
           
        )
    }
}
export default Routes;