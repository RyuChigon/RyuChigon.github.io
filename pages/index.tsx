import profileImage from '@/public/static/profile.png';
import Image from '@/src/components/Image';
import styled from 'styled-components';
import { useTranslation } from 'next-export-i18n';

function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <Image
        priority
        src={profileImage}
        alt="profile"
        width={150}
        height={150}
      />
      <Title>{t('intro.title')}</Title>
      <Content>
        <Description>
          {t('intro.description')}
        </Description>
      </Content>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: ${props => props.theme.color};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Description = styled.p`
  color: ${props => props.theme.color};
`;
