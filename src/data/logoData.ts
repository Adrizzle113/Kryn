export interface LogoItem {
  id: string;
  src: string;
  alt: string;
}

export const logoData: LogoItem[] = [
  {
    id: 'logo1',
    src: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67619a6ae1df9ddfcdfb5972_Odin_logo.svg",
    alt: ''
  },
  {
    id: 'logo2',
    src: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67619a6ad8350eccb489e40b_Choco_logo.svg",
    alt: ''
  },
  {
    id: 'logo3',
    src: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/677c0313e85f103a66972ff6_plancraft-2.svg",
    alt: ''
  },
  {
    id: 'logo4',
    src: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67619a6a61f513a045e86dd5_Upvest_logo.svg",
    alt: ''
  },
  {
    id: 'logo5',
    src: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/67619a6aadb60ac74fbbbce4_awork_logo.svg",
    alt: ''
  }
] as const;
