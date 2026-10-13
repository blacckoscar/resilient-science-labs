export function LeafIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden="true">
      <path
        d="M26 6C16 6 7.5 13.2 6.2 22.8c6.8.6 13.2-3.2 16.4-9.2-2.8 5.2-8 8.8-14 9.8C10.8 28 16 29 22 26c6.2-3.1 8.6-12 4-20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 20c2.4-3.4 6.2-6.4 12-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function GlobeIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="10.5" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="16" cy="16" rx="4.5" ry="10.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 13h20M6 19h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function MoleculeIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden="true">
      <circle cx="8" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.4 13.6 13.6 10.4M18.4 10.4l3.2 3.2M21.6 18.4l-3.2 3.2M13.6 21.6 10.4 18.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function BarsIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden="true">
      <path d="M7 24V16M13 24V10M19 24v-8M25 24V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function CycleIcon() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none" aria-hidden="true">
      <path
        d="M18 28a14 14 0 0 1 24-6l2-5 1 12-12-1 3-4a9 9 0 0 0-15 4"
        stroke="#123D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 36a14 14 0 0 1-24 6l-2 5-1-12 12 1-3 4a9 9 0 0 0 15-4"
        stroke="#123D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const impactIcons = {
  leaf: LeafIcon,
  globe: GlobeIcon,
  molecule: MoleculeIcon,
  bars: BarsIcon,
}
