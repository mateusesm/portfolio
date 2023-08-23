import styled from 'styled-components'
import { backgroundColor, textColor } from '../../../assets/colors'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50rem;
  color: ${textColor};
  background-color: green;

  h1 {
    background-color: red;
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
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: translateY(0.4rem);
      filter: contrast(90%);
    }
  }

  @media(max-width: 1290px) {
    h1 {
      background-color: red;
      font-size: 5.5rem;
      width: 50rem;
    }
  }

  @media(max-width: 850px) {
    h1 {
      background-color: red;
      font-size: 4rem;
      width: 36rem;
    }
  }

  @media(max-width: 650px) {
    h1 {
      background-color: red;
      font-size: 3rem;
      width: 28rem;
    }
  }

  @media(max-width: 490px) {
    h1 {
      background-color: red;
      font-size: 2.4rem;
      width: 22rem;
    }
  }

  @media(max-width: 400px) {
    h1 {
      background-color: red;
      font-size: 2rem;
      width: 18rem;
    }
  }
`