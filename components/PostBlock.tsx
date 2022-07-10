import styled from 'styled-components';
import Link from "next/link";

const PostBlock = ({ title, des, date, slug }) => {
  return (
    <Link href={'/blog/' + slug} passHref>
      <Container>
        <Title>{title}</Title>
        <Des>{des}</Des>
        <Date>{date}</Date>
      </Container>
    </Link>
  )
}

export default PostBlock;

const Container = styled.div`
  width: calc(80% - 60px);
  background: #fcfcff;
  border: 1px solid #d9dcff;
  border-radius: 10px;
  /* box-shadow: 0px 0px 5px 3px #d4daff; */
  padding: 10px 30px;
  margin: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 0px 5px 1px #d4daff;
  }
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
`;

const Des = styled.p`
  font-size: 1rem;
  color: #484848;
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: #888888;
  font-style: italic;
`;
