import React from 'react';
import HexagonSvg from './components/HexagonSvg';

import Remote from './section/Remote';
import Features from './section/Features';
import Technologies from './section/Technologies';
import Developers from './section/Developers';
import Partners from './section/Partners';
import { Container } from 'src/view/components/Wrapper';

const Home: React.FC<any> = () => {
  return (
    <Container className="homepage">
      <Remote />
      <Features />
      <Technologies />
      <Developers />
      <Partners />
      <HexagonSvg id="hex1" />
      <HexagonSvg id="hex2" />
      <HexagonSvg id="hex3" />
    </Container>
  );
};

export default Home;
