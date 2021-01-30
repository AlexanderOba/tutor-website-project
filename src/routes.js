import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
    IonApp,

  } from '@ionic/react';

import Home from './component/Home/home';
import Signup from './component/Signup/signup';
import About from './component/AboutUs/about';
import Layout from './HOCs/layout';

class Routes extends Component{
    render(){
        return(
           
             <Layout>
                 <IonApp>
                     <Switch>
                         <Route   path ="/signup" component={Signup}/>
                         <Route   path ="/aboutus" component={About}/>
                         <Route  exact path ="/" component={Home}/>
                     </Switch>
                </IonApp>
             </Layout>
        )
    }
}
export default Routes;