import React, { Component } from 'react';
import './header.css';
import Burger from './burger';




class Header extends Component {
    render(){
        return(
              <nav>
               <div className="logo">
                  <h5>Toptutors</h5>
               </div>
               <Burger/>
            </nav>
 
        )
    }
}
export default Header;