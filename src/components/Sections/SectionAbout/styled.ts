import styled from 'styled-components'
import { backgroundColor, detailColor, textColor } from '../../../assets/colors'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0rem 0rem;

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
        border-bottom: 1rem solid ${detailColor};
      }

      p {
        font-size: 1rem;
        line-height: 2rem;
        text-align: justify;
      }
    }
  }

  div.container-time-line {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70%;
    margin-top: 1.6rem;

    h3 {
      padding: 0.5rem 0rem;
    }

    div.container-years {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;

      div {
        font-size: 0.8rem;
        color: ${textColor};
      }
    }

    div.time-line {
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: ${textColor};
      width: 100%;
      background-color: ${backgroundColor};
      border: 0.1rem solid ${textColor};

      div.ball {
        background-color: ${textColor};
        border: 0.1rem solid ${textColor};
        border-radius: 50%;
        padding: 0.1rem;
      }
  }

    div.cards-time-line {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      gap: 1rem;

      div.card {
        margin-top: 1rem;
        padding: 0.4rem;
        border: 0.1rem solid ${textColor};
        
        border-top-left-radius: 10%;
        border-top-right-radius: 10%;
        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;

        p {
          font-size: 0.8rem;
          line-height: 1.2rem;
        }
      }
    }
  }
`