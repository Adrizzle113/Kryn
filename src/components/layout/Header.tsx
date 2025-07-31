import React, { useState } from 'react';
import { NavigationMenu } from './NavigationMenu';
import { MobileMenu } from './MobileMenu';
import { LanguageSelector } from '../ui/LanguageSelector';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky text-[15.3473px] box-border leading-[24.9393px] min-h-[84.41px] z-[500] p-[7.67364px] top-0 md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:px-[34.5838px] md:py-[13.8335px]">
      <div role="banner" className="relative text-[15.3473px] items-center bg-white shadow-[rgb(229,229,234)_0px_0px_0px_1px_inset] box-border flex leading-[24.9393px] max-w-[1534.73px] min-h-[61.3891px] w-full z-[1000] border border-gray-200 mx-auto px-[23.0209px] py-[19.1841px] rounded-[23.0209px] border-solid md:text-[13.8335px] md:leading-[20.7503px] md:max-w-[1383.35px] md:min-h-[93.3762px] md:px-[34.5838px] md:py-0 md:rounded-[27.667px] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:leading-[20.7503px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:leading-[20.7503px]">
        <div className="static text-[15.3473px] items-center bg-white box-border flex h-full justify-between leading-[24.9393px] max-w-[1534.73px] w-full z-[1] mx-auto md:relative md:text-[13.8335px] md:leading-[20.7503px] md:max-w-[1383.35px]">
          <a href="/?r=0" className="relative text-zinc-800 text-[15.3473px] box-border block float-left leading-[24.9393px] md:text-[13.8335px] md:leading-[20.7503px]">
            <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/67586ecbf957bd6537a6ad14_logo.svg" alt="" className="text-[15.3473px] box-border inline-block leading-[24.9393px] max-h-[32.613px] max-w-full md:text-[13.8335px] md:leading-[20.7503px] md:max-h-none" />
          </a>
          <NavigationMenu />
          <div className="text-[15.3473px] items-stretch box-border gap-x-[7.67364px] flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] leading-[24.9393px] min-h-0 min-w-0 gap-y-[7.67364px] ml-0 mt-[38.3682px] md:text-[13.8335px] md:items-center md:gap-x-[6.91675px] md:flex-row md:grid-cols-[1fr_1fr] md:grid-rows-[auto] md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[6.91675px] md:ml-[13.8335px] md:mt-0">
            <div className="text-[15.3473px] box-border hidden leading-[24.9393px] min-h-0 min-w-0 mr-[7.67364px] md:text-[13.8335px] md:flex md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto] md:mr-[6.91675px]">
              <div className="relative text-[15.3473px] box-border inline-block leading-[24.9393px] min-h-0 min-w-0 text-left mx-auto md:text-[13.8335px] md:block md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto]">
                <LanguageSelector />
              </div>
            </div>
            <a href="https://app.magier.com/login" className="text-[15.3473px] font-medium bg-white box-border block tracking-[-0.32px] leading-[23.9418px] min-h-0 min-w-0 text-center border border-gray-200 px-[23.0209px] py-[13.9085px] rounded-[95.9205px] border-solid md:text-[13.8335px] md:leading-[21.5803px] md:min-h-[auto] md:min-w-[auto] md:px-[20.7503px] md:py-[12.5366px] md:rounded-[86.4594px]">Sign in</a>
            <a href="/book-demo" className="text-white text-[15.3473px] font-medium bg-gray-900 box-border block tracking-[-0.32px] leading-[23.9418px] min-h-0 min-w-0 text-center border border-gray-900 px-[23.0209px] py-[13.9085px] rounded-[95.9205px] border-solid md:text-[13.8335px] md:leading-[21.5803px] md:min-h-[auto] md:min-w-[auto] md:px-[20.7503px] md:py-[12.5366px] md:rounded-[86.4594px]">Book a demo</a>
          </div>
        </div>
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <div className="fixed text-[15.3473px] box-border leading-[24.9393px] md:text-[13.8335px] md:leading-[20.7503px] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:leading-[20.7503px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:leading-[20.7503px]"></div>
        <div className="absolute text-[15.3473px] box-border hidden leading-[24.9393px] w-full overflow-hidden top-[34.5314px] inset-x-0 md:text-[13.8335px] md:leading-[20.7503px] md:top-full"></div>
      </div>
    </div>
  );
}
