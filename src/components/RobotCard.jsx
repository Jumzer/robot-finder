import React from "react";
import RobotAddress from "./RobotAdress";
import { useState } from "react";

const RobotCard = ({ robot }) => {
  const [display, setDisplay] = useState(false);

  function HandleDisplay() {
    setDisplay(!display);
  }

  return (
    <>
      <div className="robotCard">
        <h2 className="robotList">{robot.name}</h2>
        <p>{robot.username}</p>
        <p>{robot.phone}</p>
        <p>{robot.email}</p>
        <p>{robot.website}</p>
      </div>
      <div className="robotAddress">
        <button onClick={HandleDisplay}>Afficher l'adresse</button>
        <div className={display ? "displayAddress" : "hideAddress"}>
          <RobotAddress robotAddress={robot.address} />
        </div>
      </div>
      <img src={`https://robohash.org/${robot.id}?set=set2`} alt="robot" />
    </>
  );
};

export default RobotCard;
