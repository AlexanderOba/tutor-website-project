import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./parent_dashboard.css";
import { Link } from "react-router-dom";
import Accordion from '../widget/accordion';

const parentDashboard = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={3} className="sidenav">
            <div className="sidenavpaddin">
              <Accordion/>
              <div className="sidenavlinkdiv">
                <span className="fa fa-home sidenavicons"></span>
                Dashboard
              </div>
              <div className="sidenavlinkdiv">
                <span className="fa fa-search sidenavicons"></span>
                Find a tutor
              </div>
              <div className="sidenavlinkdiv">
                <span className="fa fa-file-archive-o sidenavicons"></span>
                Bookings
              </div>
              <div className="sidenavlinkdiv">
                <span className="fa fa-users sidenavicons"></span>
                Your students
              </div>
              <div className="sidenavlinkdiv">
                <span className="fa fa-envelope-open-o sidenavicons"></span>
                Messages
              </div>
              <div className="sidenavlinkdiv">
                <span className="fa fa-gift sidenavicons"></span>
                Refer a friend
              </div>
              <div className="sidenavdemarcation"></div>
              <div className="sidenavlinkdiv">
                <span className="fa fa-exclamation-circle fa-rotate-180 sidenavicons"></span>
                Help center
              </div>
              <div className="sidenavlinkdiv">
                <span className="fa fa-info-circle sidenavicons"></span>
                Report concern
              </div>
              <div className="sidenavlinkdiv">
                <span className="fa fa-phone-square sidenavicons"></span>
                contact us
              </div>
            </div>
          </Col>
          <Col md={9} className="dashboard-content">
          <div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default parentDashboard;
