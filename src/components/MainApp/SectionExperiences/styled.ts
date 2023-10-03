import styled from 'styled-components';
import { detailColor } from '../../../assets/colors';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 0rem;
  background-color: red;

  h2 {
    font-size: 2.8rem;
    border-left: 1rem solid ${detailColor};
    padding: 0rem 0.5rem;
  }

  div.container-experiences {
    background-color: blue;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
