// Shared navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Our Team', href: '/#team' },
  { label: 'Private Practice', href: '/#private-practice' },
];
