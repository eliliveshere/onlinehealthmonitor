"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
  Globe,
  PhoneCall,
  MapPin,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Minus,
  Activity,
  Files,
  Clock,
  Smartphone,
  Zap,
  Bell,
  Lock,
  Search,
  FileText,
  Star
} from "lucide-react";

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-blue-100">

      {/* 1) Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 rounded-lg p-1.5 shadow-sm">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight leading-none text-gray-900">Online Health Monitor</h1>
              <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Digital health, like antivirus</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="#preview" className="hover:text-blue-600 transition-colors">Sample Report</Link>
            <Link href="#how-it-works" className="hover:text-blue-600 transition-colors">How it works</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
          </nav>

          <Link
            href="#audit-form"
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Get free audit
          </Link>
        </div>
      </header>

      {/* 2) Hero Section */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-blue-100">
                <ShieldCheck className="w-3 h-3" />
                For local service businesses
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Know if your website + Google listing are costing you calls.
              </h1>

              <p className="text-xl text-gray-500 leading-relaxed font-normal">
                A monthly score + one clear fix for local service businesses—so you catch issues before revenue slips.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-700">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Form checks</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Google Profile consistency</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Missed-call trend</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Mobile speed & friction</span>
              </div>
            </div>

            {/* INLINE FREE AUDIT REQUEST FORM */}
            <div id="audit-form" className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              {formStatus === 'idle' ? (
                <form onSubmit={handleAuditSubmit} className="space-y-4 relative z-10">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="business" className="block text-xs font-medium text-gray-700 mb-1 ml-1">Business Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                      <input
                        type="text"
                        id="business"
                        placeholder="e.g. Maple Plumbing"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="url" className="block text-xs font-medium text-gray-700 mb-1 ml-1">Website or Google URL</label>
                      <input
                        type="text"
                        id="url"
                        required
                        placeholder="e.g. mapleplumbing.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1 ml-1">Where should we send the audit?</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="name@business.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 transform active:scale-[0.98]"
                  >
                    Send my free audit <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex items-center justify-between pt-1">
                    <p className="text-xs text-gray-400 flex items-center gap-1.5">
                      <Lock className="w-3 h-3" /> We only email your audit. No spam.
                    </p>
                    <Link href="#preview" className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline">
                      See sample report
                    </Link>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-[bounce_1s_ease-in-out_1]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Request received.</h3>
                  <p className="text-gray-500 text-sm max-w-xs mx-auto">We're generating your preview now. Check your inbox shortly.</p>
                  <div className="pt-2">
                    <Link href="#" className="text-blue-600 font-medium hover:underline text-sm inline-flex items-center gap-1">
                      Want it faster? Book a 10-min walkthrough <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-gray-500 border-t border-gray-100 pt-6">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-gray-400" /> Privacy-first</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>No credit card</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Takes 60 seconds</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Canada-first</span>
            </div>
          </div>

          {/* Feature Grid / Value Props (Right Side on large screens) */}
          <div className="hidden lg:grid grid-cols-1 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-blue-600"><TrendingUp className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-1">Momentum, not data dumps</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Most dashboards drown you in numbers. We just show you what direction you're trending.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-green-600"><PhoneCall className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-1">Catch broken forms & calls</h3>
              <p className="text-sm text-gray-500 leading-relaxed">We check contact forms and local listing hours so you don't lose leads silently.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-orange-600"><AlertCircle className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-1">One Clear Recommendation</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Every report ends with exactly one high-impact fix to focus on this month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Sample Report Section */}
      <section id="preview" className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See exactly what you get.</h2>
            <p className="text-lg text-gray-400">No login required. Just a simple monthly PDF sent to your inbox.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Report Visual */}
            <div className="w-full lg:w-1/2 relative group perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] opacity-20 blur-2xl -z-10 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500 text-gray-900">
                {/* Fake Report Header */}
                <div className="bg-gray-50 border-b border-gray-100 p-4 flex justify-between items-center text-xs">
                  <span className="font-bold text-gray-700">ONLINE HEALTH MONITOR</span>
                  <span className="text-gray-400">Report #12 • March 2026</span>
                </div>
                {/* Fake Report Content */}
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-end border-b border-gray-100 pb-6">
                    <div>
                      <div className="text-4xl font-bold mb-1">6.5<span className="text-xl text-gray-400 font-normal">/10</span></div>
                      <div className="flex items-center gap-1 text-red-500 text-xs font-bold uppercase"><TrendingDown className="w-3 h-3" /> Slight dip</div>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <strong>Maple Ridge Plumbing</strong><br />Toronto, ON
                    </div>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-red-50 border border-red-100 p-3 rounded-lg">
                      <div className="font-bold text-red-800 mb-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Calls</div>
                      <div className="text-red-700">Missed calls up 15%</div>
                    </div>
                    <div className="bg-green-50 border border-green-100 p-3 rounded-lg">
                      <div className="font-bold text-green-800 mb-1 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Social</div>
                      <div className="text-green-700">Consistency improved</div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-lg">
                      <div className="font-bold text-yellow-800 mb-1 flex items-center gap-1"><Minus className="w-3 h-3" /> Website</div>
                      <div className="text-yellow-700">Mobile friction</div>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg opacity-60">
                      <div className="font-bold text-gray-600 mb-1">Listings</div>
                      <div>Stable</div>
                    </div>
                  </div>

                  {/* Rec */}
                  <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
                    <div className="text-[10px] text-blue-300 font-bold uppercase tracking-wider mb-2">Priority Action</div>
                    <div className="font-bold text-sm mb-1">Add missed-call capture</div>
                    <div className="text-xs text-gray-400">You missed 4 potential leads after 5pm. Enabling an auto-text back could save these.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explainer */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0 font-bold text-xl text-blue-500">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Monthly Score</h3>
                  <p className="text-gray-400 leading-relaxed">A simple 1-10 rating of your online health. We aggregate data from your website speed, Google listing visibility, and responsiveness.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0 font-bold text-xl text-blue-500">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">What Changed?</h3>
                  <p className="text-gray-400 leading-relaxed">We don't just show current stats. We show <span className="text-white">TrendDirection</span>. Know immediately if you are growing or determining.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0 font-bold text-xl text-blue-500">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">One Clear Recommendation</h3>
                  <p className="text-gray-400 leading-relaxed">Stop guessing. We give you one high-impact action item each month (e.g., "Fix your hours" or "Test your contact form").</p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/report"
                  className="inline-flex items-center gap-2 text-white border-b-2 border-blue-500 hover:text-blue-400 transition-colors pb-1 font-medium"
                >
                  View full interactive report example <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) What We Check (Credibility) */}
      <section id="how-it-works" className="py-20 md:py-32 px-4 max-w-6xl mx-auto bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Vendor-neutral. We just check the vitals.</h2>
          <p className="text-lg text-gray-500">We work with any website, any agency, and any setup. We simply monitor what exists.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4"><Globe className="w-5 h-5" /></div>
            <h3 className="font-bold text-gray-900 mb-1">Website Health</h3>
            <ul className="text-sm text-gray-500 space-y-2 mt-3">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> Form testing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> Mobile friction</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> Speed checks</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4"><MapPin className="w-5 h-5" /></div>
            <h3 className="font-bold text-gray-900 mb-1">Google Listing</h3>
            <ul className="text-sm text-gray-500 space-y-2 mt-3">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> Hours consistency</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> Review activity</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> Search visibility</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4"><PhoneCall className="w-5 h-5" /></div>
            <h3 className="font-bold text-gray-900 mb-1">Call Trends</h3>
            <ul className="text-sm text-gray-500 space-y-2 mt-3">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> Missed call volume</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> After-hours risk</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> <span className="italic text-xs bg-gray-100 px-1.5 rounded">No recordings</span></li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4"><Bell className="w-5 h-5" /></div>
            <h3 className="font-bold text-gray-900 mb-1">Critical Alerts</h3>
            <ul className="text-sm text-gray-500 space-y-2 mt-3">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> Website down</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> Broken links</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> Sudden drops</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5) Testimonials (Early Preview Feedback) */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Finally something that doesn't feel like another dashboard I have to log into. It just tells me if I'm winning or losing.",
                author: "Owner, Local Service Business (Toronto)"
              },
              {
                quote: "I used to pay an agency $500/mo just to send me similar reports. This is cleaner and faster.",
                author: "Office Manager, Clinic (Ontario)"
              },
              {
                quote: "It caught a broken contact form on our mobile site that we wouldn't have noticed for weeks.",
                author: "Founder, Trades Company (Canada)"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-gray-700 mb-6 font-medium leading-relaxed">"{t.quote}"</p>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6) Pricing */}
      <section id="pricing" className="py-20 md:py-32 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Simple, vendor-neutral pricing.</h2>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          This doesn’t replace your website or agency — it gives you a neutral scorecard to keep everyone honest.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto">
          {/* Annual Card (Placeholder) */}
          <div className="order-2 md:order-1 p-8 rounded-3xl border border-gray-100 bg-gray-50 opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Annual</div>
            <div className="text-3xl font-bold text-gray-900 mb-4">$199<span className="text-lg text-gray-400 font-normal">/yr</span></div>
            <div className="inline-block bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded mb-6">Coming Soon</div>
            <ul className="space-y-3 text-left text-sm text-gray-500 mb-8">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400" /> 2 months free</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400" /> Same full report</li>
            </ul>
            <button disabled className="w-full bg-gray-200 text-gray-400 font-bold py-3 rounded-xl cursor-not-allowed">Join Waitlist</button>
          </div>

          {/* Monthly Card (Main) */}
          <div className="order-1 md:order-2 bg-white border-2 border-blue-600 shadow-xl shadow-blue-900/10 rounded-3xl p-8 transform scale-105 relative cursor-default">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase py-1 px-3 rounded-full tracking-wide">Most Popular</div>
            <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Monthly Monitoring</div>
            <div className="flex items-center justify-center gap-1 mb-6">
              <span className="text-5xl font-bold text-gray-900">$19.99</span>
              <span className="text-gray-400 font-medium">/mo</span>
            </div>
            <ul className="space-y-4 text-left max-w-xs mx-auto mb-8">
              <li className="flex items-center gap-3 text-gray-600 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Full monthly health report</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Cancel anytime</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Works alongside your agency</span>
              </li>
            </ul>
            <Link
              href="#audit-form"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20"
            >
              Start with a free audit
            </Link>
            <p className="text-[10px] text-gray-400 mt-4 font-medium uppercase tracking-wide">Cancel anytime • Keep your last report</p>
          </div>
        </div>
      </section>

      {/* 7) FAQ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need to replace my website or marketing person?",
                a: "No. We simply monitor what exists. You can use our reports to manage your current vendors better, or to fix things yourself."
              },
              {
                q: "What if I don’t have a website?",
                a: "That's okay. We can monitor your Google Business Profile and local listings, which are often more important for local services."
              },
              {
                q: "How does call monitoring work?",
                a: "It's optional. We provide a forwarding number that tracks activity volume (missed calls, busy times). We do not record conversations. You keep your number."
              },
              {
                q: "Is this only for Canada?",
                a: "We are Canada-first, but our monitoring works for any local business in North America."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8) Final CTA */}
      <section className="py-24 px-4 text-center pb-32 bg-gray-900 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Get your free audit in 60 seconds.</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
          See exactly where you stand with a neutral, third-party scan.
        </p>
        <Link
          href="#audit-form"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold px-12 py-5 rounded-full shadow-xl shadow-blue-500/20 transition-all transform hover:-translate-y-1"
        >
          Get my free audit
          <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-sm text-gray-500 mt-6">No credit card required • Secure & Private</p>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Online Health Monitor. All rights reserved.</p>
      </footer>
    </div>
  );
}
