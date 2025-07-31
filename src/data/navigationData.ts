export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  icon: string;
  description?: string;
}

export interface FeaturedContent {
  title: string;
  href: string;
  image: string;
  description: string;
}

export interface RecentContent {
  id: string;
  title: string;
  href: string;
}

export const navigationData = {
  services: [
    {
      id: 'graphic-design',
      title: 'Graphic Design Subscription',
      href: '/design-services',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-2.svg",
      description: 'From ads to logos & illustrations'
    },
    {
      id: 'webflow-development',
      title: 'Webflow Development Subscription',
      href: '/webflow-development',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-3.svg",
      description: 'You bring the design and we build it'
    },
    {
      id: 'design-webflow',
      title: 'Design + Webflow Subscription',
      href: '/webflow-design',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-4.svg",
      description: 'We design and build all of your assets'
    },
    {
      id: 'how-it-works',
      title: 'How it works',
      href: '/how-it-works',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-5.svg",
      description: 'This is how magier works'
    },
    {
      id: 'one-time-project',
      title: 'One Time Projects',
      href: '/one-time-project',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-6.svg",
      description: 'One-Off Design or Webflow Projects'
    },
    {
      id: 'scope',
      title: 'Scope & Delivery Times',
      href: '/scope',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-7.svg",
      description: 'Example tasks and their turnarounds'
    }
  ] as NavigationItem[],

  servicesFeatured: {
    title: 'Featured Case Study',
    href: '/case-studies/vc-backed-startup-plancraft',
    image: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67b4d63ed41140c9ec6b9dd1_website-design-case-study.jpg",
    description: 'VC-backed startup plancraft boosts CR by 20% with magier'
  } as FeaturedContent,

  servicesRecent: [
    {
      id: 'paroswiss',
      title: 'How ParoSwiss Modernized Their Global Brand Presence with magier',
      href: '/case-studies/ecommerce-design-paroswiss'
    },
    {
      id: 'walberg',
      title: 'How Walberg & Cie. Found Their Go-To Design Partner With magier',
      href: '/case-studies/design-for-law-firm'
    },
    {
      id: 'playmaker',
      title: 'How Playmaker Launched a Conversion-Ready Website in Under 2 Months',
      href: '/case-studies/playmaker-web-design-and-webflow'
    },
    {
      id: 'social-heaven',
      title: 'How a New Website Helped UGC Agency Social Heaven Double Their Leads',
      href: '/case-studies/social-heaven-branding-web-design'
    }
  ] as RecentContent[],

  customers: [
    {
      id: 'saas',
      title: 'SaaS',
      href: '/customer/saas',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-8.svg"
    },
    {
      id: 'fintech',
      title: 'Fintech',
      href: '/customer/fintech',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-9.svg"
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce',
      href: '/customer/ecommerce',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-10.svg"
    },
    {
      id: 'agencies',
      title: 'Agencies',
      href: '/customer/agencies',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-11.svg"
    },
    {
      id: 'startups',
      title: 'Startups',
      href: '/customer/startups',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-12.svg"
    },
    {
      id: 'marketing-teams',
      title: 'Marketing Teams',
      href: '/customer/marketing-teams',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-13.svg"
    },
    {
      id: 'vc-company-builder',
      title: 'VCs & Company Builder',
      href: '/customer/vc-company-builder',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-14.svg"
    }
  ] as NavigationItem[],

  customersFeatured: {
    title: 'Featured Case Study',
    href: '/case-studies/vc-backed-startup-plancraft',
    image: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67b4d63ed41140c9ec6b9dd1_website-design-case-study.jpg",
    description: 'VC-backed startup plancraft boosts CR by 20% with magier'
  } as FeaturedContent,

  customersRecent: [
    {
      id: 'paroswiss',
      title: 'How ParoSwiss Modernized Their Global Brand Presence with magier',
      href: '/case-studies/ecommerce-design-paroswiss'
    },
    {
      id: 'walberg',
      title: 'How Walberg & Cie. Found Their Go-To Design Partner With magier',
      href: '/case-studies/design-for-law-firm'
    },
    {
      id: 'playmaker',
      title: 'How Playmaker Launched a Conversion-Ready Website in Under 2 Months',
      href: '/case-studies/playmaker-web-design-and-webflow'
    },
    {
      id: 'social-heaven',
      title: 'How a New Website Helped UGC Agency Social Heaven Double Their Leads',
      href: '/case-studies/social-heaven-branding-web-design'
    }
  ] as RecentContent[],

  resources: [
    {
      id: 'how-it-works',
      title: 'How it works',
      href: '/how-it-works',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-16.svg"
    },
    {
      id: 'blog',
      title: 'Blog',
      href: '/blog',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-17.svg"
    },
    {
      id: 'newsletter',
      title: 'Newsletter',
      href: '/newsletter',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-18.svg"
    },
    {
      id: 'faq',
      title: 'FAQ',
      href: '/faq',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-7.svg"
    },
    {
      id: 'freebies',
      title: 'Freebies',
      href: '/resources',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-6.svg"
    }
  ] as NavigationItem[],

  resourcesFeatured: {
    title: 'Featured Resources',
    href: '/resources/landingpage-cheatsheet',
    image: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/677b91ffdb8ba45a047550e8_landingpage-cheatsheet.webp",
    description: 'Landingpage Cheatsheet Collection'
  } as FeaturedContent,

  resourcesRecent: [
    {
      id: 'ad-examples',
      title: 'Ad Examples Library',
      href: '/ad-examples'
    },
    {
      id: 'cro-checklist',
      title: 'Ecommerce CRO Checklist',
      href: '/resources/cro-checklist-ecommerce'
    },
    {
      id: 'collaboration-guide',
      title: 'Designer <> Marketer Collaboration Guide',
      href: '/resources/designer-collaboration-guide'
    },
    {
      id: 'linkedin-banners',
      title: '20 LinkedIn Banner Examples + Free Templates',
      href: '#'
    }
  ] as RecentContent[],

  company: [
    {
      id: 'about-us',
      title: 'About us',
      href: '/about-us',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-2.svg"
    },
    {
      id: 'career',
      title: 'Career',
      href: '/careers',
      icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-3.svg"
    }
  ] as NavigationItem[]
} as const;
