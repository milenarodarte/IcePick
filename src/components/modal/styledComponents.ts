import styled, { css, keyframes } from "styled-components";

interface iStyledContainerModalProps {
  animationModal: boolean;
}

const animationShowModal = keyframes`
  0% {
    transform: translateY(-500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
`;

const animationCloseModal = keyframes`
  0% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  5% {
    transform: translateY(-30px);
    animation-timing-function: ease-in;
  }
  15% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateY(-38px);
    animation-timing-function: ease-in;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  52% {
    transform: translateY(-75px);
    animation-timing-function: ease-in;
  }
  70% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(-800px);
    opacity: 0;
  }
`;

export const StyledContainerModal = styled.div<iStyledContainerModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--Color-Opacity);

  .modal {
    max-height: max-content;
    width: 100%;
    padding: 2.125rem 0.75rem;
    margin: 0 10px;
    border-radius: var(--Border-Radius-1);

    background-color: var(--Color-primary);
    color: #fff;

    position: relative;

    ${({ animationModal }: iStyledContainerModalProps) => {
      if (animationModal === true) {
        return css`
          animation: ${animationShowModal} 1.1s both;
        `;
      } else {
        return css`
          animation: ${animationCloseModal} 0.8s both;
        `;
      }
    }}

    @media (min-width: 700px) {
      max-width: 500px;
    }

    .btnCloseModal {
      position: absolute;
      top: 0.9375rem;
      right: 0.9375rem;

      width: 1.75rem;
      height: 1.75rem;
      font-size: 1.125rem;

      border: none;
      background-color: transparent;
      color: #fff;
      opacity: 0.8;

      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
