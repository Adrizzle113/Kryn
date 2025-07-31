import React, { useState } from 'react';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div role="button" className="relative text-[15.3473px] font-medium items-center box-border gap-x-[3.83682px] flex justify-start tracking-[-0.32px] leading-[24.9393px] gap-y-[3.83682px] text-nowrap align-top mx-auto p-[7.67364px] md:text-[13.8335px] md:gap-x-[3.45838px] md:leading-[20.7503px] md:gap-y-[3.45838px] md:p-[6.91675px]" onClick={() => setIsOpen(!isOpen)}>
      <div className="text-[15.3473px] items-start box-border flex justify-start leading-[24.9393px] min-h-0 min-w-0 text-nowrap md:text-[13.8335px] md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.32px] before:leading-[24.9393px] before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:leading-[20.7503px] before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.32px] after:leading-[24.9393px] after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:text-left after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:leading-[20.7503px] after:md:min-h-[auto] after:md:min-w-[auto]">
        <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-19.svg" alt="Icon" className="text-[15.3473px] box-border h-5 leading-[24.9393px] text-nowrap w-5 md:text-[13.8335px] md:leading-[20.7503px]" />
      </div>
      <div className="text-[15.3473px] box-border leading-[24.9393px] min-h-0 min-w-0 uppercase text-nowrap md:text-[13.8335px] md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto]">en</div>
      <div className="text-[15.3473px] items-start box-border flex justify-start leading-[24.9393px] min-h-0 min-w-0 text-nowrap md:text-[13.8335px] md:leading-[20.7503px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.32px] before:leading-[24.9393px] before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:leading-[20.7503px] before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.32px] after:leading-[24.9393px] after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:text-left after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:leading-[20.7503px] after:md:min-h-[auto] after:md:min-w-[auto]">
        <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-20.svg" alt="Icon" className="text-[15.3473px] box-border h-[18px] leading-[24.9393px] text-nowrap w-[18px] md:text-[13.8335px] md:leading-[20.7503px]" />
      </div>
      {isOpen && (
        <nav className="absolute text-[15.3473px] bg-zinc-300 box-border hidden leading-[24.9393px] min-w-full z-[2] md:text-[13.8335px] md:leading-[20.7503px]">
          <div role="list" className="text-[15.3473px] bg-white shadow-[rgb(229,229,234)_0px_0px_0px_1px_inset,rgba(20,15,35,0.04)_0px_30px_50px_0px] box-border leading-[24.9393px] w-full border border-gray-200 pt-[15.3473px] pb-[11.5105px] px-[15.3473px] rounded-[23.0209px] border-solid md:text-[13.8335px] md:leading-[20.7503px] md:pt-[13.8335px] md:pb-[10.3751px] md:px-[13.8335px] md:rounded-[20.7503px]">
            <div role="listitem" className="text-[15.3473px] box-border leading-[24.9393px] md:text-[13.8335px] md:leading-[20.7503px]">
              <a href="/pricing" className="text-violet-700 text-[15.3473px] bg-[url('https://cdn.prod.website-files.com/6756af8bdb09e2801688ef7d/675969474d63ac7f778c8c6a_tick-circle.svg')] bg-no-repeat box-border block leading-[24.9393px] w-full bg-[position:95%_50%] mb-[3.83682px] px-[13.4289px] py-[7.67364px] md:text-[13.8335px] md:leading-[20.7503px] md:mb-[3.45838px] md:px-[12.1043px] md:py-[6.91675px]">English</a>
            </div>
            <div role="listitem" className="text-[15.3473px] box-border leading-[24.9393px] md:text-[13.8335px] md:leading-[20.7503px]">
              <a href="/de/preise" className="text-[15.3473px] box-border block leading-[24.9393px] w-full bg-[position:0px_0px] px-[13.4289px] py-[7.67364px] md:text-[13.8335px] md:leading-[20.7503px] md:px-[12.1043px] md:py-[6.91675px]">German</a>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
