import React from 'react';

import imgHome from '../../assets/grup.png';
// import { Container } from './styles';

function Home() {
  const mystyle = {
    width: '50vw',
    height: '99vh',
  };
  return (
    <>
      <img src={imgHome} alt="grupo" style={mystyle} />
    </>
  );
}

export default Home;
