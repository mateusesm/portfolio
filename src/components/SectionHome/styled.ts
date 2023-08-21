import styled from 'styled-components'
import { textColor } from '../../assets/colors'

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  padding: 0rem 2rem 0rem 2rem;

  div.title {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    padding: 0.5rem;
    color: ${textColor};

    h1 {
      font-size: 5rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.6rem;

      span {
        font-style: italic;
      }

      span.javascript {
        background-color: yellow;
        padding: 0.4rem;
        border-top-left-radius: 25%;
        border-bottom-right-radius: 25%;
        font-weight: bolder;
      }
    }
  }

  aside.right {
    display: flex;
    justify-content: center;
    width: 50%;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;

    img {
      display: block;
      border-radius: 50%;
      border-top-right-radius: 1%;
      border-bottom-left-radius: 1%;
      width: 26rem;
      box-shadow: 4rem 1rem 0rem ${textColor};
    }
  }
`