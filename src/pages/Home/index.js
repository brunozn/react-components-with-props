import React from 'react';

import { Wrapper, WrapperTitle } from './styles';

import data from '../../App/data';
import UserCard from '../../components/UserCard/UserCard';

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map((information) => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation);
}

function showPayment(payment) {
  const alertInformations = Object.entries(payment)
    .map((informations) => `${informations[0]}: ${informations[1]}`)
    .join('\n');
  alert(alertInformations);
}

function Home() {
  return (
    <Wrapper>
      <WrapperTitle> Controle Spotify</WrapperTitle>
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
    </Wrapper>
  );
}

export default Home;
