// Shared color palette for the site
export const colors = {
  cream: '#FDF8F3',
  warmWhite: '#FEFCFA',
  peach: '#FFE8D6',
  coral: '#D27056',
  sage: '#81B29A',
  navy: '#3D405B',
  gold: '#F2CC8F',
  softPink: '#F4E4DC',
} as const;

export type ColorName = keyof typeof colors;
export type ColorValue = (typeof colors)[ColorName];
