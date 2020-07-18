import React from "react";
import "./App.css";

import data from "./data";
import UserCard from "../UserCard/UserCard";

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map((information) => `${information[0]}: ${information[1]}`)
    .join("\n");
  alert(alertInformation);
}

function showPayment(payment) {
  const alertInformations = Object.entries(payment)
    .map((informations) => `${informations[0]}: ${informations[1]}`)
    .join("\n");
  alert(alertInformations);
}

function App() {
  return (
    <div className="wrapper">
      <h1> Controle Spotify</h1>
      {data.map((user) => (
        <UserCard
          additional={user.additional}
          payment={user.payment}
          key={user.name}
          name={user.name}
          lastName={user.lastName}
          showPayment={showPayment}
          showAdditional={showAdditional}
        />
      ))}
    </div>
  );
}

export default App;
