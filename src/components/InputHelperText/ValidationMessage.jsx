import React from "react";

const ValidationMessage = ({ message }) => {
  return (
    <div className="error">
      <p className="message">{message}</p>
    </div>
  );
};

export default ValidationMessage;
