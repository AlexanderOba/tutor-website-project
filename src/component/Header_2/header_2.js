import React, { Component } from 'react';
import './header_2.css';
import Burger from './burger';




class Header_2 extends Component {
    render(){
        return(
            
            <nav style={this.props.style}>
               <div className="logo2">
                  <h5>Toptutors</h5>
               </div>
               <Burger/>
            </nav>

        )
    }
}
export default Header_2;