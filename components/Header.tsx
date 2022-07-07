import styled from 'styled-components';
import Link from 'next/link';

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Link href="/" passHref>
          <Title>RyuChigon&apos;s Blog</Title>
        </Link>
        <Menus>
          <Link href="/blog" passHref>
            <Menu>Blog</Menu>
          </Link>
          {/* <Menu>About</Menu> */}
        </Menus>
      </Content>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  height: calc(var(--header-height) + var(--header-margin));
  padding: var(--header-padding);
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
  text-decoration: none;
  color: #000000;
`;

const Menus = styled.div`
  align-items: center;
`;

const Menu = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 30px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
`