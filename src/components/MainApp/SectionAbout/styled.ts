import styled from 'styled-components'
import { backgroundColor, detailColor, textColor } from '../../../assets/colors'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 0rem;
  background-color: green;

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
    margin-top: 1.6rem;

    h3 {
      text-align: center;
      padding: 0.5rem 0rem;
      margin-bottom: 0.5rem;
    }

    div.container-time-line {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 70%;

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
          margin-top: 0.5rem;
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

    div.container-years {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      padding: 0rem 0.5rem;

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
      padding: 0rem 0.2rem;

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
      padding: 0rem 0.4rem;

      div.card {
        width: 20%;
        margin-top: 0.5rem;
        
        padding: 0.4rem;
        border: 0.1rem solid ${textColor};
        border-radius: 10%;

        p {
          font-size: 0.8rem;
          line-height: 1.2rem;
        }
      }
    }
  }

  @media(max-width: 1110px) {
    div.container-about {

      aside.text-right {
        width: 50%;
      }
    }
    div.container-travel {
      div.container-time-line {
        width: 90%;
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
    div.container-travel {
      div.container-time-line {
        width: 100%;
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
    div.container-travel {
      div.container-time-line {
        div.cards-time-line {

          div.card {
            padding: 0.2rem;
            p {
              font-size: 0.6rem;
              line-height: 1.2rem;
            }
          }
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
      
      div.container-time-line {
        flex-direction: row;
        width: 90%;

        div.container-years {
          flex-direction: column;
          width: 8%;
          padding: 0rem 1.2rem;
        }

        div.time-line {
          flex-direction: column;
          width: 2%;
        }

        div.cards-time-line {
          flex-direction: column;
        
          div.card {
            width: 100%;
            padding: 2rem 1rem;
            p {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }

  @media(max-width: 600px) {

    div.container-travel {
     
      div.container-time-line {

        div.container-years {
          flex-direction: column;
        }

        div.time-line {
          flex-direction: column;
        }

        div.cards-time-line {
          flex-direction: column;
          
        }
      }
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
          font-size: 2rem;
        }
      }
    }
  }
`