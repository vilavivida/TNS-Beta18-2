import React from 'react'
import "./PopUp.css";

function PopUp(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => {props.setTrigger(false); props.setChildren(null); props.setClick(false); props.setClosePopup(true)}}>Close</button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default PopUp
