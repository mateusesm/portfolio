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

  a {
    padding: 0rem 0rem 0rem 4rem;
    background: blue;
    width: 25%;
    color: #111;
    text-decoration: none;
  }
`