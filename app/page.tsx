export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <header className="border-b border-zinc-900 sticky top-0 bg-black z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black text-xl flex items-center gap-2"><div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center">G</div>GDPRShield</div>
          <a href="#" className="px-5 py-2.5 bg-white text-black rounded-full font-bold text-sm">Start Free</a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-40 text-center">
        <div className="inline-flex px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-8">● Trusted by 2,000+ EU Companies</div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">Make your<br/><span className="text-zinc-500">website GDPR</span><br/>compliant.</h1>
        <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">The only GDPR banner that doesn't kill your conversion. Built for speed, privacy, and design.</p>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <a href="#" className="px-8 py-4 bg-white text-black rounded-full font-bold text-center">Get Started Free →</a>
          <a href="#" className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-full font-bold text-center">Live Demo</a>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[24px] bg-zinc-900 border border-zinc-800"><h3 className="font-bold">100% Compliant</h3><p className="text-zinc-400 mt-2 text-sm">Auto-blocks cookies before consent. Legal docs included.</p></div>
          <div className="p-8 rounded-[24px] bg-zinc-900 border border-zinc-800"><h3 className="font-bold">Lightning Fast</h3><p className="text-zinc-400 mt-2 text-sm">Less than 10kb script. Zero impact on PageSpeed.</p></div>
          <div className="p-8 rounded-[24px] bg-zinc-900 border border-zinc-800"><h3 className="font-bold">Privacy First</h3><p className="text-zinc-400 mt-2 text-sm">No data leaves EU. Hosted in Germany. ISO 27001.</p></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-black tracking-tighter">Simple pricing</h2>
        <p className="text-zinc-500 mt-3">Start free, upgrade when you grow.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl border border-zinc-800"><h4 className="font-bold">Starter</h4><div className="text-3xl font-black mt-4">Free</div><p className="text-zinc-500 text-sm mt-4">1 website, 1000 pageviews</p></div>
          <div className="p-8 rounded-3xl bg-white text-black"><h4 className="font-bold">Pro</h4><div className="text-3xl font-black mt-4">€29/mo</div><p className="text-zinc-600 text-sm mt-4">Unlimited websites, 50k views</p><button className="mt-6 w-full py-3 bg-black text-white rounded-full font-bold">Most Popular</button></div>
          <div className="p-8 rounded-3xl border border-zinc-800"><h4 className="font-bold">Enterprise</h4><div className="text-3xl font-black mt-4">€99/mo</div><p className="text-zinc-500 text-sm mt-4">Unlimited everything + SLA</p></div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-12 text-center">
        <div className="font-black text-lg">GDPRShield</div>
        <div className="text-zinc-600 text-sm mt-2">© 2026 GDPRShield - Built with ❤️ in Sanaa, Yemen</div>
      </footer>
    </div>
  )
}
