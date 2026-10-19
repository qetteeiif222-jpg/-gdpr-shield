"use client"
import { useState } from "react"
export default function Page(){
const [url,setUrl]=useState("")
return(
<div className="min-h-screen bg-white text-black p-4 font-sans">
<div className="bg-black text-white text-center py-2 rounded-full text-[11px] font-bold tracking-widest">WHITE-LABEL SOURCE CODE FOR SALE - $1500 - WA 782929428</div>
<h1 className="text-[42px] font-black text-center mt-12 leading-[0.9] tracking-tighter">Is your website<br/>GDPR-ready?</h1>
<p className="text-center text-gray-500 mt-4 text-sm">Scan Shopify stores for GDPR fines risk - Instant report</p>
<div className="flex justify-center gap-2 mt-8 max-w-xl mx-auto">
<input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://yourstore.com" className="border-[3px] border-black rounded-full px-6 py-3.5 w-full font-bold"/>
<a href={`https://wa.me/967782929428?text=Check:${url}`} className="bg-[#2B5CFF] text-white rounded-full px-8 py-3.5 font-black whitespace-nowrap">Check Now</a>
</div>
<div className="grid md:grid-cols-3 gap-4 mt-16 max-w-5xl mx-auto">
<div className="border-[3px] border-black rounded-[24px] p-6"><div className="text-[11px] font-black tracking-widest">BASIC</div><div className="text-4xl font-black mt-2">$49</div><div className="text-sm text-gray-500 mt-2">PDF Report</div><a href="https://wa.me/967782929428?text=I want $49 Report" className="mt-6 block text-center border-[3px] border-black rounded-full py-3 font-black">Buy $49</a></div>
<div className="bg-black text-white rounded-[24px] p-6"><div className="text-[11px] font-black tracking-widest text-yellow-300">MOST POPULAR</div><div className="text-4xl font-black mt-2">$149</div><div className="text-sm text-gray-300 mt-2">Fix + Implementation</div><a href="https://wa.me/967782929428?text=I want $149 Fix" className="mt-6 block text-center bg-white text-black rounded-full py-3 font-black">Buy $149</a></div>
<div className="bg-[#FFEB00] border-[3px] border-black rounded-[24px] p-6"><div className="text-[11px] font-black tracking-widest">WHITE-LABEL</div><div className="text-4xl font-black mt-2">$1500</div><div className="text-sm mt-2 font-bold">Full Source Code Resell Rights</div><a href="https://wa.me/967782929428?text=I want SOURCE CODE $1500" className="mt-6 block text-center bg-black text-white rounded-full py-3 font-black">Buy Source $1500</a></div>
</div>
<div className="text-center mt-12 text-xs text-gray-400">Contact: WhatsApp +967 782 929 428 - Instant Delivery</div>
</div>
)
}
