import styled from 'styled-components'
import { backgroundColor, textColor } from '../../assets/colors'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  max-width: 122rem;
  width: 100%;
  color: ${textColor};
  background-color: ${backgroundColor};
  font-size: 0.8rem;
  padding: 0rem 2rem 0rem 2rem;
  filter: opacity(95%);

  a {
    display: block;
    padding: 0.4rem 0rem;
    color: ${textColor};
    text-decoration: none;

    h1 {
      font-size: 1.2rem;
    }
  }

  @media(max-width: 490px) {
    a {
      h1 {
        font-size: 1rem;
      }
    }
  }
`