import { getArticleData } from '@/lib/markdown'

export default async function BenefitsPage() {
  const article = await getArticleData('ice-bath-benefits')

  return (
    <div className="min-h-screen relative">
      {/* 科学数据可视化背景 - 网格系统 */}
      <div className="fixed inset-0 bg-slate-950"></div>

      {/* 数据网格背景 */}
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* 动态数据点装饰 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* 导航 */}
      <nav className="relative z-10 border-b border-cyan-500/20 backdrop-blur-xl bg-slate-950/80">
        <div className="container mx-auto px-6 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all group"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform inline-block">←</span>
            <span className="font-mono text-sm tracking-widest">HOME</span>
          </a>
        </div>
      </nav>

      {/* Hero区域 - 数据仪表板风格 */}
      <section className="relative z-10 container mx-auto px-6 pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* 类别标签 - 医学期刊风格 */}
          <div className="mb-8 inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-sm">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm tracking-[0.2em] text-emerald-300 font-mono font-bold uppercase">
              {article.category}
            </span>
          </div>

          {/* 标题 - 学术风格 */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8">
            <span className="block text-white">Ice Bath</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
              Benefits
            </span>
          </h1>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-4xl">
            {article.description}
          </p>

          {/* 统计数据卡片组 - 数据可视化风格 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* 数据卡片1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-6 rounded-2xl border border-emerald-500/30 bg-slate-900/80 backdrop-blur-sm">
                <div className="text-4xl font-black text-emerald-400 mb-2 font-mono">43%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Reduced Soreness</div>
              </div>
            </div>

            {/* 数据卡片2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-6 rounded-2xl border border-cyan-500/30 bg-slate-900/80 backdrop-blur-sm">
                <div className="text-4xl font-black text-cyan-400 mb-2 font-mono">250%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Norepinephrine</div>
              </div>
            </div>

            {/* 数据卡片3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-6 rounded-2xl border border-blue-500/30 bg-slate-900/80 backdrop-blur-sm">
                <div className="text-4xl font-black text-blue-400 mb-2 font-mono">29%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Fewer Sick Days</div>
              </div>
            </div>

            {/* 数据卡片4 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-6 rounded-2xl border border-violet-500/30 bg-slate-900/80 backdrop-blur-sm">
                <div className="text-4xl font-black text-violet-400 mb-2 font-mono">540%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Dopamine Boost</div>
              </div>
            </div>
          </div>

          {/* 元信息 */}
          <div className="mt-12 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg border border-slate-700 bg-slate-900/60 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                RT
              </div>
              <div>
                <div className="text-xs text-slate-500 font-mono">AUTHORED BY</div>
                <div className="text-sm text-white font-mono font-bold">{article.author}</div>
              </div>
            </div>
            <div className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900/60 backdrop-blur-sm">
              <div className="text-xs text-slate-500 font-mono">PUBLISHED</div>
              <div className="text-sm text-white font-mono font-bold">{article.date}</div>
            </div>
            <div className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900/60 backdrop-blur-sm">
              <div className="text-xs text-slate-500 font-mono">PEER-REVIEWED</div>
              <div className="text-sm text-emerald-400 font-mono font-bold">✓ VERIFIED</div>
            </div>
          </div>
        </div>
      </section>

      {/* 主内容区域 */}
      <article className="relative z-10 container mx-auto px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* 内容卡片 - 学术论文风格 */}
          <div className="relative">
            {/* 背景装饰 */}
            <div className="absolute -top-20 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-1/3 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* 主内容容器 */}
            <div className="relative rounded-3xl border border-slate-800 backdrop-blur-xl bg-slate-900/60 overflow-hidden shadow-2xl">
              {/* 顶部边框装饰 */}
              <div className="h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500"></div>

              {/* 内容 */}
              <div
                className="prose prose-invert prose-ice prose-lg max-w-none p-8 md:p-16"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
              />

              {/* 底部边框装饰 */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500"></div>
            </div>
          </div>

          {/* 研究引用部分 */}
          <div className="mt-16 p-8 rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 font-mono">Research-Backed Information</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  All statistics and health claims are derived from peer-reviewed scientific studies and clinical trials.
                  References include Cochrane Reviews, Journal of Diabetes, Netherlands Journal of Medicine, and multiple
                  university research institutions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA导航 */}
          <div className="mt-20">
            <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">
              Ready to Experience These Benefits?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CTA卡片1 */}
              <a
                href="/guides/ice-bath-buying-guide"
                className="group relative p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-slate-950/60 backdrop-blur-md hover:border-cyan-400/60 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">🛒</div>
                    <div className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold tracking-wider">
                      STEP 1
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Choose Your Ice Bath</h3>
                  <p className="text-cyan-300/80 mb-4 leading-relaxed">
                    Expert buying guide to find the perfect cold plunge system for your needs and budget
                  </p>
                  <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold group-hover:gap-4 transition-all">
                    READ BUYING GUIDE
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </a>

              {/* CTA卡片2 */}
              <a
                href="/guides/how-to-use-ice-bath"
                className="group relative p-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-slate-950/60 backdrop-blur-md hover:border-emerald-400/60 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">📖</div>
                    <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold tracking-wider">
                      STEP 2
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Master the Technique</h3>
                  <p className="text-emerald-300/80 mb-4 leading-relaxed">
                    Learn proper cold therapy protocols, safety guidelines, and optimization strategies
                  </p>
                  <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm font-bold group-hover:gap-4 transition-all">
                    VIEW USAGE GUIDE
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* 页脚 */}
      <footer className="relative z-10 border-t border-slate-800 backdrop-blur-xl bg-slate-950/80">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="font-display text-2xl font-bold mb-4">
              <span className="text-emerald-400">ICE</span>
              <span className="text-white">BATH</span>
              <span className="text-cyan-400">HUB</span>
            </div>
            <p className="font-mono text-xs text-slate-600 tracking-widest">
              © 2024 Ice Bath Hub · Evidence-Based Cold Therapy Research
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}