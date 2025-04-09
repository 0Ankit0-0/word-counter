import React from "react";

export default function Alert(props) {
  return (
    <>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show  alert-warning`}
        role="alert"
      >
        <strong>{props.alert.type}</strong>
        {props.alert.msg}
      </div>
      
    </>
  );
}
