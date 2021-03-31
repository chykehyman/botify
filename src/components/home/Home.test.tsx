import { shallow, ShallowWrapper } from 'enzyme';
import Home from './Home';

jest.mock('./LeftGrid', () => 'LeftGridMock');
jest.mock('./RIghtGrid', () => 'RightGridMock');

describe('Home', () => {
  const props: any = {};
  const wrapper: ShallowWrapper = shallow(<Home {...props} />);

  it('should render correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should match the LeftGrid Component', () => {
    expect(wrapper.find('LeftGridMock').exists()).toBe(true);
  });

  it('should match the RightGrid Component', () => {
    expect(wrapper.find('RightGridMock').exists()).toBe(true);
  });
});
