import React, { useState, useRef } from "react";
import DashboardSidenav from "./DashboardSidenav";
import Accordion from "../widget/accordion";
import { Container, Row, Col } from "react-bootstrap";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import Select from "@material-ui/core/Select";
import arrdown from '../../images/arrow-down.png';


const findTutors = () => {
  const [state, setState] = useState({
    active: "",
    collapseHeight: "0px",
    cardHeight: "0px",
    chevron: ""
  });
  const { active, cardHeight, collapseHeight, chevron } = state;
  const content = useRef();
  const description = useRef();
  const toggleAccordion = () => {
    setState({
      ...state,
      active: active === "" ? "active" : "",
      cardHeight:
        active === "active" ? "0px" : `${description.current.scrollHeight}px`,
      collapseHeight:
        active === "active" ? "0px" : `${content.current.scrollHeight}px`,
      chevron: active === "active" ? "" : "arrowflip"
    });
  };
  const toggleCardAccordion = () => {
    setState({
      ...state,
      active: active === "" ? "active" : "",
      cardHeight:
        active === "active" ? "0px" : `${description.current.scrollHeight}px`,
      chevron: active === "active" ? "" : "arrowflip"
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
              <div className="useravatardiv dshbdusername">David Armstrong</div>
              <div className="useravatardiv">
                <i className="fa fa-bell" style={{ color: "#70757a" }}>
                  {" "}
                </i>
              </div>
              <div className="useravatardiv mobilebars">
                <i className="fa fa-bars" style={{ color: "#70757a" }}>
                  {" "}
                </i>
              </div>
            </div>
            <h3>Find a trusted, one-to-one tutor</h3>
            <Row>
              <Col md={12}>
                <div className="container-card">
                  <div className="tutor-search-wrapper">
                    <Row>
                      <Col
                        md={4}
                        className="dshbdfindatutorcontent subslctwrapper"
                      >
                        <img src="https://cdn.mytutor.co.uk/icons/search.svg?1619727184000" />
                        <div className="subselectcontent ">
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
                            <MenuItem value="Mathematics">Mathematics</MenuItem>
                            <MenuItem value="Chemistry">Chemistry</MenuItem>
                            <MenuItem value="Physics">Physics</MenuItem>
                            <MenuItem value="English">English</MenuItem>
                          </Select>
                        </div>
                      </Col>
                      <Col md={8}>
                        <Row>
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
                            <label className="tutorsearchlabel">prices</label>
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
                              <MenuItem value="">All prices</MenuItem>
                              <ListSubheader>Category 1</ListSubheader>
                              <MenuItem value="Mathematics">
                                Mathematics
                              </MenuItem>
                              <MenuItem value="Chemistry">Chemistry</MenuItem>
                              <MenuItem value="Physics">Physics</MenuItem>
                              <MenuItem value="English">English</MenuItem>
                            </Select>
                          </Col>
                          <Col
                            md={4}
                            className={`slect-inputwrapper ${active}`}
                            onClick={toggleAccordion}
                          >
                            <div className="tutorsearchbtn">
                              MORE FILTERS{" "}
                              <span
                                className={`fa fa-chevron-down arrow-down ${chevron}`}
                              ></span>{" "}
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        md={3}
                        className="acccollapsediv"
                        style={{ maxHeight: `${collapseHeight}` }}
                        ref={content}
                      >
                        <label className="tutorsearchlabel">Gender</label>
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
                          <MenuItem value="">All prices</MenuItem>
                          <ListSubheader>Category 1</ListSubheader>
                          <MenuItem value="Mathematics">Mathematics</MenuItem>
                          <MenuItem value="Chemistry">Chemistry</MenuItem>
                          <MenuItem value="Physics">Physics</MenuItem>
                          <MenuItem value="English">English</MenuItem>
                        </Select>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="container-card">
                  <div className="tutor-profile-cards-section">
                    <div className="tutor-profile-wrapper">
                      <div className="tutor-profile-card card-margin">
                        <div className="tutor-img-wrapper">
                          <span className="userimgspan tutor-img">
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <div classNAme="tutor-profile-content">
                          <h6>Henry Isaac</h6>
                          <div className="tutor-profile-heading" onClick={toggleCardAccordion}>
                           <div> Obafemi Awolowo university - English (Masters){" "}</div>
                            <span
                            >
                             <img src={arrdown}  className={`fa fa-chevron-down arrow-down ${chevron}`}/>
                            </span>{" "}
                          </div>
                          <p
                            className="acccollapsediv"
                            style={{ maxHeight: `${cardHeight}` }}
                            ref={description}
                          >
                            Undergraduate student offering tutoring in English
                            and Politics for those seeking real-life help from a
                            real-life student.
                          </p>
                          <p>ALSO OFFERS: ENGLISH LANGUAGE, +7 Others</p>
                        </div>
                        <div></div>
                      </div>
                      <div className="tutor-profile-card card-margin"></div>
                      <div className="tutor-profile-card card-margin"></div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default findTutors;
