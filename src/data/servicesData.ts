export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'ad-creatives',
    title: 'Ad Creatives',
    description: 'Social Media Ad creatives for all platforms',
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67879c0012db59fe318a4b87_Ad_Creatives.svg"
  },
  {
    id: 'branding-designs',
    title: 'Branding Designs',
    description: 'Logos, guidelines and all branding assets',
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67879c0012db59fe318a4b86_Brand_Design.svg"
  },
  {
    id: 'ui-design',
    title: 'UI Design',
    description: 'Interface design for (web) apps',
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67879c0012db59fe318a4b81_UX_Design.svg"
  },
  {
    id: 'landing-pages',
    title: 'Landing pages',
    description: 'High-Converting page layouts',
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67879c0012db59fe318a4b7e_Landing_Pages.svg"
  },
  {
    id: 'print-design',
    title: 'Print Design',
    description: 'Flyers, Posters, Packaging and more',
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67879c0012db59fe318a4b7f_Print.svg"
  },
  {
    id: 'presentation-design',
    title: 'Presentation Design',
    description: 'Stunning slides that convey your message',
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67879c0012db59fe318a4b80_Presentations.svg"
  },
  {
    id: 'webdesign',
    title: 'Webdesign',
    description: 'Optimized layouts for all devices',
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67879c0012db59fe318a4b84_iocn.svg"
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Logo creation and brand development',
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67879c0012db59fe318a4b85_Logos.svg"
  },
  {
    id: 'webflow-development',
    title: 'Webflow Development',
    description: 'Development of your website in Webflow',
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67879c0012db59fe318a4b83_Webflow.svg"
  }
] as const;
