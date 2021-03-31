import { shallow, ShallowWrapper } from 'enzyme';
import RightGrid from './RIghtGrid';

const mockPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useHistory: () => {
    const push = () => mockPush('/create-bot');
    return { push };
  },
}));
jest.mock('../styles.common', () => ({
  StyledButton: () => 'StyledButtonMock',
}));

describe('RightGrid', () => {
  const props: any = {};
  const wrapper: ShallowWrapper = shallow(<RightGrid {...props} />);

  it('should render correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should display only two(2) p elements', () => {
    expect(wrapper.find('p').length).toBe(2);
  });

  it('should display a p element with text "Welcome"', () => {
    expect(wrapper.find('p').first().text()).toBe('Welcome');
  });

  it('should call useHistory hook with "/create-bot"', () => {
    wrapper.find('StyledButton').simulate('click');
    expect(mockPush).toHaveBeenCalledWith('/create-bot');
  });
});
