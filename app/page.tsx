export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 sticky top-0 bg-black/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black text-xl tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-black">G</div>
            GDPRShield
          </div>
          <button className="px-5 py-2.5 bg-white text-black rounded-full font-bold text-sm">Start Free</button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-6">● GDPR Compliant in 5 Minutes</div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
          Make your<br/><span className="text-zinc-500">website GDPR</span><br/>compliant.
        </h1>
        <p className="mt-8 text-xl text-zinc-400 max-w-2xl mx-auto">The only GDPR banner that doesn't kill your conversion. Built for speed, privacy, and design.</p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold">Get Started Free →</button>
          <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-full font-bold">Live Demo</button>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800"><h3 className="font-bold text-lg">100% Compliant</h3><p className="text-zinc-400 mt-2 text-sm">Auto-blocks cookies before consent.</p></div>
          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800"><h3 className="font-bold text-lg">Lightning Fast</h3><p className="text-zinc-400 mt-2 text-sm">Less than 10kb script. No impact on speed.</p></div>
          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800"><h3 className="font-bold text-lg">Privacy First</h3><p className="text-zinc-400 mt-2 text-sm">No data leaves EU. Hosted in Germany.</p></div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-600 text-sm">© 2026 GDPRShield - Built in Sanaa 🔥</footer>
    </div>
  )
}
