export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 冰晶背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="ice-crystal absolute top-20 left-10 w-32 h-32 bg-ice-400/10 rounded-full blur-3xl" style={{animationDelay: '0s'}}></div>
        <div className="ice-crystal absolute top-40 right-20 w-48 h-48 bg-ice-300/10 rounded-full blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="ice-crystal absolute bottom-40 left-1/4 w-40 h-40 bg-ice-500/10 rounded-full blur-3xl" style={{animationDelay: '4s'}}></div>
      </div>

      {/* 导航栏 */}
      <nav className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="font-display text-2xl font-bold">
            <span className="text-ice-200">ICE</span>
            <span className="text-white">BATH</span>
            <span className="text-ice-400">HUB</span>
          </div>
          <div className="hidden md:flex gap-8 font-body text-sm tracking-wider">
            <a href="#reviews" className="text-ice-200 hover:text-white transition-colors">REVIEWS</a>
            <a href="#guides" className="text-ice-200 hover:text-white transition-colors">GUIDES</a>
            <a href="#comparison" className="text-ice-200 hover:text-white transition-colors">COMPARE</a>
          </div>
        </div>
      </nav>

      {/* Hero区域 */}
      <section className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* 标签 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ice-900/40 border border-ice-600/30 rounded-full mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-ice-400 rounded-full animate-pulse"></div>
            <span className="font-body text-xs tracking-widest text-ice-200">COLD THERAPY EQUIPMENT REVIEWS</span>
          </div>

          {/* 主标题 - 超大号、锐利排版 */}
          <h1 className="font-display text-7xl md:text-9xl font-black leading-none mb-8">
            <div className="shimmer-text">Transform</div>
            <div className="text-white">Your <span className="text-ice-400">Recovery</span></div>
          </h1>

          {/* 副标题 */}
          <p className="font-body text-lg md:text-xl text-ice-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Expert reviews of ice bath tubs, cold plunge pools, and recovery equipment. 
            Find the perfect <span className="text-white font-bold">cold therapy solution</span> for your needs.
          </p>

          {/* CTA按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#top-picks" className="group relative px-8 py-4 bg-gradient-to-r from-ice-600 to-ice-500 text-white font-body font-bold tracking-wider rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-ice-500/50">
              <span className="relative z-10">VIEW TOP PICKS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-ice-500 to-ice-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href="#guides" className="px-8 py-4 border-2 border-ice-400/50 text-ice-200 font-body font-bold tracking-wider rounded-lg hover:bg-ice-900/30 hover:border-ice-400 transition-all">
              READ BUYING GUIDE
            </a>
          </div>
        </div>
      </section>

      {/* 特色内容卡片 */}
      <section className="relative z-10 container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 卡片1 */}
          <div className="group relative bg-gradient-to-br from-ice-900/60 to-ice-800/40 backdrop-blur-md border border-ice-600/30 rounded-2xl p-8 hover:border-ice-400/50 transition-all hover:transform hover:-translate-y-2">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🧊</div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">Best Ice Baths 2024</h3>
            <p className="font-body text-sm text-ice-300 leading-relaxed mb-4">
              In-depth reviews of the top ice bath tubs and cold plunge pools on the market.
            </p>
            <a href="/reviews/best-ice-baths-2024" className="inline-flex items-center gap-2 text-ice-400 font-body text-sm font-bold hover:gap-4 transition-all">
              READ REVIEW 
              <span className="text-xl">→</span>
            </a>
          </div>

          {/* 卡片2 */}
          <div className="group relative bg-gradient-to-br from-ice-900/60 to-ice-800/40 backdrop-blur-md border border-ice-600/30 rounded-2xl p-8 hover:border-ice-400/50 transition-all hover:transform hover:-translate-y-2">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">❄️</div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">Buyer's Guide</h3>
            <p className="font-body text-sm text-ice-300 leading-relaxed mb-4">
              Everything you need to know before purchasing your first ice bath tub.
            </p>
            <a href="/guides/ice-bath-buying-guide" className="inline-flex items-center gap-2 text-ice-400 font-body text-sm font-bold hover:gap-4 transition-all">
              LEARN MORE
              <span className="text-xl">→</span>
            </a>
          </div>

          {/* 卡片3 */}
          <div className="group relative bg-gradient-to-br from-ice-900/60 to-ice-800/40 backdrop-blur-md border border-ice-600/30 rounded-2xl p-8 hover:border-ice-400/50 transition-all hover:transform hover:-translate-y-2">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💪</div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">Recovery Tips</h3>
            <p className="font-body text-sm text-ice-300 leading-relaxed mb-4">
              Science-backed cold therapy protocols and recovery optimization strategies.
            </p>
            <a href="/guides/how-to-use-ice-bath" className="inline-flex items-center gap-2 text-ice-400 font-body text-sm font-bold hover:gap-4 transition-all">
              GET STARTED
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="relative z-10 border-t border-ice-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12 text-center">
          <div className="font-display text-xl font-bold text-ice-300 mb-4">
            ICEBATHHUB
          </div>
          <p className="font-body text-xs text-ice-400 tracking-wider">
            © 2024 Ice Bath Hub. All rights reserved. | Affiliate Disclosure
          </p>
        </div>
      </footer>
    </main>
  );
}
