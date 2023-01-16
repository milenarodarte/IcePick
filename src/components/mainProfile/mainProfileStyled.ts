import styled from "styled-components";
const MainProfileStyled = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 3.125rem;
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    display: flex;
    flex-direction: column;
  }
  .warningDiv {
    display: none;
  }

  .containerProfileData {
    height: 18rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .profilePicture {
    height: 6.25rem;
    margin-bottom: 1rem;
    border-radius: 100%;
  }
  .profileParagraph {
    font-weight: 400;
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.125rem;
    margin-bottom: 0.875rem;
  }
  #email {
    margin-bottom: 1.25rem;
  }

  @media (min-width: 500px) {
    .warningDiv {
      display: flex;
      height: 4.875rem;
      width: 25.375rem;
      border-radius: 1.5rem 0rem 0rem 1.5rem;
      background-color: var(--Grey-1);
      margin-top: 1rem;
      position: sticky;
      left: 90%;
      padding: 0.8rem 1rem 0.8rem 1rem;
      box-shadow: 1px 1px 1px 1px rgba(11, 0, 0, 0.5);
    }
    .pDivWarning {
      color: var(--Color-primary);
      font-size: 1.2rem;
    }
  }
`;
export default MainProfileStyled;
