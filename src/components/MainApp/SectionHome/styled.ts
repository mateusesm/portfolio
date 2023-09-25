import styled from 'styled-components'
import { backgroundColor, detailColor, textColor } from '../../../assets/colors'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  
  color: ${textColor};

  h1 {
    font-size: 8rem;
    max-width: 72rem;
    width: 100%;
  }

  p {
    font-size: 1rem;
    margin-bottom: 4rem;
    text-align: center;
    padding: 0rem 1.6rem;

    span.javascript {
      background-color: ${detailColor};
      padding: 0.4rem;
      border-top-left-radius: 25%;
      border-bottom-right-radius: 25%;
      font-weight: bold;
    }
  }

  a {
    text-decoration: none;
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
    font-size: 0.6rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: translateY(0.4rem);
      filter: contrast(90%);
    }
  }

  @media(max-width: 1300px) {
    h1 {
      font-size: 7rem;
      width: 64rem;
    }
  }

  @media(max-width: 1150px) {
    h1 {
      font-size: 5.5rem;
      width: 50rem;
    }
  }

  @media(max-width: 900px) {
    h1 {
      font-size: 4.5rem;
      width: 40rem;
    }
  }

  @media(max-width: 680px) {
    h1 {
      font-size: 3.5rem;
      width: 32rem;
    }
  }

  @media(max-width: 580px) {
    h1 {
      font-size: 3rem;
      width: 28rem;
    }
  }

  @media(max-width: 490px) {
    h1 {
      font-size: 2.4rem;
      width: 22rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media(max-width: 400px) {
    h1 {
      font-size: 2rem;
      width: 18.5rem;
    }
  }
`