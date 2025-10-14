import Image from "next/image";

const features = [
  {
    title: "Adaptive inverter sync",
    description:
      "Continuously recalibrates inverter curves to match real-world behavior and weather volatility.",
    icon: "/icons/adaptive.svg",
  },
  {
    title: "Tariff-aware automation",
    description:
      "Aligns charge and discharge windows with dynamic tariffs, TOU calendars, and demand charges.",
    icon: "/icons/tariff.svg",
  },
  {
    title: "Battery health guard",
    description:
      "Protects cycle depth and temperature envelopes to extend lifespan by up to 22% per year.",
    icon: "/icons/health.svg",
  },
  {
    title: "Predictive alerts",
    description:
      "Pushes anomaly insights via SMS, Slack, and Home Assistant before critical thresholds hit.",
    icon: "/icons/alert.svg",
  },
  {
    title: "Open integrations",
    description:
      "Native MQTT topics plus REST and Webhook APIs to plug into schedulers, DERMs, and EMS stacks.",
    icon: "/icons/open.svg",
  },
  {
    title: "Edge resilience",
    description:
      "Runs models locally with offline-first caching so automations keep working during grid loss.",
    icon: "/icons/edge.svg",
  },
];

const comparisonRows = [
  {
    label: "Machine learning period",
    voltsense: "14-day adaptive",
    generic: "Manual configuration",
  },
  {
    label: "Battery protection",
    voltsense: "Dynamic cycle depth & temperature guard",
    generic: "Basic state-of-charge alerts",
  },
  {
    label: "Integration support",
    voltsense: "MQTT, REST, Webhooks, Home Assistant",
    generic: "CSV exports",
  },
  {
    label: "Tariff engine",
    voltsense: "Global tariff library + live market feeds",
    generic: "Static peak/off-peak",
  },
  {
    label: "Edge performance",
    voltsense: "Dedicated edge compute with failover",
    generic: "Cloud polling every 15 min",
  },
  {
    label: "Alerting",
    voltsense: "Predictive + anomaly-based",
    generic: "Threshold based",
  },
];

const mqttPayload = `{
  "topic": "voltsense/home-421/inverter/state",
  "payload": {
    "timestamp": "2024-09-04T18:22:11Z",
    "grid": {
      "voltage": 238.4,
      "frequency": 49.98,
      "status": "stable"
    },
    "battery": {
      "soc": 0.84,
      "temperature_c": 29.2,
      "cycle_depth": 0.38
    },
    "automation": {
      "next_action": "discharge",
      "scheduled_for": "2024-09-04T19:00:00Z",
      "confidence": 0.92
    }
  }
}`;

export default function FeaturesPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="container-page space-y-6 py-16">
        <span className="pill max-w-fit">Feature overview</span>
        <h1 className="font-display text-4xl font-semibold text-slate-100">
          Why VoltSense outperforms legacy monitors
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          We combined grid telemetry, machine learning, and open automation
          rails to deliver transparent, self-tuning energy intelligence that
          respects comfort while squeezing waste from every circuit.
        </p>
      </section>

      <section id="mqtt-example" className="container-page">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="card-surface p-8">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-volt-500/10">
                <Image src={feature.icon} alt="" width={28} height={28} />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-slate-100">
                {feature.title}
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-background-subtle/70 py-16">
        <div className="container-page">
          <h2 className="text-3xl font-semibold text-slate-100">
            Comparison at a glance
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-400">
            VoltSense continuously improves through on-device learning and
            integrations, while Generic Monitor X remains rigid and reactive.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800/70">
            <table className="min-w-full divide-y divide-slate-800/70 text-left text-sm">
              <thead className="bg-surface/80 text-xs uppercase tracking-wide text-slate-300">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Capability
                  </th>
                  <th scope="col" className="px-6 py-4 text-volt-100">
                    VoltSense
                  </th>
                  <th scope="col" className="px-6 py-4 text-slate-400">
                    Generic Monitor X
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="bg-background">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-5 font-semibold text-slate-200"
                    >
                      {row.label}
                    </th>
                    <td className="px-6 py-5 text-slate-200">
                      {row.voltsense}
                    </td>
                    <td className="px-6 py-5 text-slate-500">
                      {row.generic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <span className="pill max-w-fit">MQTT example</span>
            <h2 className="text-3xl font-semibold text-slate-100">
              Fine-grained telemetry designed for automation
            </h2>
            <p className="text-base text-slate-400">
              Every VoltSense gateway publishes structured payloads that are easy
              to route into Home Assistant, Node-RED, or any broker-aware
              automation service. Subscribe once, orchestrate everywhere.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <strong className="text-slate-100">Topic strategy:</strong> site
                scoped, device addressed, semantic suffixes.
              </li>
              <li>
                <strong className="text-slate-100">QoS:</strong> level 1 to
                guarantee delivery without flooding the broker.
              </li>
              <li>
                <strong className="text-slate-100">Security:</strong> mutual TLS
                with rotating credentials per gateway.
              </li>
            </ul>
          </div>
          <div className="card-surface overflow-hidden border border-slate-800/50 bg-background-subtle">
            <pre className="overflow-x-auto bg-background-subtle/80 p-6 text-sm leading-relaxed text-volt-100">
              <code>{mqttPayload}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
