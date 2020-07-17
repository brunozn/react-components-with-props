import React from "react";
import "./App.css";

import data from "./data";
import UserCard from "../AnimalCard/UserCard";

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map((information) => `${information[0]}: ${information[1]}`)
    .join("\n");
  alert(alertInformation);
}

function App() {
  return (
    <div className="wrapper">
      <h1> Controle Spotify</h1>
      {data.map((user) => (
        <UserCard
          additional={user.additional}
          key={user.name}
          name={user.name}
          lastName={user.lastName}
          showAdditional={showAdditional}
        />
      ))}
    </div>
  );
}

export default App;
