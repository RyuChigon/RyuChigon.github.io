import styled from 'styled-components';
import Link from "next/link";

const PostBlock = ({ title, des, date, slug }) => {
  return (
    <Link href={'/blog/' + slug} passHref>
      <Container>
        <p>{title}</p>
        <p>{des}</p>
        <p>{date}</p>
      </Container>
    </Link>
  )
}

export default PostBlock;

const Container = styled.div`
  width: 50%;
  border: 1px solid #c4c4c4;
  padding: 20px;
  cursor: pointer;
`;
