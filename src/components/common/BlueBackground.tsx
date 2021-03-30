import styled from 'styled-components/macro';

type BlueBackgroundProps = {
  width?: string;
  height?: string;
};

const BlueBackground = styled.div<BlueBackgroundProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '80%')};
  background-color: #5956e9;
  border-radius: 0px 15% 95% 0% / 0px 50% 95% 50%;
  position: absolute;
  top: -10px;
  left: 0;
  z-index: 1;
  img {
    margin-top: 22px;
    margin-left: 52px;
  }
`;

export default BlueBackground;
