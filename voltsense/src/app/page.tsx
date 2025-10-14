import Image from "next/image";
import Link from "next/link";
import { designSystem } from "@/lib/design-system";

const steps = [
  {
    title: "Pair in minutes",
    description:
      "Plug VoltSense into your inverter and Wi-Fi. Auto-discovery configures grid sensing and your storage profile instantly.",
    icon: "/icons/link.svg",
  },
  {
    title: "Learn your patterns",
    description:
      "Machine learning watches 14 days of usage, identifies standby waste, and maps comfort thresholds unique to your home.",
    icon: "/icons/learn.svg",
  },
  {
    title: "Automate intelligently",
    description:
      "VoltSense syncs with tariffs, weather, and battery health to orchestrate dynamic charge, discharge, and appliance schedules.",
    icon: "/icons/spark.svg",
  },
];

const socialProof = [
  { name: "FluxGrid Energy", logo: "/logos/fluxgrid.svg" },
  { name: "HomeSphere", logo: "/logos/homesphere.svg" },
  { name: "Peakload Labs", logo: "/logos/peakload.svg" },
];

const benefits = [
  "Real-time inverter & grid monitoring",
  "Battery-friendly charge/discharge logic",
  "Home Assistant via MQTT, out of the box",
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="space-y-8">
            <span className="pill max-w-fit">
              <span className="h-2 w-2 rounded-full bg-lime-500" aria-hidden />
              Smart home energy monitor
            </span>
            <h1 className="heading-gradient font-display text-4xl leading-tight sm:text-5xl">
              Control your energy. Save every month.
            </h1>
            <p className="max-w-xl text-lg text-slate-200">
              VoltSense learns your home’s patterns to cut waste without cutting
              comfort. Live grid intelligence, battery-aware automation, and
              native MQTT keep every watt accountable.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={designSystem.components.button.default}
              >
                Get Started
              </Link>
              <Link
                href="/features"
                className={designSystem.components.button.secondary}
              >
                Explore Features
              </Link>
            </div>
            <dl className="grid max-w-xl grid-cols-2 gap-6 text-sm text-slate-300 sm:grid-cols-3">
              <div>
                <dt className="font-semibold text-slate-100">-18%</dt>
                <dd>Average energy spend reduction in first 90 days.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">40K+</dt>
                <dd>Smarter battery cycles orchestrated every day.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">24/7</dt>
                <dd>Grid resiliency alerts with predictive insights.</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="card-surface relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-volt-500/15 via-transparent to-lime-500/10" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                    Live load map
                  </span>
                  <span className="rounded-full bg-volt-500/10 px-3 py-1 text-xs font-semibold text-volt-200">
                    Updated now
                  </span>
                </div>
                <Image
                  src="/illustrations/volt-dashboard.svg"
                  alt="VoltSense dashboard showing live load breakdown"
                  width={640}
                  height={420}
                  className="w-full rounded-2xl border border-slate-800/60 bg-background-subtle/80"
                  priority
                />
                <div className="grid gap-4 sm:grid-cols-3">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="rounded-2xl border border-volt-500/20 bg-background-subtle/80 p-4 text-sm text-slate-200"
                    >
                      <div className="flex items-center gap-2 text-volt-100">
                        <span className="h-2 w-2 rounded-full bg-lime-500" />
                        <span className="font-semibold">Benefit</span>
                      </div>
                      <p className="mt-2 text-slate-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background-subtle/90 to-transparent" />
      </section>

      <section aria-labelledby="social-proof" className="bg-background-subtle/60">
        <div className="container-page py-12">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Trusted by innovators
              </p>
              <h2
                id="social-proof"
                className="mt-2 text-2xl font-semibold text-slate-100"
              >
                Utilities & energy OEMs deploy VoltSense
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400">
              From microgrids to multi-phase EV fleets, VoltSense scales to give
              every team real-time clarity on distributed energy assets.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {socialProof.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center rounded-2xl border border-slate-800 bg-surface/60 px-6 py-4"
              >
                <Image
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  width={180}
                  height={60}
                  className="h-12 w-auto opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="how-it-works">
        <div className="container-page space-y-10">
          <div className="flex flex-col gap-4 text-center">
            <span className="pill mx-auto">How it works</span>
            <h2
              id="how-it-works"
              className="font-display text-3xl font-semibold text-slate-100 sm:text-4xl"
            >
              Data-driven automation your home can trust
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-400">
              VoltSense senses the grid, models your inverter, and orchestrates
              efficient routines that respect battery health and comfort
              preferences from day one.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="card-surface relative overflow-hidden p-8"
              >
                <div className="absolute -right-8 top-0 hidden text-[5rem] font-bold text-slate-900/20 md:block">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-volt-500/15">
                  <Image src={step.icon} alt="" width={28} height={28} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-100">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
