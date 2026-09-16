// Server-only resume retrieval. The resume is bundled as a non-public asset and
// is only ever returned through the authenticated /api/resume route — it is
// never served as a static file.
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

/** Decode the bundled base64 resume into bytes. */
export async function getResume(): Promise<ResumeFile> {
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
