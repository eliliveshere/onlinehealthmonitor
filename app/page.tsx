import Link from "next/link";
import {
  CheckCircle2,
  AlertCircle,
  BarChart3,
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
  Search,
  Clock
} from "lucide-react";

export default function Home() {
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
            href="/audit/new"
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
          >
            Get my free audit
          </Link>
        </div>
      </header>

      {/* 2) Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                The Norton Antivirus for your online presence.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-normal">
                A simple monthly report that shows what’s improving, what’s slipping, and what’s broken — across your website, Google listing, calls, and social activity.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium bg-blue-50 w-fit px-3 py-1 rounded-full text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>No vendor drama. No extra dashboards.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/audit/new"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                Run free audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center justify-center gap-6 px-4 text-sm font-medium text-gray-500">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 60 seconds</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>No credit card</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>Canada-first</span>
              </div>
            </div>
          </div>

          {/* Visual Mock Card: Monthly Online Health Report */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-violet-100 rounded-[2rem] opacity-60 blur-2xl -z-10" />
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200/60 overflow-hidden max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Card Header */}
              <div className="bg-gray-50 border-b border-gray-100 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Monthly Health Report</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Report #12 • February 2026</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">6/10</div>
                  <div className="text-[10px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">Needs Attention</div>
                </div>
              </div>

              {/* Status Table */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700">Website</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-500">Online</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700">Call Lines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-500">Active</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700">Social</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <span className="text-sm text-gray-500">Not Linked</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700">Google Listing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-sm text-gray-500">Warning</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100 flex gap-3 items-start">
                  <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Critical Issue Detected</p>
                    <p className="text-xs text-gray-600 mt-1">Your Google Business hours don't match your website. This is hurting your local ranking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Trust Strip */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BarChart3,
              title: "One-glance Score",
              desc: "Instantly know the health of your digital presence. No complex charts."
            },
            {
              icon: AlertCircle,
              title: "Instant Alerts",
              desc: "We notify you the moment your site goes down or forms break."
            },
            {
              icon: ShieldCheck,
              title: "Vendor Neutral",
              desc: "We don’t sell SEO or ads. We just tell you if yours are working."
            }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="bg-white p-2.5 rounded-lg border border-gray-200 shadow-sm text-blue-600">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
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
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-4">Calls & Inquiries</h3>
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">Optional & Non-Invasive</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Missed call trends</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> After-hours callback risk</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Total inquiry volume</li>
              </ul>
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
              <span>Works alongside existing vendors</span>
            </li>
          </ul>

          <Link
            href="/audit/new"
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
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Get your free audit in 60 seconds.</h2>
        <p className="text-xl text-gray-500 mb-8 max-w-xl mx-auto">
          See exactly where you stand with a neutral, third-party scan.
        </p>
        <Link
          href="/audit/new"
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
