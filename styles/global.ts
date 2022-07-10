import { createGlobalStyle } from 'styled-components';

const size = {
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
};

const maxWidth = {
  mobile: '640px',
  tablet: '760px',
  laptop: '800px',
  laptopL: '800px',
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
};

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: "NanumSquare", "Open Sans", "sans-serif";
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }
  :root {
    --header-height: 27px;
    --header-margin: 20px;
    --header-padding: 23px;
    --header-size: calc(var(--header-height) + var(--header-margin) + 2 * var(--header-padding));
    --main-margin-top: 33px;
    --main-margin-bottom: 32px;
    --footer-height: 20px;
    --footer-margin: 15px;
    --footer-padding: 15px;
    --footer-size: calc(var(--footer-height) + var(--footer-margin) + 2 * var(--footer-padding));
  }

  @media screen and (max-width:640px) {
    :root {
      --screen-max-width: 90%;
      min-width: 300px;
    }
  }

  @media screen and ${device.mobile} {
    :root {
      --screen-max-width: ${maxWidth.mobile};
    }
  }

  @media screen and ${device.tablet} {
    :root {
      --screen-max-width: ${maxWidth.tablet};
    }
  }

  @media screen and ${device.laptop} {
    :root {
      --screen-max-width: ${maxWidth.laptop};
    }
  }

  @media screen and ${device.laptopL} {
    :root {
      --screen-max-width: ${maxWidth.laptopL};
    }
  }

  /* Start Code Highlight Style */
  /*!
    Theme: Default
    Description: Original highlight.js style
    Author: (c) Ivan Sagalaev <maniac@softwaremaniacs.org>
    Maintainer: @highlightjs/core-team
    Website: https://highlightjs.org/
    License: see project LICENSE
    Touched: 2021
  */
  /*
    Modified by RyuChigon (2022)
  */
  pre {
    background: #eeeeee;
    padding: 20px;
    border-radius: 8px;
  }

  pre code.hljs {
    display: block;
    overflow-x: auto;
    font-size: 1em;
    font-family: "Fira Code", "NanumSquare";
    color: #000000;
  }

  .hljs {
  }

  .hljs-subst {
  }

  .hljs-formula,
  .hljs-attr,
  .hljs-property,
  .hljs-params {}

  .hljs-comment {
    color: #697070;
  }
  .hljs-tag,
  .hljs-punctuation {
    color: #444a;
  }

  .hljs-tag .hljs-name,
  .hljs-tag .hljs-attr {
    color: #444;
  }

  .hljs-keyword,
  .hljs-attribute,
  .hljs-selector-tag,
  .hljs-meta .hljs-keyword,

  .hljs-doctag,
  .hljs-name {
    font-weight: bold;
  }

  .hljs-type,
  .hljs-string,
  .hljs-number,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-quote,
  .hljs-template-tag,
  .hljs-deletion {
    color: #880000;
  }

  .hljs-title,
  .hljs-section {
    color: #880000;
    font-weight: bold;
  }

  .hljs-regexp,
  .hljs-symbol,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-link,
  .hljs-selector-attr,
  .hljs-operator,
  .hljs-selector-pseudo {
    color: #ab5656;
  }

  .hljs-literal {
    color: #695;
  }

  .hljs-built_in,
  .hljs-bullet,
  .hljs-code,
  .hljs-addition {
    color: #397300;
  }

  .hljs-meta {
    color: #1f7199;
  }

  .hljs-meta .hljs-string {
    color: #38a;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }
  /* End Code Highlight Style */
`;

