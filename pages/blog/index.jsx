import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostBlock from '@/components/PostBlock'
import styled from 'styled-components'

const Blog = ({ posts }) => {
  return (
    <Container>
      {posts && posts.sort((a, b) => {
        return Date.parse(b.frontMatter.date) - Date.parse(a.frontMatter.date);
      }).map((post, index) => (
        <PostBlock
          title={post.frontMatter.title}
          des={post.frontMatter.description}
          date={post.frontMatter.date}
          slug={post.slug}
          key={index}
        />
      ))}
    </Container>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Blog;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
