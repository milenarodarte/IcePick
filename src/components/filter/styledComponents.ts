import styled from "styled-components";

export const StyledFilterSection = styled.section`
  width: 100%;
  max-width: 60.625rem;
  height: 100%;

  margin: 0 auto;

  background-color: var(--Grey-2);
  border-radius: none;

  @media (min-width: 970px) {
    border-radius: 0.938rem;
  }

  div {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
  }
  div > div {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    justify-content: flex-start;
    align-items: center;

    margin-top: 2.25rem;
    padding: 0 0.938rem 1.5rem 0.938rem;
    overflow-y: auto;

    ::-webkit-scrollbar-thumb {
      background: var(--Color-Blue-2);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--Color-Blue);
    }

    button {
      cursor: pointer;
      padding: 0.375rem 0.875rem;
      border-radius: 1.563rem;
      background-color: var(--Color-Blue-2);
      color: var(--Grey-1);
    }
    button:hover {
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    }
    div > div {
      h2 {
        color: var(--Color-Blue-4);
      }
      min-height: 150px;
    }

    button:focus {
      background-color: var(--Color-Blue-4);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    }
    @media (min-width: 831px) {
      justify-content: center;
    }
  }
  div > ul {
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.125rem;
  }
`;

export const StyledFilterSectionProfile = styled.section`
  width: 100%;
  max-width: 60.625rem;
  height: 100%;

  margin: 0 auto;

  background-color: var(--Grey-2);
  border-radius: none;

  @media (min-width: 970px) {
    border-radius: 0.938rem;
  }

  div {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
  }
  div > div {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    justify-content: center;
    align-items: center;

    margin-top: 2.25rem;
    padding: 0 0.938rem 1.5rem 0.938rem;
    overflow-y: auto;

    ::-webkit-scrollbar-thumb {
      background: var(--Color-Blue-2);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--Color-Blue);
    }

    button {
      cursor: pointer;
      padding: 0.375rem 0.875rem;
      border-radius: 1.563rem;
      background-color: var(--Color-Blue-2);
      color: var(--Grey-1);
    }
    button:hover {
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    }
    div > div {
      h2 {
        color: var(--Color-Blue-4);
      }
      min-height: 150px;
    }

    button:focus {
      background-color: var(--Color-Blue-4);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    }
  }
  div > ul {
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.125rem;
  }
`;
