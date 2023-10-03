import styled from 'styled-components';
import { textColor, backgroundColor } from '../../../assets/colors';

export const ContainerTimeLine = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 80%;

  div.container-years {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 4%;
    padding: 0rem 0.4rem;

    div {
      font-size: 0.8rem;
      color: ${textColor};
    }
  }

  div.time-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: ${textColor};
    width: 1%;
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
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    gap: 1rem;
    padding: 0rem 0.4rem;

    div.card {
      width: 100%;

      padding: 2.4rem 1rem;
      border: 0.1rem solid ${textColor};
      border-radius: 0.4rem;

      p {
        font-size: 0.8rem;
        line-height: 1.6rem;
      }
    }
  }

  @media (max-width: 980px) {
    width: 90%;

    div.container-years {
      width: 6%;
      padding: 0rem 1rem;
    }

    div.time-line {
      width: 1.6%;
    }
  }
  @media (max-width: 730px) {
    width: 90%;

    div.container-years {
      width: 8%;
    }

    div.time-line {
      width: 2%;
    }
  }

  @media (max-width: 560px) {
    width: 100%;
    div.container-years {
      width: 10%;
    }

    div.time-line {
      width: 2.6%;
    }
  }

  @media (max-width: 400px) {
    div.container-years {
      width: 14%;
    }

    div.time-line {
      width: 3.6%;
    }
  }
`;
