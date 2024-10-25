import { createGlobalStyle } from "styled-components";

import Sora from "./fonts/Sora.ttf";
import './normalize.css';

const GlobalStyle = () => {
    const Styled = createGlobalStyle`
        @font-face {
            font-family: "Sora";
            src: local("Sora"), url(${Sora}), format("truetype");
            font-weight: normal;
            font-style: normal;
        }

        :root {
            --backgroundColor: #212121;
            --secondaryColor: #C20B0B;
            --textColor: white;
        }

        * { box-sizing: border-box; }

        html, body { height: 100%; }
        
        body {
            background-color: var(--backgroundColor);
            background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 0);
            background-size: 50px 50px;
            background-position: -19px -19px;
            color: var(--textColor);
            font-family: "Sora";
        }

        /* custom scroll */

        ::-webkit-scrollbar { width: 7px; }

        ::-webkit-scrollbar-track { background-color: black; }

        ::-webkit-scrollbar-thumb {
            background-color: #676767;
            border-radius: 10px;
        }

    `;

    return <Styled />;
}

export default GlobalStyle;