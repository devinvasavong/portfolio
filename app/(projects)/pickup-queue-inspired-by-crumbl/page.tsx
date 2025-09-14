"use client";
import { useEffect, useState } from "react";

/** Small helper to reuse your fade-in-on-mount pattern */
function FadeIn({
  delay = 0,
  className = "",
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-sm"} transition-all duration-1000 ease-out will-change-transform ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Responsive CodePen embed (no external script needed) */
function CodePenEmbed({
  slug = "gOjbERp",
  user = "devinvasavong",
  height = 520,
  title = "Pickup Queue",
}: {
  slug?: string;
  user?: string;
  height?: number;
  title?: string;
}) {
  // Uses CodePen's embed URL; sandbox keeps it safe in Next
  const src = `https://codepen.io/${user}/embed/${slug}?default-tab=result&theme-id=dark`;
  return (
    <div className="mt-6">
      <div className="rounded-lg overflow-hidden shadow-md">
        <iframe
          title={title}
          loading="lazy"
          allowTransparency={true}
          allow="clipboard-write; encrypted-media"
          className="w-full"
          style={{ height }}
          src={src}
        />
      </div>
      <p className="text-xs text-gray-500 mt-2 text-center">
        If the embed doesn’t load,{" "}
        <a
          href={`https://codepen.io/${user}/full/${slug}`}
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          open it on CodePen →
          </a>
      </p>
    </div>
  );
}

export default function PickupQueuePage() {
  return (
    <div>
      {/* Header */}
      <div id="header">
        <FadeIn delay={50}>
          <h1 className="name-header">Pickup Queue</h1>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-gray-500">HTML, CSS, JS</p>
        </FadeIn>
      </div>

      {/* Problem */}
      <FadeIn delay={120}>
        <p
          id="problem-statement"
          className="border-l-4 border-black pl-4 italic mt-10"
        >
          I wanted a playful way to simulate a cafe pickup queue—customers appear,
          then “pick up” and slide out—while keeping the UI buttery-smooth on mobile.
        </p>
      </FadeIn>

      {/* Solution */}
      <FadeIn delay={150}>
        <p id="solution" className="mt-10 text-gray-700">
          The demo uses lightweight CSS transitions for enter/exit, plus a tiny bit
          of JavaScript to schedule random arrivals and departures. It staggers
          list-item delays, cancels keyframe animations before exit, and collapses
          space to avoid layout jumps.
        </p>
      </FadeIn>

      {/* What it is */}
      <FadeIn delay={190}>
        <p id="what_is_boba_mi" className="mt-10 text-gray-700">
          It’s a micro-interaction sandbox that could power a real-time pickup board
          or order queue in a POS dashboard.
        </p>
      </FadeIn>

      <hr
        className="mt-12 border-gray-200 opacity-0 transition-opacity duration-1000"
        style={{ opacity: 1, transitionDelay: "210ms" }}
      />

      {/* Role */}
      <FadeIn delay={220} className="mt-8">
        <h2 className="font-roca text-lg font-semibold">My Role</h2>
        <p className="text-gray-700 mt-2">
          Solo designer–developer (interaction design, performance tuning, build).
        </p>
      </FadeIn>

      {/* Process */}
      <FadeIn delay={240} className="mt-8">
        <h2 className="font-roca text-lg font-semibold">Process</h2>
        <ol className="list-decimal pl-6 mt-2 space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Motion Spec:</span> slide-in on mount,
            slide-right + collapse on pickup.
          </li>
          <li>
            <span className="font-medium">Perf:</span> animate{" "}
            <code>transform</code>/<code>opacity</code>, add{" "}
            <code>will-change</code>, cancel keyframes before exit.
          </li>
          <li>
            <span className="font-medium">Robustness:</span> random intervals,
            guard against double-removal, restagger remaining items.
          </li>
        </ol>
      </FadeIn>

      {/* Live Demo */}
      <FadeIn delay={260} className="mt-8">
        <h2 className="font-roca text-lg font-semibold">Live Demo</h2>
        <p className="text-gray-700 mt-2">
          Try the embedded version below or open it fullscreen on CodePen.
        </p>
        <CodePenEmbed
          title="Pickup Queue"
          user="devinvasavong"
          slug="gOjbERp"
          height={560}
        />
      </FadeIn>

      {/* Impact */}
      <FadeIn delay={280} className="mt-8">
        <h2 className="font-roca text-lg font-semibold">Takeaways</h2>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
          <li>Micro-interactions add delight with very little code.</li>
          <li>Compositing-only animations stay smooth on mobile Safari.</li>
          <li>Patterns are reusable for any “queue” UI (uploads, tasks, orders).</li>
        </ul>
      </FadeIn>

      {/* Tech */}
      <FadeIn delay={300} className="mt-8">
        <h2 className="font-roca text-lg font-semibold">Tech</h2>
        <p className="text-gray-700 mt-2">Vanilla JS, CSS transitions, Tailwind.</p>
        <a
          href="https://codepen.io/devinvasavong/full/gOjbERp"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900 transition"
        >
          Open on CodePen →
        </a>
      </FadeIn>
    </div>
  );
}