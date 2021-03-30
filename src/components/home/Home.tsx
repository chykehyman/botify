import { FC } from 'react';

import { WrapperContainer } from './LayoutStyles';
import LeftGrid from './LeftGrid';
import RightGrid from './RIghtGrid';

const Home: FC<any> = () => {
  return (
    <WrapperContainer>
      <LeftGrid />
      <RightGrid />
    </WrapperContainer>
  );
};

export default Home;
