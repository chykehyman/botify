import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

describe('useFetch', () => {
  const resolvedData = {
    intents: [
      {
        name: 'intent name',
      },
    ],
  };
  beforeEach(() => {
    (global.fetch as any) = jest.fn(() =>
      Promise.resolve({
        json: jest.fn(() => Promise.resolve(resolvedData)),
      })
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should increment counter', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('url'));

    expect(result.current.intents.length).toBe(0);
    await waitForNextUpdate();
    expect(result.current.intents.length).toBe(1);
    expect(result.current.intents).toStrictEqual(resolvedData.intents);
  });
});
