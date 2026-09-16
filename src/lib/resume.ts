// Server-only resume retrieval. Prefers a private R2 object (Cloudflare) and
// falls back to a bundled, non-public asset. The bytes are only ever returned
// through the authenticated /api/resume route — never as a static file.
import {
  RESUME_BASE64,
  RESUME_CONTENT_TYPE,
  RESUME_FILENAME,
} from "./resume-asset";

export interface ResumeFile {
  bytes: Uint8Array;
  contentType: string;
  filename: string;
}

// Minimal structural types so we don't need @cloudflare/workers-types.
interface R2ObjectLike {
  arrayBuffer(): Promise<ArrayBuffer>;
  httpMetadata?: { contentType?: string };
}
interface R2BucketLike {
  get(key: string): Promise<R2ObjectLike | null>;
}

/** Try to load the resume from a private R2 bucket binding, if available. */
async function fromR2(): Promise<ResumeFile | null> {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const context = getCloudflareContext() as unknown as {
      env?: Record<string, unknown>;
    };
    const bucket = context.env?.RESUME_BUCKET as R2BucketLike | undefined;
    if (!bucket) return null;

    const key = process.env.RESUME_OBJECT_KEY || "resume.pdf";
    const object = await bucket.get(key);
    if (!object) return null;

    return {
      bytes: new Uint8Array(await object.arrayBuffer()),
      contentType: object.httpMetadata?.contentType || "application/pdf",
      filename: RESUME_FILENAME,
    };
  } catch {
    return null;
  }
}

/** Decode the bundled base64 placeholder resume. */
function fromBundle(): ResumeFile {
  const binary = atob(RESUME_BASE64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return {
    bytes,
    contentType: RESUME_CONTENT_TYPE,
    filename: RESUME_FILENAME,
  };
}

export async function getResume(): Promise<ResumeFile> {
  return (await fromR2()) ?? fromBundle();
}
