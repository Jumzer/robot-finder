import React from "react";

const RobotAddress = ({ robotAddress }) => {
  return (
    <div>
      <p>{robotAddress.street}</p>
      <p>{robotAddress.suite}</p>
      <p>{robotAddress.city}</p>
      <p>{robotAddress.zipcode}</p>
      {/* <p>{robotAddress.geo}</p> */}
    </div>
  );
};

export default RobotAddress;
