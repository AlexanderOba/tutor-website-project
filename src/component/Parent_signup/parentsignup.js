import React, { useState, useEffect, useRef } from "react";
import './signup.css';
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import Header_2 from '../Header_2/header_2';
import { API } from "../../config";
import Alert from "react-bootstrap/Alert";
import eye from "../../images/eye.png";
import eyeclose from "../../images/eye-off.png";
import drpdwnarr from "../../images/dwn-arrw.png";
import Footer from "../Footer/footer";
import signupimg from "../../images/signupTutor.png";
import * as EmailValidator from "react-email-validator";

const parentSignup = withRouter(() => {
  const [state, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address:"",
    password: "",
    howYouHeardAboutUs: "",
    phone_number: "",
    successMessage: "",
    errorMessage: "",
    userType: "",
    gender:"",
    passwordIsOpen: true,
    error: false,
    isLoading: false,
  });
  const {
    firstname,
    email,
    passwordIsOpen,
    password,
    isLoading,
    howYouHeardAboutUs,
    phone_number,
    address,
    lastname,
    userType,
    gender,
    successMessage,
    errorMessage,
  } = state;

  const onSubmit = () => {
    setFormState({
       ...state,
       isLoading: true 
    });
   const data = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
      info: howYouHeardAboutUs,
      phone_number: phone_number,
      address: address,
      userType: userType,
      sex: gender,
    };
    console.log(data);
    //posting data to the api
    axios
      .post(`${API}/parent/signup/`, data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // localStorage.setItem("userEmail", JSON.stringify(email));
          // setTimeout(() => {
          //   props?.history?.push("/confirm_email");
          //   console.log(props);
          // }, 5000);
          setFormState({
            ...state,
            errorMessage: "",
            successMessage: response.data.message,
            isLoading: false,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error && error.response && error.response.data) {
          return setFormState({
            ...state,
            // errorMessage: error?.response?.data[0].message,
            isLoading: false,
            error: true,
          });
        }
        setFormState({
          ...state,
          errorMessage: "signup failed, check your internet connection",
          isLoading: false,
          error: true,
        });
      }, []);

  }
  const onChangeHandler = (e) => {
    setFormState({
      ...state,
      [e.target.name]: e.target.value,
      errorMessage: "",
      successMessage: "",
    });
  };
  const formActionHandler = (e) => {
    setFormState({
      ...state,
      howYouHeardAboutUs: e.target.value,
    });
  };
  const userCategory = (e) =>{
    setFormState({
      ...state,
      userType: e.target.value,
    })
  console.log(userType)
  };
  const genderType = (e) =>{
    setFormState({
      ...state,
      gender: e.target.value,
    });
  };
  const fieldRef = useRef();
  useEffect(() => {
    if (errorMessage && fieldRef) {
      fieldRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [errorMessage]);
  const validateForm = (e) => {
    e.preventDefault();
  
    if (firstname == "" && lastname == "" && email == "" && password == "") {
      return setFormState({
        ...state,
        errorMessage: "please enter your details",
      });
    }
    
    if (firstname == "") {
      return setFormState({
        ...state,
        errorMessage: "Please enter your first name",
      });
    }
    if (lastname == "") {
      return setFormState({
        ...state,
        errorMessage: "Please enter your lastname",
      });
    }
 
    if (email == "") {
      return setFormState({
        ...state,
        errorMessage: "Please enter your email",
      });
    }
    if(!EmailValidator.validate(email)){
      return setFormState({
        ...state,
        errorMessage: "please of enter a valid email"
      })
   };
   if (gender == "") {
    return setFormState({
      ...state,
      errorMessage: "Please enter your gender"
    });
  }
    if (address == "") {
      return setFormState({
        ...state,
        errorMessage: "Please enter home address",
      });
    }
    if (howYouHeardAboutUs == "") {
      return setFormState({
        ...state,
        errorMessage: "Please enter you heard about us",
      });
    }
    if (phone_number == "") {
      return setFormState({
        ...state,
        errorMessage: "Please enter your phone number",
      });
    }
    if (password == "") {
      return setFormState({
        ...state,
        errorMessage: "Please enter your password",
      });
    } 
    if (password.length < 6) {
      return setFormState({
        ...state,
        errorMessage: "Password must be at least 6 characters long",
        isLoading: false,
      });
    }
    else {
      onSubmit();
    }
  };
  const hidePassword = () => {
    setFormState({
      ...state,
      passwordIsOpen: state.passwordIsOpen ? false : true,
    });
  };
  return (
    <div>
      <Header_2 style={{
        boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
        position: "relative"
      }}/>
      <div className="rdsignup-section ">
        <Container>

          <Row className="rsignuprow">
            <Col md={12} className="rsignupdiv">
              <h1 className="signupheading">Register as a Guardian/Student</h1>
              <p>
                Registering to this website, you accept our
                <span className="t_plinkspn">
                  <Link to="/terms&conditions" target="_blank"> Terms of Use </Link>{" "}
                </span>{" "}
                and our
                <span className="t_plinkspn">
                  {" "}
                  <Link to="/privacy_policy" target="_blank">Privacy Policy</Link>{" "}
                </span>
              </p>
            </Col>
            {/* <Col md={6}>
               <img src={signupimg} className="signupimg img-fluid"/>
            </Col> */}
            <Col md={7}>
              <Form className="rdsignupform" onSubmit={validateForm} ref={fieldRef}>
                <div className="rdsignupfrmdv">
                  <h4 className="sgnfrmhder">Sign Up</h4>
                  <div>
                    <div className="sgnupfrmline"></div>
                    <span className="sgnupdescr">(Welcome to Toptutors)</span>
                  </div>
                </div>
                {successMessage && (
                  <Alert key={2} variant="success" className=" alertzuccess">
                    {successMessage}
                  </Alert>
                )}
                {errorMessage && (
                  <Alert key={2} variant="danger" className="alertzuccess">
                    {errorMessage}
                  </Alert>
                )}
                <Row>
                  <Col md={6}>
                    <label>
                      <span className="rdfrmlbl"> First Name</span>
                      <input
                        type="text"
                        name="firstname"
                        onChange={onChangeHandler}
                        value={firstname}
                        placeholder="Enter your first name"
                        size={75}
                        className="form-control rdsignupinput"
                      />
                    </label>
                  </Col>
                  <Col md={6}>
                    <label>
                      <span className="rdfrmlbl"> Last Name</span>
                      <input
                        type="text"
                        name="lastname"
                        onChange={onChangeHandler}
                        value={lastname}
                        placeholder="Enter your Last name"
                        size={75}
                        className="form-control rdsignupinput"
                      />
                    </label>
                  </Col>
                </Row>

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
                <div className="genderinputdiv">
                  <p className="genderheading">Gender :</p>
                  <label className="malerdiolabel">
                    <div className="genderdivwrapper">
                      <input
                        type="radio"
                        value="Male"
                        onChange={genderType}
                        checked={gender === "Male"}
                        className="gendradiobtn"
                      />
                      <span className="maleradiobtn"></span>
                      <p>Male</p>
                    </div>
                  </label>
                  <label>
                    <div className="genderdivwrapper">
                      <input
                        type="radio"
                        value="Female"
                        onChange={genderType}
                        checked={gender === "Female"}
                        className="gendradiobtn"
                      />
                      <span className="maleradiobtn"></span>
                      <p>Female</p>
                    </div>
                  </label>
                </div>
                <label>
                  <span className="rdfrmlbl"> House Address </span>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={onChangeHandler}
                    placeholder="Enter your Home Address"
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
                <p className="redsgnfrmpar">
                  Your password must be at least 6 characters long and must
                  contain letters, numbers and special characters. Cannot
                  contain whitespace.
                </p>
                <Row>
                  <Col md={6}>
                    <span className="rdfrmlbl rdfrmlblrf"> Phone Number </span>
                    <input
                      type="text"
                      size={25}
                      name="phone_number"
                      className="rdfrmtinptt"
                      value={phone_number}
                      onChange={onChangeHandler}
                      placeholder="Enter your phone number"
                    />
                  </Col>
                  <Col md={6}>
                    {" "}
                    <span className="rdfrmlblslt rdfrmlblsltt">
                      How you heard about us
                    </span>
                    <select
                      onChange={formActionHandler}
                      className="rdseltinpt form-control"
                      required
                    >
                      <option
                        value=""
                        className="rdsltopt"
                        disabled
                        selected
                        hidden
                      >
                        --Please select--
                      </option>
                      <option value="Facebook" className="rdsltopt">
                        Facebook
                      </option>
                      <option value="Linkedin" className="rdsltopt">
                        Linkedin
                      </option>
                      <option value="Instagram" className="rdsltopt">
                        Instagram
                      </option>
                      <option value="Referral Link" className="rdsltopt">
                        Referral link
                      </option>
                      <option value="4" className="rdsltopt">
                        Friend
                      </option>
                    </select>
                    <div className="text-right">
                      <img src={drpdwnarr} className="drparr" />
                    </div>
                  </Col>
                </Row>
                <div className="rdsgnupfrmbtndv">
                  <span
                    type="submit"
                    onClick={validateForm}
                    className="rdsgnfrmbtn rdsgnup-animated"
                  >
                    {!isLoading ? "Sign Up" : "Processing..."}
                  </span>
                </div>
                <p className="rdsgnalready">
                <Link to="/signin">  Already Registered? Sign In</Link>
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
export default parentSignup;