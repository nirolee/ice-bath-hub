import { getArticleData } from '@/lib/markdown'

export default async function HowToUsePage() {
  const article = await getArticleData('how-to-use-ice-bath')

  return (
    <div className="min-h-screen relative">
      {/* 温度梯度背景 - 从暖到冷的垂直过渡 */}
      <div className="fixed inset-0 bg-gradient-to-b from-orange-950/20 via-slate-900 via-30% to-cyan-950"></div>

      {/* 垂直温度刻度装饰 */}
      <div className="fixed left-8 top-20 bottom-20 w-1 bg-gradient-to-b from-orange-500/30 via-blue-500/30 to-cyan-500/30 rounded-full blur-sm pointer-events-none hidden lg:block"></div>
      <div className="fixed left-8 top-20 bottom-20 w-px bg-gradient-to-b from-orange-400 via-blue-400 to-cyan-400 rounded-full pointer-events-none hidden lg:block"></div>

      {/* 温度标记 */}
      <div className="fixed left-4 top-24 flex flex-col gap-32 text-xs font-mono tracking-wider pointer-events-none hidden lg:flex">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-400 shadow-lg shadow-orange-400/50"></div>
          <span className="text-orange-400">WARM</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"></div>
          <span className="text-blue-400">COOL</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
          <span className="text-cyan-400">COLD</span>
        </div>
      </div>

      {/* 导航 */}
      <nav className="relative z-10 border-b border-cyan-500/20 backdrop-blur-lg bg-slate-950/70">
        <div className="container mx-auto px-6 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all group font-mono text-sm"
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            <span className="tracking-wider">BACK</span>
          </a>
        </div>
      </nav>

      {/* Hero区域 */}
      <section className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* 类别标签 */}
          <div className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border-2 border-cyan-400/40 bg-cyan-500/10 backdrop-blur-md">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
            </div>
            <span className="text-sm tracking-[0.25em] text-cyan-300 font-mono font-bold">
              {article.category}
            </span>
          </div>

          {/* 主标题 - 超大、分层 */}
          <h1 className="mb-10">
            <div className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-4">
              <span className="block text-white">How to Use</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
                an Ice Bath
              </span>
            </div>
          </h1>

          {/* 描述 */}
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 max-w-3xl font-light">
            {article.description}
          </p>

          {/* 元信息卡片组 */}
          <div className="flex flex-wrap gap-4">
            <div className="px-5 py-3 rounded-xl bg-gradient-to-br from-slate-800/60 to-cyan-900/60 border border-cyan-500/30 backdrop-blur-sm">
              <div className="text-cyan-400/70 text-xs mb-1 font-mono tracking-widest">BY</div>
              <div className="text-white font-bold font-mono">{article.author}</div>
            </div>
            <div className="px-5 py-3 rounded-xl bg-gradient-to-br from-slate-800/60 to-blue-900/60 border border-blue-500/30 backdrop-blur-sm">
              <div className="text-blue-400/70 text-xs mb-1 font-mono tracking-widest">UPDATED</div>
              <div className="text-white font-bold font-mono">{article.date}</div>
            </div>
            <div className="px-5 py-3 rounded-xl bg-gradient-to-br from-slate-800/60 to-indigo-900/60 border border-indigo-500/30 backdrop-blur-sm">
              <div className="text-indigo-400/70 text-xs mb-1 font-mono tracking-widest">READ TIME</div>
              <div className="text-white font-bold font-mono">12 MIN</div>
            </div>
          </div>
        </div>
      </section>

      {/* 主内容区域 - 时间轴样式 */}
      <article className="relative z-10 container mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* 内容容器 - 玻璃态卡片 */}
          <div className="relative">
            {/* 背景光效 */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px] pointer-events-none"></div>

            {/* 主内容卡片 */}
            <div className="relative rounded-3xl border border-cyan-500/20 backdrop-blur-xl bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/90 shadow-2xl overflow-hidden">
              {/* 顶部装饰条 */}
              <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

              {/* 内容 */}
              <div
                className="prose prose-invert prose-ice prose-xl max-w-none p-8 md:p-16"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
              />

              {/* 底部装饰条 */}
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>
          </div>

          {/* CTA区域 - 相关内容 */}
          <div className="mt-20">
            <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Continue Your Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 卡片1 */}
              <a
                href="/guides/ice-bath-benefits"
                className="group relative p-6 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/30 to-slate-950/30 backdrop-blur-md hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💪</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">Health Benefits</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Science-backed benefits of cold therapy
                  </p>
                </div>
              </a>

              {/* 卡片2 */}
              <a
                href="/guides/ice-bath-buying-guide"
                className="group relative p-6 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-md hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🛒</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">Buying Guide</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Choose the right ice bath system
                  </p>
                </div>
              </a>

              {/* 卡片3 */}
              <a
                href="/reviews/best-ice-baths-2024"
                className="group relative p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 to-slate-950/30 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⭐</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">Top Picks 2024</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Expert-reviewed ice bath tubs
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* 页脚 */}
      <footer className="relative z-10 border-t border-cyan-500/20 backdrop-blur-lg bg-slate-950/70">
        <div className="container mx-auto px-6 py-12 text-center">
          <div className="font-display text-2xl font-bold mb-4">
            <span className="text-cyan-400">ICE</span>
            <span className="text-white">BATH</span>
            <span className="text-blue-400">HUB</span>
          </div>
          <p className="font-mono text-xs text-slate-500 tracking-widest">
            © 2024 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}