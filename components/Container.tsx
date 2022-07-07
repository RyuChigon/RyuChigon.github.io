import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Container = (props) => {
  return (
    <>
      <Header />
      <MainContainer>
        <main>{props.children}</main>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Container;


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