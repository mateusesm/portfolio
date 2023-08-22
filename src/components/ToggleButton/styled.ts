import styled from 'styled-components'
import { textColor } from '../../assets/colors'

export const ToggleContainer = styled.div`
  display: none;

  @media(max-width: 980px) {
    display: block;
    align-items: center;
    justify-content: center;
    max-width: 40px;
    width: 100%;

    button {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      height: 34px;
      border: none;
      background-color: transparent;
      cursor: pointer;

      div {
        height: 0.2rem;
        background-color: ${textColor};
        border-radius: 1rem;
        transition: all 0.5s;
      }

      div.first {
        width: 100%;
      }

      div.second {
        width: 80%;
      }

      div.third {
        width: 60%;
      }
    }

    button.active {
      div.first {
        width: 90%;
        transform: rotate(135deg) translate(0.2rem, -0.3rem);
        transition: all 0.5s;
      }

      div.second {
        display: none;
      }

      div.third {
        width: 90%;
        transform: rotate(-135deg) translate(0.4rem, 0.6rem);
        transition: all 0.5s;
      }
    }
  }
`

