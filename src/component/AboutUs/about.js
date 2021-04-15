import React,{ useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Header_2 from '../Header_2/header_2';

const About = ()=>{
    
        useEffect( () => {

            AOS.init({
               duration:1500,
            });
            AOS.refresh();
          }, []);
      
        return(
          <div className="centered-message">
             <div>
                 <Header_2 style={{
                     boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
                     position: "relative"
                  }} />
             </div>
          </div>
        )

}
export default About;