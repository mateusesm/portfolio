import styled from 'styled-components'
import { textColor } from '../../assets/colors'

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  padding: 0rem 2rem 0rem 2rem;

  div.title {
    background-color: red;
    display: flex;
    width: 50%;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    padding: 0.5rem;
    justify-content: center;

    h1 {
      font-size: 3.5rem;
    }

    @keyframe typewriter {
      from {
        width: 0%;
      }
      to {
        width: 50%;
      }
    }
  }

  aside.right {
    background-color: blue;
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