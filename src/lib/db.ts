// Server-only database layer (Neon Postgres). Centralizes all SQL so components
// never touch the database directly. All access is best-effort: a database
// outage must never block resume access.
import { neon } from "@neondatabase/serverless";

type Sql = ReturnType<typeof neon>;

export function isDatabaseConfigured(): boolean {
  return !!process.env.DATABASE_URL;
}

function getSql(): Sql | null {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}

let schemaReady = false;

async function ensureSchema(sql: Sql): Promise<void> {
  if (schemaReady) return;
  await sql`
    CREATE TABLE IF NOT EXISTS resume_access (
      id BIGSERIAL PRIMARY KEY,
      clerk_user_id TEXT NOT NULL,
      accessed_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  schemaReady = true;
}

/**
 * Record an authenticated resume access. Never throws; failures are logged
 * without sensitive detail so they can't break the download flow.
 */
export async function recordResumeAccess(clerkUserId: string): Promise<void> {
  try {
    const sql = getSql();
    if (!sql) return;
    await ensureSchema(sql);
    await sql`INSERT INTO resume_access (clerk_user_id) VALUES (${clerkUserId})`;
  } catch {
    console.error("[db] failed to record resume access");
  }
}

let contactSchemaReady = false;

async function ensureContactSchema(sql: Sql): Promise<void> {
  if (contactSchemaReady) return;
  await sql`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  contactSchemaReady = true;
}

/** Persist a contact-form submission. Never throws; returns whether it saved. */
export async function recordContactMessage(input: {
  name: string;
  email: string;
  message: string;
}): Promise<boolean> {
  try {
    const sql = getSql();
    if (!sql) return false;
    await ensureContactSchema(sql);
    await sql`
      INSERT INTO contact_messages (name, email, message)
      VALUES (${input.name}, ${input.email}, ${input.message})
    `;
    return true;
  } catch {
    console.error("[db] failed to record contact message");
    return false;
  }
}
