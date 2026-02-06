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
  Calendar,
  Eye,
  Bell
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
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 rounded-lg p-1.5">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight leading-none text-gray-900">Online Health Monitor</h1>
              <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Digital health, like antivirus</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="#how-it-works" className="hover:text-blue-600 transition-colors">How it works</Link>
            <Link href="#what-you-get" className="hover:text-blue-600 transition-colors">What you get</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
          </nav>

          <Link
            href="#audit-form"
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
          >
            Get my free audit
          </Link>
        </div>
      </header>

      {/* 2) Hero Section */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-4">
              <p className="text-sm font-medium text-blue-600 tracking-wide uppercase">For local service businesses that rely on calls + inquiries</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                A monthly health check for your online presence.
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed font-normal">
                One clear monthly report that shows whether your website, Google listing, calls, and social activity are helping — or quietly slipping — compared to last month.
              </p>
            </div>

            {/* INLINE FREE AUDIT REQUEST FORM */}
            <div id="audit-form" className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              {formStatus === 'idle' ? (
                <form onSubmit={handleAuditSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="business" className="sr-only">Business Name</label>
                    <input
                      type="text"
                      id="business"
                      required
                      placeholder="Business Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="url" className="sr-only">Website or Google Listing URL</label>
                    <input
                      type="text"
                      id="url"
                      required
                      placeholder="Website or Google Listing URL"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    Send my free audit <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center gap-2">
                    <span>No credit card</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>Takes 60 seconds</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>We’ll email the preview</span>
                  </p>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Thanks — we’ll email your preview shortly.</h3>
                  <p className="text-gray-500 text-sm">Keep an eye on your inbox.</p>
                  <div className="pt-2">
                    <Link href="#" className="text-blue-600 font-medium hover:underline text-sm">
                      Want it faster? Book a 10-min walkthrough
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Visual Mock Card: Monthly Online Health Report */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-violet-100 rounded-[2rem] opacity-60 blur-2xl -z-10" />
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200/60 overflow-hidden max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Card Header */}
              <div className="bg-gray-50 border-b border-gray-100 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Monthly Health Report</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <p className="text-xs text-gray-600 font-medium">This month vs last month</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">6/10</div>
                  <div className="text-[10px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">Needs Attention</div>
                </div>
              </div>

              {/* Status Table */}
              <div className="p-6 space-y-5">
                {/* Row 1: Forms */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700">Forms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Working</span>
                    <span className="text-green-500"><TrendingUp className="w-4 h-4" /></span>
                  </div>
                </div>

                {/* Row 2: Hours */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700">Hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Risk</span>
                    <span className="text-orange-500"><AlertCircle className="w-4 h-4" /></span>
                  </div>
                </div>

                {/* Row 3: Speed */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700">Speed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Slipping</span>
                    <span className="text-red-500"><TrendingDown className="w-4 h-4" /></span>
                  </div>
                </div>

                {/* Row 4: Reviews */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700">Reviews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Stable</span>
                    <span className="text-gray-400"><Minus className="w-4 h-4" /></span>
                  </div>
                </div>

                {/* Row 5: Missed Calls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700">Missed calls</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Down</span>
                    <span className="text-green-500"><TrendingDown className="w-4 h-4" /></span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100 flex gap-3 items-start">
                  <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Recommendation</p>
                    <p className="text-xs text-gray-600 mt-1">Fix mobile form friction to prevent lost inquiries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) WHAT WE MONITOR (Directly Below Hero) */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Website */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4"><Globe className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-2">Website</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Forms • Mobile • Speed</p>
            </div>
            {/* Google Listing */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4"><MapPin className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-2">Google Listing</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Hours • Visibility • Reviews</p>
            </div>
            {/* Calls */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4"><PhoneCall className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-2">Calls</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Missed-call trend • After-hours risk</p>
            </div>
            {/* Social */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4"><MessageSquare className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-2">Social</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Posting consistency • Engagement trend</p>
            </div>
            {/* Alerts */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4"><Bell className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-2">Alerts</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Breakage • Sudden drops</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4) How It Works */}
      <section id="how-it-works" className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">How it works</h2>
          <p className="text-lg text-gray-500">We don’t replace your website or marketing team.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Run a free audit",
              desc: "Paste your website or Google listing address to start.",
              action: "Takes 60 seconds"
            },
            {
              step: "02",
              title: "Connect signals",
              desc: "Add your website, Google Business, and social profiles when you're ready.",
              action: "Optional, secure connection"
            },
            {
              step: "03",
              title: "Get monthly report",
              desc: "Receive a one-page summary showing exactly what's changed.",
              action: "Delivered via email"
            }
          ].map((card, i) => (
            <div key={i} className="relative group">
              <div className="absolute top-0 left-6 text-9xl font-bold text-gray-100 -z-10 select-none">{card.step}</div>
              <div className="pt-12 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.desc}</p>
                <div className="text-sm font-medium text-blue-600 bg-blue-50 w-fit px-3 py-1 rounded-full">
                  {card.action}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5) What You Get (IMPORTANT) */}
      <section id="what-you-get" className="py-20 bg-gray-900 text-white rounded-3xl mx-4 lg:mx-8">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for trends, not raw data.</h2>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              Most dashboards drown you in numbers. We focus on <span className="text-white font-semibold">momentum</span>.
              Our reports compare this month vs. last month to show you the direction of your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Performance Trends */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 text-indigo-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Trends</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Website traffic momentum</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Phone call volume & trends</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Google Search visibility</li>
              </ul>
            </div>

            {/* Website Health */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 text-emerald-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-4">Website Health</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Contact forms testing</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Mobile usability checks</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Page speed bottlenecks</li>
              </ul>
            </div>

            {/* Calls & Inquiry */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 relative overflow-hidden">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-4">Calls & Inquiries</h3>
              <p className="text-xs text-blue-200 bg-blue-900/40 border border-blue-800 px-3 py-1.5 rounded-lg mb-4 inline-block font-medium">
                Optional & Non-Invasive
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Missed call trends</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> After-hours callback risk</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Total inquiry volume</li>
              </ul>

              {/* Trust block for calls */}
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                <p className="text-xs text-gray-400 leading-relaxed">
                  <span className="text-gray-200 font-semibold block mb-1">Privacy First:</span>
                  No recordings. Tracks trends only (call volume / missed calls). You keep your number.
                </p>
              </div>
            </div>

            {/* Google Listing */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6 text-orange-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-4">Google Listing</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Views & action trends</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Opening hours consistency</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> New review monitoring</li>
              </ul>
            </div>

            {/* Alerts */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 text-red-400">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-4">Early Warnings</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Broken contact forms</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sudden traffic drops</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Missing business info</li>
              </ul>
            </div>

            {/* One Clear Rec */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-xl">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-6 text-white">
                <Files className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">The Bottom Line</h3>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                We distill everything into <span className="font-semibold text-white">one clear recommendation</span> to focus on this month.
              </p>
              <div className="text-xs font-medium bg-white/10 p-3 rounded-lg text-blue-50">
                "Example: Fix your contact form on mobile, you lost 4 leads last month."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7) Testimonials (Early Preview Feedback) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Early Preview Feedback</h2>
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
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-4 h-4 bg-orange-400 rounded-full" />)}
                </div>
                <p className="text-gray-700 mb-6 font-medium leading-relaxed">"{t.quote}"</p>
                <p className="text-sm text-gray-400 font-medium">{t.author}</p>
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

        <div className="bg-white border border-gray-200 shadow-xl shadow-gray-200/40 rounded-3xl p-8 md:p-12 max-w-lg mx-auto relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-blue-600"></div>

          <div className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Monthly Monitoring</div>
          <div className="flex items-center justify-center gap-1 mb-6">
            <span className="text-5xl font-bold text-gray-900">$19.99</span>
            <span className="text-gray-400 font-medium">/mo</span>
          </div>

          <ul className="space-y-4 text-left max-w-xs mx-auto mb-10">
            <li className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Full monthly health report</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Cancel anytime, no contracts</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Works with any website or agency</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>You keep your last report</span>
            </li>
          </ul>

          <Link
            href="#audit-form"
            className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all"
          >
            Start with a free audit
          </Link>
          <p className="text-xs text-gray-400 mt-4">No credit card required for audit</p>
        </div>
      </section>

      {/* 7) FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
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
                a: "It's optional. We provide a forwarding number that tracks activity volume (missed calls, busy times). We do not record conversations."
              },
              {
                q: "Is this only for Canada?",
                a: "We are Canada-first, but our monitoring works for any local business in North America."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8) Final CTA */}
      <section className="py-24 px-4 text-center pb-32">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Get your free audit in 60 seconds.</h2>
        <p className="text-xl text-gray-500 mb-8 max-w-xl mx-auto">
          See exactly where you stand with a neutral, third-party scan.
        </p>
        <Link
          href="#audit-form"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-10 py-5 rounded-full shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1"
        >
          Get my free audit
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Online Health Monitor. All rights reserved.</p>
      </footer>
    </div>
  );
}
