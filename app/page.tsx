"use client";
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 flex justify-between items-center border-b border-zinc-800">
        <h1 className="text-2xl font-black">GDPRShield</h1>
        <div className="px-4 py-2 bg-white text-black rounded-full font-bold">Black is Working!</div>
      </header>
      <main className="flex flex-col items-center justify-center py-32 text-center px-4">
        <h2 className="text-7xl font-black tracking-tighter">الموقع صار<br/>أسود فخم 🔥</h2>
        <p className="text-zinc-400 mt-6 text-xl max-w-xl">اذا تشوف هذه الصفحة سوداء، معناها Tailwind اشتغل. الآن أقدر أرجع لك التصميم الكامل الأسود.</p>
        <button onClick={()=>alert('نجح!')} className="mt-10 px-8 py-4 bg-white text-black rounded-full font-bold text-lg">اضغط للتجربة</button>
      </main>
    </div>
  )
}
