import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeMode } from '@/styles/theme';
import lightMode from '@/public/static/lightMode.png';
import darkMode from '@/public/static/darkMode.png';

interface HeaderProps {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <Link href="/" passHref>
          <Title>RyuChigon&apos;s Blog</Title>
        </Link>
        <Menus>
          <Image
            src={theme === ThemeMode.LIGHT ? darkMode : lightMode}
            alt="toggleMode"
            width={25}
            height={25}
            onClick={toggleTheme}
            style={{ cursor: 'pointer' }}
          />
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
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.color};
`;

const Menus = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 30px;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.color}
`