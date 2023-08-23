import styled from 'styled-components'
import { textColor } from '../../assets/colors'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  color: ${textColor};
  background-color: #fff;
  font-size: 0.8rem;
  padding: 0rem 2rem 0rem 2rem;

  a {
    display: block;
    padding: 0.6rem 0rem;
    color: ${textColor};
    text-decoration: none;

    h1 {
      font-size: 1.2rem;
    }
  }
`