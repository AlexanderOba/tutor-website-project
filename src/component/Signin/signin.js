import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import Axios from "axios";
import Header_2 from '../Header_2/header_2';
import { API } from "../../config";
import eye from "../../images/eye.png";
import eyeclose from "../../images/eye-off.png";
import Footer from "../Footer/footer";
import guardianimg from "../../images/guardian.png";
import tutorimg from "../../images/tutoricn.png"

const Signin = withRouter(() => {
  const [state, setState] = useState({
    email: "",
    password: "",
    errorMessage: "",
    successMessage: "",
    isLoading: false,
    passwordIsOpen: true,
    error: false,
  });
  const {
    email,
    password,
    passwordIsOpen,
    error,
    errorMessage,
    successMessage,
    isLoading,
  } = state;
  const sendFormData = () => {
    setState({
      ...state,
      isLoading: true,
    });
    const data = {
      email,
      password,
    };
    Axios
      .post(`${API}/accounts/login`, data)
      .then((response) => {
        console.log(response);
        // if (response.status === 200) {
        // //   localStorage.setItem(
        // //     "userToken",
        // //     JSON.stringify(response?.data?.token)
        //   );
        // }
        setState({
          ...state,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        if (error && error.response && error.response.data) {
          return setState({
            ...state,
            // errorMessage: error?.response?.data[0].message,
            isLoading: false,
            error: true,
          });
        }
        setState({
          ...state,
          errorMessage: "Login failed, check your internet connection",
          isLoading: false,
          error: true,
        });
      });
  };
  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errorMessage: "",
    });
  };
  const hidePassword = () => {
    setState({
      ...state,
      passwordIsOpen: state.passwordIsOpen ? false : true,
    });
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (email=="" && password == ""){
      return setState({
        ...state,
        errorMessage: "please enter your details"
      })
    }
    if (email === "") {
      return setState({
        ...state,
        errorMessage: "Please enter your email",
      });
    }
    if (password === "") {
      return setState({
        ...state,
        errorMessage: "Please enter your password",
      });
    } else {
      sendFormData();
    }
  };
  return (
    <div>
       <Header_2 style={{
        boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
        position: "relative"
      }}/> 
      <div className="rdsignup-section paddit">
        <Container>
          <Row className="rsignuprow">
            <Col md={8} className="paneldshbdselector">
              <Row>
                <Col md={6} >
                  <label className="guardinsltrdv">
                     <span className="panel-img">
                        <img src={guardianimg}/>
                     </span>
                      <div className="paneltext">
                         <h6>Guardian or Students</h6>
                         <p>Hi! I need a tutor</p>
                       </div>
                       <div className="panelicon">
                         <input type="radio"/>
                         <div className="radiobtns">
                         <span class="fa fa-check" aria-hidden="true"></span>
                         </div>
                       </div>
                  </label>
               </Col>
               <Col md={6}>
                  <label className="guardinsltrdv">
                     <span className="panel-img">
                        <img src={tutorimg}/>
                     </span>
                      <div className="paneltext">
                         <h6>Tutor</h6>
                         <p>Hi! i'm in need of tuition</p>
                       </div>
                       <div className="panelicon">
                         <input type="radio"/>
                         <div className="radiobtns">
                         <span class="fa fa-check" aria-hidden="true"></span>
                         </div>
                       </div>
                  </label>
               </Col>
             </Row>
           </Col>
        </Row>
          <Row className="rsignuprow">
            <Col md={7}>
              <Form className="rdsignupform" onSubmit={validateForm}>
                <div className="rdsignupfrmdv">
                  <h4 className="sgnfrmhder">Log In</h4>
                  <div>
                    <div className="sgnupfrmline"></div>
                    <span className="sgnupdescr">(Welcome back)</span>
                  </div>
                </div>
                {successMessage && (
                  <Alert
                    key={2}
                    variant="success"
                    className=" alertzuccess text-center"
                  >
                    {successMessage}
                  </Alert>
                )}
                {errorMessage && (
                  <Alert
                    key={2}
                    variant="danger"
                    className="alertzuccess text-center"
                  >
                    {errorMessage}
                  </Alert>
                )}
                <label>
                  <span className="rdfrmlbl"> Email Address </span>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={onChangeHandler}
                    placeholder="Enter your Email Address"
                    size={70}
                    className="form-control rdsignupinput"
                  />
                </label>
                <label>
                  <span className="rdfrmlbl">Password</span>
                  <input
                    type={passwordIsOpen ? "password" : "text"}
                    name="password"
                    value={password}
                    onChange={onChangeHandler}
                    placeholder="Enter your Password"
                    size={75}
                    onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      validateForm(e);
                    }
                  }}
                    className="form-control rdsignupinput"
                  />
                </label>
                <div className="text-right">
                  {passwordIsOpen ? (
                    <img
                      src={eye}
                      className="hideeye"
                      onClick={hidePassword}
                      alt="hideeye"
                    />
                  ) : (
                    <img
                      src={eyeclose}
                      className="hideeye"
                      onClick={hidePassword}
                      alt="hideeye"
                    />
                  )}
                </div>
                <div className="rdsigninp">
                  <p>
                    <Link to="/password_recovery">Forgot your password?</Link>
                  </p>
                </div>
                <div className="rdsgnupfrmbtndv">
                  <button
                    type="submit"
                    onClick={validateForm}
                    className="rdsgnfrmbtn rdsgnup-animated"
                  >
                    {!isLoading ? "Login" : "Processing..."}
                  </button>
                </div>
                <p className="rdsgnalready">
                <Link to="/signup"> Don't have an account?Sign Up</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
});

export default Signin;