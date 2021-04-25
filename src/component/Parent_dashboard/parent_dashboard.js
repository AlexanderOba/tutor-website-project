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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default parentDashboard;
