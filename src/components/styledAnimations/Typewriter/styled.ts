import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation/styled';

const TypewriterAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

const Typewriter = styled(BaseAnimation)`
  animation-name: ${TypewriterAnimation};
  white-space: nowrap;
  overflow: hidden;
`;

export default Typewriter;
