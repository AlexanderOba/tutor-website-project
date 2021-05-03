import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./parent_dashboard.css";
import Accordion from "../widget/accordion";
import DashboardSidenav from "./DashboardSidenav";
import drpdwnarr from "../../images/dwn-arrw.png";
import yoga from "../../images/yoga.png";

const parentDashboard = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={3} className="sidenav">
            <div className="sidenavpaddin">
              <Accordion />
              <DashboardSidenav />
            </div>
          </Col>
          <Col md={9} className="dashboard-content">
            <div className="user-imgdisplaydv">
              <div className="useravatardiv">
                <span className="userimgspan">
                  <i className="fa fa-user"> </i>
                  {/* <img src={art} className="img-fluid"/> */}
                </span>
              </div>
              <div className="useravatardiv">David Armstrong</div>
              <div className="useravatardiv">
                <i className="fa fa-bell" style={{ color: "#70757a" }}>
                  {" "}
                </i>
              </div>
            </div>
            <h3>Hello, David</h3>
            <Row>
              <Col md={12}>
                <div className="container-card">
                  <div className="tutor-search-wrapper">
                    <Row>
                      <Col md={4} className="dshbdfindatutorcontent">
                        <img src="https://cdn.mytutor.co.uk/icons/search.svg?1619727184000" />
                        <div className="findftutordiv">
                          <h3>Find a Tutor</h3>
                          <p>
                            Browse tutor profiles and message a few you’d like
                            to meet.
                          </p>
                        </div>
                      </Col>
                      <Col md={8}>
                        <Row>
                          <Col md={4} className="slect-inputwrapper">
                          <label className="tutorsearchlabel">Subjects</label>
                            <select
                              className="subjectselectinpt rdseltinpt form-control"
                              required
                            >
                              <option
                                value=""
                                className="rdsltopt"
                                disabled
                                selected
                                hidden
                              >
                                All Level
                              </option>
                              <option value=" Biology" className="rdsltopt">
                                Biology
                              </option>
                              <option value="Physics" className="rdsltopt">
                                Physics
                              </option>
                              <option value=" Chemistry" className="rdsltopt">
                                Chemistry
                              </option>
                              <option
                                value="Mathematics"
                                className="rdsltopt"
                              >
                              Mathematics
                              </option>
                              <option value="4" className="rdsltopt">
                                Friend
                              </option>
                            </select>
                            <div className="text-right">
                              <img src={drpdwnarr} className="drparr" />
                            </div>
                            
                          </Col>
                          <Col md={4} className="slect-inputwrapper">
                          <label className="tutorsearchlabel">Level</label>
                            <select
                              className="subjectselectinpt rdseltinpt form-control"
                              required
                            >
                              <option
                                value=""
                                className="rdsltopt"
                                disabled
                                selected
                                hidden
                              >
                                All Subjects
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
                              <option
                                value="Referral Link"
                                className="rdsltopt"
                              >
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
                          <Col md={4} className="slect-inputwrapper">
                            <div className="tutorsearchbtn">
                              FIND TUTORS
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="dashbdunrdmssgrow">
              <Col md={5} className="unreadmsswrapp">
                <div className="unrdmss-title">Unread Messages</div>
                <img src={yoga} className="img-fluid" />
                <p>You’re all caught up. No unread messages</p>
                <div className="centerdbtn">
                 <span className="unrdmsss-btn">View all Messages</span>
                </div>
              </Col>
              <Col md={7}>
                <div className="recentlyviewed-section">
                   <h6 className="recentlyviewed-heading">Tutors Recently viewed</h6>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default parentDashboard;

{
  /* <div className="msstoparentwrapper">
              <div className="msstoparentcntent">
                <h4>Hello, David</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                  sunt praesentium veniam qui adipisci voluptates, quam tenetur
                </p>
                <div className="viewedprofiles">
                  <p>Profiles viewed</p>
                  <span className="fa fa-eye"></span>
                  <p>10</p>
                </div>
                <div className="bookedstatsdiv">
                  <p className="bookstats">Booked Tutors</p>
                  <span className="fa fa-file-archive-o"></span>
                  <p style={{ marginBottom: "0" }}>3</p>
                </div>
              </div>
              <div className="mssgtoparentimage">
                <img src={project} />
              </div>
            </div> */
}
