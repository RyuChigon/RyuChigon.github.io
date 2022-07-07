import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Content>
        Copyright © 2022 RyuChigon
      </Content>
    </Container>
  )
};

export default Footer;

const Container = styled.div`
  height: calc(var(--footer-height) + var(--footer-margin));
  padding: var(--footer-padding);
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgb(216, 216, 216);
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;