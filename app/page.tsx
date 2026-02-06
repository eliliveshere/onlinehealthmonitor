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
  Minus
} from "lucide-react";

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-center justify-center">
              <Activity className="w-5 h-5 text-zinc-900" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-zinc-900 text-sm tracking-tight">Online Health Monitor</div>
              <div className="text-[10px] text-zinc-500 font-medium">Website + Google + Calls monitoring</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-500 md:flex">
            <Link href="#how" className="hover:text-zinc-900 transition-colors">How it works</Link>
            <Link href="#what" className="hover:text-zinc-900 transition-colors">What you get</Link>
            <Link href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</Link>
            <a
              href="#audit"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 transition-all font-semibold"
            >
              Get free audit
            </a>
          </nav>
        </div>
      </header>

      {/* HERO (Tier 1: revenue + calls, who it's for, trust moved up) */}
      <section className="border-b border-zinc-100 bg-gradient-to-b from-zinc-50/50 to-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            {/* Who it's for */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 mb-6 shadow-sm w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Built for local businesses that rely on calls + inquiries
            </div>

            {/* Rewrite hero headline */}
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-zinc-900 leading-[1.1]">
              Find silent problems that cost you calls each month.
            </h1>
            <p className="mt-6 text-lg text-zinc-500 leading-relaxed font-normal max-w-lg">
              We monitor your website, Google listing, and (optionally) call trends — then send a simple monthly score
              and one clear fix to protect revenue.
            </p>

            {/* Trust signals moved higher */}
            <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-zinc-600">
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 shadow-sm">Privacy-first</span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 shadow-sm">No recordings</span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 shadow-sm">Call tracking optional</span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 shadow-sm">Cancel anytime</span>
            </div>

            {/* CTA row */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#audit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-6 py-4 text-white font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 hover:shadow-zinc-900/20"
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
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
              Takes ~60 seconds. You’ll get a preview score + what to fix first.
            </p>

            {/* Tiny “why now” */}
            <div className="mt-10 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
              <div className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                Why this matters
              </div>
              <div className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Most businesses lose leads from small issues: broken forms, wrong hours, slow mobile pages, missed calls.
                You don’t notice until revenue dips.
              </div>
            </div>
          </div>

          {/* AUDIT FORM CARD */}
          <div id="audit" className="bg-white rounded-3xl border border-zinc-200 p-6 md:p-8 shadow-xl shadow-zinc-200/50 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-zinc-900"></div>

            {formStatus === 'idle' ? (
              <>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-zinc-900">Get your free audit</h2>
                    <p className="mt-1 text-sm text-zinc-500 font-medium">
                      We’ll email a 1-page snapshot you can act on.
                    </p>
                  </div>
                  <div className="hidden rounded-xl border border-zinc-100 bg-zinc-50 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-zinc-500 md:block">
                    No spam • No sales call
                  </div>
                </div>

                <form onSubmit={handleAuditSubmit} className="grid gap-5 relative z-10">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide text-zinc-500 ml-1 mb-1.5 block">Website or Google URL</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all placeholder-zinc-400"
                      placeholder="yourdomain.com"
                    />
                    <p className="mt-1.5 text-xs text-zinc-400 ml-1">
                      Tip: if you don’t have a website, use your Google listing.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide text-zinc-500 ml-1 mb-1.5 block">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all placeholder-zinc-400"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide text-zinc-500 ml-1 mb-1.5 block">Business name (optional)</label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all placeholder-zinc-400"
                      placeholder="e.g., Smith Plumbing"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-5 py-4 font-bold text-white hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 active:scale-[0.98]"
                  >
                    Send my free audit
                  </button>

                  <div className="text-xs text-zinc-400 flex items-center gap-1.5 justify-center">
                    <Lock className="w-3 h-3" />
                    We only email your audit. No recordings.
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-[bounce_1s_ease-in-out_1]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">Request received.</h3>
                  <p className="text-zinc-500 text-sm max-w-xs mx-auto mt-2">We're generating your preview now. Check your inbox shortly.</p>
                </div>
                <div className="pt-4 border-t border-zinc-100">
                  <Link href="#" className="text-zinc-900 font-bold hover:underline text-sm inline-flex items-center gap-1">
                    Want it faster? Book a 10-min walkthrough <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}

            {/* Sample report preview (Tier 1) */}
            <div className="mt-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-bold uppercase tracking-wide text-zinc-500">Sample report preview</div>
                <a href="#sample" className="text-xs text-zinc-400 underline hover:text-zinc-900">
                  View full section
                </a>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex items-end justify-between gap-3 border-b border-zinc-100 pb-4 mb-4">
                  <div>
                    <div className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Health Score</div>
                    <div className="mt-1 text-4xl font-bold text-zinc-900 tracking-tight">6/10</div>
                  </div>
                  <div className="rounded-full bg-amber-50 border border-amber-100 px-3 py-1 text-xs font-bold text-amber-700 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Needs attention
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-zinc-600">
                  <div className="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2 flex justify-between items-center">Forms <span className="text-amber-600">Risk</span></div>
                  <div className="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2 flex justify-between items-center">Hours <span className="text-amber-600">Risk</span></div>
                  <div className="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2 flex justify-between items-center">Speed <span className="text-red-500">Slipping</span></div>
                  <div className="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2 flex justify-between items-center">Reviews <span className="text-zinc-400"><Minus className="w-3 h-3" /></span></div>
                </div>

                <div className="mt-4 rounded-lg bg-zinc-900 p-4 text-white shadow-md">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Priority Fix</div>
                  <div className="text-sm font-medium leading-tight">
                    Fix mobile form friction to prevent lost inquiries.
                  </div>
                </div>
              </div>

              <div className="mt-3 text-[10px] font-medium text-zinc-400 text-center uppercase tracking-wide">
                Real report is one page • Clear score • What changed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (clarify monthly value early) */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-20 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">How it works</h2>
          <p className="mt-4 text-lg text-zinc-500 font-normal">
            Simple process. No dashboards. Just signal + action.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["1) We scan your online presence", "Website + Google listing (and call trends if you choose)."],
            ["2) We score what matters", "Forms, speed, hours, visibility, missed-call risk, and changes over time."],
            ["3) You get one clear fix", "A monthly report: what changed + what to do next."],
          ].map(([title, desc], i) => (
            <div key={i} className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-zinc-900 mb-3">{title}</div>
              <div className="text-sm text-zinc-600 leading-relaxed font-medium">{desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:p-10">
          <div className="text-lg font-bold text-zinc-900 mb-4">What you get each month</div>
          <ul className="grid gap-3 text-sm font-medium text-zinc-700 md:grid-cols-3">
            <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-zinc-100 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Updated health score + trend
            </li>
            <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-zinc-100 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> What broke, slipped, or changed
            </li>
            <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-zinc-100 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> One clear recommendation
            </li>
          </ul>
        </div>

        {/* CTA repetition (Tier 3) */}
        <div className="mt-12 text-center md:text-left">
          <a
            href="#audit"
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-8 py-4 text-sm font-bold text-white hover:bg-zinc-800 shadow-lg shadow-zinc-900/10 transition-all"
          >
            Get my free audit
          </a>
        </div>
      </section>

      {/* SAMPLE REPORT (Tier 1) */}
      <section id="sample" className="border-y border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">A one-page report you’ll actually read.</h2>
              <p className="mt-4 text-lg text-zinc-600 font-normal leading-relaxed">
                Business owners don’t want dashboards. They want clarity: what changed, what’s risky, and what to fix first.
              </p>

              <div className="mt-10 grid gap-4">
                {[
                  ["Score + Momentrum", "See this month vs last month so you notice trends early."],
                  ["Signal Breakdown", "Calls/forms, Google listing, speed/mobile, reviews, social consistency."],
                  ["One Priority Fix", "The highest-impact fix you can assign or do yourself."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-zinc-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-900">{t}</div>
                      <div className="mt-1 text-sm font-medium text-zinc-500">{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Report Visual */}
            <div className="relative group perspective-1000">
              <div className="absolute -inset-2 bg-gradient-to-tr from-zinc-200 to-zinc-300 rounded-[2rem] opacity-50 blur-xl -z-10 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="rounded-3xl border border-zinc-200 bg-white p-2 shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
                <div className="rounded-2xl bg-zinc-50 border border-zinc-100 overflow-hidden">
                  {/* Fake Header */}
                  <div className="bg-white border-b border-zinc-100 p-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-zinc-900 rounded-md"></div>
                      <div className="h-2 w-24 bg-zinc-200 rounded"></div>
                    </div>
                    <div className="h-8 w-20 bg-zinc-100 rounded-lg"></div>
                  </div>
                  {/* Fake Grid */}
                  <div className="p-6 grid gap-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="h-3 w-32 bg-zinc-200 rounded mb-2"></div>
                        <div className="h-10 w-24 bg-zinc-900 rounded-lg"></div>
                      </div>
                      <div className="h-12 w-24 bg-amber-100 rounded-lg border border-amber-200"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm h-24">
                          <div className="h-3 w-8 bg-zinc-100 rounded mb-2"></div>
                          <div className="h-4 w-16 bg-zinc-200 rounded"></div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-5 shadow-lg">
                      <div className="h-3 w-24 bg-zinc-700/50 rounded mb-3"></div>
                      <div className="h-4 w-48 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white rounded-2xl p-4 shadow-xl border border-zinc-100 text-xs font-medium text-zinc-500 hidden md:block animate-bounce z-20">
                👆 1-Page PDF Format
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET (Tier 2: reorder features by pain) */}
      <section id="what" className="mx-auto max-w-6xl px-4 py-20 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">What we monitor <span className="text-zinc-400 font-normal">(ordered by revenue impact)</span></h2>
          <p className="mt-4 text-lg text-zinc-500 font-normal">
            The goal: catch the highest-impact issues first to protect your bottom line.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Calls + Forms", sub: "Detects missed calls, broken forms, and after-hours leakage risk.", color: "bg-emerald-50 text-emerald-600" },
            { t: "Google Listing", sub: "Hours, NAP consistency, reviews trend, and listing health checks.", color: "bg-blue-50 text-blue-600" },
            { t: "Mobile + Speed", sub: "Loads, layout issues, and mobile UX problems that kill conversions.", color: "bg-amber-50 text-amber-600" },
            { t: "Website Health", sub: "Broken pages, key conversion paths, and on-site issues.", color: "bg-zinc-50 text-zinc-600" },
            { t: "Reviews + Reputation", sub: "Review trend and fast detection of sudden drops.", color: "bg-zinc-50 text-zinc-600" },
            { t: "Social Consistency", sub: "Posting trend signals (optional — lower urgency than calls).", color: "bg-zinc-50 text-zinc-600" },
          ].map((item, i) => (
            <div key={i} className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm hover:border-zinc-300 transition-colors group">
              <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-5 font-bold shadow-sm group-hover:scale-110 transition-transform`}>
                <Activity className="w-5 h-5" />
              </div>
              <div className="text-lg font-bold text-zinc-900 mb-2">{item.t}</div>
              <div className="text-sm text-zinc-500 leading-relaxed font-medium">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Trust reinforcement (Tier 1 moved higher, but reinforce here too) */}
        <div className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 flex flex-col md:flex-row items-center gap-4 text-sm font-medium text-zinc-600 text-center md:text-left justify-center">
          <div className="p-2 bg-white rounded-full shadow-sm border border-zinc-100">
            <ShieldCheck className="w-5 h-5 text-zinc-900" />
          </div>
          <p>
            <span className="font-bold text-zinc-900">Privacy-first:</span> We do not record calls. Call monitoring is optional and trend-only.
            You keep your number.
          </p>
        </div>

        {/* CTA repetition (Tier 3) */}
        <div className="mt-12 text-center">
          <a
            href="#audit"
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-8 py-4 text-sm font-bold text-white hover:bg-zinc-800 shadow-lg shadow-zinc-900/10 transition-all"
          >
            Get my free audit
          </a>
        </div>
      </section>

      {/* PRICING (Tier 2: anchor vs agencies + monthly value) */}
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
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> One-page report you can forward to your team</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> Clear trend vs last month (so you don’t miss declines)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> One recommendation to focus on now</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-zinc-100 text-sm font-medium text-zinc-500">
                  If this prevents even <span className="font-bold text-zinc-900 border-b-2 border-zinc-200">one missed job</span>, it pays for itself 10x over.
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 rounded-3xl border-2 border-zinc-900 bg-white p-8 shadow-2xl shadow-zinc-200/50 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
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
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-zinc-900 px-6 py-4 text-sm font-bold text-white hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 hover:shadow-zinc-900/20 active:scale-[0.98]"
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

        {/* CTA repetition (Tier 3) */}
        <div className="mt-12 text-center">
          <a
            href="#audit"
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-8 py-4 text-sm font-bold text-white hover:bg-zinc-800 shadow-lg shadow-zinc-900/10 transition-all"
          >
            Get my free audit
          </a>
        </div>
      </section>

      {/* FINAL CTA (Tier 3: stronger repetition + hierarchy) */}
      <section className="border-t border-zinc-100 bg-white pb-20">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="rounded-[2.5rem] border border-zinc-200 bg-zinc-50 p-8 md:p-12 md:flex md:items-center md:justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Get your free audit in 60 seconds.</div>
              <div className="mt-3 text-lg font-medium text-zinc-600">
                See your score + what to fix first. No credit card required.
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wide">
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm border border-zinc-100">Privacy-first</span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm border border-zinc-100">No recordings</span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm border border-zinc-100">Cancel anytime</span>
              </div>
            </div>

            <a
              href="#audit"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-8 py-5 text-lg font-bold text-white hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/20 relative z-10 md:mt-0 transform hover:-translate-y-1"
            >
              Get my free audit
            </a>

            {/* Decoration */}
            <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-zinc-200/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>

          <div className="mt-12 text-xs font-medium text-zinc-400 text-center">
            © 2026 Online Health Monitor. All rights reserved.
          </div>
        </div>
      </section>
    </main>
  );
}
