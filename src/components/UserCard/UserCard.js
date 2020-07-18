import React from "react";
import PropTypes from "prop-types";
import "./UserCard.css";

export default function UserCard({
  name,
  lastName,
  additional,
  showAdditional,
  payment,
  showPayment,
}) {
  return (
    <div className="user-wrapper">
      <h2>{name}</h2>
      <h3>{lastName}</h3>
      <button onClick={() => showAdditional(additional)}>
        Mais Informações
      </button>

      <button onClick={() => showPayment(payment)}>
        Informações Pagamento
      </button>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  showPayment: PropTypes.func.isRequired,
  additional: PropTypes.shape({
    notes: PropTypes.string,
  }),
  payment: PropTypes.shape({
    valuePaid: PropTypes.number,
  }),
};

UserCard.defaultProps = {
  additional: {
    notes: "Não possui informações adicionais",
  },
  payment: {
    valuePaid: "Não é necessario pagamento",
  },
};
