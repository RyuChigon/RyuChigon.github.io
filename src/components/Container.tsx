import { ThemeMode } from '@/styles/theme';
import { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

interface ContainerProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  children: ReactNode
}

const Container = (props: ContainerProps) => {
  return (
    <Layout>
      <Header {...props}/>
      <MainContainer>
        <main>{props.children}</main>
      </MainContainer>
      <Footer />
    </Layout>
  )
}

export default Container;

const Layout = styled.div`
  background-color: ${props => props.theme.background};
`


const MainContainer = styled.div`
  height: calc(
    100% - var(--header-size) - var(--main-margin-top) -
      var(--main-margin-bottom) - var(--footer-size)
  );
  min-height: calc(
    100vh - var(--header-size) - var(--main-margin-top) -
      var(--main-margin-bottom) - var(--footer-size)
  );
  max-width: var(--screen-max-width);
  margin: 0 auto;
  margin-top: var(--main-margin-top);
  margin-bottom: var(--main-margin-bottom);
`;