"use client";
import { Shield, Zap, Lock, Check, ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center">G</div>
            GDPRShield
          </div>
          <button className="px-5 py-2.5 bg-white text-black rounded-full font-bold text-sm hover:bg-zinc-200 transition">Start Free</button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          GDPR Compliant in 5 Minutes
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
          Make your<br/>
          <span className="text-zinc-500">website GDPR</span><br/>
          compliant.
        </h1>
        <p className="mt-8 text-xl text-zinc-400 max-w-2xl mx-auto">The only GDPR banner that doesn't kill your conversion. Built for speed, privacy, and design.</p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2">Get Started Free <ArrowRight className="w-4 h-4"/></button>
          <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-full font-bold">Live Demo</button>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-800 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-8">
          {[
            {icon: Shield, title: "100% Compliant", desc: "Auto-blocks cookies before consent. No legal worries."},
            {icon: Zap, title: "Lightning Fast", desc: "< 10kb script. No impact on Core Web Vitals."},
            {icon: Lock, title: "Privacy First", desc: "No data leaves EU. Hosted in Germany."}
          ].map((f,i)=>(
            <div key={i} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <f.icon className="w-8 h-8 mb-4"/>
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="text-zinc-400 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-black tracking-tighter text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl border border-zinc-800">
            <h3 className="font-bold">Starter</h3>
            <div className="text-4xl font-black mt-4">€0<span className="text-lg text-zinc-500">/mo</span></div>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li className="flex gap-2"><Check className="w-4 h-4 text-white"/> 1 Domain</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-white"/> 5k pageviews</li>
            </ul>
            <button className="mt-8 w-full py-3 bg-zinc-900 border border-zinc-800 rounded-full font-bold">Start Free</button>
          </div>
          <div className="p-8 rounded-3xl bg-white text-black">
            <h3 className="font-bold">Pro</h3>
            <div className="text-4xl font-black mt-4">€19<span className="text-lg text-zinc-600">/mo</span></div>
            <ul className="mt-6 space-y-3 text-sm text-zinc-600">
              <li className="flex gap-2"><Check className="w-4 h-4"/> Unlimited domains</li>
              <li className="flex gap-2"><Check className="w-4 h-4"/> Unlimited pageviews</li>
              <li className="flex gap-2"><Check className="w-4 h-4"/> Priority support</li>
            </ul>
            <button className="mt-8 w-full py-3 bg-black text-white rounded-full font-bold">Go Pro</button>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-600 text-sm">
        © 2026 GDPRShield - Built in Sanaa, YE 🔥
      </footer>
    </div>
  )
}
