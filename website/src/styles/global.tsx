// Imports
import { globalProps } from '../models/';
import styled, { createGlobalStyle } from 'styled-components';
import { fonts } from './variables';

// Global styles
const Global = createGlobalStyle<globalProps>`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        height: 100vh;
       font-family: ${fonts.Comfortaa};
    }

    #root {
        height: 100%;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style-type: none;
        text-decoration:none;
    }
`;

// Just a simple center class
const Center = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

// Exporting everything
export { Global, Center };
