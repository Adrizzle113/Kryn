import React, { useState } from 'react';
import { navigationData } from '../../data/navigationData';
import { DropdownMenu } from '../ui/DropdownMenu';

export function NavigationMenu() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (menuId: string) => {
    setActiveDropdown(activeDropdown === menuId ? null : menuId);
  };

  return (
    <nav role="navigation" className="absolute text-[15.3473px] items-center bg-white shadow-[rgb(229,229,234)_0px_0px_0px_1px] box-border gap-x-[30.6946px] hidden float-none leading-[24.9393px] min-h-0 min-w-0 gap-y-[30.6946px] border-gray-200 overflow-auto pt-[46.0418px] pb-[23.0209px] px-[23.0209px] rounded-b-[23.0209px] border-b border-l border-r md:static md:text-[13.8335px] md:bg-transparent md:shadow-none md:gap-x-[27.667px] md:flex md:float-right md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[27.667px] md:border-gray-900 md:overflow-visible md:p-0 md:rounded-b-none md:border-b-0 md:border-x-0">
      <div className="text-[15.3473px] box-border leading-[24.9393px] min-h-0 min-w-0 md:text-[13.8335px] md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto]">
        <div className="text-[15.3473px] bg-gray-200 box-border block h-px leading-[24.9393px] w-full md:text-[13.8335px] md:hidden md:leading-[20.7503px]"></div>
        
        {/* Services Dropdown */}
        <div className="relative text-[15.3473px] font-medium box-border inline-block leading-[24.9393px] text-left w-full z-0 mx-auto md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:w-auto">
          <div 
            role="button" 
            className="relative text-[15.3473px] font-medium items-center box-border gap-x-[7.67364px] flex justify-between leading-[24.9393px] text-nowrap align-top mx-auto pl-0 pr-[15.3473px] py-[19.1841px] md:text-[13.8335px] md:font-normal md:gap-x-[6.91675px] md:justify-normal md:leading-[20.7503px] md:px-[13.8335px] md:py-[6.91675px]"
            onClick={() => handleDropdownToggle('services')}
          >
            <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] min-h-0 min-w-0 text-nowrap md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto]">Services</div>
            <div className="text-[15.3473px] font-medium box-border block leading-[24.9393px] text-nowrap md:text-[13.8335px] md:font-normal md:hidden md:leading-[20.7503px]">
              <div className="text-[15.3473px] font-medium items-center box-border flex flex-col h-[23.0209px] justify-center leading-[24.9393px] text-nowrap w-[23.0209px] right-[0%] md:text-[13.8335px] md:font-normal md:h-[20.7503px] md:leading-[20.7503px] md:w-[20.7503px] md:right-auto before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:font-normal before:md:leading-[20.7503px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:font-normal after:md:leading-[20.7503px]">
                <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-1.svg" alt="Icon" className="text-[15.3473px] font-medium box-border h-[25px] leading-[24.9393px] text-nowrap w-6 md:text-[13.8335px] md:font-normal md:leading-[20.7503px]" />
              </div>
            </div>
          </div>
          <DropdownMenu 
            isOpen={activeDropdown === 'services'}
            className="static text-[15.3473px] font-medium bg-zinc-300 box-border hidden h-0 leading-[24.9393px] min-w-full opacity-100 overflow-hidden md:absolute md:text-[13.8335px] md:font-normal md:h-auto md:leading-[20.7503px] md:opacity-0 md:overflow-visible"
            items={navigationData.services}
            featuredContent={navigationData.servicesFeatured}
            recentContent={navigationData.servicesRecent}
          />
        </div>

        <div className="text-[15.3473px] bg-gray-200 box-border block h-px leading-[24.9393px] w-full md:text-[13.8335px] md:hidden md:leading-[20.7503px]"></div>

        {/* Customers Dropdown */}
        <div className="relative text-[15.3473px] font-medium box-border inline-block leading-[24.9393px] text-left w-full z-[900] mx-auto md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:w-auto">
          <div 
            role="button" 
            className="relative text-[15.3473px] font-medium items-center box-border gap-x-[7.67364px] flex justify-between leading-[24.9393px] text-nowrap align-top mx-auto pl-0 pr-[15.3473px] py-[19.1841px] md:text-[13.8335px] md:font-normal md:gap-x-[6.91675px] md:justify-normal md:leading-[20.7503px] md:px-[13.8335px] md:py-[6.91675px]"
            onClick={() => handleDropdownToggle('customers')}
          >
            <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] min-h-0 min-w-0 text-nowrap md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto]">Customers</div>
            <div className="text-[15.3473px] font-medium box-border block leading-[24.9393px] text-nowrap md:text-[13.8335px] md:font-normal md:hidden md:leading-[20.7503px]">
              <div className="text-[15.3473px] font-medium items-center box-border flex flex-col h-[23.0209px] justify-center leading-[24.9393px] text-nowrap w-[23.0209px] right-[0%] md:text-[13.8335px] md:font-normal md:h-[20.7503px] md:leading-[20.7503px] md:w-[20.7503px] md:right-auto before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:font-normal before:md:leading-[20.7503px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:font-normal after:md:leading-[20.7503px]">
                <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-1.svg" alt="Icon" className="text-[15.3473px] font-medium box-border h-[25px] leading-[24.9393px] text-nowrap w-6 md:text-[13.8335px] md:font-normal md:leading-[20.7503px]" />
              </div>
            </div>
          </div>
          <DropdownMenu 
            isOpen={activeDropdown === 'customers'}
            className="static text-[15.3473px] font-medium bg-zinc-300 box-border hidden leading-[24.9393px] min-w-full overflow-hidden md:absolute md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:overflow-visible"
            items={navigationData.customers}
            featuredContent={navigationData.customersFeatured}
            recentContent={navigationData.customersRecent}
          />
        </div>

        <div className="text-[15.3473px] bg-gray-200 box-border block h-px leading-[24.9393px] w-full md:text-[13.8335px] md:hidden md:leading-[20.7503px]"></div>
        <a href="/work-examples" className="relative text-[15.3473px] font-medium box-border inline-block leading-[24.9393px] text-left align-top mx-auto px-0 py-[19.1841px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:px-[13.8335px] md:py-[6.91675px]">Our Work</a>
        <div className="text-[15.3473px] bg-gray-200 box-border block h-px leading-[24.9393px] w-full md:text-[13.8335px] md:hidden md:leading-[20.7503px]"></div>
        <a href="/pricing" className="relative text-[15.3473px] font-medium box-border inline-block leading-[24.9393px] text-left align-top mx-auto px-0 py-[19.1841px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:px-[13.8335px] md:py-[6.91675px]">Pricing</a>
        <div className="text-[15.3473px] bg-gray-200 box-border block h-px leading-[24.9393px] w-full md:text-[13.8335px] md:hidden md:leading-[20.7503px]"></div>

        {/* Resources Dropdown */}
        <div className="relative text-[15.3473px] font-medium box-border inline-block leading-[24.9393px] text-left w-full z-[900] mx-auto md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:w-auto">
          <div 
            role="button" 
            className="relative text-[15.3473px] font-medium items-center box-border gap-x-[7.67364px] flex justify-between leading-[24.9393px] text-nowrap align-top mx-auto pl-0 pr-[15.3473px] py-[19.1841px] md:text-[13.8335px] md:font-normal md:gap-x-[6.91675px] md:justify-normal md:leading-[20.7503px] md:px-[13.8335px] md:py-[6.91675px]"
            onClick={() => handleDropdownToggle('resources')}
          >
            <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] min-h-0 min-w-0 text-nowrap md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto]">Resources</div>
            <div className="text-[15.3473px] font-medium box-border block leading-[24.9393px] text-nowrap md:text-[13.8335px] md:font-normal md:hidden md:leading-[20.7503px]">
              <div className="text-[15.3473px] font-medium items-center box-border flex flex-col h-[23.0209px] justify-center leading-[24.9393px] text-nowrap w-[23.0209px] right-[0%] md:text-[13.8335px] md:font-normal md:h-[20.7503px] md:leading-[20.7503px] md:w-[20.7503px] md:right-auto before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:font-normal before:md:leading-[20.7503px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:font-normal after:md:leading-[20.7503px]">
                <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-1.svg" alt="Icon" className="text-[15.3473px] font-medium box-border h-[25px] leading-[24.9393px] text-nowrap w-6 md:text-[13.8335px] md:font-normal md:leading-[20.7503px]" />
              </div>
            </div>
          </div>
          <DropdownMenu 
            isOpen={activeDropdown === 'resources'}
            className="static text-[15.3473px] font-medium bg-zinc-300 box-border hidden leading-[24.9393px] min-w-full overflow-hidden md:absolute md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:overflow-visible"
            items={navigationData.resources}
            featuredContent={navigationData.resourcesFeatured}
            recentContent={navigationData.resourcesRecent}
          />
        </div>

        <div className="text-[15.3473px] bg-gray-200 box-border block h-px leading-[24.9393px] w-full md:text-[13.8335px] md:hidden md:leading-[20.7503px]"></div>

        {/* Company Dropdown */}
        <div className="relative text-[15.3473px] font-medium box-border inline-block leading-[24.9393px] text-left w-full z-0 mx-auto md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:w-auto">
          <div 
            role="button" 
            className="relative text-[15.3473px] font-medium items-center box-border gap-x-[7.67364px] flex justify-between leading-[24.9393px] text-nowrap align-top mx-auto pl-0 pr-[15.3473px] py-[19.1841px] md:text-[13.8335px] md:font-normal md:gap-x-[6.91675px] md:justify-normal md:leading-[20.7503px] md:px-[13.8335px] md:py-[6.91675px]"
            onClick={() => handleDropdownToggle('company')}
          >
            <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] min-h-0 min-w-0 text-nowrap md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto]">Company</div>
            <div className="text-[15.3473px] font-medium box-border block leading-[24.9393px] text-nowrap md:text-[13.8335px] md:font-normal md:hidden md:leading-[20.7503px]">
              <div className="text-[15.3473px] font-medium items-center box-border flex flex-col h-[23.0209px] justify-center leading-[24.9393px] text-nowrap w-[23.0209px] right-[0%] md:text-[13.8335px] md:font-normal md:h-[20.7503px] md:leading-[20.7503px] md:w-[20.7503px] md:right-auto before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:font-normal before:md:leading-[20.7503px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:font-normal after:md:leading-[20.7503px]">
                <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-1.svg" alt="Icon" className="text-[15.3473px] font-medium box-border h-[25px] leading-[24.9393px] text-nowrap w-6 md:text-[13.8335px] md:font-normal md:leading-[20.7503px]" />
              </div>
            </div>
          </div>
          <DropdownMenu 
            isOpen={activeDropdown === 'company'}
            className="static text-[15.3473px] font-medium bg-zinc-300 box-border hidden h-0 leading-[24.9393px] min-w-full opacity-100 overflow-hidden md:absolute md:text-[13.8335px] md:font-normal md:h-auto md:leading-[20.7503px] md:opacity-0 md:overflow-visible"
            items={navigationData.company}
          />
        </div>

        <div className="text-[15.3473px] bg-gray-200 box-border block h-px leading-[24.9393px] w-full md:text-[13.8335px] md:hidden md:leading-[20.7503px]"></div>
      </div>
    </nav>
  );
}
