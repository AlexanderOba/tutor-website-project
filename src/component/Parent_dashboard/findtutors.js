import React from 'react';
import DashboardSidenav from "./DashboardSidenav";
import Accordion from "../widget/accordion";
import { Container, Row, Col } from "react-bootstrap";



const findTutors=()=>{
  return(
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
  )
}
export default findTutors;