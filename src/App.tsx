import React from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { LogoSection } from './components/sections/LogoSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { FAQSection } from './components/sections/FAQSection';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="text-gray-900 text-[15.3473px] not-italic normal-nums font-normal accent-auto bg-zinc-100 box-border block tracking-[-0.36px] leading-[24.9393px] list-outside list-disc min-h-full text-start indent-[0px] normal-case visible border-separate font-inter md:text-[15.5627px] md:leading-[23.344px]">
      <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
        <div className="fixed text-[15.3473px] box-border leading-[24.9393px] left-[0%] top-[0%] md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]"></div>
        <div className="text-[15.3473px] box-border hidden leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]"></div>
        <Header />
        <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
          <HeroSection />
          <LogoSection />
          <ServicesSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <ComparisonSection />
          <FAQSection />
          <CTASection />
          <Footer />
        </div>
        <div className="fixed text-[15.3473px] items-center box-border hidden justify-center leading-[24.9393px] z-[9999999] inset-[0%] md:text-[15.5627px] md:flex md:leading-[23.344px]"></div>
      </div>
      <div className="text-[15.3473px] box-border leading-[24.9393px] z-[2147483647] md:text-[15.5627px] md:leading-[23.344px]"></div>
    </div>
  );
}

export default App;
