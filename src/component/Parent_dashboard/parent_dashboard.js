import React from "react";
import { Container, Row, Col,Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./parent_dashboard.css";
import { Link } from "react-router-dom";
import arrowdown from "../../images/dwn-arrw.png";

const parentDashboard = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={3} className="sidenav">
            <div className="sidenavpaddin">
              <Accordion defaultActiveKey="" className="userprofileacc">
                <Accordion.Toggle eventKey="5" as={Card.Header}>
                <div  className="userInfo-section" >
                  <div class="initials-tag">
                    <span>DA</span>
                  </div>
                  <div className="logosctncontent">
                    <div className="acctgglediv">
                      <h4>Toptutors</h4>
                      <div>
                        <img src={arrowdown} />
                      </div>
                    </div>
                    <p>David Armstrong - Admin</p>
                  </div>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse className="acccollapsediv" eventKey="5">
                <div>
                  <div className="editprofdiv">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <span className="edittag">Edit Profile</span>
                  </div>
                  <div className="editprofdiv">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    <span className="edittag" style={{marginBottom: "13px"}}>Log Out</span>
                  </div>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default parentDashboard;
