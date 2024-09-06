import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function MarkdownExtractor() {
  const postDirectory = path.join(process.cwd(), 'posts')
  const fileNames = await fs.promises.readdir(postDirectory)
  const mdFiles = fileNames.filter(file => file.endsWith('.md'))

  const allPosts = await Promise.all(mdFiles.map(async (fileName) => {
    const fullPath = path.join(postDirectory, fileName)
    const fileContents = await fs.promises.readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return { 
      fileName: fileName.replace('.md', ''),
      title: data.title || fileName.replace('.md', ''),
      content 
    }
  }))

  return allPosts
}