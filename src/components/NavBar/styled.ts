import styled from 'styled-components'
import { textColor } from '../../assets/colors';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem 1rem 2rem;
  color: ${textColor};

  a {
    color: ${textColor};
    text-decoration: none;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    li {
      margin: 1.2rem 0rem 0rem 1.6rem;
      cursor: pointer;
      height: 2.2rem;
      transition: transform 0.3s;

      &:hover {
        transform: translateY(0.2rem);
        border-bottom: 0.1rem solid ${textColor};
      }
    }
   
  }
`;