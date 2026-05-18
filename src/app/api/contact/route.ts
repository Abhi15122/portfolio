import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(80),
  email: z.string().email(),
  message: z.string().min(1).max(2000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input" },
        { status: 400 },
      );
    }
    // TODO: Abhinav — wire to email service (Resend / SES / SMTP / your own API)
    console.log("[contact]", parsed.data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
