import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation/styled';
import { textColor } from '../../../assets/colors';

const BlinkAnimation = keyframes`
  from {
    border-color: ${textColor};
  }
  to {
    border-color: transparent;
  }
`;

const Blink = styled(BaseAnimation)`
  animation-name: ${BlinkAnimation};
  border-right: 0.8rem solid ${textColor};
`;

export default Blink;
