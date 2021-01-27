import React,{ useEffect } from 'react';
import './signup.css';
import AOS from 'aos';
import "aos/dist/aos.css";



const Signup=()=>{
    useEffect( () => {

        AOS.init({
           duration:1500,
        });
        AOS.refresh();
      }, []);
  
    return(
        <div className="centered-message">
            <div data-aos='zoom-in-up'>
              <h1>Coming Soon guys!!!</h1>
            </div>
        </div>
    )
}
export default Signup;