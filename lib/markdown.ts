import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export interface ArticleData {
  slug: string
  contentHtml: string
  title?: string
  description?: string
  category?: string
  author?: string
  date?: string
}

export async function getArticleData(slug: string): Promise<ArticleData> {
  const fullPath = path.join(contentDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)

  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...data,
  } as ArticleData
}
