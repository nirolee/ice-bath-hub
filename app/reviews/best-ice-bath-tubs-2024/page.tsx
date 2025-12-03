import { getArticleData } from '@/lib/markdown'

export default async function Article() {
  const article = await getArticleData('best-ice-bath-tubs-2024')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* 导航 */}
      <nav className="border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <a href="/" className="text-ice-400 hover:text-white transition-colors font-body text-sm">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* 文章内容 */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        {/* 文章头部 */}
        <header className="mb-12 pb-8 border-b border-slate-700">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-ice-900/40 text-ice-400 text-xs font-body tracking-wider rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-ice-200 font-body leading-relaxed">
            {article.description}
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-ice-400 font-body">
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </header>

        {/* Markdown内容 */}
        <div 
          className="prose prose-invert prose-ice max-w-none"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </article>

      {/* 相关文章 CTA */}
      <section className="border-t border-slate-700 bg-slate-900/50">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Start Your Ice Bath Journey?
          </h2>
          <p className="text-ice-300 mb-8 font-body">
            Check out our other guides and reviews
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/guides/ice-bath-benefits" className="px-6 py-3 bg-ice-600 text-white font-body font-bold rounded-lg hover:bg-ice-500 transition-colors">
              Ice Bath Benefits
            </a>
            <a href="/guides/how-to-use-ice-bath" className="px-6 py-3 border-2 border-ice-600 text-ice-400 font-body font-bold rounded-lg hover:bg-ice-900/30 transition-colors">
              How to Use Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
