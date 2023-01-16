import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        vertical-align: baseline;
        font-family: "Inter", sans-serif;
        list-style: none;
    }

    button{
        cursor:pointer;
    } 

    button:disabled{
        cursor: not-allowed;
    }

    input:focus{
        outline:none;
        border:none;
    }

    body{
       max-width: 100%;
    }

    :root{
        --Color-primary: #5458F0;
        --Color-primary-2: #52154E;
        --Color-Blue: #56EAF6;
        --Color-Blue-2: #3395E2;
        --Color-Blue-3: #1E3C58;
        --Color-Blue-4: #195E94;
        --Color-Red: #E83F5B;
        --Color-Opacity: rgba(19, 1, 1, 0.5);

        --Grey-3: #646C7A;
        --Grey-2: #ECEFF4;
        --Grey-1: #FFFDFD;
  
        --toastify-text-color-success:#3FE864;
        --toastify-text-color-error: #E83F5B;

        --Border-Radius-1: .5rem;
        --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    ::-webkit-scrollbar {
        width: .25rem;
        height: 4px;

        @media (min-width: 1024px) {
            width: .375rem;
        }
    }

    ::-webkit-scrollbar-track {
        background: var(--color-grey-400);
        margin-top: 60px;
        border-radius: 1.6rem;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--Color-primary);
        border-radius: 1.6rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--Color-primary-2);
    }

`;
