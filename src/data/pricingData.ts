export interface PricingFeature {
  text: string;
  icon: string;
  tooltip?: boolean;
  tooltipIcon?: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: number;
  icon: string;
  features: PricingFeature[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'design',
    title: 'Design',
    price: 2490,
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/6772bdf30b29b82dff369e22_design_tools.svg",
    features: [
      {
        text: 'Unlimited requests',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg",
        tooltip: true,
        tooltipIcon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-22.svg"
      },
      {
        text: 'Unlimited revisions',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg",
        tooltip: true,
        tooltipIcon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-22.svg"
      },
      {
        text: '<48h Processing time',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: 'In-House designers',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: 'Monthly cancelable',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: 'Dedicated project manager',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: 'Dashboard access for your team',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      }
    ]
  },
  {
    id: 'webflow',
    title: 'Webflow',
    price: 2490,
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/6772bf92a5a5e8b8e02237a4_webflow.svg",
    features: [
      {
        text: 'For larger Webflow tasks',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg",
        tooltip: true,
        tooltipIcon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-22.svg"
      },
      {
        text: 'Unlimited requests',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg",
        tooltip: true,
        tooltipIcon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-22.svg"
      },
      {
        text: 'Unlimited revisions',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg",
        tooltip: true,
        tooltipIcon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-22.svg"
      },
      {
        text: '<48h Processing time',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: 'In-House developers',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: 'Monthly cancelable',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: 'Dedicated project manager',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      }
    ]
  },
  {
    id: 'webflow-starter',
    title: 'Webflow',
    price: 790,
    icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/6772bf92a5a5e8b8e02237a4_webflow.svg",
    features: [
      {
        text: 'For smaller Webflow tasks',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg",
        tooltip: true,
        tooltipIcon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-22.svg"
      },
      {
        text: '10h development time',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: '<48h Processing time',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: 'In-House devs on stand-by',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: 'Monthly cancelable',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: 'Dedicated project manager',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      },
      {
        text: 'Dashboard access for your team',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-21.svg"
      }
    ]
  },
  {
    id: 'design-webflow',
    title: 'Design + Webflow',
    price: 3990,
    icon: "https://cdn.prod.website-files.com/6756af8bdb09e2801688ef7d/6773ee5e8f9d17dcb8eaba9f_design+webflow tools.svg",
    features: [
      {
        text: 'Unlimited requests',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-24.svg",
        tooltip: true,
        tooltipIcon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-25.svg"
      },
      {
        text: 'Unlimited revisions',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-24.svg",
        tooltip: true,
        tooltipIcon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-25.svg"
      },
      {
        text: '<48h Processing time',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-24.svg"
      },
      {
        text: 'In-House designers & developers',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-24.svg"
      },
      {
        text: 'Monthly cancelable',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-24.svg"
      },
      {
        text: 'Dedicated project manager',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-24.svg"
      },
      {
        text: 'Dashboard access for your team',
        icon: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-24.svg"
      }
    ]
  }
] as const;
