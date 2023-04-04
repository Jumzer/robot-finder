import React from "react";
import RobotCard from "./components/RobotCard";
import Filter from "./components/Filter";
import "./App.css";
import Robots from "./data/data";
import { useState } from "react";
/** Import de la donnée */

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Filter search={search} setSearch={setSearch} />
      <div className="App">
        <h1>Robot Finder</h1>
      </div>
      <div>
        {Robots.filter((robot) => {
          return robot.name.includes(search);
        }).map((robot) => (
          <RobotCard key={robot.id} robot={robot} />
        ))}
      </div>
    </>
  );
}

export default App;
