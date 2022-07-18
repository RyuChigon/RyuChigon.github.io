import styled from 'styled-components';
import Link from "next/link";

const PostBlock = ({ title, des, date, slug }) => {
  return (
    <Link href={'/blog/' + slug} passHref>
      <Container>
        <Title>{title}</Title>
        <SubContent>
          <Des>{des}</Des>
          <Date>{date}</Date>
        </SubContent>
      </Container>
    </Link>
  )
}

export default PostBlock;

const Container = styled.div`
  width: calc(80% - 60px);
  background: ${props => props.theme.postBox};
  border: 1px solid #d9dcff;
  border-radius: 10px;
  padding: 10px 30px;
  margin: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 0px 5px 1px ${props => props.theme.postBoxBorder};
  }
`;

const SubContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: #000000;
`;

const Des = styled.p`
  font-size: 0.8rem;
  color: #484848;
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: #888888;
  font-style: italic;
`;
