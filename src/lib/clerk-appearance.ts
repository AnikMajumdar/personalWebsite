/**
 * Clerk appearance tuned to match the portfolio's dark, premium aesthetic so
 * the sign-in experience feels native rather than bolted on. Typed structurally
 * (validated where it's passed to <ClerkProvider appearance=... />).
 */
export const clerkAppearance = {
  variables: {
    colorPrimary: "#4d8bff",
    colorBackground: "#0a1120",
    colorText: "#eaf0fb",
    colorTextSecondary: "#94a3c4",
    colorInputBackground: "rgba(255,255,255,0.03)",
    colorInputText: "#eaf0fb",
    colorDanger: "#ff6b6b",
    colorSuccess: "#22d3ee",
    borderRadius: "0.85rem",
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    fontSize: "0.95rem",
  },
  elements: {
    rootBox: "font-sans",
    card: "bg-[#0a1120] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]",
    headerTitle: "text-foreground",
    headerSubtitle: "text-muted",
    socialButtonsBlockButton:
      "border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-foreground",
    formButtonPrimary:
      "bg-[linear-gradient(135deg,#5b9dff,#3b82f6_45%,#22d3ee)] text-[#0a0a12] hover:opacity-90 normal-case font-medium",
    footerActionLink: "text-accent-soft hover:text-accent",
    formFieldInput: "border border-white/10 bg-white/[0.03]",
    dividerLine: "bg-white/10",
    dividerText: "text-faint",
  },
};
