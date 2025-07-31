export interface Testimonial {
  id: string;
  title: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
  companyLogo: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'lennart-prange',
    title: 'Great team, amazing results!',
    quote: '"We have been working with magier for a couple of months and we have tested various formats (web design, ad design, merch...) and are completely convinced!"',
    authorName: 'Lennart Prange',
    authorTitle: 'Co-Founder',
    authorImage: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/676a98dd117c95c311a27918_valuecase-profile.avif",
    companyLogo: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/677df8793ee51725cdfbd949_Valuecase.webp"
  },
  {
    id: 'giovanni-giorgi',
    title: 'Visuals and Motion Designs for 50+ Clients!',
    quote: '"We loved working with magier! [...] Their design team helped us deliver visuals and motion designs for 50+ clients across different marketing channels, managing high volume requests and quickly adapting to requests from our clients and team."',
    authorName: 'Giovanni Giorgi',
    authorTitle: 'Marketing Manager',
    authorImage: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/676aaf61d7e2335a85506408_choco-profile.avif",
    companyLogo: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/676aaf38cf85224fe2294f62_Choco.webp"
  },
  {
    id: 'spencer-stebbins',
    title: 'A name befitting the experience',
    quote: '"The magier team is truly outstanding – period. In my experience, talent shines when a team not only grasps your vision or problem statement but exceeds your expectations with every iteration. This is precisely what I encountered with magier."',
    authorName: 'Spencer Stebbins',
    authorTitle: 'Founder',
    authorImage: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/6771aec4fe492dec3130c365_vera-profile.avif",
    companyLogo: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/6771af053b578e0a03992198_vera.webp"
  },
  {
    id: 'patrick-ryan',
    title: 'An excellent, dynamic, responsive site and Webflow template in <2 weeks',
    quote: '"Used magier for our website. We provided a Figma template and they turned around an excellent, dynamic, responsive site and Webflow template for future development incredibly fast, under 2 weeks."',
    authorName: 'Patrick Ryan',
    authorTitle: 'Co-Founder',
    authorImage: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/676aa4cb14ebc7a5d881d0cc_odin-profile.avif",
    companyLogo: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/677df856030e6fe3ef30b159_Odin.webp"
  },
  {
    id: 'yunzhi-tao',
    title: 'The best graphic design partner',
    quote: '"Magier provides a great pricing model and a super user-friendly backend. They\'ve been supporting us for a couple of months now and have never failed to deliver high-quality design projects, sometimes within a very tight schedule. Communication & feedback is easy and efficient."',
    authorName: 'Yunzhi Tao',
    authorTitle: 'Marketing Specialist',
    authorImage: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/676a9ae7df6b81d6dd6e8e30_ecog-profile.avif",
    companyLogo: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/676a9ae043c9908b34850bff_ecog-1.webp"
  },
  {
    id: 'christian-bopp',
    title: 'Perfect for SMEs!',
    quote: '"I can\'t say enough good things about magier! The design deliverables I receive are absolutely outstanding and the turnaround time is incredibly fast! Furthermore, the communication with the team is top-notch, always helpful and responsive."',
    authorName: 'Christian Bopp',
    authorTitle: 'Co-CEO',
    authorImage: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/677df80a1ee350601b9be394_christian-bopp.avif",
    companyLogo: "https://c.animaapp.com/mdrg9twxk1hUjD/assets/677df82f2a2ea7d0029effea_zep.webp"
  }
  // Additional testimonials would continue here...
] as const;
