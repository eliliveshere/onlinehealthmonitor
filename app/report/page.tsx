"use client";

import {
    Printer,
    ArrowRight,
    TrendingDown,
    TrendingUp,
    Minus,
    Globe,
    MapPin,
    PhoneCall,
    MessageSquare,
    Activity,
    AlertCircle,
    CheckCircle2,
    Clock,
    ShieldCheck,
    Zap,
    Smartphone,
    Eye,
    ThumbsUp,
    AlertTriangle,
    Info
} from "lucide-react";
import Link from "next/link";

export default function ReportPage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 pb-20 print:pb-0">

            {/* 1) Sticky Report Header (Hidden on Print) */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 print:hidden shadow-sm">
                <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 shrink-0">
                        <div className="bg-blue-600 rounded-lg p-1.5 hidden sm:block">
                            <Activity className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h1 className="text-sm font-bold text-gray-900 leading-none">Online Health Monitor</h1>
                            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-0.5">Monthly Report</p>
                        </div>
                    </div>

                    <div className="hidden md:block font-medium text-gray-900 truncate">
                        Maple Ridge Plumbing
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <button
                            onClick={handlePrint}
                            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
                        >
                            <Printer className="w-4 h-4" />
                            <span className="hidden sm:inline">Print / PDF</span>
                        </button>
                        <Link
                            href="/signup"
                            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                        >
                            Start Monitoring
                            <span className="hidden sm:inline opacity-80 font-normal">($19.99/mo)</span>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8 md:py-12 print:px-0 print:py-4 print:max-w-none">

                {/* 2) Report Title Block */}
                <div className="border-b border-gray-100 pb-10 mb-10 flex flex-col md:flex-row justify-between gap-8 items-start">
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Monthly Health Check</h2>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2 text-gray-500 text-sm">
                                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Maple Ridge Plumbing</span>
                                <span className="hidden sm:block text-gray-300">•</span>
                                <span>Toronto, ON</span>
                                <span className="hidden sm:block text-gray-300">•</span>
                                <span>Report period: <strong>March 2026</strong></span>
                            </div>
                        </div>
                        <div className="bg-gray-50 inline-block px-4 py-3 rounded-lg text-sm text-gray-600 max-w-lg border border-gray-100">
                            <p>
                                <strong>What this means:</strong> We compare this month's activity against February 2026.
                                We focus on trends (what's moving) rather than confusing raw data.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 w-full md:w-auto min-w-[200px] flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 text-center">
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Health Score</div>
                            <div className="text-4xl font-bold text-gray-900">6.5<span className="text-gray-300 text-2xl font-medium">/10</span></div>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full border border-red-100">
                            <TrendingDown className="w-3 h-3" />
                            Slightly down
                        </div>
                    </div>
                </div>

                {/* 3) At-a-Glance Status Grid */}
                <section className="mb-12">
                    <h3 className="section-title">At-a-Glance Status</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        <StatusCard
                            label="Website"
                            icon={Globe}
                            status="yellow"
                            trend="flat"
                            note="Mobile form friction detected"
                        />
                        <StatusCard
                            label="Google Listing"
                            icon={MapPin}
                            status="green"
                            trend="up"
                            note="Visibility slightly up"
                        />
                        <StatusCard
                            label="Calls"
                            icon={PhoneCall}
                            status="red"
                            trend="down"
                            note="Missed calls increased"
                        />
                        <StatusCard
                            label="Reviews"
                            icon={MessageSquare}
                            status="yellow"
                            trend="flat"
                            note="No new reviews this month"
                        />
                        <StatusCard
                            label="Social Activity"
                            icon={Activity}
                            status="green"
                            trend="up"
                            note="Posting consistency improved"
                        />
                    </div>
                </section>

                {/* 4) Month-over-Month Trends */}
                <section className="mb-12 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                        <h3 className="font-bold text-lg text-gray-900">Month-over-Month Direction</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                            <Info className="w-4 h-4" />
                            We focus on direction, not raw analytics.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        <TrendItem label="Website Interest" trend="flat" value="Steady" />
                        <TrendItem label="Calls & Inquiries" trend="down" value="Slipping" />
                        <TrendItem label="Google Visibility" trend="up" value="Improving" />
                    </div>
                </section>

                {/* 6) Recommendation (Moved up per importance, often layout dictates this) */}
                {/* User asked for it as section 6, but in a report layout, putting the rec high is often good. I'll stick to the numeric order of sections loosely but ensure visual hierarchy. */}

                {/* 5) Deep Dive Sections */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">

                    <ReportSection title="Website Health Check" icon={Globe}>
                        <ul className="space-y-4">
                            <ListItem status="yellow" text="Forms: Some mobile friction detected on Contact page." />
                            <ListItem status="green" text="Mobile Experience: 92/100 score (Good)." />
                            <ListItem status="green" text="Speed: Load times are stable under 2s." />
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                            <strong>Summary:</strong> Your site is working well, but the contact form sticky button on mobile is hard to tap.
                        </div>
                    </ReportSection>

                    <ReportSection title="Calls & Inquiry Capture" icon={PhoneCall}>
                        <ul className="space-y-4">
                            <ListItem status="flat" text="Total Call Activity: 24 calls monitored." />
                            <ListItem status="red" text="Missed Calls: 6 calls missed (High)." />
                            <ListItem status="red" text="After-hours Risk: 4 missed calls were after 5pm." />
                        </ul>
                        <div className="mt-4 p-3 bg-blue-50/50 rounded-lg border border-blue-50 text-xs text-blue-800 flex items-start gap-2">
                            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                            Note: Call monitoring is optional. No recordings are ever made. We only track volume trends to help you capture leads. You keep your number.
                        </div>
                    </ReportSection>

                    <ReportSection title="Google Listing Monitoring" icon={MapPin}>
                        <ul className="space-y-4">
                            <ListItem status="green" text="Views & Actions: Slight increase (+5%) vs last month." />
                            <ListItem status="yellow" text="Hours Consistency: Holiday hours were missing." />
                            <ListItem status="flat" text="Reviews: No new reviews posted." />
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                            <strong>Summary:</strong> Your local visibility is healthy. Keep asking happy customers for reviews.
                        </div>
                    </ReportSection>

                    <ReportSection title="Social Activity" icon={Activity}>
                        <ul className="space-y-4">
                            <ListItem status="green" text="Posting Consistency: 2 posts/week (improved)." />
                            <ListItem status="green" text="Engagement: Average 12 likes/post." />
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                            <strong>Summary:</strong> Good job effectively communicating recent projects on Facebook.
                        </div>
                    </ReportSection>

                </div>

                {/* Alerts & Early Warnings */}
                <section className="mb-12 bg-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        <h3 className="font-bold text-lg text-gray-900">Alerts & Early Warnings</h3>
                    </div>
                    <div className="space-y-3">
                        <AlertItem text="Missed calls increased significantly after 5pm." />
                        <AlertItem text="Mobile form friction detected on smaller screens." />
                        <AlertItem text="Hours inconsistencies detected (Google vs Website)." />
                    </div>
                </section>

                {/* 6) One Clear Recommendation (Highlighted) */}
                <section className="mb-12">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-10 text-white shadow-xl">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 border border-blue-500/30">
                                    Priority Action
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Focus on this one thing this month</h3>
                                <p className="text-lg text-gray-300 font-light mb-6">
                                    "Add simple missed-call capture for after-hours calls."
                                </p>

                                <div className="space-y-2 mb-6 text-gray-300 text-sm">
                                    <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" /> You missed 4 potential leads after 5pm.</p>
                                    <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" /> Capturing even 1 of these could pay for this service.</p>
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-xl p-6 min-w-[240px] border border-white/10 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Effort Level</span>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="h-2 w-full bg-gray-600 rounded-full overflow-hidden">
                                                <div className="h-full bg-green-400 w-1/3"></div>
                                            </div>
                                            <span className="text-sm font-bold text-green-400">Low</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Potential Impact</span>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="h-2 w-full bg-gray-600 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-400 w-full"></div>
                                            </div>
                                            <span className="text-sm font-bold text-blue-400">High</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7) What we'll watch next month & 8) What this is/isn't */}
                <div className="grid md:grid-cols-2 gap-12 mb-16 border-t border-gray-100 pt-12">

                    <div>
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Eye className="w-5 h-5 text-blue-600" />
                            What we'll watch next month
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-gray-600">
                                <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0 mt-0.5" />
                                <span>Did the missed call rate drop?</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-600">
                                <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0 mt-0.5" />
                                <span>Is Google visibility continuing to trend up?</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-600">
                                <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0 mt-0.5" />
                                <span>Are contact form issues resolved?</span>
                            </li>
                        </ul>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-sm text-gray-900 mb-2 border-b border-gray-200 pb-2">This report IS:</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                A high-level health check focused on trends, momentum, and finding broken things before they hurt business.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-gray-900 mb-2 border-b border-gray-200 pb-2">This report is NOT:</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                A deep-technical SEO audit, a marketing strategy plan, or a replacement for your web designer.
                            </p>
                        </div>
                    </div>
                </div>

            </main>

            {/* 9) Footer */}
            <footer className="border-t border-gray-100 py-10 bg-gray-50 print:hidden text-center">
                <div className="max-w-xl mx-auto px-4 space-y-4">
                    <p className="font-semibold text-gray-900">Online Health Monitor — $19.99 / month</p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Cancel anytime</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> No contracts</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Keep your last report</span>
                    </div>
                    <p className="text-xs text-gray-400 pt-4 uppercase tracking-widest">Demo report preview</p>
                </div>
            </footer>
        </div>
    );
}

// --- Helper Components ---

function StatusCard({ label, icon: Icon, status, trend, note }: {
    label: string,
    icon: any,
    status: 'green' | 'yellow' | 'red',
    trend: 'up' | 'down' | 'flat',
    note: string
}) {
    const statusColors = {
        green: "bg-green-500 border-green-200",
        yellow: "bg-yellow-400 border-yellow-200",
        red: "bg-red-500 border-red-200"
    };

    const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
    const trendColor = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-400';

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                    <Icon className="w-4 h-4" />
                </div>
                <div className={`w-3 h-3 rounded-full ${statusColors[status]} shadow-sm box-content border-2 border-white`} />
            </div>
            <div className="mt-auto">
                <h4 className="font-bold text-gray-900 text-sm mb-1">{label}</h4>
                <div className="flex items-center gap-2 mb-2">
                    <TrendIcon className={`w-4 h-4 ${trendColor}`} />
                </div>
                <p className="text-xs text-gray-500 leading-tight">{note}</p>
            </div>
        </div>
    );
}

function TrendItem({ label, trend, value }: { label: string, trend: 'up' | 'down' | 'flat', value: string }) {
    const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
    const colorClass = trend === 'up' ? 'text-green-600 bg-green-50 border-green-100' : trend === 'down' ? 'text-red-600 bg-red-50 border-red-100' : 'text-gray-500 bg-gray-100 border-gray-200';

    return (
        <div className="flex items-center justify-between p-2">
            <span className="font-medium text-gray-700">{label}</span>
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${colorClass} text-sm font-bold`}>
                <TrendIcon className="w-4 h-4" />
                {value}
            </div>
        </div>
    );
}

function ReportSection({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{title}</h3>
            </div>
            {children}
        </div>
    );
}

function ListItem({ status, text }: { status: 'green' | 'yellow' | 'red' | 'flat', text: string }) {
    const colors = {
        green: "text-green-500",
        yellow: "text-yellow-500",
        red: "text-red-500",
        flat: "text-gray-400"
    };

    const icons = {
        green: CheckCircle2,
        yellow: AlertCircle,
        red: AlertCircle,
        flat: Minus
    };

    const StatusIcon = icons[status];

    return (
        <li className="flex items-start gap-3 text-sm text-gray-700">
            <StatusIcon className={`w-5 h-5 shrink-0 ${colors[status]} mt-0.5`} />
            <span className="leading-relaxed">{text}</span>
        </li>
    );
}

function AlertItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3 p-3 bg-red-50/50 rounded-lg border border-red-100/50 text-red-900 text-sm">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <span>{text}</span>
        </div>
    );
}
