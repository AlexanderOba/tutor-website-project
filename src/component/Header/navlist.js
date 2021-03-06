import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-around;
    width: 40%;
    color: #fff;
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
                   <li> <NavLink to="/" className="navlinks" activeStyle={{fontWeight: "700"}}>Home</NavLink> </li>
                   <li> <Link  className="navlinks" to="/aboutus">About Us</Link> </li> 
                   <li> <Link to="#" className="navlinks">Job Board</Link> </li>
                   <li> <Link to="/signin" className="navlinks">Sign in</Link> </li>
                   <li> <Link to="/tutor_signup"><span className="button">Become A Tutor</span></Link></li>
           </Ul>
    )
}
export default Navlist;