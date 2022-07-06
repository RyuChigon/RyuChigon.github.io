import styled from 'styled-components';

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Title>RyuChigon&apos;s Blog</Title>
        <Menus>
          <Menu>Blog</Menu>
          <Menu>About</Menu>
        </Menus>
      </Content>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  height: calc(var(--header-height) + var(--header-margin));
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: var(--screen-max-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.a`
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
`;

const Menus = styled.div`
  align-items: center;
`;

const Menu = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 30px;
  cursor: pointer;
`