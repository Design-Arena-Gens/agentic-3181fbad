"use client";

import { useState, FormEvent } from "react";

const defaultForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = await response.json();

      if (!response.ok) {
        setError(payload.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setForm(defaultForm);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <div className="pb-24">
      <section className="container-page space-y-6 py-16">
        <span className="pill max-w-fit">Contact VoltSense</span>
        <h1 className="font-display text-4xl font-semibold text-slate-100">
          Start saving energy with a tailored rollout plan
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          Tell us about your home or fleet. Our energy specialists will map a
          deployment plan, review tariff opportunities, and configure your
          automations before the first sensor ships.
        </p>
      </section>

      <section className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <form onSubmit={handleSubmit} className="card-surface space-y-6 p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-slate-200">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, name: event.target.value }))
                }
                className="w-full rounded-xl border border-slate-700 bg-background px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-volt-400 focus:outline-none"
                placeholder="Jordan Watts"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-200">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, email: event.target.value }))
                }
                className="w-full rounded-xl border border-slate-700 bg-background px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-volt-400 focus:outline-none"
                placeholder="you@company.io"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-semibold text-slate-200">
              Company or household name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              value={form.company}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, company: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-700 bg-background px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-volt-400 focus:outline-none"
              placeholder="North Coast Villas"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-slate-200">
              Project goals
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-700 bg-background px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-volt-400 focus:outline-none"
              placeholder="Share your load profile, tariffs, and comfort priorities."
            />
            <p className="text-xs text-slate-500">
              We respond within one business day. Your data stays encrypted at
              rest and in transit.
            </p>
          </div>

          {status === "error" && error ? (
            <div className="rounded-xl border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
              {error}
            </div>
          ) : null}

          {status === "success" ? (
            <div className="rounded-xl border border-success/40 bg-success/10 px-4 py-3 text-sm text-success">
              Thanks for reaching out! We&apos;ll contact you within one business
              day.
            </div>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-volt-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-volt-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>{status === "submitting" ? "Sending…" : "Send message"}</span>
            {status === "submitting" ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14m0 0-6-6m6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </form>

        <div className="card-surface space-y-6 p-8">
          <h2 className="text-2xl font-semibold text-slate-100">
            Implementation playbook
          </h2>
          <ol className="space-y-4 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-volt-100">01 • Discovery</span>
              <p>Model loads, tariffs, comfort thresholds, and DER inventory.</p>
            </li>
            <li>
              <span className="font-semibold text-volt-100">02 • Pilot</span>
              <p>Deploy gateway + edge nodes, validate inverter command latency.</p>
            </li>
            <li>
              <span className="font-semibold text-volt-100">03 • Scale</span>
              <p>Automate rollouts with provisioning APIs and site templates.</p>
            </li>
          </ol>
          <div className="rounded-2xl border border-slate-800/60 bg-background-subtle/70 p-5 text-sm text-slate-300">
            <h3 className="text-base font-semibold text-slate-100">
              Need immediate support?
            </h3>
            <p className="mt-2">
              Call <a href="tel:+18885581234" className="text-volt-200">+1 (888)
              558-1234</a> or join the <a href="https://community.voltsense.io" className="text-volt-200">community</a> for live office hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
