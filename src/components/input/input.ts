import { css } from "styled-components";
import styled from "styled-components";
import { iStyledInputProps } from "../../types/types";

export const Input = styled.input<iStyledInputProps>`
  width: 100%;
  background: #fdfcfc;
  border-radius: 25px;
  padding: 12px 12px;
  height: 50px;
  ${({ isDirty, isValid }) => {
    if (!isDirty) {
      return css`
        border: #2b2e2c 2.5px solid;
      `;
    } else if (isValid) {
      return css`
        border: #9ff5b2 2.5px solid;
      `;
    } else if (!isValid) {
      return css`
        border: #eb7185 2.5px solid;
      `;
    }
  }}

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  &:focus {
    ${({ isDirty, isValid }) => {
      if (!isDirty) {
        return css`
          border: black 2.5px solid;
        `;
      } else if (isValid) {
        return css`
          border: var(--toastify-text-color-success) 2.5px solid;
        `;
      } else if (!isValid) {
        return css`
          border: var(--toastify-text-color-error) 2.5px solid;
        `;
      }
    }}
  }
`;

export const Select = styled.select<iStyledInputProps>`
  width: 100%;
  background: #fdfcfc;
  border-radius: 25px;
  padding: 12px 12px;
  height: 50px;
  ${({ isDirty, isValid }) => {
    if (!isDirty) {
      return css`
        border: #2b2e2c 2.5px solid;
      `;
    } else if (isValid) {
      return css`
        border: #9ff5b2 2.5px solid;
      `;
    } else if (!isValid) {
      return css`
        border: #eb7185 2.5px solid;
      `;
    }
  }}

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  &:focus {
    ${({ isDirty, isValid }) => {
      if (!isDirty) {
        return css`
          border: black 2.5px solid;
        `;
      } else if (isValid) {
        return css`
          border: var(--toastify-text-color-success) 2.5px solid;
        `;
      } else if (!isValid) {
        return css`
          border: var(--toastify-text-color-error) 2.5px solid;
        `;
      }
    }}
  }
`;
