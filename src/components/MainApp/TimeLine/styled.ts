import styled from 'styled-components'
import { textColor, backgroundColor } from '../../../assets/colors'

export const ContainerTimeLine = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;

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

  @media(max-width: 1110px) {
    width: 90%;
  }

  @media(max-width: 910px) {
    width: 100%;
  }

  @media(max-width: 830px) {
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

  @media(max-width: 730px) {
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

  @media(max-width: 600px) {
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
`