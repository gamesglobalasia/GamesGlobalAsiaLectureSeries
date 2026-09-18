import React, { useId } from 'react';

/**
 * The line-and-node figures from the poster artwork: routes traced across the
 * TLV grid of a liubo (六博) board. Lines taper toward their ends, and tails
 * that run off the figure dissolve rather than stopping.
 *
 * Coordinates are taken straight from the reference artwork, so each variant
 * keeps its own viewBox rather than being normalised to a shared grid.
 */

type Segment = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** 'both' tapers at each end; 'out' stays lit at (x1,y1) and dissolves at (x2,y2). */
  fade?: 'both' | 'out';
};

type Node = { cx: number; cy: number; r: number };

type Variant = { viewBox: string; segments: Segment[]; nodes: Node[] };

const VARIANTS: Record<string, Variant> = {
  // The "flag": a long rule, a stem, and a boxed diagonal over a falling tail.
  flag: {
    viewBox: '400 280 830 1560',
    segments: [
      { x1: 452, y1: 327, x2: 1181, y2: 327 },
      { x1: 452, y1: 327, x2: 452, y2: 562 },
      { x1: 452, y1: 562, x2: 691, y2: 562 },
      { x1: 691, y1: 562, x2: 691, y2: 784 },
      { x1: 452, y1: 784, x2: 691, y2: 784 },
      { x1: 452, y1: 562, x2: 691, y2: 784 },
      { x1: 452, y1: 784, x2: 452, y2: 1800, fade: 'out' },
    ],
    nodes: [
      { cx: 452, cy: 327, r: 14 },
      { cx: 1181, cy: 327, r: 14 },
      { cx: 452, cy: 562, r: 11 },
      { cx: 691, cy: 562, r: 14 },
      { cx: 452, cy: 784, r: 14 },
      { cx: 691, cy: 784, r: 14 },
      { cx: 452, cy: 1120, r: 14 },
    ],
  },

  // The "spine": a long vertical drop to a junction that branches right and
  // throws a diagonal down to a lone node.
  spine: {
    viewBox: '280 60 880 1780',
    segments: [
      { x1: 739, y1: 122, x2: 739, y2: 881 },
      { x1: 739, y1: 881, x2: 739, y2: 1352 },
      { x1: 739, y1: 1352, x2: 1095, y2: 1352, fade: 'out' },
      { x1: 739, y1: 1352, x2: 333, y2: 1745 },
      { x1: 739, y1: 1352, x2: 739, y2: 1800, fade: 'out' },
    ],
    nodes: [
      { cx: 739, cy: 122, r: 17 },
      { cx: 739, cy: 881, r: 15 },
      { cx: 739, cy: 1352, r: 15 },
      { cx: 333, cy: 1745, r: 15 },
    ],
  },

  // The "chain": a descending route that steps left, then picks up a second
  // strand on the right and rejoins it lower down.
  chain: {
    viewBox: '380 10 660 1880',
    segments: [
      { x1: 665, y1: 27, x2: 663, y2: 386 },
      { x1: 663, y1: 386, x2: 664, y2: 744 },
      { x1: 664, y1: 744, x2: 878, y2: 744, fade: 'out' },
      { x1: 664, y1: 744, x2: 415, y2: 991 },
      { x1: 415, y1: 991, x2: 415, y2: 1207 },
      { x1: 415, y1: 1207, x2: 415, y2: 1320, fade: 'out' },
      { x1: 1003, y1: 870, x2: 1003, y2: 1113, fade: 'both' },
      { x1: 1003, y1: 1113, x2: 1003, y2: 1490 },
      { x1: 723, y1: 1490, x2: 1003, y2: 1490 },
      { x1: 723, y1: 1490, x2: 723, y2: 1745 },
      { x1: 723, y1: 1745, x2: 723, y2: 1890, fade: 'out' },
    ],
    nodes: [
      { cx: 665, cy: 27, r: 15 },
      { cx: 663, cy: 386, r: 13 },
      { cx: 664, cy: 744, r: 14 },
      { cx: 415, cy: 991, r: 14 },
      { cx: 415, cy: 1207, r: 10 },
      { cx: 1003, cy: 1113, r: 9 },
      { cx: 1003, cy: 1490, r: 14 },
      { cx: 723, cy: 1490, r: 14 },
      { cx: 723, cy: 1745, r: 10 },
    ],
  },
};

export type MotifVariant = keyof typeof VARIANTS;

export default function Motif({
  variant = 'flag',
  className = '',
}: {
  variant?: MotifVariant;
  className?: string;
}) {
  // Several motifs can share a page, so gradient ids must not collide.
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const { viewBox, segments, nodes } = VARIANTS[variant];

  return (
    <svg viewBox={viewBox} aria-hidden="true" focusable="false" className={className} fill="none">
      <defs>
        {segments.map((s, i) => (
          <linearGradient
            key={i}
            id={`${uid}-${i}`}
            gradientUnits="userSpaceOnUse"
            x1={s.x1}
            y1={s.y1}
            x2={s.x2}
            y2={s.y2}
          >
            {s.fade === 'out' ? (
              <>
                <stop offset="0" stopColor="currentColor" stopOpacity="0.08" />
                <stop offset="0.25" stopColor="currentColor" stopOpacity="0.7" />
                <stop offset="0.6" stopColor="currentColor" stopOpacity="0.45" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </>
            ) : (
              <>
                <stop offset="0" stopColor="currentColor" stopOpacity="0.08" />
                <stop offset="0.5" stopColor="currentColor" stopOpacity="0.85" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
              </>
            )}
          </linearGradient>
        ))}
      </defs>

      <g strokeWidth={4} strokeLinecap="round">
        {segments.map((s, i) => (
          <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={`url(#${uid}-${i})`} />
        ))}
      </g>

      <g fill="currentColor">
        {nodes.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={n.r} />
        ))}
      </g>
    </svg>
  );
}
