import styled from 'styled-components'
import { textColor } from '../../../assets/colors'

export const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;

  div.title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 12rem;
    color: ${textColor};

    h1 {
      font-size: 8rem;
      width: 100%;
    }

    p {
      font-size: 1.2rem;
      line-height: 2.6rem;

      span {
        font-style: italic;
      }

      span.javascript {
        background-color: yellow;
        padding: 0.4rem;
        border-top-left-radius: 25%;
        border-bottom-right-radius: 25%;
        font-weight: bold;
      }
    }
  }
`