import React from 'react';
import { Link } from 'react-router-dom';
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
                   <li> <Link to="/" className="navlinks_2">Home</Link> </li>
                   <li> <Link  className="navlinks_2" to="/aboutus">About Us</Link> </li> 
                   <li> <Link to="#" className="navlinks_2">Job Board</Link> </li>
                   <li> <Link to="/signin" className="navlinks_2">Sign in</Link> </li>
                   <li> <Link to="/signup"><span className="button_2">Become A Tutor</span></Link></li>
           </Ul>
    )
}
export default Navlist;