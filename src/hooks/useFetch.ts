import { useEffect, useState } from 'react';

export type Intent = {
  id?: string;
  name?: string;
  description?: string;
  trainingData?: {
    expressionCount?: number;
    expressions?: Array<{ id: string; text: string }>;
  };
  reply?: {
    id?: string;
    text?: string;
  };
};
export type IntentsState = Intent[];

export const useFetch = (url: string) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [intents, setIntents] = useState<IntentsState>([]);

  useEffect(() => {
    setIsFetching(true);
    const loadIntents = async () => {
      const data = await (await fetch(url)).json();
      setIntents(data.intents);
      setIsFetching(false);
    };
    loadIntents();
  }, [url]);

  return { intents, isFetching };
};
