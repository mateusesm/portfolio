import styled from 'styled-components'
import { backgroundColor, textColor } from '../../../assets/colors'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s;
  width: 75%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding-top: 0.8rem;
    height: auto;
  
    li {
      font-size: 0.8rem;
      margin-left: 1.6rem;
      padding: 0rem 0.2rem;
      cursor: pointer;
      height: 2rem;
      transition: all 0.2s;
      border: none;

      &:hover {
        transform: translateY(0.1rem);
        border-bottom: 0.2rem solid ${textColor};
      }
    }
  }

  @media(max-width: 980px) {
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 1000;
    opacity: 0;
    top: 0;
    left: 0;
    margin-top: 3rem;
    width: 100%;
    height: 100vh;
    background-color: ${backgroundColor};
    overflow-y: auto;
    transition: all 0.5s;
    filter: opacity(95%);

    &.active {
      opacity: 1;
    }

    ul {
      flex-direction: column;
      
      li {
        margin-left: 0rem;
        margin-bottom: 4rem;
      }
    }
  }
`