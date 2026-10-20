/**
 * Legal-notice data. The postal address MUST be entered before the site is announced
 * (Impressum needs an address that can receive mail; a c/o or Impressum service also works).
 * Never invent one: leave `address` as null until Azeem provides it. (Provided 2026-10-18, without a house number.)
 */
export const legal = {
  name: 'Azeem Ur Rehman',
  address: ['Fuchsstraße', '90429 Nürnberg'] as string[] | null, // house number deliberately omitted at Azeem's request
  updated: 'Oktober 2026',
} as const;
