import Link from "next/link";
import { ModelRouterPlayground } from "@/components/model-router-playground";
import { MODEL_CATALOG } from "@/lib/modelRouter";

const heroStats = [
  { label: "Open & Frontier Models", value: "40+" },
  { label: "Median Latency", value: "420ms" },
  { label: "Savings vs. Vendor Direct", value: "62%" },
];

const operatingSystem = [
  {
    title: "Unified Key",
    description:
      "One key unlocks GPT, Claude, Gemini, Mistral, Llama, Stability, Whisper and self-hosted clusters.",
  },
  {
    title: "Intelligent Router",
    description:
      "Pai Keys triages every task in real time—matching model strengths to intent, budget, and latency goals.",
  },
  {
    title: "Adaptive Policies",
    description:
      "Set guardrails, fallbacks, and spend caps in a visual policy editor. Ship compliant AI features overnight.",
  },
];

const playbooks = [
  {
    stat: "x7",
    title: "Faster roadmap velocity",
    copy: "Fully managed AI capabilities out of the box—no more juggling rate limits, quotas, or SDK rewrites.",
  },
  {
    stat: "$0",
    title: "Entry cost",
    copy: "Start free on open models. Auto-upgrade to premium models only when routing deems it a net gain.",
  },
  {
    stat: "Global",
    title: "Edge inference mesh",
    copy: "Serve from the closest GPU cluster. Pai Keys keeps latency low for every geography in your roadmap.",
  },
];

const testimonials = [
  {
    quote:
      "Pai Keys gave us the flexibility of open models with the reliability of enterprise APIs. Our AI shipping velocity doubled.",
    name: "Eva Liang",
    role: "Head of AI Platform, OrbitOS",
  },
  {
    quote:
      "We replaced a patchwork of 6 providers with Pai Keys. Cost predictability shot up and customer response time dropped under a second.",
    name: "Darius Cole",
    role: "Founder & CTO, LayerForge",
  },
];

const integrations = [
  "Vercel AI SDK",
  "LangChain",
  "LlamaIndex",
  "Supabase Edge",
  "Temporal",
  "Zapier",
  "Retool",
  "Bubble",
];

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-12 lg:px-16">
      <Backdrop />
      <Hero />
      <div id="router-playground">
        <ModelRouterPlayground />
      </div>
      <UnifiedStack />
      <Switchboard />
      <Testimonials />
      <Integrations />
      <CallToAction />
      <Footer />
    </main>
  );
}

function Backdrop() {
  return (
    <>
      <div className="absolute inset-x-10 top-0 -z-10 h-[400px] rounded-full bg-gloss-gradient opacity-40 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 -z-20 h-[60vh] bg-grid-radial opacity-80 blur-[80px]" />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/15 bg-white/[0.02] p-8 shadow-2xl sm:p-12">
      <div className="absolute inset-0 bg-mesh-light opacity-80" />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.4fr,1fr]">
        <div>
          <span className="rounded-pill border border-brand-200/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-100">
            Unified AI API
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Pai Keys</span> routes every request to the
            smartest model—automatically.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-200 sm:text-lg">
            Ship AI features without choosing a single vendor. Pai Keys analyzes each
            request and dispatches the best GPT, Claude, Gemini, Llama, Mistral, or
            Stable model for quality, price, and latency. No vendor lock-in. No quotas.
            Your product, supercharged.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#get-started"
              className="rounded-full bg-gradient-to-r from-brand-500 via-brand-electric to-brand-neon px-6 py-3 text-sm font-semibold text-black shadow-glow transition hover:brightness-110"
            >
              Generate your universal key
            </Link>
          <Link
            href="#router-playground"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-neon/50 hover:text-brand-neon"
          >
            Explore live router →
          </Link>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-black/40 px-5 py-4 text-white shadow-inner-glow"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  {item.label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-4 rounded-[30px] border border-white/15 bg-black/50 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-neon">
              Fleet Directory
            </p>
            <p className="mt-2 text-sm text-zinc-300">
              Pai Keys monitors quality, price, and uptime across every integrated
              model.
            </p>
          </div>
          <div className="space-y-3">
            {MODEL_CATALOG.slice(0, 6).map((model) => (
              <div
                key={model.id}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-white">{model.name}</p>
                  <p className="text-xs text-zinc-400">{model.provider}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-brand-neon">
                  {model.capabilities.join(" • ")}
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-brand-neon/30 bg-brand-neon/10 px-4 py-3 text-xs text-brand-neon">
            + more open-source clusters (self-host or via Pai Edge Mesh)
          </div>
        </div>
      </div>
    </section>
  );
}

function UnifiedStack() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
      <div className="glass-surface relative overflow-hidden px-8 py-10">
        <div className="absolute inset-0 bg-gloss-gradient opacity-20 blur-[120px]" />
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-neon">
            All-in-one control plane
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Ship once. Access every AI capability forever.
          </h2>
          <p className="mt-4 text-sm text-zinc-300 sm:text-base">
            Pai Keys orchestrates API connectivity, spend management, quota smoothing,
            and observability. Focus on product differentiation, not multi-provider
            chaos.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {operatingSystem.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-xs text-zinc-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-surface flex flex-col gap-5 px-7 py-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-neon">
          Routing blueprints
        </p>
        {playbooks.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
          >
            <p className="text-2xl font-semibold text-white">{item.stat}</p>
            <p className="mt-1 text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-xs text-zinc-300">{item.copy}</p>
          </div>
        ))}
        <Link
          href="#switchboard"
          className="mt-1 text-sm font-semibold text-brand-neon transition hover:text-white"
        >
          View routing logic ↗
        </Link>
      </div>
    </section>
  );
}

function Switchboard() {
  return (
    <section id="switchboard" className="grid gap-10 lg:grid-cols-[1fr,1.1fr]">
      <div className="glass-surface px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-neon">
          Routing telemetry
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          The Pai Switchboard keeps SLAs sacred.
        </h2>
        <p className="mt-4 text-sm text-zinc-300 sm:text-base">
          Inspect real-time quality metrics, swap models with a toggle, and pipe events
          into your own analytics warehouse. Pai Keys is API-first with enterprise-grade
          visibility.
        </p>
        <div className="mt-8 space-y-5">
          <TelemetryRow
            label="Adaptive Ensemble"
            description="If the primary model fails or drifts, Pai Keys fails over to the next ranked contender automatically."
          />
          <TelemetryRow
            label="Observability Mesh"
            description="Out-of-the-box dashboards for latency, cost, and quality with per-model breakdowns."
          />
          <TelemetryRow
            label="Policy Engine"
            description="Define routing rules, guardrails, and moderation thresholds that apply everywhere instantly."
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="glass-surface border-brand-electric/40 bg-black/40 px-8 py-10 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
            Zero-friction onboarding
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Plug straight into your stack.
          </h3>
          <p className="mt-3 text-sm text-zinc-300">
            Pai Keys speaks the same protocols you already use. Swap in a single URL to
            access your entire AI fleet.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/60 p-4 text-xs text-zinc-200">
            <code>
              {`curl https://api.paikeys.dev/v1/chat \\
-H "Authorization: Bearer PAIAI-..." \\
-d '{ "prompt": "Summarize Q2 product feedback", "priority": "intelligence" }'`}
            </code>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="glass-surface px-6 py-7">
            <p className="text-3xl font-semibold text-white">99.95%</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-zinc-400">
              uptime across the fleet
            </p>
          </div>
          <div className="glass-surface px-6 py-7">
            <p className="text-3xl font-semibold text-white">45</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-zinc-400">
              seconds to rotate providers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TelemetryRow({ label, description }: { label: string; description: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="text-sm font-semibold text-white">{label}</p>
      <p className="mt-2 text-xs text-zinc-300">{description}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="glass-surface px-8 py-10">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-neon">
        Trusted by AI-first teams
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
        Teams replace vendor chaos with Pai Keys.
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.name}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-zinc-200"
          >
            <p className="text-lg text-white">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-4 text-xs uppercase tracking-[0.25em] text-brand-neon">
              {testimonial.name} · {testimonial.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-neon">
        Drop-in integrations
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
        Built to play with your favorite developer tools.
      </h2>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {integrations.map((integration) => (
          <div
            key={integration}
            className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-zinc-200"
          >
            {integration}
          </div>
        ))}
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section
      id="get-started"
      className="glass-surface relative overflow-hidden px-8 py-10 text-center sm:px-16 sm:py-16"
    >
      <div className="absolute inset-0 bg-gloss-gradient opacity-30 blur-[90px]" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-neon">
          Ready in minutes
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          One API key. Infinite AI optionality.
        </h2>
        <p className="mt-4 text-sm text-zinc-200 sm:text-base">
          Start free with open models, upgrade when you need dedicated GPT, Claude, or
          Gemini capacity. Pai Keys is the control plane for teams who refuse to choose
          just one model.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="https://dashboard.paikeys.dev/signup"
            className="rounded-full bg-gradient-to-r from-brand-500 via-brand-electric to-brand-neon px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-brand-500/40 transition hover:brightness-110"
          >
            Launch Pai Keys Console
          </Link>
          <Link
            href="https://docs.paikeys.dev"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-neon/40 hover:text-brand-neon"
          >
            Read the docs →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-10 text-xs text-zinc-400 sm:flex-row">
      <p>© {new Date().getFullYear()} Pai Keys. Unified AI routing without limits.</p>
      <div className="flex flex-wrap items-center gap-4">
        <Link href="mailto:hello@paikeys.dev" className="hover:text-brand-neon">
          Support
        </Link>
        <Link href="https://status.paikeys.dev" className="hover:text-brand-neon">
          Status
        </Link>
        <Link href="https://security.paikeys.dev" className="hover:text-brand-neon">
          Security
        </Link>
      </div>
    </footer>
  );
}
