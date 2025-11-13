"use client";

import { useMemo, useState } from "react";
import type { ModelDefinition, Modality, Priority } from "@/lib/modelRouter";

interface RouterResponse {
  recommendation: ModelDefinition;
  alternatives: ModelDefinition[];
  insights: {
    estimatedTokens: number;
    reasoning: string[];
  };
}

const examplePrompts = [
  {
    label: "Ship-grade product spec",
    prompt:
      "Draft a detailed product strategy for a realtime multiplayer whiteboard with pricing tiers, rollout steps, and competitive analysis.",
  },
  {
    label: "Code review & refactor",
    prompt:
      "Review this Typescript function for race conditions and refactor it for better performance in a serverless environment.",
  },
  {
    label: "Vision to insights",
    prompt:
      "You are given a product photo and need to extract SKU details, materials, defects, and marketing copy from it.",
  },
];

export function ModelRouterPlayground() {
  const [prompt, setPrompt] = useState(examplePrompts[0]?.prompt ?? "");
  const [modality, setModality] = useState<Modality>("text");
  const [priority, setPriority] = useState<Priority>("intelligence");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<RouterResponse | null>(null);

  const tagPalette = useMemo(
    () => ({
      openSource: "text-brand-neon border-brand-neon/30 bg-brand-neon/10",
      closed: "text-brand-200 border-brand-200/30 bg-white/5",
    }),
    [],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("/api/route-model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, modality, priority }),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Request failed");
      }

      const data = (await res.json()) as RouterResponse;
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="glass-surface w-full overflow-hidden px-6 py-8 sm:px-12 sm:py-12">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="rounded-pill border border-brand-neon/40 bg-brand-neon/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-neon">
              Live Demo
            </span>
            <p className="text-xs text-zinc-400">
              Pai Keys routes requests across 40+ frontier & open models.
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Plug in a task. Instantly get the optimal model.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-300 sm:text-base">
            The router inspects intent, complexity, and tone before firing a single
            token. It balances quality, latency, and budget in milliseconds.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
            {examplePrompts.map((example) => (
              <button
                key={example.label}
                type="button"
                onClick={() => {
                  setPrompt(example.prompt);
                  setModality(
                    example.label.includes("Vision")
                      ? "vision"
                      : example.label.includes("Code")
                        ? "code"
                        : "text",
                  );
                  setPriority(
                    example.label.includes("Ship")
                      ? "intelligence"
                      : example.label.includes("Code")
                        ? "speed"
                        : "economy",
                  );
                }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-left text-zinc-200 transition hover:border-brand-neon/50 hover:text-white"
              >
                {example.label}
              </button>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col gap-4 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-2xl"
        >
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Request
            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              rows={6}
              required
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-brand-neon focus:ring-2 focus:ring-brand-neon/50"
              placeholder="Describe the task you need help with..."
            />
          </label>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Modality
              <select
                value={modality}
                onChange={(event) => setModality(event.target.value as Modality)}
                className="rounded-full border border-white/10 bg-black/60 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-brand-neon focus:ring-2 focus:ring-brand-neon/50"
              >
                <option value="text">Natural Language</option>
                <option value="code">Code</option>
                <option value="vision">Vision</option>
                <option value="audio">Audio</option>
                <option value="image">Image Generation</option>
                <option value="multimodal">Multimodal</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Priority
              <select
                value={priority}
                onChange={(event) => setPriority(event.target.value as Priority)}
                className="rounded-full border border-white/10 bg-black/60 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-brand-neon focus:ring-2 focus:ring-brand-neon/50"
              >
                <option value="intelligence">Best Intelligence</option>
                <option value="speed">Lowest Latency</option>
                <option value="economy">Best Value</option>
              </select>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-electric to-brand-neon px-6 py-3 text-sm font-semibold text-black shadow-glow transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Routing…" : "Route My Request"}
          </button>

          {error && (
            <p className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          )}
        </form>
      </div>

      {response && (
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr,1fr]">
          <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">
                {response.recommendation.name}
              </h3>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  response.recommendation.openSource
                    ? tagPalette.openSource
                    : tagPalette.closed
                }`}
              >
                {response.recommendation.openSource ? "Open Source" : "Premium Partner"}
              </span>
            </div>
            <p className="mt-1 text-sm text-zinc-300">
              {response.recommendation.provider} · Supports{" "}
              {response.recommendation.capabilities.join(" / ")}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs sm:text-sm">
              <FeatureBadge
                label="Context"
                value={`${new Intl.NumberFormat().format(
                  response.recommendation.contextWindow,
                )} tokens`}
              />
              <FeatureBadge
                label="Cost / 1M tokens"
                value={`$${response.recommendation.costPerMillion.toLocaleString()}`}
              />
              <FeatureBadge
                label="Standout Strength"
                value={response.recommendation.strengths[0] ?? "Balanced"}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Router Insights
            </p>
            <p className="mt-2 text-sm text-zinc-200">
              Estimated tokens:{" "}
              <span className="font-semibold text-white">
                {response.insights.estimatedTokens.toLocaleString()}
              </span>
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              {response.insights.reasoning.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-neon shadow-glow" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Contender Models
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {response.alternatives.map((model) => (
                <div
                  key={model.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-200"
                >
                  <p className="font-medium text-white">{model.name}</p>
                  <p className="text-xs text-zinc-400">{model.provider}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-brand-neon">
                    {model.capabilities.join(" • ")}
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    Strengths: {model.strengths.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function FeatureBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  );
}

