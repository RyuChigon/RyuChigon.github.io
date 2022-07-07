import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostBlock from '@/components/PostBlock'

const Blog = ({ posts }) => {
  return (
    <div className="mt-5">
      {posts && posts.map((post, index) => (
        <PostBlock
          title={post.frontMatter.title}
          des={post.frontMatter.description}
          date={post.frontMatter.date}
          slug={post.slug}
          key={index}
        />
      ))}
    </div>
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
