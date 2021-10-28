import React from "react";

function Alerts(props) {
  return (
    props.alert && <div className="container">
      <div className="alert alert-info container" role="alert">
        {props.alert.message}
      </div>
    </div>
  );
}

export default Alerts;
