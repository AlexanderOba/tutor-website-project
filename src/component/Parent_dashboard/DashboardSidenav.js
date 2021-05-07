import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./parent_dashboard.css";
import { NavLink } from "react-router-dom";

const DashboardSidenav = () => {
  return (
    <div>
      <NavLink
        to="/parent_dashboard"
        className="sidenavlinkdiv"
        activeStyle={{
          backgroundColor: "#0675c1",
          color: "#fff",
          textDecoration: "none",
          display: "block",
          borderRadius: "5px"
        }}
      >
        <span className="fa fa-home sidenavicons"></span>
        Dashboard
      </NavLink>
      <NavLink
        to="/findtutors" 
        className="sidenavlinkdiv"
        activeStyle={{
          backgroundColor: "#0675c1",
          color: "#fff",
          textDecoration: "none",
          display: "block",
          borderRadius: "5px"
        }}
      >
        <span className="fa fa-search sidenavicons"></span>
        Find a tutor
      </NavLink>
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
      <div className="sidenavlinkdiv" style={{ marginBottom: "100px" }}>
        <span className="fa fa-phone-square sidenavicons"></span>
        contact us
      </div>
    </div>
  );
};
export default DashboardSidenav;
