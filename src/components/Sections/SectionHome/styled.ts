import styled from 'styled-components'
import { backgroundColor, textColor } from '../../../assets/colors'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  div.title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 50rem;
    color: ${textColor};

    h1 {
      font-size: 8rem;
      max-width: 72rem;
      width: 100%;
    }

    p {
      font-size: 1rem;
      margin-bottom: 4rem;

      span.javascript {
        background-color: yellow;
        padding: 0.4rem;
        border-top-left-radius: 25%;
        border-bottom-right-radius: 25%;
        font-weight: bold;
      }
    }

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: none;
      padding: 0.5rem 2rem;
      font-family: 'Poppins', sans-serif;
      border-radius: 8%;
      background-color: ${textColor};
      color: ${backgroundColor};
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        transform: translateY(0.4rem);
        filter: contrast(90%);
      }
    }
  }
`