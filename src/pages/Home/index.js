import React from 'react';

import imgHome from '../../assets/grup.png';

import { ImgHome } from './styles';

function Home() {
  const mystyle = {
    width: '30vw',
    height: '70vh',
  };
  return (
    <>
      <ImgHome src={imgHome} alt="grupo" style={mystyle} />
    </>
  );
}

export default Home;
