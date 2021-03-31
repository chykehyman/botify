import { FC } from 'react';

import { WrapperContainer } from '../styles.common';
import LeftGrid from './LeftGrid';
import RightGrid from './RIghtGrid';

const Home: FC<any> = () => {
  return (
    <WrapperContainer isHomePage>
      <LeftGrid />
      <RightGrid />
    </WrapperContainer>
  );
};

export default Home;
