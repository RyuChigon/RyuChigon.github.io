import fs from "fs";
import path from "path";
import matter from 'gray-matter'

export const getPosts = () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(file => {
    const slug = file.split('.')[0];
    const markdownWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);
    return { frontMatter, slug };
  }).sort((a, b) => {
    return Date.parse(b.frontMatter.date) - Date.parse(a.frontMatter.date);
  });
  
  return posts;
};
