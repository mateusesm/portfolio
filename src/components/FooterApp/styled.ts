import styled from 'styled-components';
import { textColor, backgroundColor } from '../../assets/colors';

export const Footer = styled.footer`
  background-color: ${textColor};
  color: ${backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 2rem;
  width: 100%;
  font-size: 0.8rem;
`;
