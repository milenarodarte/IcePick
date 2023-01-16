import styled from "styled-components";

export const StyledCard = styled.li`
  width: 90%;
  min-height: 5rem;
  padding: 0.938rem;

  display: flex;
  justify-content: center;
  gap: 0.313rem;

  background-color: var(--Grey-1);
  border-radius: 0.625rem;
  text-align: center;

  div:nth-child(1) {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--Color-Blue-4);
    line-height: 150%;
  }
  div:nth-child(2) {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.438rem;
      color: var(--Color-Blue-4);
      cursor: pointer;
    }
    span {
      color: var(--Color-Blue-4);
    }
    @media (min-width: 727px) {
      flex-direction: row;
      gap: 0.938rem;
    }
  }

  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
