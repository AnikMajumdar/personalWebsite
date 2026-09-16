// Server-only auth helpers. Isolates Clerk so the rest of the app depends on a
// small, stable surface. The public site never requires authentication — only
// the protected resume endpoint calls into these functions.
import { auth } from "@clerk/nextjs/server";

/** Whether Clerk credentials are present. Lets the app degrade gracefully. */
export function isClerkConfigured(): boolean {
  return (
    !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    !!process.env.CLERK_SECRET_KEY
  );
}

/** Returns the authenticated Clerk user id, or null if unauthenticated. */
export async function getAuthenticatedUserId(): Promise<string | null> {
  if (!isClerkConfigured()) return null;
  try {
    const { userId } = await auth();
    return userId ?? null;
  } catch {
    return null;
  }
}
