import styled from 'styled-components'
import { textColor } from '../../../assets/colors'

export const Section = styled.section`
  display: flex;
  width: 90%;
  padding: 0rem 1rem 0rem 1rem;

  aside.right {
    display: flex;
    justify-content: center;
    width: 40%;
    padding: 0.5rem;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;

    img {
      display: block;
      border-radius: 50%;
      border-top-right-radius: 1%;
      border-bottom-left-radius: 1%;
      width: 20rem;
      box-shadow: 4rem 1rem 0rem ${textColor};
    }
  }
`