import { getPosts } from "@/src/utils";
import { POSTS_PER_PAGE } from "@/src/config.json";
import styled from "styled-components";
import PostBlock from "@/src/components/PostBlock";
import Pagination from "@/src/components/Pagination";

const BlogPage = ({ posts, currentPage, pageNumber }) => {
  return (
    <Container>
      {posts && posts.map((post, index) => (
        <PostBlock
          title={post.frontMatter.title}
          des={post.frontMatter.description}
          date={post.frontMatter.date}
          slug={post.slug}
          key={index}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        pageNumber={pageNumber}
      />
    </Container>
  )
};

export const getStaticPaths = async () => {
  const posts = getPosts();
  const pageNumber = Math.ceil(posts.length / POSTS_PER_PAGE);
  let paths = [];
  for (let i = 1; i <= pageNumber; i++) {
    paths.push({ params: { page: i.toString() } })
  }
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = ({ params }) => {
  const page = parseInt((params && params.page) || 1);
  const posts = getPosts();
  const pageNumber = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = page - 1;
  const orderedPosts = posts.slice(startIndex * POSTS_PER_PAGE, (startIndex + 1) * POSTS_PER_PAGE);
  console.log(posts);
  return {
    props:{
      posts : orderedPosts,
      currentPage : page,
      pageNumber
    }
  }
}

export default BlogPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;