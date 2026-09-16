/**
 * Fixed, non-interactive ambient background: deep base, drifting aurora,
 * a fine grid, and a whisper of grain. Pure CSS animation (no JS, no layout).
 */
export function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base vignette */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(124,140,255,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_120%,rgba(177,140,255,0.08),transparent_60%)]" />

      {/* Drifting aurora blobs */}
      <div className="absolute -left-[10%] top-[6%] h-[42vw] w-[42vw] rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.20),transparent_70%)] blur-3xl animate-aurora-1" />
      <div className="absolute -right-[8%] top-[30%] h-[38vw] w-[38vw] rounded-full bg-[radial-gradient(circle,rgba(95,214,230,0.14),transparent_70%)] blur-3xl animate-aurora-2" />

      {/* Fine grid with radial fade */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-70" />

      {/* Grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-soft-light" />

      {/* Bottom fade to seat content */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
