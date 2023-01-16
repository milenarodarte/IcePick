import styled, { keyframes } from "styled-components";

const animationWarning = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`;

const MainStyled = styled.main`
  width: 100%;

  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  padding: 1rem 0rem;
  margin-top: 4.0625rem;

  overflow: hidden;

  .containerBackground {
    width: 100%;
    height: 100%;

    position: fixed;
    top: 53px;
    left: 0;
    z-index: -2;

    picture {
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .warningDiv {
    display: none;
    height: 3.875rem;
    width: 21.375rem;
    padding: 0.8rem 1rem 0.8rem 1rem;
    margin-right: 10px;

    border-radius: 1.5rem;
    background-color: var(--Grey-1);
    box-shadow: 4px 4px 20px -6px rgba(11, 0, 0, 0.3);

    animation: ${animationWarning} 0.9s both;

    @media (min-width: 700px) {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      align-self: flex-end;
    }

    .pDivWarning {
      color: var(--Color-primary);
      font-size: 1rem;
      width: 100%;
    }
  }

  .textBox {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 94%;
    height: auto;
    min-height: 10rem;
    margin: 0 auto;
    padding: 1rem;

    border-radius: 1.5rem;
    background-color: var(--Grey-1);

    box-shadow: 4px 4px 20px -6px rgba(11, 0, 0, 0.5);

    overflow-y: auto;

    @media (min-width: 700px) {
      max-width: 31.375rem;

      height: 13.5rem;
    }

    .pTextBox {
      color: var(--Color-primary);
      font-size: 1.6rem;
      height: 90%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .buttonNewPhrase {
    margin: 0 auto;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
export default MainStyled;
