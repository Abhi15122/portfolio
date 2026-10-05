import { NextResponse } from "next/server";
import { about } from "@/data/about";
import { contactSchema } from "@/lib/contact";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  if (!contactSchema.safeParse(body).success) {
    return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
  }
  // The portfolio uses email drafts until a delivery service is configured.
  return NextResponse.json(
    { ok: false, error: "Direct delivery is unavailable. Please email " + about.email + "." },
    { status: 503 },
  );
}
