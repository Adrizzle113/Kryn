import React from 'react';
import { NavigationItem, FeaturedContent, RecentContent } from '../../data/navigationData';

interface DropdownMenuProps {
  isOpen: boolean;
  className: string;
  items: NavigationItem[];
  featuredContent?: FeaturedContent;
  recentContent?: RecentContent[];
}

export function DropdownMenu({ isOpen, className, items, featuredContent, recentContent }: DropdownMenuProps) {
  if (!isOpen) return null;

  return (
    <nav className={className}>
      <div className="text-[15.3473px] font-medium content-start items-start bg-transparent border-b-gray-200 border-l-gray-200 border-r-gray-200 border-t-gray-200 shadow-none box-border gap-x-[30.6946px] basis-[0%] flex-col grow auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] leading-[24.9393px] min-w-0 gap-y-[23.0209px] w-full px-0 py-[15.3473px] rounded-none border-b-0 border-x-0 border-t md:text-[13.8335px] md:font-normal md:[align-items:normal] md:bg-white md:border-t-gray-200 md:shadow-[rgb(229,229,234)_0px_0px_0px_1px_inset,rgba(20,15,35,0.04)_0px_30px_50px_0px] md:gap-x-[27.667px] md:flex-row md:grid-cols-[1fr_1fr] md:leading-[20.7503px] md:min-w-[337.192px] md:gap-y-0 md:w-auto md:p-[27.667px] md:rounded-[27.667px] md:border-b md:border-l md:border-r">
        <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px]">
          <div className="text-[15.3473px] font-medium box-border gap-x-0 grid auto-cols-[1fr] auto-rows-max grid-cols-[1fr] grid-rows-[max-content] leading-[24.9393px] gap-y-[7.67364px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:gap-y-[13.8335px]">
            {items.map((item) => (
              <a key={item.id} href={item.href} className="text-[15.3473px] font-medium items-center box-border gap-x-[11.5105px] flex auto-cols-[1fr] grid-cols-[max-content_1fr] grid-rows-[auto] justify-start leading-[24.9393px] max-w-full gap-y-0 py-[3.83682px] md:text-[13.8335px] md:font-normal md:gap-x-[10.3751px] md:leading-[20.7503px] md:py-[3.45838px]">
                <div className="text-[15.3473px] font-medium bg-indigo-50 box-border shrink-0 leading-[24.9393px] p-[6.71444px] rounded-[7.67364px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:p-[6.05216px] md:rounded-[6.91675px]">
                  <div className="text-[15.3473px] font-medium items-center box-border flex flex-col h-[24.9393px] justify-center leading-[24.9393px] w-[24.9393px] md:text-[13.8335px] md:font-normal md:h-[22.4794px] md:leading-[20.7503px] md:w-[22.4794px] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:font-normal before:md:leading-[20.7503px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:font-normal after:md:leading-[20.7503px]">
                    <img src={item.icon} alt="Icon" className="text-[15.3473px] font-medium box-border h-[26px] leading-[24.9393px] w-[26px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px]" />
                  </div>
                </div>
                <div className="text-[15.3473px] font-medium items-start box-border gap-x-[1.91841px] flex flex-col justify-center leading-[24.9393px] gap-y-[1.91841px] md:text-[13.8335px] md:font-normal md:gap-x-[1.72919px] md:leading-[20.7503px] md:gap-y-[1.72919px]">
                  <div className="text-[15.3473px] font-medium box-border tracking-[-0.32px] leading-[23.0209px] md:text-[13.8335px] md:leading-[20.7503px]">{item.title}</div>
                  {item.description && <p className="text-zinc-500 text-[15.3473px] font-medium box-border tracking-[-0.32px] leading-[23.0209px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px]">{item.description}</p>}
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {featuredContent && (
          <div className="text-[15.3473px] font-medium border-b-gray-900 border-l-gray-200 border-r-gray-200 border-t-gray-900 box-border hidden leading-[24.9393px] px-0 border-x-0 md:text-[13.8335px] md:font-normal md:block md:leading-[20.7503px] md:px-[27.667px] md:border-l md:border-r">
            <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] mb-[19.1841px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:mb-[20.7503px]">
              <div className="text-zinc-500 text-[15.3473px] font-medium box-border tracking-[-0.32px] leading-[23.0209px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px]">{featuredContent.title}</div>
            </div>
            <div className="text-[15.3473px] font-medium box-border gap-x-0 auto-cols-[1fr] auto-rows-max grid-cols-[1fr] grid-rows-[max-content] leading-[24.9393px] gap-y-[7.67364px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:gap-y-[13.8335px]">
              <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px]">
                <div role="list" className="text-[15.3473px] font-medium box-border leading-[24.9393px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px]">
                  <div role="listitem" className="text-[15.3473px] font-medium box-border leading-[24.9393px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px]">
                    <a href={featuredContent.href} className="text-[15.3473px] font-medium box-border gap-x-[19.1841px] flex flex-col leading-[24.9393px] max-w-full gap-y-[19.1841px] md:text-[13.8335px] md:font-normal md:gap-x-[17.2919px] md:leading-[20.7503px] md:gap-y-[17.2919px]">
                      <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px]">
                        <img src={featuredContent.image} alt="" sizes="100vw" className="text-[15.3473px] font-medium aspect-[2.67_/_2.26] box-border inline-block leading-[24.9393px] max-w-full object-cover w-full rounded-[15.3473px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:rounded-[13.8335px]" />
                      </div>
                      <div className="text-[15.3473px] font-medium box-border tracking-[-0.32px] leading-[23.0209px] md:text-[13.8335px] md:leading-[20.7503px]">{featuredContent.description}</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {recentContent && (
          <div className="text-[15.3473px] font-medium box-border hidden leading-[24.9393px] pl-0 md:text-[13.8335px] md:font-normal md:block md:leading-[20.7503px] md:pl-[27.667px]">
            <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] mb-[19.1841px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:mb-[20.7503px]">
              <div className="text-zinc-500 text-[15.3473px] font-medium box-border tracking-[-0.32px] leading-[23.0209px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px]">Recent Case Studies</div>
            </div>
            <div className="text-[15.3473px] font-medium box-border gap-x-0 auto-cols-[1fr] auto-rows-max grid-cols-[1fr] grid-rows-[max-content] leading-[24.9393px] gap-y-[7.67364px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:gap-y-[13.8335px]">
              <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px]">
                <div role="list" className="text-[15.3473px] font-medium box-border leading-[24.9393px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px]">
                  {recentContent.map((item, index) => (
                    <div key={item.id} role="listitem" className={index === 0 ? "text-[15.3473px] font-medium border-b-gray-200 border-l-gray-900 border-r-gray-900 border-t-gray-900 box-border leading-[24.9393px] border-b md:text-[13.8335px] md:font-normal md:leading-[20.7503px]" : index === recentContent.length - 1 ? "text-[15.3473px] font-medium box-border leading-[24.9393px] pt-[21.1025px] md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:pt-[19.0211px]" : "text-[15.3473px] font-medium border-b-gray-200 border-l-gray-900 border-r-gray-900 border-t-gray-900 box-border leading-[24.9393px] pt-[21.1025px] border-b md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:pt-[19.0211px]"}>
                      <a href={item.href} className="text-[15.3473px] font-medium box-border gap-x-[19.1841px] flex flex-col leading-[24.9393px] max-w-full gap-y-[19.1841px] pb-[21.1025px] md:text-[13.8335px] md:font-normal md:gap-x-[17.2919px] md:leading-[20.7503px] md:gap-y-[17.2919px] md:pb-[19.0211px]">
                        <div className="text-[15.3473px] font-medium box-border tracking-[-0.32px] leading-[23.0209px] md:text-[13.8335px] md:leading-[20.7503px]">{item.title}</div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[15.3473px] font-medium border-b-gray-200 border-l-gray-900 border-r-gray-900 border-t-gray-200 box-border leading-[24.9393px] pt-[21.1025px] border-t md:text-[13.8335px] md:font-normal md:leading-[20.7503px] md:pt-[19.0211px]">
                <a href="/case-studies" className="text-[15.3473px] font-medium box-border inline-block leading-[24.9393px] max-w-full md:text-[13.8335px] md:font-normal md:leading-[20.7503px]">
                  <div className="text-[15.3473px] font-medium items-center box-border gap-x-[7.67364px] flex justify-start leading-[24.9393px] gap-y-[7.67364px] md:text-[13.8335px] md:gap-x-[6.91675px] md:leading-[20.7503px] md:gap-y-[6.91675px]">
                    <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[13.8335px] md:leading-[20.7503px]">View more</div>
                    <div className="text-[15.3473px] items-center box-border flex justify-start leading-[24.9393px] md:text-[13.8335px] md:leading-[20.7503px] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:leading-[20.7503px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:leading-[20.7503px]">
                      <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-15.svg" alt="Icon" className="text-[15.3473px] box-border h-[18px] leading-[24.9393px] w-[18px] md:text-[13.8335px] md:leading-[20.7503px]" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
