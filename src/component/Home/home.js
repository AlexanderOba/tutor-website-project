import React, { useEffect } from 'react';
import './home.css';
import{ Link } from 'react-router-dom';
import{ Container, Row , Col, Carousel } from 'react-bootstrap';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import AOS from 'aos';
import "aos/dist/aos.css";


const Home=()=>{

   useEffect( () => {

      AOS.init({
         duration:1500,
      });
      AOS.refresh();
    }, []);

    return(
       <div>
          <div className="section-1">
              <Header />
              <Container>
                  <Row>
                     <Col sm={12} lg={12} md={12} className="column-1" >
                         <h2 >
                              <span className="heading-primary">Hire The Right Tutor Today!</span>
                         </h2>   
                           <p>
                             <span className="heading-primary-descr">Book one on one lessons with verified</span>
                             <span className="heading-primary-descr">tutors in your area</span>
                          </p> 
                          <Link to="/signup"> <span className="button-blue">Hire a tutor <i class="fa fa-arrow-right"></i></span></Link>
                          <p className="heading-primary-descr">want to become a Toptutor? <Link to="/signup">Sign up</Link> now </p>
                     </Col>
                 </Row>
              </Container>
          </div>
          <div className="section-2">
              <div className="info-section">
                  <Container >
                          <div className="column-2"  data-aos='fade-right'>
                              <h4>
                                  Let a tutor help you to acquire new skills and Knowledge today
                              </h4>
                          </div>
                  </Container>
             </div>    
             
             <div className="section-about">
                  <Container>
                     
                        <h2 className="heading-about" data-aos='fade-down'>What We Offer</h2>
                   <Row>       
                      <Col md={3}>
                         <div  className="margin-bottom" data-aos='fade-up' >
                            <div className="title" >
                               <span className="icon icon__home"></span>
                               <h5>Home Tutoring</h5>
                            </div>
                            <p>
                              It's a unique opportunity to learn in the home with your 
                             expected tutor in different categories. Everything is in favor of your need.
                             </p>
                         </div>
                         <div data-aos='fade-up'>
                            <div className="title">
                             <span className="icon icon__online"></span>
                             <h5>Online Tutoring</h5>
                            </div>
                            <p >
                             Connect with the best tutors from anywhere 
                             and take online classes by using different tools. Make your life more easier with this process.
                           </p>
                        </div>
                      </Col>
                      <Col md={6}>
                          <div className="title">
                             <span className="centered-image"></span>
                          </div>
                      </Col>
                      <Col md={3}>
                         <div className="margin-bottom" data-aos='fade-right'>
                            <div className="title">
                             <span className="icon icon__group"></span>
                             <h5>Group  Tutoring</h5>
                            </div>   
                            <p className="margin-bottom">
                            A group of students
                             can full fill their hunger for learning at an affordable money range. Get ready for the competitive world!
                            </p>
                         </div>
                         <div data-aos='fade-right'>
                            <div className="title">
                             <span className="icon icon__package"></span>
                             <h5>Package Tutoring</h5>
                            </div>
                          
                            <p className="margin-bottom">
                               Choose the tutor from a variety of
                               categories and start learning for the specific one. And explore yourself in a newer version of you.
                            </p>
                         </div>
                      </Col>
                   </Row>  
                 <div className="centered-button" data-aos='fade-up' ><Link to="/signup" ><span className="button-blue signup-btn">Sign Up</span> </Link></div> 
                  </Container>
             </div>     
          </div>
          <div className="section-3">
              <Container>
                   <h2 data-aos='fade-up'>How It Works For Students/Parents?</h2>
                   <Row> 
                      <Col md={4}>
                          <div className="margin-top" data-aos='flip-left'>
                             <span className="icon icon__client"></span>
                             <h2>Post your<br></br> tutor requirements</h2>
                              <p>Post your Tutor requirements. Our experts will analyze it 
                               and live your requirements to our job board.</p>
                         </div>
                      </Col>
                      <Col md={4} lg={4} sm={6}>
                         <div className="margin-top" data-aos='flip-left'>
                             <span className="icon icon__search"></span>
                             <h2>Get the maximum<br></br>first 5 best CVs</h2>
                              <p>You'll receive the 5 (max) best Tutors' CVs in your 
                                  account within 48 hours which closely match to your requirements</p>
                         </div>
                      </Col>
                      <Col md={4} lg={4}>
                         <div className="margin-top" data-aos='flip-left'>
                             <span className="icon icon__best-tutor"></span>
                             <h2>Select the best one<br></br>& start learning</h2>
                              <p>Choose the best one among the 5 CV's. Offer 
                                  the selected Tutor for few trial classes before taking the regular classes.</p>
                         </div>
                      </Col>
                   </Row>  
              </Container>
          </div>
          <div className="section-4">
             <h2 data-aos='fade-down'>Serving Category</h2>
             <Carousel data-aos='zoom-in-up'>
                <Carousel.Item>
                   <Row>
                      <Col md={4}>
                          <div className="cat-content">
                            <span className="category-img admission"/>
                            <h2 className="cat-heading">Admission Test</h2>
                         </div>
                     </Col>
                      <Col md={4}>
                         <div className="cat-content">
                            <span className="category-img prof-skill"/>
                            <h2 className="cat-heading">Professional Skill</h2>
                         </div>
                      </Col>
                      <Col md={4}>
                         <div className="cat-content">
                            <span className="category-img test-preparation"/>
                            <h2 className="cat-heading">Test Preparation</h2>
                         </div>
                      </Col>
                   </Row>
                </Carousel.Item>
                <Carousel.Item>
                   <Row>
                      <Col md={4}>
                          <div className="cat-content">
                            <span className="category-img special-skills"/>
                            <h2 className="cat-heading">Special skills</h2>
                         </div>
                     </Col>
                      <Col md={4}>
                         <div className="cat-content">
                            <span className="category-img proj-assignment"/>
                            <h2 className="cat-heading">Project/Asignment</h2>
                         </div>
                      </Col>
                      <Col md={4}>
                         <div className="cat-content">
                            <span className="category-img arts"/>
                            <h2 className="cat-heading">Arts</h2>
                         </div>
                      </Col>
                   </Row>
                </Carousel.Item>
             </Carousel>
          </div>
          <div className="section-5">
             <Container>
                   <h2 data-aos='fade-up'>How It Works For Tutors</h2>
                   <Row> 
                      <Col md={4}>
                          <div className="margin-top" data-aos='flip-left'>
                             <span className="icon avatars"></span>
                             <h2>Create a free<br></br> Account</h2>
                              <p>Make your profile in minutes. Add your educational
                                  information, preferred locations, classes/courses, and make your profile presentable.</p>
                         </div>
                      </Col>
                      <Col md={4} lg={4} sm={6}>
                         <div className="margin-top" data-aos='flip-left'>
                             <span className="icon icon__search"></span>
                             <h2>Apply to Your Desired <br></br>Tuition Job</h2>
                              <p>Check our job board everyday and apply to your preferred 
                                 tutoring jobs that match your skills.</p>
                         </div>
                      </Col>
                      <Col md={4} lg={4}>
                         <div className="margin-top" data-aos='flip-left'>
                             <span className="icon grp-teacher"></span>
                             <h2>Start Tutoring</h2>
                              <p>Get selected by students/parents if your expertise matches their requirements</p>
                         </div>
                      </Col>
                   </Row>  
              </Container>
          </div>
          <Footer/>
        </div>
    )
}
export default Home;