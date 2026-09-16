import { type NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUserId, isClerkConfigured } from "@/lib/auth";
import { recordResumeAccess } from "@/lib/db";
import { getResume } from "@/lib/resume";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Protected resume endpoint. Authorization is enforced server-side against the
 * Clerk session — knowing this URL is not sufficient to retrieve the file.
 */
export async function GET(request: NextRequest) {
  if (!isClerkConfigured()) {
    return NextResponse.json(
      { error: "Resume access isn't configured yet." },
      { status: 503 }
    );
  }

  const userId = await getAuthenticatedUserId();
  if (!userId) {
    return NextResponse.json(
      { error: "Sign in to access the resume." },
      { status: 401 }
    );
  }

  // Best-effort audit trail; never blocks the response.
  await recordResumeAccess(userId);

  let resume;
  try {
    resume = await getResume();
  } catch {
    return NextResponse.json(
      { error: "The resume is temporarily unavailable. Please try again later." },
      { status: 502 }
    );
  }

  const download = request.nextUrl.searchParams.get("download") === "1";
  const disposition = `${download ? "attachment" : "inline"}; filename="${resume.filename}"`;

  return new NextResponse(resume.bytes as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": resume.contentType,
      "Content-Disposition": disposition,
      "Cache-Control": "private, no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
    },
  });
}
