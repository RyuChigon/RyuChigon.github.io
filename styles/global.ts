import { createGlobalStyle, DefaultTheme } from 'styled-components';

const size = {
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
};

const maxWidth = {
  mobile: '640px',
  tablet: '760px',
  laptop: '960px',
  laptopL: '1300px',
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
};

export const theme: DefaultTheme = {
  colors: {
    primary: '#123456'
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: "NanumSquare", "sans-serif"
  }
  :root {
    --header-height: 27px;
    --header-border: 5px;
    --header-margin: 23px;
    --header-size: calc(var(--header-height) + var(--header-margin) + var(--header-border));
    --main-margin-top: 33px;
    --main-margin-bottom: 32px;
  }

  @media screen and (max-width:640px) {
    :root {
      --screen-max-width: 90%;
      min-width: 500px;
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
`;
