import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import {
  BlueBackground,
  StyledButton,
  WrapperContainer,
} from '../styles.common';
import IntentList from './intents/IntentList';

const CreateBot: FC<any> = () => {
  const JSON_DATA_URL = '/data/api_data.json';
  const { intents, isFetching } = useFetch(JSON_DATA_URL);

  return (
    <WrapperContainer>
      <BlueBackground width="50%" height="50%">
        <Link to="/">
          <img src="/images/logo.svg" alt="brand" />
        </Link>
      </BlueBackground>
      <StyledButton isPositioned>Continue</StyledButton>
      {isFetching ? (
        <div>Loading intents...</div>
      ) : (
        <IntentList intents={intents} />
      )}
    </WrapperContainer>
  );
};

export default CreateBot;
