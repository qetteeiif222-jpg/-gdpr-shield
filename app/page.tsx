"use client";

import { FormEvent, useState } from "react";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";

const heading = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "700", "800"] });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

/* ------------------------------------------------------------------ */
/* CONFIG: replace these values                                        */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "967782929428"; // digits only, no "+"
const CONTACT_EMAIL = "hello@your-domain.com"; // TODO: replace
const LEAD_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // TODO: replace (Formspree, Getform, etc.)

type PlanId = "basic" | "pro" | "white-label";

const PLANS: {
  id: PlanId;
  name: string;
  price: number;
  tagline: string;
  paypal: string;
  popular?: boolean;
  features: string[];
}[] = [
  {
    id: "basic",
    name: "Basic",
    price: 49,
    tagline: "Know exactly where your store is exposed.",
    paypal: "https://www.paypal.com/ncp/payment/REPLACE_BASIC", // TODO
    features: [
      "Full GDPR risk scan of your store",
      "Risk Report PDF with a 0–100 score",
      "Issues ranked by severity",
      "Delivered within 24 hours",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 149,
    tagline: "We fix the issues for you.",
    paypal: "https://www.paypal.com/ncp/payment/REPLACE_PRO", // TODO
    popular: true,
    features: [
      "Everything in Basic",
      "Fixes implemented on your store",
      "Cookie consent and privacy policy setup",
      "Re-scan to confirm the fixes",
      "30 days of support",
    ],
  },
  {
    id: "white-label",
    name: "White-label",
    price: 1500,
    tagline: "Run GDPRShield under your own brand.",
    paypal: "https://www.paypal.com/ncp/payment/REPLACE_WHITELABEL", // TODO
    features: [
      "Full source code (Next.js + Tailwind)",
      "Resell rights for your own clients",
      "Your logo, domain and pricing",
      "Setup walkthrough",
    ],
  },
];

const FEATURES = [
  {
    title: "Cookie and tracker detection",
    text: "Finds analytics, ad pixels and third-party scripts that fire before a visitor gives consent.",
  },
  {
    title: "Consent banner check",
    text: "Tests whether your banner really blocks tracking until a visitor accepts, and whether rejecting is as easy as accepting.",
  },
  {
    title: "Policy and legal pages",
    text: "Checks for a privacy policy, cookie policy, terms and a working data-request contact.",
  },
  {
    title: "Checkout and forms",
    text: "Looks at the data your checkout, newsletter and contact forms collect, and whether consent is recorded.",
  },
  {
    title: "Score and fix list",
    text: "Every issue comes with a severity, a plain-language explanation and the exact step that resolves it.",
  },
  {
    title: "PDF you can share",
    text: "A clean report for your team, your lawyer or your client. White-label buyers can brand it as their own.",
  },
];

// TODO: replace with REAL customer quotes before launch.
// Publishing invented testimonials can breach EU/US consumer-protection rules.
const TESTIMONIALS = [
  {
    quote: "The report listed three trackers firing before consent that we never knew about. Fixed in one afternoon.",
    name: "Customer name",
    role: "Shopify store owner",
  },
  {
    quote: "Clear, ranked and written in plain language. I forwarded it straight to our developer.",
    name: "Customer name",
    role: "Ecommerce manager",
  },
  {
    quote: "We bought the white-label version and started offering audits to our agency clients the same week.",
    name: "Customer name",
    role: "Agency founder",
  },
];

const FAQS = [
  {
    q: "Which stores can you scan?",
    a: "Any Shopify store with a myshopify.com address. If your store uses a custom domain, enter the myshopify.com address from your Shopify admin.",
  },
  {
    q: "Do I need to give you access to my store?",
    a: "No. The scan only looks at what a normal visitor can see. For the Pro plan, we ask for temporary collaborator access only to implement the fixes.",
  },
  {
    q: "Is this legal advice?",
    a: "No. The report is a technical assessment against common GDPR requirements. For legal questions, consult a qualified data-protection lawyer.",
  },
  {
    q: "How do I pay and what happens next?",
    a: "Pay with PayPal, then message us on WhatsApp with your store address. We start right away and deliver within the timeframe of your plan.",
  },
  {
    q: "What does White-label include?",
    a: "The complete source code, the right to resell the service under your own brand, and a setup walkthrough so you can deploy it yourself.",
  },
  {
    q: "Can I get a refund?",
    a: "If we cannot deliver the report for your store, you get a full refund. Contact us on WhatsApp and we will sort it out.",
  },
];

function waLink(plan: PlanId, store: string) {
  const names: Record<PlanId, string> = {
    basic: "BASIC ($49, Risk Report PDF)",
    pro: "PRO ($149, Fix + Implementation + 30 days support)",
    "white-label": "WHITE-LABEL ($1500, Full Source Code + Resell Rights)",
  };
  const storeLine = store ? ` My store: ${store}.` : "";
  const text = `Hi, I'm interested in the ${names[plan]} plan from GDPRShield.${storeLine}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function normalizeStore(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "");
}

const STORE_RE = /^[a-z0-9][a-z0-9-]*\.myshopify\.com$/;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.2-.4.700-1.300.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.300-.2.300-.9.900-.9 2.200s.9 2.500 1.100 2.700c.1.200 1.800 2.800 4.400 3.900 1.600.7 2.300.7 3.100.6.500-.1 1.500-.6 1.700-1.200.2-.6.2-1.100.2-1.200-.1-.2-.2-.2-.5-.4Z" />
    </svg>
  );
}

function ScoreRing({ score }: { score: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 130 130" className="h-32 w-32 -rotate-90" role="img" aria-label={`Sample score ${score} out of 100`}>
      <circle cx="65" cy="65" r={r} fill="none" stroke="#22304D" strokeWidth="12" />
      <circle
        cx="65"
        cy="65"
        r={r}
        fill="none"
        stroke="#FF6B5E"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - score / 100)}
      />
    </svg>
  );
}

export default function Page() {
  const [storeInput, setStoreInput] = useState("");
  const [store, setStore] = useState("");
  const [storeError, setStoreError] = useState("");

  const [email, setEmail] = useState("");
  const [leadState, setLeadState] = useState<"idle" | "sending" | "done" | "error">("idle");

  function onScan(e: FormEvent) {
    e.preventDefault();
    const value = normalizeStore(storeInput);
    if (!STORE_RE.test(value)) {
      setStore("");
      setStoreError("Enter a Shopify address like your-store.myshopify.com");
      return;
    }
    setStoreError("");
    setStore(value);
    setTimeout(() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }), 400);
  }

  async function onLead(e: FormEvent) {
    e.preventDefault();
    setLeadState("sending");
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, store, source: "gdpr-shield-landing" }),
      });
      setLeadState(res.ok ? "done" : "error");
      if (res.ok) setEmail("");
    } catch {
      setLeadState("error");
    }
  }

  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C8DFF]";

  return (
    <main className={`${body.className} min-h-screen bg-[#0B1220] text-[#E8EEF8] antialiased`}>
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-[#22304D] bg-[#0B1220]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className={`${heading.className} text-lg font-bold ${focus}`}>
            GDPRShield
          </a>
          <nav className="hidden gap-7 text-sm text-[#9DB0CF] md:flex">
            <a href="#pricing" className={`hover:text-white ${focus}`}>Pricing</a>
            <a href="#features" className={`hover:text-white ${focus}`}>Features</a>
            <a href="#testimonials" className={`hover:text-white ${focus}`}>Reviews</a>
            <a href="#faq" className={`hover:text-white ${focus}`}>FAQ</a>
            <a href="#contact" className={`hover:text-white ${focus}`}>Contact</a>
          </nav>
          <a
            href="#scanner"
            className={`rounded-lg bg-[#4C8DFF] px-4 py-2 text-sm font-bold text-[#06101F] hover:bg-[#6FA2FF] ${focus}`}
          >
            Scan my store
          </a>
        </div>
      </header>

      {/* Hero + Scanner */}
      <section id="scanner" className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
        <div>
          <h1 className={`${heading.className} text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl`}>
            Find the GDPR gaps in your Shopify store before a regulator does.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#9DB0CF]">
            GDPRShield checks cookies, trackers, consent banners and legal pages, then gives you a
            scored report and a fix for every issue.
          </p>

          <form onSubmit={onScan} className="mt-9 max-w-xl" noValidate>
            <label htmlFor="store" className="mb-2 block text-sm font-medium text-[#C5D3EA]">
              Your Shopify store address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="store"
                type="text"
                inputMode="url"
                autoComplete="off"
                value={storeInput}
                onChange={(e) => setStoreInput(e.target.value)}
                placeholder="your-store.myshopify.com"
                aria-invalid={!!storeError}
                aria-describedby="store-msg"
                className={`w-full rounded-lg border bg-[#121B2E] px-4 py-3.5 text-base text-white placeholder:text-[#5E7197] ${
                  storeError ? "border-[#FF6B5E]" : "border-[#2C3D5F]"
                } ${focus}`}
              />
              <button
                type="submit"
                className={`shrink-0 rounded-lg bg-[#4C8DFF] px-6 py-3.5 font-bold text-[#06101F] hover:bg-[#6FA2FF] ${focus}`}
              >
                Start scan
              </button>
            </div>
            <p id="store-msg" role="status" className="mt-3 min-h-6 text-sm">
              {storeError && <span className="text-[#FF8A80]">{storeError}</span>}
              {store && !storeError && (
                <span className="text-[#3DDC97]">
                  {store} is ready. Choose a plan below to get your report.
                </span>
              )}
            </p>
          </form>
        </div>

        {/* Sample report */}
        <aside aria-label="Sample report" className="self-start rounded-2xl border border-[#22304D] bg-[#121B2E] p-6">
          <p className="text-sm text-[#9DB0CF]">Sample report</p>
          <div className="mt-4 flex items-center gap-5">
            <div className="relative">
              <ScoreRing score={62} />
              <span className={`${heading.className} absolute inset-0 flex items-center justify-center text-3xl font-extrabold`}>
                62
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#9DB0CF]">
              Score out of 100. Below 80 means your store likely has issues a regulator could flag.
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF6B5E]" />
              <span>Analytics fires before consent is given</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF6B5E]" />
              <span>Reject button missing from cookie banner</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#FFC24D]" />
              <span>Privacy policy does not name a data contact</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#3DDC97]" />
              <span>Terms and refund pages found</span>
            </li>
          </ul>
        </aside>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-[#22304D] bg-[#0E1729] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className={`${heading.className} text-3xl font-extrabold sm:text-4xl`}>Pick how much help you need</h2>
          <p className="mt-3 max-w-xl text-[#9DB0CF]">One-time payments. No subscription.</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.id}
                className={`relative flex flex-col rounded-2xl border p-7 ${
                  p.popular ? "border-[#4C8DFF] bg-[#14203A] lg:-translate-y-3" : "border-[#22304D] bg-[#121B2E]"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[#4C8DFF] px-3 py-1 text-xs font-bold text-[#06101F]">
                    Most popular
                  </span>
                )}
                <h3 className={`${heading.className} text-xl font-bold`}>{p.name}</h3>
                <p className="mt-1 text-sm text-[#9DB0CF]">{p.tagline}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className={`${heading.className} text-5xl font-extrabold`}>${p.price.toLocaleString("en-US")}</span>
                  <span className="text-sm text-[#9DB0CF]">one-time</span>
                </p>

                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-[#3DDC97]" fill="currentColor" aria-hidden="true">
                        <path d="M8 14.2 4.300 10.500l1.400-1.400L8 11.400l6.300-6.300 1.400 1.400L8 14.200Z" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3">
                  <a
                    href={p.paypal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded-lg px-5 py-3 text-center font-bold ${
                      p.popular
                        ? "bg-[#4C8DFF] text-[#06101F] hover:bg-[#6FA2FF]"
                        : "bg-[#E8EEF8] text-[#0B1220] hover:bg-white"
                    } ${focus}`}
                  >
                    Pay with PayPal
                  </a>
                  <a
                    href={waLink(p.id, store)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 rounded-lg border border-[#2C3D5F] px-5 py-3 font-medium text-[#C5D3EA] hover:border-[#25D366] hover:text-[#25D366] ${focus}`}
                  >
                    <WhatsAppIcon />
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className={`${heading.className} text-3xl font-extrabold sm:text-4xl`}>What the scan covers</h2>
        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="border-l-2 border-[#4C8DFF] pl-5">
              <h3 className={`${heading.className} text-lg font-bold`}>{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9DB0CF]">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-[#22304D] bg-[#0E1729] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className={`${heading.className} text-3xl font-extrabold sm:text-4xl`}>What store owners say</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="rounded-2xl border border-[#22304D] bg-[#121B2E] p-7">
                <blockquote className="leading-relaxed text-[#DCE6F7]">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-bold">{t.name}</span>
                  <span className="text-[#9DB0CF]">, {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
        <h2 className={`${heading.className} text-3xl font-extrabold sm:text-4xl`}>Questions before you buy</h2>
        <div className="mt-10 divide-y divide-[#22304D] border-y border-[#22304D]">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 font-medium ${focus}`}>
                {f.q}
                <span className="text-xl text-[#4C8DFF] transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-[#9DB0CF]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact + email capture */}
      <section id="contact" className="border-t border-[#22304D] bg-[#0E1729] py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
          <div>
            <h2 className={`${heading.className} text-3xl font-extrabold sm:text-4xl`}>Not ready to buy yet?</h2>
            <p className="mt-3 max-w-md leading-relaxed text-[#9DB0CF]">
              Leave your email and we will send you a short GDPR checklist for Shopify stores, plus updates when
              rules change.
            </p>
            <form onSubmit={onLead} className="mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`w-full rounded-lg border border-[#2C3D5F] bg-[#121B2E] px-4 py-3 text-white placeholder:text-[#5E7197] ${focus}`}
              />
              <button
                type="submit"
                disabled={leadState === "sending"}
                className={`shrink-0 rounded-lg bg-[#4C8DFF] px-6 py-3 font-bold text-[#06101F] hover:bg-[#6FA2FF] disabled:opacity-60 ${focus}`}
              >
                {leadState === "sending" ? "Sending" : "Send me the checklist"}
              </button>
            </form>
            <p role="status" className="mt-3 min-h-6 text-sm">
              {leadState === "done" && <span className="text-[#3DDC97]">Thanks. Check your inbox.</span>}
              {leadState === "error" && (
                <span className="text-[#FF8A80]">Could not save your email. Try again or message us on WhatsApp.</span>
              )}
            </p>
          </div>

          <div className="self-center rounded-2xl border border-[#22304D] bg-[#121B2E] p-7">
            <h3 className={`${heading.className} text-xl font-bold`}>Talk to us directly</h3>
            <p className="mt-2 text-sm text-[#9DB0CF]">We reply on WhatsApp fastest.</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I have a question about GDPRShield.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-bold text-[#06210F] hover:bg-[#3BE079] ${focus}`}
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
            <p className="mt-5 text-sm text-[#9DB0CF]">
              Or email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className={`text-[#6FA2FF] underline ${focus}`}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#22304D] px-5 py-8 text-center text-sm text-[#7C8FB3]">
        © {new Date().getFullYear()} GDPRShield. Reports are technical assessments, not legal advice.
      </footer>
    </main>
  );
}
