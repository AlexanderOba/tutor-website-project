import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./parent_dashboard.css";
import Accordion from "../widget/accordion";
import DashboardSidenav from "./DashboardSidenav";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import SideNav from "react-simple-sidenav";
import Select from "@material-ui/core/Select";
import yoga from "../../images/yoga.png";

const parentDashboard = () => {
  useEffect(()=>{
    window.scrollTo(-0,-0);
  })
  const [state, setState] = useState({
    showNav: false
  });
  const toggleSideNav = action => {
    setState({
      ...state,
      showNav: action
    });
  };

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
                </span>
              </div>
              <div className="useravatardiv ccc">David Armstrong</div>
              <div className="useravatardiv">
                <i
                  className="fa fa-bell"
                  style={{ color: "#70757a" }}
                >
                  {" "}
                </i>
              </div>
              <div className="useravatardiv mobilebars">
                <i
                  className="fa fa-bars"
                  onClick={() => toggleSideNav(true)}
                  style={{ color: "#70757a" }}
                >
                  {" "}
                </i>
              </div>
              <SideNav
                showNav={state.showNav}
                onOpenNav={() => toggleSideNav(true)}
                onHideNav={() => toggleSideNav(false)}
                navStyle={{
                  width: "70%"
                }}
              >
                {" "}
                <div className="mobilesidenavwrapper">
                  <Accordion />
                  <DashboardSidenav />
                </div>
              </SideNav>
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
                            <Select
                              labelId="grouped-select"
                              defaultValue=""
                              displayEmpty
                              id="grouped-select"
                              renderValue={selected => {
                                if (selected.length === 0) {
                                  return (
                                    <p className="tutorselttgplaceholder">
                                      All subjects
                                    </p>
                                  );
                                }
                                return selected;
                              }}
                            >
                              <MenuItem value="">All subjects</MenuItem>
                              <ListSubheader>Category 1</ListSubheader>
                              <MenuItem value="Mathematics">
                                Mathematics
                              </MenuItem>
                              <MenuItem value="Chemistry">Chemistry</MenuItem>
                              <MenuItem value="Physics">Physics</MenuItem>
                              <MenuItem value="English">English</MenuItem>
                            </Select>
                          </Col>
                          <Col md={4} className="slect-inputwrapper">
                            <label className="tutorsearchlabel">Level</label>
                            <Select
                              defaultValue=""
                              id="grouped-select"
                              displayEmpty
                              id="grouped-select"
                              renderValue={selected => {
                                if (selected.length === 0) {
                                  return (
                                    <p className="tutorselttgplaceholder">
                                      All Levels
                                    </p>
                                  );
                                }
                                return selected;
                              }}
                            >
                              <MenuItem value="">All Levels</MenuItem>
                              <ListSubheader>Category 1</ListSubheader>
                              <MenuItem value="Basic 1">Basic 1</MenuItem>
                              <MenuItem value="Basic 2">Basic 2</MenuItem>
                              <ListSubheader>Category 2</ListSubheader>
                              <MenuItem value="Basic 3">Basic 3</MenuItem>
                              <MenuItem value="Basic 4">Basic 4</MenuItem>
                              <MenuItem value="Basic 5">Basic 5</MenuItem>
                            </Select>
                          </Col>
                          <Col md={4} className="slect-inputwrapper">
                            <Link to="/findtutors">
                              {" "}
                              <div className="tutorsearchbtn">FIND TUTORS</div>
                            </Link>
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
              <Col md={7} className="recentlyviewd-sectioncol">
                <div className="recentlyviewed-section">
                  <h6 className="recentlyviewed-heading">
                    Tutors Recently viewed
                  </h6>
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

