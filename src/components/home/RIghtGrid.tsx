import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { GridContainer, StartWizardCard, StyledButton } from './LayoutStyles';

const RightGrid: FC<any> = () => {
  const history = useHistory();
  const handleStartWizard = () => history.push('/create-bot');
  return (
    <GridContainer>
      <StartWizardCard>
        <p className="home__right-grid--title">Welcome</p>
        <p className="home__right-grid--description">
          It is super easy to create a bot for your website, click the button
          below to get started
        </p>
        <StyledButton onClick={handleStartWizard}>Create ChatBot</StyledButton>
        <div className="home__right-grid--chathead">
          <img src="/images/right-grid-chat-head.svg" alt="profile" />
        </div>
      </StartWizardCard>
    </GridContainer>
  );
};

export default RightGrid;
