import styled from 'styled-components'
import { textColor } from '../../../assets/colors'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10rem 0rem;

  div.container-about {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    div.image-left {
      display: block;
      width: 25%;
      padding: 0.5rem;

      img {
        display: block;
        border-radius: 50%;
        width: 20rem;
      }
    }

    aside.text-right {
      width: 40%;
      color: ${textColor};

      h2 {
        width: 60%;
        font-size: 2.8rem;
        margin-bottom: 2rem;
        border-bottom: 1rem solid yellow;
      }

      p {
        font-size: 1rem;
        line-height: 2rem;
        text-align: justify;
      }
    }
  }

  div.time-line {
    color: #fff;
    width: 70%;
    margin: 4rem 0rem 4rem 0rem;
    background-color: ${textColor};
  }
`