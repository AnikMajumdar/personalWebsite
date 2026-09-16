import { type NextRequest, NextResponse } from "next/server";
import { isEmailConfigured, sendContactEmail } from "@/lib/contact";
import { recordContactMessage } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Public contact endpoint. A submission succeeds if it is either stored in the
 * database or emailed, so the form works as soon as one of those is configured.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  const honeypot = String(data.website ?? "").trim();

  // Bots tend to fill the hidden honeypot field; accept without acting.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: "One of the fields is too long." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const stored = await recordContactMessage({ name, email, message });
  const emailed = isEmailConfigured()
    ? await sendContactEmail({ name, email, message })
    : false;

  if (emailed || stored) return NextResponse.json({ ok: true });

  return NextResponse.json(
    { error: "Couldn't deliver your message right now. Please email me directly." },
    { status: 502 }
  );
}
