import { getArticleData } from '@/lib/markdown'

export default async function IceBathVsColdShowerPage() {
  const article = await getArticleData('ice-bath-vs-cold-shower')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950">
      {/* Back Navigation */}
      <nav className="border-b border-ice-800/30 backdrop-blur-sm bg-slate-950/50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-ice-400 hover:text-ice-300 transition-colors"
          >
            <span className="text-lg">←</span>
            <span className="font-mono text-sm tracking-wider">BACK TO HOME</span>
          </a>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 py-16">
        <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
          <span className="text-amber-400 font-mono text-sm tracking-wider">{article.category}</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Ice Bath</span>
          <span className="text-ice-400"> vs </span>
          <span className="text-white">Cold Shower</span>
        </h1>

        <p className="text-xl text-ice-200 leading-relaxed mb-8">
          {article.description}
        </p>

        {/* Comparison Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur border border-blue-500/20 rounded-lg p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">39-50°F</div>
            <div className="text-ice-300 font-mono text-sm">Ice Bath Temp</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur border border-cyan-500/20 rounded-lg p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">50-70°F</div>
            <div className="text-ice-300 font-mono text-sm">Cold Shower Temp</div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 text-sm text-ice-400 font-mono">
          <div>
            <span className="text-ice-600">AUTHOR</span>
            <div className="text-ice-300">{article.author}</div>
          </div>
          <div>
            <span className="text-ice-600">UPDATED</span>
            <div className="text-ice-300">{article.date}</div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-slate-900/50 backdrop-blur rounded-2xl border border-ice-800/20 p-8 md:p-12">
          <div
            className="prose prose-invert prose-ice max-w-none"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />
        </div>

        {/* Quick Decision Guide */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur border border-blue-500/20 rounded-xl p-8">
            <div className="text-3xl mb-4">🧊</div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Choose Ice Bath</h3>
            <ul className="space-y-2 text-ice-200">
              <li>✓ Serious athlete recovery</li>
              <li>✓ Maximum physical benefits</li>
              <li>✓ Can invest in equipment</li>
              <li>✓ Post-intense training</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur border border-cyan-500/20 rounded-xl p-8">
            <div className="text-3xl mb-4">🚿</div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Choose Cold Shower</h3>
            <ul className="space-y-2 text-ice-200">
              <li>✓ Daily mental training</li>
              <li>✓ Zero cost, maximum convenience</li>
              <li>✓ Building cold habit</li>
              <li>✓ Traveling frequently</li>
            </ul>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12 bg-ice-900/20 backdrop-blur border border-ice-800/30 rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-white mb-6">Explore More</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/guides/ice-bath-buying-guide" className="group block p-4 rounded-lg border border-ice-700/30 hover:border-ice-500/50 transition-all">
              <div className="text-ice-400 group-hover:text-ice-300 font-semibold mb-1">Ice Bath Buying Guide</div>
              <div className="text-sm text-ice-500">Find the perfect equipment for your needs</div>
            </a>
            <a href="/guides/how-to-use-ice-bath" className="group block p-4 rounded-lg border border-ice-700/30 hover:border-ice-500/50 transition-all">
              <div className="text-ice-400 group-hover:text-ice-300 font-semibold mb-1">How to Use Ice Bath</div>
              <div className="text-sm text-ice-500">Master proper cold therapy technique</div>
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-ice-800/30 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <div className="text-ice-400 font-mono text-sm mb-2">ICE BATH HUB</div>
          <p className="text-ice-600 text-sm">© 2024 Ice Bath Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
