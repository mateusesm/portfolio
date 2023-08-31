import styled from 'styled-components'
import { detailColor, textColor } from '../../../assets/colors'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 10rem;

  div.container-about {
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    div.image-left {
      display: block;

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

  div.container-travel {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;

    h3 {
      text-align: center;
      padding: 0.5rem 0rem;
      margin-bottom: 0.5rem;
    }
  }

  @media(max-width: 1110px) {
    div.container-about {

      aside.text-right {
        width: 50%;
      }
    }
  }

  @media(max-width: 910px) {
    div.container-about {
      margin: 0rem 0.4rem;

      aside.text-right {
        h2 {
          width: 80%;
        }
      }
    }
  }

  @media(max-width: 830px) {
    div.container-about {

      aside.text-right {

        h2 {
          width: 100%;
        }
      }
    }
  }

  @media(max-width: 730px) {
    div.container-about {
      flex-direction: column;

      aside.text-right {
        width: 90%;

        h2 {
          text-align: center;
        }
      }
    }

    div.container-travel {
      width: 100%;
    }
  }

  @media(max-width: 450px) {

    div.container-about {

      div.image-left {
        img {
          width: 15rem;
        }
      }

      aside.text-right {
        h2 {
          font-size: 1.8rem;
        }

        p {
          font-size: 0.8rem;
        }
      }
    }
  }
`