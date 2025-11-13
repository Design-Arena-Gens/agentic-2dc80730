import { NextResponse } from "next/server";
import { MODEL_CATALOG, routeModel, type ModelRequest } from "@/lib/modelRouter";

export async function GET() {
  const models = MODEL_CATALOG.map((model) => ({
    id: model.id,
    name: model.name,
    provider: model.provider,
    capabilities: model.capabilities,
    strengths: model.strengths,
    contextWindow: model.contextWindow,
    costPerMillion: model.costPerMillion,
    openSource: model.openSource,
  }));

  return NextResponse.json({ models });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ModelRequest>;

    if (!payload.prompt || !payload.modality || !payload.priority) {
      return NextResponse.json(
        { error: "prompt, modality, and priority are required" },
        { status: 400 },
      );
    }

    const result = routeModel({
      prompt: payload.prompt,
      modality: payload.modality,
      priority: payload.priority,
    });

    return NextResponse.json({
      recommendation: result.primary,
      alternatives: result.contenders,
      insights: result.insights,
    });
  } catch (error) {
    console.error("route-model api error", error);
    return NextResponse.json({ error: "Failed to route model" }, { status: 500 });
  }
}

