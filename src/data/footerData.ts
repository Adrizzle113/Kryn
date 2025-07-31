export interface FooterLink {
  id: string;
  text: string;
  href: string;
  hidden?: boolean;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: string;
  text: string;
  href: string;
}

export interface FooterData {
  sections: FooterSection[];
  socialLinks: SocialLink[];
}

export const footerData: FooterData = {
  sections: [
    {
      id: 'services',
      title: 'Our services',
      links: [
        { id: 'how-it-works', text: 'How it works', href: '/how-it-works' },
        { id: 'pricing', text: 'Pricing', href: '/pricing' },
        { id: 'design-services', text: 'Design Services', href: '/design-services' },
        { id: 'webflow', text: 'Webflow', href: '/webflow-development' },
        { id: 'design-webflow', text: 'Design + Webflow', href: '/webflow-design' },
        { id: 'scope', text: 'Scope', href: '/scope', hidden: true }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      links: [
        { id: 'freebies', text: 'Freebies', href: '/resources' },
        { id: 'case-studies', text: 'Case Studies', href: '/case-studies' },
        { id: 'ad-examples', text: 'Ad Examples', href: '/ad-examples' },
        { id: 'blog', text: 'Blog', href: '/blog' },
        { id: 'landingpage-inspiration', text: 'Landingpage Inspiration', href: '/best-landingpage-design-inspiration' }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      links: [
        { id: 'about-us', text: 'About Us', href: '/about-us' },
        { id: 'career', text: 'Career', href: '/careers' },
        { id: 'privacy', text: 'Privacy', href: '/privacy-policy' },
        { id: 'imprint', text: 'Imprint', href: '/imprint' },
        { id: 'login', text: 'Login', href: "https://app.magier.com/login" }
      ]
    }
  ],
  socialLinks: [
    { id: 'youtube', text: 'Youtube', href: "https://www.youtube.com/@magier_com" },
    { id: 'instagram', text: 'Instagram', href: "https://www.instagram.com/magier_com" },
    { id: 'linkedin', text: 'LinkedIn', href: "https://www.linkedin.com/company/magier-com/" }
  ]
} as const;
