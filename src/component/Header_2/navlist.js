import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-around;
    width: 42%;
    color: #333;
    font-size: 14px;
    align-items:  baseline;
    
    li a{
        list-style: none;
        text-decoration: none;
    }
@media screen and (max-width:1024px){
     width: 60%;
}
@media screen and (max-width:760px){
    position: fixed;
    left: -1px;
    height: 92vh;
    top: 8vh;
    background-color:  #0675c1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    z-index: -6;
    transform: ${({open}) => open ?'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.5s ease-in-out;


`;

const Navlist=({open})=>{
    return(
            <Ul open={open}>
                   <li> <NavLink to="/" className="navlinks_2">Home</NavLink> </li>
                   <li> <NavLink  className="navlinks_2" to="/aboutus" activeStyle={{fontWeight: "700"}}>About Us</NavLink> </li> 
                   <li> <NavLink to="#" className="navlinks_2">Job Board</NavLink> </li>
                   <li> <NavLink to="/signin" className="navlinks_2" activeStyle={{fontWeight: "700"}}>Sign in</NavLink> </li>
                   <li> <NavLink to="/tutor_signup"><span className="button_2">Become A Tutor</span></NavLink></li>
           </Ul>
    )
}
export default Navlist;