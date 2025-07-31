import React from 'react';
import { LanguageSelector } from '../ui/LanguageSelector';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="text-[15.3473px] items-center box-border flex justify-start leading-[24.9393px] min-h-[auto] min-w-[auto] md:text-[13.8335px] md:[align-items:normal] md:hidden md:justify-normal md:leading-[20.7503px] md:min-h-0 md:min-w-0">
      <div className="text-[15.3473px] box-border flex leading-[24.9393px] min-h-[auto] min-w-[auto] mr-[9.59205px] md:text-[13.8335px] md:hidden md:leading-[20.7503px] md:min-h-0 md:min-w-0 md:mr-[6.91675px]">
        <div className="relative text-[15.3473px] box-border block leading-[24.9393px] min-h-[auto] min-w-[auto] text-left mx-auto md:text-[13.8335px] md:inline-block md:leading-[20.7503px] md:min-h-0 md:min-w-0">
          <LanguageSelector />
        </div>
      </div>
      <div aria-label="menu" role="button" className="relative text-2xl box-border block float-right leading-[24.9393px] min-h-[auto] min-w-[auto] md:hidden md:leading-9 md:min-h-0 md:min-w-0" onClick={onToggle}>
        <div className="items-center box-border flex flex-col h-[38.3682px] justify-center leading-[24.9393px] w-[38.3682px] border border-gray-200 rounded-[7.67364px] border-solid md:[align-items:normal] md:block md:flex-row md:h-auto md:justify-normal md:leading-9 md:w-auto md:border-gray-900 md:rounded-none md:border-0 md:border-none">
          <div className="bg-gray-900 box-border h-[1.5px] leading-[24.9393px] min-h-[auto] min-w-[auto] w-[17.2657px] rounded-[11.5105px] md:bg-transparent md:h-auto md:leading-9 md:min-h-0 md:min-w-0 md:w-auto md:rounded-none"></div>
          <div className="items-center bg-gray-900 box-border flex h-[1.5px] justify-center leading-[24.9393px] min-h-[auto] min-w-[auto] w-[17.2657px] my-1 rounded-[11.5105px] md:[align-items:normal] md:bg-transparent md:block md:h-auto md:justify-normal md:leading-9 md:min-h-0 md:min-w-0 md:w-auto md:my-0 md:rounded-none">
            <div className="box-border h-0 leading-[24.9393px] min-h-[auto] min-w-[auto] w-1 md:h-auto md:leading-9 md:min-h-0 md:min-w-0 md:w-auto"></div>
          </div>
          <div className="bg-gray-900 box-border h-[1.5px] leading-[24.9393px] min-h-[auto] min-w-[auto] w-[17.2657px] rounded-[11.5105px] md:bg-transparent md:h-auto md:leading-9 md:min-h-0 md:min-w-0 md:w-auto md:rounded-none"></div>
        </div>
      </div>
    </div>
  );
}
