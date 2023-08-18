import styled from 'styled-components'
import { textColor, backgroundColor } from '../../assets/colors'

export const ToggleButton = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    max-width: 40px;
    width: 100%;
    margin: 0rem 2rem 0rem 2rem;

    button {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      height: 34px;
      border: none;
      background-color: ${backgroundColor};
      cursor: pointer;

      div {
        height: 0.2rem;
        background-color: ${textColor};
        border-radius: 1rem;
        transition: all 0.3s;
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
        display: flex;
        margin-top: 1rem;
    }

    button.active div.first {
      transform: rotate(135deg);
      transition: all 0.3s;
    }

    button.active div.second {
      display: none;
    }

    button.active div.third {
      width: 100%;
      transform: rotate(-135deg) translate(0.6rem, 0.8rem);
      transition: all 0.3s;
    }
`

