import React, { useState, useRef } from "react";
import arrdown from '../../images/arrow-down.png';

const Accordion = () => {
  const [state, setState] = useState({
    active: "",
    collapseHeight: "0px",
    chevron: ""
  });
  const { active, collapseHeight, chevron } = state;
  const content = useRef();
  const toggleAccordion = () => {
    setState({
      ...state,
      active: active === "" ? "active" : "",
      collapseHeight: active === "active" ? "0px" : `${content.current.scrollHeight}px`,
      chevron: active === "active" ? "" : "arrowflip" 
    });
  };

  return (
    <div>
      <div className="userprofileacc">
          <div className="userInfo-section">
            <div class="initials-tag">
              <span>DA</span>
            </div>
            <div
              className={`logosctncontent ${active}`}
              onClick={toggleAccordion}
            >
              <div className="acctgglediv">
                <h4>Toptutors</h4>
                <div>
                  {/* <span className={`fa fa-chevron-down arrow-down ${chevron}`}></span> */}
                  <img src={arrdown}  className={`fa fa-chevron-down arrow-down ${chevron}`}/>
                </div>
              </div>
              <p className="username">David Armstrong - Admin</p>
            </div>
          </div>
        <div
          className="acccollapsediv"
          style={{ maxHeight: `${collapseHeight}` }}
          ref={content}
        >
          <div className="editprofdiv">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            <span className="edittag">Edit Profile</span>
          </div>
          <div className="editprofdiv">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            <span className="edittag" style={{ marginBottom: "13px" }}>
              Log Out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
