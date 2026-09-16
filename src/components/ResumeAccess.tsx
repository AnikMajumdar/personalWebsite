"use client";

import { useState } from "react";
import { SignInButton, useAuth } from "@clerk/nextjs";
import {
  Lock,
  Download,
  ArrowUpRight,
  ShieldCheck,
  Loader2,
  AlertCircle,
} from "lucide-react";

const clerkEnabled = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export function ResumeAccess() {
  return clerkEnabled ? <AuthedAccess /> : <UnconfiguredAccess />;
}

/* ---------------------------------------------------------------- */
/*  Configured: real Clerk-gated flow                               */
/* ---------------------------------------------------------------- */

function AuthedAccess() {
  const { isLoaded, isSignedIn } = useAuth();
  const [busy, setBusy] = useState<"view" | "download" | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function openResume(download: boolean) {
    setError(null);
    setBusy(download ? "download" : "view");
    // Open the tab synchronously (within the gesture) to avoid popup blocking.
    const win = download ? null : window.open("", "_blank");
    try {
      const res = await fetch(`/api/resume${download ? "?download=1" : ""}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(
          data?.error ?? "The resume is temporarily unavailable."
        );
      }
      const url = URL.createObjectURL(await res.blob());
      if (download) {
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
      } else if (win) {
        win.location.href = url;
        setTimeout(() => URL.revokeObjectURL(url), 60000);
      } else {
        window.open(url, "_blank");
      }
    } catch (e) {
      win?.close();
      setError(
        e instanceof Error
          ? e.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setBusy(null);
    }
  }

  if (!isLoaded) {
    return (
      <div className="flex flex-wrap gap-3" aria-hidden>
        <div className="h-12 w-44 animate-pulse rounded-full bg-white/[0.05]" />
        <div className="h-12 w-40 animate-pulse rounded-full bg-white/[0.04]" />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div>
        <div className="flex flex-wrap gap-3">
          <SignInButton mode="modal">
            <button
              type="button"
              className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm"
            >
              <Lock className="h-4 w-4" />
              View Resume
            </button>
          </SignInButton>
        </div>
        <p className="mt-4 flex items-center gap-2 text-sm text-muted">
          <ShieldCheck className="h-4 w-4 text-accent-soft" />
          Sign in to access the resume — secured with Clerk.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => openResume(false)}
          disabled={busy !== null}
          className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm disabled:opacity-70"
        >
          {busy === "view" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowUpRight className="h-4 w-4" />
          )}
          View Resume
        </button>
        <button
          type="button"
          onClick={() => openResume(true)}
          disabled={busy !== null}
          className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-white/[0.03] px-7 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-white/[0.06] disabled:opacity-70"
        >
          {busy === "download" ? (
            <Loader2 className="h-4 w-4 animate-spin text-muted" />
          ) : (
            <Download className="h-4 w-4 text-muted" />
          )}
          Download
        </button>
      </div>

      <p className="mt-4 flex items-center gap-2 text-sm text-muted">
        <ShieldCheck className="h-4 w-4 text-cyan" />
        You&rsquo;re authenticated. Opens in a new tab.
      </p>

      {error && (
        <p
          role="alert"
          className="mt-3 flex items-center gap-2 text-sm text-[#ff8f8f]"
        >
          <AlertCircle className="h-4 w-4" />
          {error}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Not configured: clearly-marked placeholder (no fabrication)     */
/* ---------------------------------------------------------------- */

function UnconfiguredAccess() {
  const [shown, setShown] = useState(false);
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setShown(true)}
          className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm"
        >
          <Lock className="h-4 w-4" />
          View Resume
        </button>
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm text-muted">
        <ShieldCheck className="h-4 w-4 text-accent-soft" />
        Protected — sign-in required to access the resume.
      </p>
      {shown && (
        <p
          role="status"
          className="mt-3 max-w-md rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm text-muted"
        >
          Authentication isn&rsquo;t configured in this environment yet. Add
          Clerk credentials (see the README) to enable secure resume access.
        </p>
      )}
    </div>
  );
}
