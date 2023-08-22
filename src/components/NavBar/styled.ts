import styled from 'styled-components'
import { backgroundColor, textColor } from '../../assets/colors'

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  padding: 0rem 2rem 0rem 2rem;
  color: ${textColor};
  transition: all 0.3s;
  width: 100vw;
  height: 4rem;
  background-color: ${backgroundColor};
  filter: opacity(90%);
  font-size: 1rem;

  @media(max-width: 980px) {
    ul.menu-list {
      opacity: 0;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 60rem 0rem 0rem -2rem;
      padding-top: 20rem;
      padding-bottom: 38rem;
      width: 100vw;
      height: 100vh;
      background-color: ${backgroundColor};
      overflow-y: auto;
      filter: opacity(90%);
      transition: all 0.5s;

      li:first-child {
        margin-top: 10rem;
      }

      li {
        margin: 0rem 0rem 5rem 0rem;
      }
    }

    ul.active {
      opacity: 1;
    }
  }

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
      transition: all 0.3s;

      &:hover {
        transform: translateY(0.2rem);
        border-bottom: 0.1rem solid ${textColor};
      }
    }
   
  }
`