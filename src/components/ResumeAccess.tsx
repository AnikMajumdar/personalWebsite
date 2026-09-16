"use client";

import { useState } from "react";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { Download, ArrowUpRight } from "lucide-react";

const clerkEnabled = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Resume hosted on Google Drive. "View" opens the Drive preview; "Download"
// pulls the file directly. Swap the resume by changing this file id.
const RESUME_FILE_ID = "1kciqkz_0QoXHBUmAxqEIru9u5c55RxDm";
const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view`;
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

export function ResumeAccess() {
  return clerkEnabled ? <AuthedAccess /> : <UnconfiguredAccess />;
}

/* ---------------------------------------------------------------- */
/*  Configured: real Clerk-gated flow                               */
/* ---------------------------------------------------------------- */

function AuthedAccess() {
  const { isLoaded, isSignedIn } = useAuth();

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
              View Resume
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </SignInButton>
        </div>
        <p className="mt-4 text-sm text-muted">
          Opens in a new tab after a quick sign-in.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <a
          href={RESUME_VIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm"
        >
          View Resume
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href={RESUME_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-white/[0.03] px-7 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-white/[0.06]"
        >
          <Download className="h-4 w-4 text-muted" />
          Download
        </a>
      </div>

      <p className="mt-4 text-sm text-muted">Opens in a new tab.</p>
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
          View Resume
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <p className="mt-4 text-sm text-muted">
        Opens in a new tab after a quick sign-in.
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
