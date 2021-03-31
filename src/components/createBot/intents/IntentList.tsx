import { FC, useState } from 'react';

import IntentCard from './IntentCard';
import { CheckBoxWrapper, IntentListContainer } from '../styles';
import { IntentsState } from '../../../hooks/useFetch';

type IntentListProps = {
  intents: IntentsState;
};

const IntentList: FC<IntentListProps> = ({ intents }) => {
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  const handleSelectAll = () => setIsAllSelected(!isAllSelected);

  return (
    <IntentListContainer>
      <CheckBoxWrapper>
        <label htmlFor="checkbox">Select All</label>
        <input
          id="checkbox"
          type="checkbox"
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
      </CheckBoxWrapper>
      {intents.map((intent) => (
        <IntentCard
          key={intent?.id}
          intent={intent}
          isAllSelected={isAllSelected}
        />
      ))}
    </IntentListContainer>
  );
};

export default IntentList;
