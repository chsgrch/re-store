import React from "react";

const ErrorIndicator = (props) => {
  const { details } = props;
  return (
    <div className="d-flex flex-column">
      <h3>Something went wrong</h3>
      <p style={{ color: "red" }}>Details: {details}</p>
    </div>
  );
};

export default ErrorIndicator;
