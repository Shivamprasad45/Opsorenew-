"use client";

import { useMemo, useState } from "react";

const SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
];

function toInputDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function BookDemo() {
  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return toInputDate(d);
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    date: "",
    slot: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [result, setResult] = useState(null);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const isWeekend = (dateStr) => {
    if (!dateStr) return false;
    const day = new Date(`${dateStr}T00:00:00`).getDay();
    return day === 0 || day === 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.date || !form.slot) {
      setStatus({ state: "error", message: "Please pick a date and a time slot." });
      return;
    }
    if (isWeekend(form.date)) {
      setStatus({ state: "error", message: "Demos are available Monday–Friday. Please pick a weekday." });
      return;
    }
    setStatus({ state: "loading", message: "" });
    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setResult({ ...form, meetingLink: data.meetingLink });
      setStatus({ state: "success", message: "" });
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  };

  const prettyDate = form.date
    ? new Date(`${form.date}T00:00:00`).toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <main className="min-h-screen bg-slate-50">
      {/* NAV */}
      <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-2xl font-extrabold tracking-tighter">OPSORE</span>
          </a>
          <a href="/" className="text-sm font-bold text-slate-600 hover:text-indigo-600">← Back to Home</a>
        </div>
      </nav>

      <section className="pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
              Book a <span className="text-indigo-600">Live Demo</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Pick a date and time that works for you. You&apos;ll instantly get a
              confirmation email with your meeting link.
            </p>
          </div>

          {status.state === "success" && result ? (
            <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-10 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold mb-2">Demo Booked! 🎉</h2>
              <p className="text-slate-500 mb-6">
                {prettyDate} at <strong>{result.slot} (IST)</strong>
                <br />
                A confirmation email has been sent to <strong>{result.email}</strong>.
              </p>
              <a
                href={result.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
              >
                Open Meeting Link
              </a>
              <p className="text-xs text-slate-400 mt-4 break-all">{result.meetingLink}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12"
            >
              {/* LEFT: details */}
              <div className="space-y-5">
                <h3 className="text-lg font-extrabold text-slate-900">Your Details</h3>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Full Name *</label>
                  <input
                    required
                    value={form.fullName}
                    onChange={set("fullName")}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Company Name</label>
                  <input
                    value={form.companyName}
                    onChange={set("companyName")}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Work Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
                </div>
              </div>

              {/* RIGHT: date + slots */}
              <div className="space-y-5">
                <h3 className="text-lg font-extrabold text-slate-900">Pick a Slot</h3>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Date * (Mon–Fri)</label>
                  <input
                    required
                    type="date"
                    min={minDate}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value, slot: "" })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
                  {isWeekend(form.date) && (
                    <p className="text-sm text-amber-600 font-bold mt-2">
                      Weekends unavailable — please pick a weekday.
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Time Slot * (IST)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {SLOTS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, slot: s })}
                        className={`px-2 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                          form.slot === s
                            ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200"
                            : "bg-white text-slate-600 border-slate-200 hover:border-indigo-400 hover:text-indigo-600"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {status.state === "error" && (
                  <p className="text-sm font-bold text-red-600 bg-red-50 rounded-xl px-4 py-3">
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status.state === "loading"}
                  className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.state === "loading" ? "Booking…" : "Confirm Booking"}
                </button>
                <p className="text-xs text-slate-400 text-center">
                  You&apos;ll receive a meeting link by email. Our team is also notified instantly.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
