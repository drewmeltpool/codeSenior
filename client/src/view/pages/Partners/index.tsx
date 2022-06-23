import React from 'react';
import { Container, Main } from '../../components/Wrapper';

import Contact from './section/Contact';
import HowDoes from './section/HowDoesItWorks';
import Payment from './section/Payment';

const Home: React.FC<any> = () => {
  return (
    <Main>
      <Container>
        <HowDoes />
        <Payment />
        <Contact />
      </Container>
    </Main>
  );
};

export default Home;
