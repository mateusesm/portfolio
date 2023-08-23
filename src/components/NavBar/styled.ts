import styled from 'styled-components'
import { backgroundColor, textColor } from '../../assets/colors'

export const Nav = styled.nav`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0rem 4rem 0rem 0rem;
  transition: all 0.3s;
  width: 75%;
  filter: opacity(95%);

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    li {
      background-color: green;
      margin: 0rem 0rem 0rem 1.6rem;
      cursor: pointer;
      height: 2.2rem;
      transition: all 0.2s;
      border: none;

      &:hover {
        transform: translateY(0.1rem);
        border-bottom: 0.2rem solid ${textColor};
      }
    }
  }

  @media(max-width: 980px) {
    padding: 0.5rem 1.6rem 0rem 1.6rem;

    ul.menu-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      z-index: 1000;
      opacity: 0;
      top: 0;
      margin-top: 5%;
      margin-left: -2.8%;
      width: 100%;
      height: 100vh;
      background-color: ${backgroundColor};
      overflow-y: auto;
      filter: opacity(95%);
      transition: all 0.5s;

      li {
        text-align: center;
        margin: 0rem 0rem 5rem 0rem;
      }
    }

    ul.active {
      display: flex;
      opacity: 1;
    }
  }
`