"use client";

import { useState } from "react";

export default function HomePage() {
  const [contact, setContact] = useState({
    fullName: "",
    companyName: "",
    email: "",
    subject: "",
    message: "",
    employees: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = `Full Name: ${contact.fullName}\nCompany Name: ${contact.companyName}\nEmail ID: ${contact.email}\nSubject: ${contact.subject}\nNumber of Employees: ${contact.employees}\n\nMessage:\n${contact.message}`;
    window.location.href = `mailto:care@lalinx.com?subject=${encodeURIComponent(contact.subject || "Contact Request")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main>
      {/* 1. NAVIGATION */}
      <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold tracking-tighter">OPSORE</span>
            </a>
            <div className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-500">
              <a href="#solutions" className="hover:text-indigo-600 transition-colors">Solutions</a>
              <a href="#agent" className="hover:text-indigo-600 transition-colors">Agent Sync</a>
              <a href="#automation" className="hover:text-indigo-600 transition-colors">Automation</a>
              <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-bold text-slate-600 hover:text-indigo-600">Login</button>
            <a href="#contact" className="bg-indigo-600 text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">Book a Demo</a>
            <a href="#contact" className="bg-slate-900 text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="pt-48 pb-32 hero-gradient text-white overflow-hidden relative">
        <div className="blob top-0 -right-20"></div>
        <div className="blob bottom-0 -left-20 bg-indigo-900/40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs font-bold uppercase tracking-widest mb-8 text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Version 4.2: Now with AI-Predictive Remediation
            </div>
            <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-[1.1]">
              Service Management <br /> <span className="gradient-text">Built for Humans.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Legacy ESM tools are slow, expensive, and frustrating. OPSORE is <span className="text-white font-bold underline decoration-indigo-500">Secure</span>,{' '}
              <span className="text-white font-bold underline decoration-indigo-500">Intelligent</span>,{' '}
              <span className="text-white font-bold underline decoration-indigo-500">Affordable</span>, and{' '}
              <span className="text-white font-bold underline decoration-indigo-500">Easy</span>—designed to let your team focus on innovation, not administration.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#solutions" className="px-10 py-5 bg-white text-indigo-900 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl flex items-center gap-2">
                Start for Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#agent" className="px-10 py-5 border border-white/20 rounded-2xl font-bold hover:bg-white/5 transition-colors">See Intelligent Discovery</a>
            </div>

            {/* Trusted By */}
            <div className="mt-24 w-full">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Trusted by teams at</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
                <span className="text-2xl font-black">VELOCITY</span>
                <span className="text-2xl font-black">NEXUS.IO</span>
                <span className="text-2xl font-black">QUARK</span>
                <span className="text-2xl font-black">SYNAPSE</span>
                <span className="text-2xl font-black">ORBITAL</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. BRAND PILLARS DETAILED */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="group">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Secure by Design</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Bank-grade encryption for all data at rest and in transit. SOC2, GDPR, and HIPAA compliant infrastructure hosted in isolated clusters.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Intelligent Workflows</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our AI engine automates ticket categorization, identifies root causes for major incidents, and predicts hardware failure before it happens.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Truly Affordable</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Pricing that scales with you. No minimum seat count, no "enterprise tax," and 100% feature parity across all tiers.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Incredibly Easy</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Go live in under 48 hours. Zero-code configuration, intuitive drag-and-drop builder, and a UI that users actually enjoy using.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE SOLUTIONS - DEEP DIVE */}
      <section id="solutions" className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold mb-4 italic tracking-tight">
                Everything you need to <br />
                <span className="text-indigo-600">master</span> your enterprise.
              </h2>
              <p className="text-slate-500 text-lg">
                We didn't just build a ticketing tool. We built an ecosystem that makes IT, HR, and Operations <span className="font-bold">intelligent</span>.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">←</button>
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">→</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] feature-card group">
              <div className="mb-8 p-4 bg-indigo-50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">IT Service Management</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                ITIL 4 certified processes. Manage Incidents, Changes, and Problems with automated risk scoring and stakeholder notifications.
              </p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2 text-indigo-600">• Auto-Category AI</li>
                <li className="flex items-center gap-2 text-indigo-600">• Impact Mapping</li>
                <li className="flex items-center gap-2 text-indigo-600">• Visual Change Calendar</li>
              </ul>
              <a href="#" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn More →</a>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] feature-card group">
              <div className="mb-8 p-4 bg-emerald-50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Modern CMDB</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                A <span className="font-bold">secure</span> repository for every asset. Track lifecycle from procurement to disposal with integrated depreciation logic.
              </p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2 text-emerald-600">• 1-Click QR Labels</li>
                <li className="flex items-center gap-2 text-emerald-600">• Relationship Mapping</li>
                <li className="flex items-center gap-2 text-emerald-600">• Warranty Monitoring</li>
              </ul>
              <a href="#" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn More →</a>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] feature-card group">
              <div className="mb-8 p-4 bg-amber-50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Monitoring</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                An <span className="font-bold">intelligent</span> eye on your infrastructure. Real-time alerting that integrates directly with incident management.
              </p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2 text-amber-600">• Agent-based discovery</li>
                <li className="flex items-center gap-2 text-amber-600">• Threshold Alarms</li>
                <li className="flex items-center gap-2 text-amber-600">• Performance Graphs</li>
              </ul>
              <a href="#" className="text-amber-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTELLIGENT AGENT SYNC (The "Engine") */}
      <section id="agent" className="py-28 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-4 block">Engineered for Speed</span>
              <h2 className="text-5xl font-extrabold mb-8 tracking-tighter leading-tight">
                The OPSORE <br />
                <span className="italic">Intelligent</span> Agent.
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Forget manual data entry. Our lightweight, <span className="font-bold">secure</span> agent sits quietly on your servers, desktops, and cloud instances to keep your data 100% accurate.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0 shadow-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 mb-1">Ultra-Low Resource Usage</h4>
                    <p className="text-slate-500 text-sm">Consumes less than 0.5% CPU and 12MB RAM. Powerful but invisible.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0 shadow-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 mb-1">Encrypted Tunneling</h4>
                    <p className="text-slate-500 text-sm">Uses mutual TLS 1.3 to ensure data only ever travels to your private tenant.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0 shadow-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 mb-1">Auto-Remediation</h4>
                    <p className="text-slate-500 text-sm">Define scripts that run automatically when health checks fail. Healing is <span className="font-bold">easy</span>.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-600/5 rounded-full animate-pulse"></div>
              <div className="bg-slate-950 rounded-[3rem] p-4 shadow-3xl border-[16px] border-slate-900 relative overflow-hidden group">
                <div className="bg-slate-900 rounded-[2rem] p-8 min-h-[450px] font-mono text-xs">
                  <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                    </div>
                    <span className="text-slate-500">opsore-agent --status</span>
                  </div>
                  <div className="space-y-4">
                    <p className="text-indigo-400"># System Analysis Initiated</p>
                    <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                      <span className="text-slate-300">Hostname:</span>
                      <span className="text-emerald-400">PROD-DB-01</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                      <span className="text-slate-300">Uptime:</span>
                      <span className="text-emerald-400">142 Days, 4:12:05</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                      <span className="text-slate-300">OS:</span>
                      <span className="text-indigo-300">Ubuntu 22.04 LTS (HWE)</span>
                    </div>
                    <div className="mt-8 border-t border-slate-800 pt-4">
                      <p className="text-amber-400 mb-2 underline tracking-widest uppercase">Live Telemetry</p>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-slate-500 text-[10px]">CPU</p>
                          <p className="text-white font-bold">12%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-slate-500 text-[10px]">RAM</p>
                          <p className="text-white font-bold">4.2 GB</p>
                        </div>
                        <div className="text-center">
                          <p className="text-slate-500 text-[10px]">NET</p>
                          <p className="text-white font-bold">14 MB/s</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 bg-indigo-600 text-white p-6 rounded-3xl shadow-2xl group-hover:-translate-y-4 transition-transform">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">AI Recommendation</p>
                  <p className="font-bold">Memory leak detected <br /> in Node process. Restart?</p>
                  <button className="mt-4 px-4 py-2 bg-white text-indigo-600 rounded-lg text-xs font-bold">Approve Action</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICE CATALOG - INTERACTIVE MOCKUP */}
      <section className="py-28 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight italic">
              Service Catalog <br />
              <span className="text-indigo-400">made Easy.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Your team shouldn't need a manual to request a keyboard or access a cloud server. OPSORE makes the portal{' '}
              <span className="text-white font-bold italic">intelligent</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-slate-800 rounded-[3rem] p-12 border border-slate-700 shadow-3xl">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl">✨</div>
                <div>
                  <h4 className="text-2xl font-bold">Smart Search</h4>
                  <p className="text-slate-400 text-sm">"I need a new laptop" -&gt; Instantly shows authorized models & shipping info.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-slate-900/50 border border-slate-700 rounded-[2rem] hover:border-indigo-500 transition-colors cursor-pointer group">
                  <h5 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">Access Request</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">Request temporary IAM permissions for AWS or GCP environments.</p>
                  <div className="mt-6 flex gap-2">
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-full border border-indigo-500/20 uppercase tracking-widest">Secure</span>
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-[10px] font-bold rounded-full border border-amber-500/20 uppercase tracking-widest">2hr Approval</span>
                  </div>
                </div>
                <div className="p-8 bg-slate-900/50 border border-slate-700 rounded-[2rem] hover:border-indigo-500 transition-colors cursor-pointer group">
                  <h5 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">Software Install</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">Deploy approved software directly to your device via OPSORE Agent.</p>
                  <div className="mt-6 flex gap-2">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-500/20 uppercase tracking-widest">Automated</span>
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-full border border-indigo-500/20 uppercase tracking-widest">Easy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-10 bg-indigo-600 rounded-[2.5rem] shadow-2xl">
                <h4 className="text-2xl font-bold mb-4 italic">Predictive Catalog</h4>
                <p className="text-indigo-100 text-sm leading-relaxed mb-8">Based on your role as "Software Engineer", OPSORE suggests:</p>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-2xl flex items-center gap-4">
                    <span className="text-2xl">🐳</span>
                    <span className="font-bold">Docker Desktop Pro</span>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl flex items-center gap-4">
                    <span className="text-2xl">🎨</span>
                    <span className="font-bold">Figma Editor Access</span>
                  </div>
                </div>
              </div>
              <div className="p-10 bg-slate-800 rounded-[2.5rem] border border-slate-700">
                <h4 className="text-xl font-bold mb-2 tracking-tight">Affordable Operations</h4>
                <p className="text-slate-500 text-sm">Self-service portals reduce helpdesk ticket volume by <span className="text-white font-bold">up to 65%</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECURE COMPLIANCE - ZERO TRUST */}
      <section id="compliance" className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="w-full h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden relative border border-slate-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-indigo-600/10 rounded-full animate-spin-slow border-4 border-indigo-600/30 border-dashed"></div>
                  <div className="absolute w-40 h-40 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                    <svg className="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 11V7a4 4 0 00-8 0v4h8zM6 21h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-10 left-10 p-4 bg-white rounded-2xl shadow-lg border border-slate-100 font-bold text-xs">
                  <p className="text-slate-400 mb-1">SOC2 Type II</p>
                  <p className="text-emerald-500">VERIFIED</p>
                </div>
                <div className="absolute bottom-10 right-10 p-4 bg-white rounded-2xl shadow-lg border border-slate-100 font-bold text-xs">
                  <p className="text-slate-400 mb-1">AES-256</p>
                  <p className="text-indigo-500">ENCRYPTED</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-extrabold mb-8 tracking-tighter leading-tight">
                Compliance made <br />
                <span className="text-indigo-600 italic">Easy.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                In an era of cyber threats, your ESM must be a fortress. OPSORE integrates security into every workflow, making it <span className="font-bold underline">secure</span> and{' '}
                <span className="font-bold underline">intelligent</span> from day one.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-3xl hover:bg-indigo-50 transition-colors">
                  <h4 className="font-extrabold text-slate-900 mb-2">Immutable Audit Trails</h4>
                  <p className="text-slate-500 text-sm">Every change, every login, and every configuration update is recorded on a tamper-proof ledger.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl hover:bg-indigo-50 transition-colors">
                  <h4 className="font-extrabold text-slate-900 mb-2">Policy-as-Code</h4>
                  <p className="text-slate-500 text-sm">Automate compliance checks against CIS, NIST, and GDPR standards with one click.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl hover:bg-indigo-50 transition-colors">
                  <h4 className="font-extrabold text-slate-900 mb-2">Zero-Trust CMDB</h4>
                  <p className="text-slate-500 text-sm">Verify every asset identity before permitting sync. Unauthorized devices are blocked instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTELLIGENT AUTOMATION (Workflow Builder) */}
      <section id="automation" className="py-28 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl font-extrabold mb-8 tracking-tight">
              Automate the Mundane. <br />
              <span className="italic text-indigo-400">Innovate the Future.</span>
            </h2>
            <p className="text-indigo-200 text-lg leading-relaxed">
              Building automation shouldn't require a computer science degree. Our drag-and-drop builder makes complex enterprise workflows{' '}
              <span className="text-white font-bold">easy</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-indigo-800/40 p-10 rounded-[3rem] border border-indigo-700">
              <h4 className="text-xl font-bold mb-4">HR Onboarding</h4>
              <p className="text-indigo-300 text-sm mb-8 leading-relaxed">Trigger laptop shipping, AD account creation, and office access the moment a contract is signed.</p>
              <div className="space-y-4">
                <div className="h-1 bg-indigo-950 rounded-full overflow-hidden">
                  <div className="bg-indigo-400 h-full w-[85%]"></div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Avg. Time Saved: 4.5 Hours</p>
              </div>
            </div>
            <div className="bg-indigo-800/40 p-10 rounded-[3rem] border border-indigo-700">
              <h4 className="text-xl font-bold mb-4">Threat Response</h4>
              <p className="text-indigo-300 text-sm mb-8 leading-relaxed">Automatically isolate devices and revoke VPN tokens when the agent detects a malware fingerprint.</p>
              <div className="space-y-4">
                <div className="h-1 bg-indigo-950 rounded-full overflow-hidden">
                  <div className="bg-red-400 h-full w-[100%]"></div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-red-400">Response Time: &lt; 1 Second</p>
              </div>
            </div>
            <div className="bg-indigo-800/40 p-10 rounded-[3rem] border border-indigo-700">
              <h4 className="text-xl font-bold mb-4">Renewal Alerts</h4>
              <p className="text-indigo-300 text-sm mb-8 leading-relaxed">Scan your SaaS spending and alert the procurement team 90 days before an <span className="font-bold">expensive</span> renewal.</p>
              <div className="space-y-4">
                <div className="h-1 bg-indigo-950 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[65%]"></div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Budget Optimization: ACTIVE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRICING - AFFORDABLE & TRANSPARENT */}
      <section id="pricing" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold mb-4 tracking-tighter">First <span className="text-indigo-600">Year Free!</span></h2>
            <p className="text-slate-500 text-lg"> Affordable plans for everyone.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-12 border border-slate-100 rounded-[3rem] bg-slate-50/50 hover:border-indigo-600 transition-colors">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Team</h4>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="text-indigo-600">✓</span> 3 Support Agents
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="text-indigo-600">✓</span> 500 Asset Syncs
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="text-indigo-600">✓</span> Intelligent Ticketing
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="text-indigo-600">✓</span> Standard Compliance
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-white border border-slate-200 font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all">Get Started</button>
            </div>

            <div className="p-12 border-4 border-indigo-600 rounded-[3rem] bg-indigo-600 text-white shadow-2xl scale-105 relative z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</div>
              <h4 className="text-xl font-bold mb-2">Business</h4>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-sm">
                  <span>✓</span> 15 Support Agents
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span>✓</span> 5,000 Asset Syncs
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span>✓</span> Advanced Workflow Builder
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span>✓</span> Full Analytics Suite
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span>✓</span> SSO & Custom Branding
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-white font-bold text-indigo-600 hover:scale-105 transition-all shadow-xl">Start Free Trial</button>
            </div>

            <div className="p-12 border border-slate-100 rounded-[3rem] bg-slate-50/50 hover:border-indigo-600 transition-colors">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h4>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="text-indigo-600">✓</span> Unlimited Agents
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="text-indigo-600">✓</span> 50,000 Asset Syncs
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="text-indigo-600">✓</span> AI-Predictive Remediation
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="text-indigo-600">✓</span> Multi-Tenant Infrastructure
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="text-indigo-600">✓</span> 24/7 Priority Concierge
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-white border border-slate-200 font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all">Talk to an Expert</button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION - CLEAR ANSWERS */}
      <section id="faq" className="py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold mb-3 flex justify-between items-center cursor-pointer">
                How <span className="text-indigo-600">secure</span> is the OPSORE Agent?
                <span className="text-slate-400">+</span>
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our agent uses an outbound-only connection. It does not open any ports on your firewall. All communication is encrypted using mutual TLS 1.3 with a unique key for your tenant. We are SOC2 Type II certified and perform quarterly external penetration tests.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold mb-3 flex justify-between items-center cursor-pointer">
                Is it really <span className="text-indigo-600">easy</span> to migrate from ServiceNow or Jira?
                <span className="text-slate-400">+</span>
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Yes. We have built-in "Easy Migrators" for legacy tools. You can import your users, active tickets, and asset databases via CSV or API in minutes. Most teams are fully migrated and productive in less than 48 hours.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold mb-3 flex justify-between items-center cursor-pointer">
                What makes the platform <span className="text-indigo-600">intelligent</span>?
                <span className="text-slate-400">+</span>
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our "Intelligent" label refers to our proprietary ML engine. It doesn't just store data; it analyzes patterns. It can predict disk failure, identify "shadow IT" applications installed without permission, and suggest ticket resolutions based on historical data.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold mb-3 flex justify-between items-center cursor-pointer">
                Are there <span className="text-indigo-600">affordable</span> plans for non-profits?
                <span className="text-slate-400">+</span>
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Absolutely. We offer an additional 40% discount for registered non-profits, educational institutions, and startups under $1M in funding. Contact our support team for a custom quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section id="contact" className="py-28 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-200">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
              <p className="text-slate-500 text-lg">Send your message directly to our team and we will follow up via email.</p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Full Name</span>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={contact.fullName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Company Name</span>
                  <input
                    required
                    type="text"
                    name="companyName"
                    value={contact.companyName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                  />
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Email ID</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Number of Employees</span>
                  <input
                    required
                    type="text"
                    name="employees"
                    value={contact.employees}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                  />
                </label>
              </div>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Subject</span>
                <input
                  required
                  type="text"
                  name="subject"
                  value={contact.subject}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Message</span>
                <textarea
                  required
                  name="message"
                  value={contact.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full rounded-3xl border border-slate-200 px-4 py-4 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-indigo-600 text-white rounded-3xl font-bold hover:bg-indigo-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 11. FINAL CONVERSION */}
      <section className="py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-32 text-center text-white overflow-hidden relative">
            <div className="blob top-0 right-0 bg-indigo-500/20"></div>
            <div className="blob bottom-0 left-0 bg-emerald-500/10"></div>
            <h2 className="text-5xl md:text-8xl font-extrabold mb-10 tracking-tighter leading-tight">Modernize <br />Your Future.</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
              Join over 2,000 companies that have traded complexity for <span className="text-white font-bold italic">intelligence</span>.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="px-12 py-6 bg-indigo-600 rounded-3xl font-bold text-xl hover:bg-indigo-700 hover:scale-105 transition-all shadow-2xl">Create Free Account</button>
              <button className="px-12 py-6 border border-slate-700 rounded-3xl font-bold text-xl hover:bg-white/5 transition-all">View Demo Video</button>
            </div>
            <p className="mt-12 text-slate-600 font-bold text-xs uppercase tracking-[0.3em]">Secure • Intelligent • Affordable • Easy</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 py-32 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div>
              <a href="#" className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-2xl font-extrabold tracking-tighter">OPSORE</span>
              </a>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Reimagining enterprise service management for the modern era. We make the complex <span className="font-bold">easy</span>.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white border rounded-xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all cursor-pointer">𝕏</div>
                <div className="w-10 h-10 bg-white border rounded-xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all cursor-pointer">in</div>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Product</h5>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-indigo-600">Intelligent Ticketing</a></li>
                <li><a href="#" className="hover:text-indigo-600">Asset Discovery</a></li>
                <li><a href="#" className="hover:text-indigo-600">Workflow Builder</a></li>
                <li><a href="#" className="hover:text-indigo-600">Service Portal</a></li>
                <li><a href="#" className="hover:text-indigo-600">Mobile Agent</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Company</h5>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600">Security Center</a></li>
                <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600">Partners</a></li>
                <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Resources</h5>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-indigo-600">Documentation</a></li>
                <li><a href="#" className="hover:text-indigo-600">Community API</a></li>
                <li><a href="#" className="hover:text-indigo-600">Marketplace</a></li>
                <li><a href="#" className="hover:text-indigo-600">Case Studies</a></li>
                <li><a href="#" className="hover:text-indigo-600">Trust Report</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2026 OPSORE Global. Engineered in Silicon Valley.</p>
            <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Terms of Service</a>
              <a href="#" className="hover:text-slate-900">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
