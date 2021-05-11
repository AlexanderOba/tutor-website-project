import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "../widget/accordion";
import DashboardSidenav from "./DashboardSidenav";

const Messages = () => {
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Messages;
