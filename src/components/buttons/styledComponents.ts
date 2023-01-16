import styled, { css } from "styled-components";

interface IButtonProps {
  buttonSize: string;
  buttonStyle: string;
}

export const StyledButton = styled.button`
  ${({ buttonSize }: IButtonProps) => {
    switch (buttonSize) {
      case "default":
        return css`
          height: 55px;

          font-size: 20px;
          font-weight: 600;
          padding: 12px;

          width: 100%;
          max-width: 510px;
        `;
      case "big":
        return css`
          height: 60px;

          font-size: 20px;
          font-weight: 600;

          width: 100%;
          max-width: 308px;
        `;
      case "medium":
        return css`
          height: 35px;

          font-size: 16px;
          font-weight: 600;

          @media (min-width: 700px) {
            height: 55px;
          }
        `;
      case "small":
        return css`
          height: 31px;

          font-size: 15px;
          font-weight: 600;

          padding: 0px 10px;
        `;
    }
  }}

  ${({ buttonStyle }: IButtonProps) => {
    switch (buttonStyle) {
      case "bg-ColorBlue":
        return css`
          color: var(--Color-Blue-3);
          background-color: var(--Color-Blue);

          border: var(--Color-Blue);
          border-radius: 125px;

          transition: 0.4s;

          :hover {
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }
        `;

      case "bg-ColorBlue2":
        return css`
          width: 150px;

          color: var(--Grey-1);
          background-color: var(--Color-Blue-2);

          border: 1px solid var(--Color-Blue-2);
          border-radius: 125px;

          transition: 0.4s;

          :hover {
            background-color: var(--Color-Blue-4);

            border: 1px solid var(--Color-Blue-4);
          }

          :focus {
            background-color: var(--Color-Blue-4);

            border: 1px solid var(--Color-Blue-4);
          }
        `;

      case "bg-ColorBlue3":
        return css`
          width: 100%;
          max-width: 265px;

          color: var(--Grey-1);
          background-color: var(--Color-Blue-3);

          border: 1px solid var(--Color-Blue-3);
          border-radius: 125px;

          transition: 0.4s;

          :hover {
            color: var(--Color-Blue-3);
            background-color: var(--Grey-1);

            border: 1px solid var(--Grey-1);
          }

          :focus {
            color: var(--Color-Blue-3);
            background-color: var(--Grey-1);

            border: 1px solid var(--Grey-1);
          }
        `;

      case "bg-ColorBlueSmall":
        return css`
          width: 100%;
          max-width: 156px;

          color: var(--Grey-1);
          background-color: var(--Color-Blue-3);

          font-size: 16px;
          font-weight: 300;

          border: 1px solid var(--Color-Blue-3);
          border-radius: 8px;

          transition: 0.4s;

          :hover {
            color: var(--Color-Blue-3);
            background-color: var(--Grey-1);

            border: 1px solid var(--Grey-1);
          }

          :focus {
            color: var(--Color-Blue-3);
            background-color: var(--Grey-1);

            border: 1px solid var(--Grey-1);
          }
        `;

      case "bg-ColorRed":
        return css`
          color: var(--Grey-1);
          background-color: var(--Color-Red);

          font-size: 20px;
          font-weight: 600;

          border: var(--Color-Red);
          border-radius: 125px;

          transition: 0.3s;

          :hover {
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }
        `;
    }
  }}
`;
