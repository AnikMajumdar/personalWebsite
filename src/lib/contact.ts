// Server-only contact email delivery via the Resend HTTP API (no SDK needed).
// Configuration is optional: without RESEND_API_KEY the app degrades gracefully
// and the API route falls back to storing the message in the database.

export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

/** Whether transactional email is configured. */
export function isEmailConfigured(): boolean {
  return !!process.env.RESEND_API_KEY;
}

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "amajumdar111405@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

/**
 * Send a contact-form submission as an email. Never throws; returns whether the
 * message was accepted for delivery. The submitter's address is set as reply-to
 * so a reply goes straight back to them.
 */
export async function sendContactEmail({
  name,
  email,
  message,
}: ContactInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`[contact] Resend send failed (${res.status}): ${detail}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[contact] Resend request error", err);
    return false;
  }
}
