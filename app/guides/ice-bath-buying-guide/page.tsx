import { getArticleData } from '@/lib/markdown'

export default async function BuyingGuidePage() {
  const article = await getArticleData('ice-bath-buying-guide')

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 多层冰晶背景 - 模拟冰层剖面 */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-cyan-950"></div>

      {/* 冰层分层效果 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-cyan-500/5 to-transparent backdrop-blur-[1px]"></div>
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/5 to-transparent backdrop-blur-[2px]"></div>
        <div className="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-b from-indigo-500/5 to-transparent backdrop-blur-[3px]"></div>
      </div>

      {/* 导航 */}
      <nav className="relative z-10 border-b border-cyan-500/20 backdrop-blur-md bg-slate-950/50">
        <div className="container mx-auto px-6 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all group font-mono text-sm tracking-wider"
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            <span>RETURN HOME</span>
          </a>
        </div>
      </nav>

      {/* Hero区域 - 分层信息卡片 */}
      <section className="relative z-10 container mx-auto px-6 pt-16 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* 浮动标签 */}
          <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <span className="text-xs tracking-[0.2em] text-cyan-300 font-mono uppercase">{article.category}</span>
          </div>

          {/* 标题 - 大胆的衬线字体 */}
          <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.95] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-400">
            {article.title}
          </h1>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-cyan-200/90 leading-relaxed mb-10 font-light tracking-wide max-w-3xl">
            {article.description}
          </p>

          {/* 元信息 - 分层卡片 */}
          <div className="flex flex-wrap gap-6 text-sm font-mono">
            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <div className="text-cyan-400/70 text-xs mb-1 tracking-wider">AUTHOR</div>
              <div className="text-white font-bold">{article.author}</div>
            </div>
            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 backdrop-blur-sm">
              <div className="text-blue-400/70 text-xs mb-1 tracking-wider">UPDATED</div>
              <div className="text-white font-bold">{article.date}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 内容区域 - 冰层分段视觉 */}
      <article className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* 主内容卡片 - 玻璃态效果 */}
          <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 backdrop-blur-xl bg-gradient-to-br from-slate-900/80 via-blue-950/80 to-slate-900/80 shadow-2xl shadow-cyan-500/10">
            {/* 内部光晕装饰 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* 文章内容 */}
            <div
              className="relative prose prose-invert prose-ice prose-lg max-w-none p-8 md:p-12"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          </div>

          {/* 底部导航卡片组 */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 卡片1 */}
            <a
              href="/reviews/best-ice-baths-2024"
              className="group relative p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">Top Rated Models</h3>
                <p className="text-cyan-300/80 mb-4 leading-relaxed">
                  See our expert reviews of the best ice bath tubs on the market
                </p>
                <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold group-hover:gap-4 transition-all">
                  VIEW REVIEWS
                  <span className="text-xl">→</span>
                </div>
              </div>
            </a>

            {/* 卡片2 */}
            <a
              href="/guides/how-to-use-ice-bath"
              className="group relative p-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-indigo-950/40 backdrop-blur-md hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📖</div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">Usage Guide</h3>
                <p className="text-blue-300/80 mb-4 leading-relaxed">
                  Learn proper cold therapy protocols and safety guidelines
                </p>
                <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm font-bold group-hover:gap-4 transition-all">
                  READ GUIDE
                  <span className="text-xl">→</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </article>

      {/* 页脚 */}
      <footer className="relative z-10 border-t border-cyan-500/20 backdrop-blur-md bg-slate-950/50">
        <div className="container mx-auto px-6 py-12 text-center">
          <div className="font-display text-xl font-bold text-cyan-400 mb-4 tracking-wider">
            ICE BATH HUB
          </div>
          <p className="font-mono text-xs text-cyan-500/60 tracking-widest">
            © 2024 Ice Bath Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}