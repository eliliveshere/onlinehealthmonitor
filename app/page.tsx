"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
  Activity,
  Lock,
  TrendingDown,
  Globe,
  MapPin,
  FileText,
  Smartphone,
  MessageSquare,
  Share2,
  PhoneCall
} from "lucide-react";

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Activity className="w-5 h-5 text-zinc-900 group-hover:text-white relative z-10 transition-colors" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-zinc-900 text-sm tracking-tight flex items-center gap-2">
                Online Health Monitor
                <span className="hidden sm:inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase tracking-wide">
                  Beta
                </span>
              </div>
              <div className="text-[10px] text-zinc-500 font-medium">Website + Google + Calls monitoring</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-500 md:flex">
            <Link href="#how" className="hover:text-emerald-600 transition-colors">How it works</Link>
            <Link href="#what" className="hover:text-emerald-600 transition-colors">What you get</Link>
            <Link href="#pricing" className="hover:text-emerald-600 transition-colors">Pricing</Link>
            <a
              href="#audit"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 transition-all font-semibold shadow-lg shadow-zinc-900/20"
            >
              Get free audit
            </a>
          </nav>
        </div>
      </header>

      {/* HERO (Colorful & Condensed) */}
      <section className="relative border-b border-zinc-100 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.3] pointer-events-none" />

        {/* Colorful Gradients/Blobs */}
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-200/40 blur-[100px] pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute top-1/2 -left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-200/40 to-indigo-200/40 blur-[80px] pointer-events-none mix-blend-multiply" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 md:py-16 md:items-center min-h-[calc(100vh-64px)] md:min-h-0">
          <div className="flex flex-col justify-center relative z-10">
            {/* Who it's for */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-zinc-600 mb-5 shadow-sm w-fit transition-transform hover:scale-105 cursor-default hover:border-emerald-200 hover:ring-2 hover:ring-emerald-50/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Built for local businesses that rely on calls + inquiries
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-zinc-900 leading-[1.05]">
              Find silent problems that cost you <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 decoration-emerald-200 underline decoration-4 underline-offset-4">calls</span>.
            </h1>
            <p className="mt-5 text-lg text-zinc-600 leading-relaxed font-normal max-w-lg">
              We monitor your website, Google listing, and (optionally) call trends — then get a simple monthly score
              and one clear fix to protect revenue.
            </p>

            {/* Colored Trust signals */}
            <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-zinc-600">
              <span className="rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-800 px-3 py-1.5 shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Privacy-first
              </span>
              <span className="rounded-full border border-zinc-200 bg-white/50 px-3 py-1.5 shadow-sm backdrop-blur-sm">No recordings</span>
              <span className="rounded-full border border-zinc-200 bg-white/50 px-3 py-1.5 shadow-sm backdrop-blur-sm">Call tracking optional</span>
            </div>

            {/* CTA row */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#audit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 text-white font-bold hover:from-emerald-500 hover:to-teal-500 transition-all shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/30 active:scale-[0.98] ring-1 ring-white/20"
              >
                Get my free audit <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#sample"
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 px-6 py-4 font-semibold text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 transition-all bg-white"
              >
                See a sample report
              </a>
            </div>

            <p className="mt-4 text-xs font-medium text-zinc-400 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Takes ~60 seconds. You’ll get a preview score immediately.
            </p>

            {/* Tiny “why now” */}
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 to-white/80 border border-amber-100/60 shadow-sm flex gap-3 max-w-md backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-200/20 to-transparent rounded-bl-full pointer-events-none" />
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-600 leading-relaxed relative z-10">
                <strong className="text-zinc-900 font-semibold">Why this matters:</strong> Most businesses lose leads from small issues like broken forms or wrong hours. You don’t notice until revenue dips.
              </p>
            </div>
          </div>

          {/* AUDIT FORM CARD (Polish + Color) */}
          <div id="audit" className="bg-white/80 backdrop-blur-md rounded-[2rem] border border-zinc-200/60 p-6 md:p-8 shadow-2xl shadow-zinc-200/40 relative overflow-hidden group hover:shadow-emerald-900/5 transition-all duration-500">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"></div>

            {formStatus === 'idle' ? (
              <>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-lg font-bold text-zinc-900">Get your free audit</h2>
                    <p className="mt-1 text-xs text-zinc-500 font-medium">
                      We’ll email a 1-page snapshot you can act on.
                    </p>
                  </div>
                  <div className="hidden rounded-lg border border-emerald-100 bg-emerald-50 px-2 py-1.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700 md:block">
                    No spam • No sales call
                  </div>
                </div>

                <form onSubmit={handleAuditSubmit} className="grid gap-4 relative z-10">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wide text-zinc-500 ml-1 mb-1 block">Website or Google URL</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all placeholder-zinc-400"
                      placeholder="yourdomain.com"
                    />
                    <p className="mt-1 text-[10px] text-zinc-400 ml-1">
                      Tip: if you don’t have a website, use your Google listing.
                    </p>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wide text-zinc-500 ml-1 mb-1 block">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all placeholder-zinc-400"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wide text-zinc-500 ml-1 mb-1 block">Business name (optional)</label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all placeholder-zinc-400"
                      placeholder="e.g., Smith Plumbing"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-5 py-4 font-bold text-white hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 active:scale-[0.98]"
                  >
                    Send my free audit
                  </button>

                  <div className="text-[10px] text-zinc-400 flex items-center gap-1.5 justify-center">
                    <Lock className="w-3 h-3" />
                    We only email your audit. No recordings.
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-10 space-y-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-[bounce_1s_ease-in-out_1]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">Request received.</h3>
                  <p className="text-zinc-500 text-xs max-w-xs mx-auto mt-2">We're generating your preview now. Check your inbox shortly.</p>
                </div>
                <div className="pt-4 border-t border-zinc-100">
                  <Link href="#" className="text-zinc-900 font-bold hover:underline text-sm inline-flex items-center gap-1">
                    Want it faster? Book a 10-min walkthrough <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (Visual Update) */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-20 lg:py-24 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">How it works</h2>
          <p className="mt-4 text-lg text-zinc-500 font-normal">
            No complex dashboards. Just signal + action.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-zinc-200 via-emerald-200 to-zinc-200 -z-10" />

          {[
            {
              step: "01",
              title: "We scan your presence",
              desc: "Website + Google listing (and call trends on Pro plans).",
              icon: <Globe className="w-6 h-6 text-white" />,
              bg: "bg-blue-500 shadow-blue-200"
            },
            {
              step: "02",
              title: "We score what matters",
              desc: "Forms, speed, hours, visibility, and missed-call risk.",
              icon: <Activity className="w-6 h-6 text-white" />,
              bg: "bg-emerald-500 shadow-emerald-200"
            },
            {
              step: "03",
              title: "You get one clear fix",
              desc: "A monthly report: what changed + exactly what to do next.",
              icon: <FileText className="w-6 h-6 text-white" />,
              bg: "bg-zinc-900 shadow-zinc-300"
            },
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className={`w-16 h-16 rounded-2xl ${item.bg} shadow-xl flex items-center justify-center mb-6 mx-auto md:mx-0 transform transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                {item.icon}
              </div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Step {item.step}</div>
              <div className="text-xl font-bold text-zinc-900 mb-3">{item.title}</div>
              <div className="text-sm text-zinc-600 leading-relaxed font-medium">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
          <div className="text-lg font-bold text-zinc-900 mb-4 relative z-10">What you get each month</div>
          <ul className="grid gap-3 text-sm font-medium text-zinc-700 md:grid-cols-3 relative z-10">
            <li className="flex items-center gap-3 bg-white p-4 rounded-xl border border-zinc-200/60 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              Updated health score + trend
            </li>
            <li className="flex items-center gap-3 bg-white p-4 rounded-xl border border-zinc-200/60 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              What broke, slipped, or changed
            </li>
            <li className="flex items-center gap-3 bg-white p-4 rounded-xl border border-zinc-200/60 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              One clear recommendation
            </li>
          </ul>
        </div>
      </section>

      {/* SAMPLE REPORT (Enhanced Visuals) */}
      <section id="sample" className="border-y border-zinc-100 bg-zinc-50 relative overflow-hidden">
        {/* Background blobs for depth */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-purple-50/20 to-transparent pointer-events-none" />

        <div className="mx-auto max-w-6xl px-4 py-20 lg:py-24 relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">A one-page report you’ll actually read.</h2>
              <p className="mt-4 text-lg text-zinc-600 font-normal leading-relaxed">
                Business owners don’t want dashboards. They want clarity: what changed, what’s risky, and what to fix first.
              </p>

              <div className="mt-10 grid gap-4">
                {[
                  ["Score + Momentum", "See this month vs last month so you notice trends early."],
                  ["Signal Breakdown", "Calls/forms, Google listing, speed/mobile, reviews, social consistency."],
                  ["One Priority Fix", "The highest-impact fix you can assign or do yourself."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-zinc-200/60 bg-white/60 backdrop-blur-sm p-5 shadow-sm flex items-start gap-4 transition-all hover:border-emerald-200 hover:shadow-md hover:bg-white">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-900">{t}</div>
                      <div className="mt-1 text-sm font-medium text-zinc-500">{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Report Visual (High Fidelity with Polish) */}
            <div className="relative group perspective-1000 w-full max-w-lg mx-auto lg:mr-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200 via-emerald-100 to-teal-200 rounded-[2.5rem] opacity-40 blur-2xl -z-10 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="rounded-[2rem] border border-zinc-200/80 bg-white shadow-2xl shadow-zinc-200/50 transform rotate-1 group-hover:rotate-0 transition-transform duration-500 overflow-hidden relative">

                {/* 1. Header Block */}
                <div className="p-6 border-b border-zinc-100 bg-white/50 backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Monthly Report</div>
                      <div className="font-bold text-zinc-900 text-lg tracking-tight">Maple Ridge Plumbing</div>
                      <div className="text-xs text-zinc-500 font-medium">March 2026 • Toronto, ON</div>
                    </div>
                    <div className="h-8 w-8 bg-zinc-50 border border-zinc-100 rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-emerald-500" />
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-5xl font-bold text-zinc-900 tracking-tighter leading-none">6.5<span className="text-2xl text-zinc-300 font-medium">/10</span></div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 text-[10px] font-bold uppercase tracking-wide rounded-full border border-rose-100">
                      <TrendingDown className="w-3 h-3" /> Slightly down
                    </div>
                  </div>
                </div>

                {/* 2. Status Grid (Mini) */}
                <div className="p-6 bg-zinc-50/30 space-y-5">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Card 1 */}
                    <div className="bg-white border border-zinc-200/60 p-3.5 rounded-2xl shadow-sm hover:shadow-md transition-shadow group/card">
                      <div className="flex justify-between mb-2">
                        <div className="p-1.5 bg-blue-50 rounded-lg border border-blue-100"><Globe className="w-3 h-3 text-blue-500" /></div>
                        <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                      </div>
                      <div className="text-xs font-bold text-zinc-900">Website</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5 font-medium">Mobile friction</div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white border border-zinc-200/60 p-3.5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between mb-2">
                        <div className="p-1.5 bg-emerald-50 rounded-lg border border-emerald-100"><MapPin className="w-3 h-3 text-emerald-500" /></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      </div>
                      <div className="text-xs font-bold text-zinc-900">Google</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5 font-medium">Visibility up</div>
                    </div>
                  </div>

                  {/* 3. Recommendation */}
                  <div className="bg-zinc-900 rounded-2xl p-5 shadow-xl shadow-zinc-900/10 text-white relative overflow-hidden group/card cursor-default">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover/card:opacity-20 transition-opacity"><Activity className="w-12 h-12" /></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5"><ArrowRight className="w-3 h-3" /> Priority Action</div>
                    <div className="font-bold text-sm mb-1 leading-snug">"Add simple missed-call capture."</div>
                    <div className="text-[10px] text-zinc-400 font-medium">You missed 4 potential leads after 5pm.</div>
                  </div>

                  {/* 4. Trends */}
                  <div className="border-t border-zinc-200 pt-4 flex justify-between text-[10px] font-semibold text-zinc-400 uppercase tracking-wide">
                    <span>Forms: <span className="text-amber-600">Risk</span></span>
                    <span>Speed: <span className="text-zinc-700">Stable</span></span>
                    <span>Reviews: <span className="text-zinc-700">Flat</span></span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white rounded-2xl p-4 shadow-xl border border-zinc-100 text-xs font-medium text-zinc-500 hidden md:flex items-center gap-2 animate-bounce z-20">
                👆 Actual one-page format
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET (Colorful Grid) */}
      <section id="what" className="mx-auto max-w-6xl px-4 py-20 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">What we monitor <span className="text-zinc-400 font-normal">(ordered by impact)</span></h2>
          <p className="mt-4 text-lg text-zinc-500 font-normal">
            The goal: catch the highest-impact issues first to protect your bottom line.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Calls + Forms", sub: "Detects missed calls, broken forms, and after-hours leakage risk.", icon: <PhoneCall className="w-5 h-5 text-white" />, gradient: "from-emerald-500 to-teal-500" },
            { t: "Google Listing", sub: "Hours, NAP consistency, reviews trend, and listing health checks.", icon: <MapPin className="w-5 h-5 text-white" />, gradient: "from-blue-500 to-indigo-500" },
            { t: "Mobile + Speed", sub: "Loads, layout issues, and mobile UX problems that kill conversions.", icon: <Smartphone className="w-5 h-5 text-white" />, gradient: "from-amber-500 to-orange-500" },
            { t: "Website Health", sub: "Broken pages, key conversion paths, and on-site issues.", icon: <Globe className="w-5 h-5 text-white" />, gradient: "from-purple-500 to-pink-500" },
            { t: "Reviews + Reputation", sub: "Review trend and fast detection of sudden drops.", icon: <MessageSquare className="w-5 h-5 text-white" />, gradient: "from-rose-500 to-red-500" },
            { t: "Social Consistency", sub: "Posting trend signals (optional — lower urgency than calls).", icon: <Share2 className="w-5 h-5 text-white" />, gradient: "from-cyan-500 to-blue-500" },
          ].map((item, i) => (
            <div key={i} className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm hover:border-zinc-300 hover:shadow-lg transition-all group">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                {item.icon}
              </div>
              <div className="text-lg font-bold text-zinc-900 mb-2">{item.t}</div>
              <div className="text-sm text-zinc-500 leading-relaxed font-medium">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Trust reinforcement */}
        <div className="mt-16 rounded-[2rem] border border-zinc-200 bg-zinc-50/50 p-6 flex flex-col md:flex-row items-center gap-4 text-sm font-medium text-zinc-600 text-center md:text-left justify-center">
          <div className="p-2.5 bg-white rounded-full shadow-sm border border-zinc-100 text-zinc-900">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <p>
            <span className="font-bold text-zinc-900">Privacy-first:</span> We do not record calls. Call monitoring is optional and trend-only.
            You keep your number.
          </p>
        </div>

        {/* CTA repetition */}
        <div className="mt-12 text-center">
          <a
            href="#audit"
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-8 py-4 text-sm font-bold text-white hover:bg-zinc-800 shadow-lg shadow-zinc-900/10 transition-all"
          >
            Get my free audit
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-y border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">Simple pricing that pays for itself.</h2>
              <p className="mt-4 text-lg text-zinc-600 font-normal leading-relaxed">
                Most agencies charge <span className="font-bold text-zinc-900">$300–$1,000/month</span> for reporting alone.
                This is the lightweight scorecard that catches problems early.
              </p>

              <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                <div className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-4">Monthly value</div>
                <ul className="grid gap-3 text-sm font-medium text-zinc-600">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> One-page report you can forward to your team</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Clear trend vs last month (so you don’t miss declines)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> One recommendation to focus on now</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-zinc-100 text-sm font-medium text-zinc-500">
                  If this prevents even <span className="font-bold text-zinc-900 border-b-2 border-zinc-200">one missed job</span>, it pays for itself 10x over.
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 rounded-3xl border-2 border-zinc-900 bg-white p-8 shadow-2xl shadow-zinc-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-zinc-900/5 rounded-full blur-3xl -mr-10 -mt-20 pointer-events-none" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg z-10">
                Most Popular
              </div>

              <div className="mt-4 text-5xl font-bold text-zinc-900 tracking-tight">$19.99</div>
              <div className="mt-1 text-sm font-medium text-zinc-500">per month, flat</div>

              <div className="mt-8 grid gap-2 text-sm font-medium text-zinc-700">
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3 flex items-center justify-between">Monthly health score + trend <CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3 flex items-center justify-between">Website + Google monitoring <CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3 flex items-center justify-between">Optional call trend monitoring <CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3 flex items-center justify-between">One clear recommendation <CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
              </div>

              <a
                href="#audit"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-zinc-900 px-6 py-4 text-sm font-bold text-white hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 hover:shadow-zinc-900/20 active:scale-[0.98] relative z-10"
              >
                Start with a free audit
              </a>

              <div className="mt-4 text-[10px] font-medium text-zinc-400 text-center uppercase tracking-wide">
                No credit card for audit • Cancel anytime • Keep last report
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 text-center mb-12">Common questions</h2>

        <div className="grid gap-4">
          {[
            ["Is this for agencies or business owners?", "Business owners first. Agencies can use it as a neutral scorecard for clients."],
            ["Do you record calls?", "No. Never. Call monitoring is optional and trend-only (volume, missed-call risk)."],
            ["What if I only have a Google listing?", "That’s fine. We can monitor Google listing health and visibility signals."],
            ["Do I need to log into anything?", "No dashboard required. You get the report by email each month."],
          ].map(([q, a], i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:border-zinc-300 transition-colors">
              <div className="font-bold text-zinc-900 mb-2">{q}</div>
              <div className="text-sm font-medium text-zinc-600 leading-relaxed">{a}</div>
            </div>
          ))}
        </div>

        {/* CTA repetition */}
        <div className="mt-12 text-center">
          <a
            href="#audit"
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-8 py-4 text-sm font-bold text-white hover:bg-zinc-800 shadow-lg shadow-zinc-900/10 transition-all"
          >
            Get my free audit
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-zinc-100 bg-white pb-20">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="rounded-[2.5rem] border border-zinc-200 bg-zinc-50 p-8 md:p-12 md:flex md:items-center md:justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Get your free audit in 60 seconds.</div>
              <div className="mt-3 text-lg font-medium text-zinc-600">
                See your score + what to fix first. No credit card required.
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wide">
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm border border-zinc-100 text-emerald-600 border-emerald-100">Privacy-first</span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm border border-zinc-100">No recordings</span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm border border-zinc-100">Cancel anytime</span>
              </div>
            </div>

            <a
              href="#audit"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-5 text-lg font-bold text-white hover:from-emerald-500 hover:to-teal-500 transition-all shadow-xl shadow-emerald-500/20 relative z-10 md:mt-0 transform hover:-translate-y-1"
            >
              Get my free audit
            </a>

            {/* Decoration */}
            <div className="absolute right-0 top-0 h-96 w-96 bg-gradient-to-br from-emerald-100/50 to-teal-50/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
          </div>

          <div className="mt-12 text-xs font-medium text-zinc-400 text-center">
            © 2026 Online Health Monitor. All rights reserved.
          </div>
        </div>
      </section>
    </main>
  );
}
