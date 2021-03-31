import { shallow, ShallowWrapper } from 'enzyme';
import LeftGrid from './LeftGrid';

jest.mock('./styles', () => ({
  ...jest.requireActual('./styles'),
  ChatBotImage: () => 'ChatBotImage',
}));
jest.mock('../styles.common', () => ({
  ...jest.requireActual('../styles.common'),
  BlueBackground: () => 'BlueBackground',
}));

describe('LeftGrid', () => {
  const props: any = {};
  const wrapper: ShallowWrapper = shallow(<LeftGrid {...props} />);

  it('should render correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should display a blue background div with an image', () => {
    const blueBackgroundDiv = wrapper.find('BlueBackground');

    expect(blueBackgroundDiv.exists()).toBe(true);
    expect(blueBackgroundDiv.find('img').prop('src')).toEqual(
      '/images/logo.svg'
    );
  });

  it('should display a chatbot image', () => {
    const chatBotImage = wrapper.find('ChatBotImage');

    expect(chatBotImage.exists()).toBe(true);
    expect(chatBotImage.prop('src')).toEqual('/images/left-grid-chat-bot.svg');
  });
});
