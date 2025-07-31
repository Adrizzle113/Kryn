import React from 'react';
import { pricingPlans } from '../../data/pricingData';
import { PricingCard } from '../ui/PricingCard';

export function HeroSection() {
  return (
    <header className="text-[15.3473px] box-border leading-[24.9393px] overflow-hidden md:text-[15.5627px] md:leading-[23.344px]">
      <div className="text-[15.3473px] box-border leading-[24.9393px] px-[7.67364px] md:text-[15.5627px] md:leading-[23.344px] md:px-[34.5838px]">
        <div className="relative text-[15.3473px] bg-white shadow-[rgb(229,229,234)_0px_0px_0px_1px_inset] box-border leading-[24.9393px] max-w-[1534.73px] border border-gray-200 overflow-hidden mx-auto px-[23.0209px] rounded-[40.2866px] border-solid md:text-[15.5627px] md:leading-[23.344px] md:max-w-[1383.35px] md:px-[34.5838px] md:rounded-[36.313px]">
          <div className="text-[15.3473px] box-border leading-[24.9393px] max-w-[1151.05px] w-full mx-auto md:text-[15.5627px] md:leading-[23.344px] md:max-w-[1037.51px]">
            <div className="text-[15.3473px] box-border leading-[24.9393px] py-[38.3682px] md:text-[15.5627px] md:leading-[23.344px] md:py-[96.8345px]">
              <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
                <div className="text-[15.3473px] box-border leading-[24.9393px] text-center md:text-[15.5627px] md:leading-[23.344px]">
                  <div className="text-[15.3473px] box-border leading-[24.9393px] max-w-[1005.25px] w-full mx-auto md:text-[15.5627px] md:leading-[23.344px] md:max-w-[906.095px]">
                    <div className="text-[15.3473px] box-border leading-[24.9393px] mb-[23.0209px] md:text-[15.5627px] md:leading-[23.344px] md:mb-[27.667px]">
                      <h1 className="text-[36.4498px] font-semibold box-border tracking-[-1.52px] leading-[40.0948px] font-alliance md:text-[69.1675px] md:tracking-[-3.2px] md:leading-[76.0843px]">
                        One subscription for all <span className="text-[36.4498px] bg-[url('https://cdn.prod.website-files.com/6756af8bdb09e2801688ef7d/6772a58af87d0b4bbbd80ad7_Webflow%20Design%20svg%20mobile.svg')] bg-no-repeat box-border tracking-[-1.52px] leading-[40.0948px] bg-right pr-[101.292px] py-1.5 md:text-[69.1675px] md:bg-[url('https://cdn.prod.website-files.com/6756af8bdb09e2801688ef7d/6764279bb2aaf804962bbd9b_header%20icon.svg')] md:tracking-[-3.2px] md:leading-[76.0843px] md:pr-[172.919px] md:py-0">your</span> creative needs
                      </h1>
                    </div>
                    <p className="text-zinc-500 text-[17.2657px] box-border tracking-[-0.32px] leading-[25.8985px] md:text-[15.5627px] md:tracking-[-0.36px] md:leading-[23.344px]">
                      Extend your team with our top designers and webflow developers - today, not in months!
                    </p>
                  </div>
                </div>
                <div className="text-[15.3473px] box-border gap-x-[15.3473px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] leading-[24.9393px] gap-y-[15.3473px] mt-[38.3682px] md:text-[15.5627px] md:gap-x-[13.8335px] md:grid-cols-[1fr_1fr_1fr] md:leading-[23.344px] md:gap-y-[13.8335px] md:mt-[69.1675px]">
                  {pricingPlans.map((plan) => (
                    <PricingCard key={plan.id} plan={plan} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
