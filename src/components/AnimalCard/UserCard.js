import React from "react";
import "./UserCard.css";

export default function AnimalCard({
  name,
  lastName,
  additional,
  showAdditional,
}) {
  return (
    <div className="user-wrapper">
      <h2>{name}</h2>
      <h3>{lastName}</h3>
      <button onClick={() => showAdditional(additional)}>
        Mais Informações
      </button>
    </div>
  );
}
