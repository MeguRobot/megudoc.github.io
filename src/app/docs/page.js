import MarkdownExtractor from './MarkdownExtractor'
import MarkdownRenderer from './MarkdownRenderer'

export default async function Home() {
  const allPosts = await MarkdownExtractor()

  return <MarkdownRenderer allPosts={allPosts} />
}