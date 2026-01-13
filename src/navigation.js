import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Portfolio', href: getPermalink('/portfolio') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [
    { text: 'Book a consult', href: getPermalink('/contact') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Portfolio', href: getPermalink('/portfolio') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Mini Consult', href: getPermalink('/services') },
        { text: 'Room Plan', href: getPermalink('/services') },
        { text: 'Styling Session', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // Replace these with Thyra’s real links (and remove any you don’t use)
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/thyra' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Thyra Löwenmark Interior Design. All rights reserved.
  `,
};
