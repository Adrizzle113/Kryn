import React, { useState } from 'react';
import { comparisonData } from '../../data/comparisonData';

export function ComparisonSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative text-[15.3473px] box-border leading-[24.9393px] overflow-hidden md:text-[15.5627px] md:leading-[23.344px]">
      <div className="relative text-[15.3473px] box-border leading-[24.9393px] z-[2] px-[19.1841px] md:text-[15.5627px] md:leading-[23.344px] md:px-[34.5838px]">
        <div className="relative text-[15.3473px] bg-white shadow-[rgb(229,229,234)_0px_0px_0px_1px_inset] box-border leading-[24.9393px] max-w-[1534.73px] overflow-hidden mx-auto px-0 rounded-[40.2866px] md:text-[15.5627px] md:leading-[23.344px] md:max-w-[1383.35px] md:px-[34.5838px] md:rounded-[36.313px]">
          <div className="text-[15.3473px] box-border leading-[24.9393px] max-w-[1151.05px] w-full mx-auto md:text-[15.5627px] md:leading-[23.344px] md:max-w-[1037.51px]">
            <div className="text-[15.3473px] box-border leading-[24.9393px] py-[61.3891px] md:text-[15.5627px] md:leading-[23.344px] md:py-[96.8345px]">
              <div className="text-[15.3473px] box-border gap-x-[38.3682px] flex-col leading-[24.9393px] gap-y-[38.3682px] mr-0.5 md:text-[15.5627px] md:gap-x-[69.1675px] md:leading-[23.344px] md:gap-y-[69.1675px] md:mr-0">
                <div className="text-[15.3473px] box-border gap-x-[38.3682px] flex flex-col leading-[24.9393px] gap-y-[38.3682px] md:text-[15.5627px] md:gap-x-[69.1675px] md:leading-[23.344px] md:gap-y-[69.1675px]">
                  <div className="text-[15.3473px] box-border leading-[24.9393px] max-w-[736.669px] w-full mx-auto md:text-[15.5627px] md:leading-[23.344px] md:max-w-[664.008px]">
                    <div className="text-[15.3473px] items-center box-border flex flex-col justify-start leading-[24.9393px] max-w-[623.1px] text-center mx-auto px-[19.1841px] md:text-[15.5627px] md:leading-[23.344px] md:max-w-[561.64px] md:px-0">
                      <div className="text-[15.3473px] box-border leading-[24.9393px] mb-[11.5105px] md:text-[15.5627px] md:leading-[23.344px] md:mb-[13.8335px]">
                        <div className="text-violet-700 text-[15.3473px] font-medium items-center box-border inline-flex h-[30.6946px] justify-center tracking-[-0.32px] leading-[15.3473px] border border-indigo-200 px-[15.3473px] py-[9.59205px] rounded-[40.2866px] border-solid md:text-[13.8335px] md:h-[27.667px] md:leading-[13.8335px] md:px-[13.8335px] md:py-[8.64594px] md:rounded-[36.313px]">Comparison</div>
                      </div>
                      <h2 className="text-[32.613px] font-semibold box-border tracking-[-1.36px] leading-[35.8743px] font-alliance md:text-[57.0632px] md:tracking-[-2.64px] md:leading-[62.7695px]">
                        What <span className="text-[32.613px] box-border tracking-[-1.36px] leading-[35.8743px] md:text-[57.0632px] md:tracking-[-2.64px] md:leading-[62.7695px]">makes</span><span className="text-[32.613px] bg-[url('https://cdn.prod.website-files.com/6756af8bdb09e2801688ef7d/675c787ef4c551be90a7447c_icon%20Pricing%20mobile.svg')] bg-no-repeat box-border tracking-[-1.36px] leading-[35.8743px] bg-right pr-[38.3682px] md:text-[57.0632px] md:bg-[url('https://cdn.prod.website-files.com/6756af8bdb09e2801688ef7d/6759c3c3f93c52d98239dccb_icon%20sevices.svg')] md:tracking-[-2.64px] md:leading-[62.7695px] md:pr-[65.0175px]">magier</span> unique
                      </h2>
                    </div>
                  </div>
                  <div className="relative text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
                    {/* Desktop Comparison Table */}
                    <div className="text-[15.3473px] box-border gap-x-[7.67364px] hidden auto-cols-[1fr] grid-cols-[1fr_1.077fr] grid-rows-[auto] leading-[24.9393px] gap-y-[7.67364px] md:text-[15.5627px] md:gap-x-[6.91675px] md:grid md:leading-[23.344px] md:gap-y-[6.91675px]">
                      <div className="relative text-[15.3473px] box-border gap-x-[7.67364px] grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] leading-[24.9393px] min-h-0 min-w-0 gap-y-[7.67364px] md:static md:text-[15.5627px] md:gap-x-[6.91675px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[6.91675px]">
                        <div className="text-[15.3473px] bg-white box-border leading-[24.9393px] min-h-0 min-w-0 border border-gray-200 mt-[5.75523px] mb-[13.4289px] pt-[23.0209px] px-[15.3473px] rounded-[30.6946px] border-solid md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] md:my-[12.1043px] md:pt-[20.7503px] md:px-[20.7503px] md:rounded-[27.667px]">
                          <div className="text-[15.3473px] items-center box-border flex justify-center leading-[24.9393px] min-h-[53.7155px] text-center mb-[23.0209px] md:text-[15.5627px] md:leading-[23.344px] md:min-h-[48.4173px] md:mb-[20.7503px]"></div>
                          {comparisonData.criteria.map((criterion, index) => (
                            <div key={index} className="text-[15.3473px] items-center border-b-gray-900 border-l-gray-900 border-r-gray-900 border-t-gray-200 box-border flex justify-start leading-[24.9393px] min-h-[76.7364px] py-[3.83682px] border-t md:text-[15.5627px] md:leading-[23.344px] md:min-h-[69.1675px] md:py-[3.45838px]">
                              <div className="text-[15.3473px] items-center box-border gap-x-[5.75523px] flex justify-start leading-[24.9393px] min-h-0 min-w-0 gap-y-[5.75523px] md:text-[15.5627px] md:gap-x-[5.18756px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[5.18756px]">
                                <div className="text-[15.3473px] items-center box-border flex justify-start leading-[24.9393px] min-h-0 min-w-0 md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px] after:md:min-h-[auto] after:md:min-w-[auto]">
                                  <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-34.svg" alt="Icon" className="text-[15.3473px] box-border h-6 leading-[24.9393px] w-6 md:text-[15.5627px] md:leading-[23.344px]" />
                                </div>
                                <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] min-h-0 min-w-0 md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto]">{criterion}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="text-white text-[15.3473px] bg-violet-700 box-border leading-[24.9393px] min-h-0 min-w-0 border-indigo-400 pt-[17.2657px] px-[23.0209px] rounded-[40.2866px] border-[7px] border-solid md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] md:pt-[20.7503px] md:px-[20.7503px] md:rounded-[41.5005px] md:border-[12px]">
                          <div className="text-[15.3473px] items-center box-border flex justify-center leading-[24.9393px] min-h-[53.7155px] text-center mb-[23.0209px] md:text-[15.5627px] md:leading-[23.344px] md:min-h-[48.4173px] md:mb-[20.7503px]">
                            <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/675c00721373d82b41acf548_magier.svg" alt="" className="text-[15.3473px] box-border leading-[24.9393px] max-w-full min-h-0 min-w-0 md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto]" />
                          </div>
                          {comparisonData.magier.map((value, index) => (
                            <div key={index} className="text-[15.3473px] items-center border-t-indigo-400 box-border flex justify-center leading-[24.9393px] max-h-[76.7364px] min-h-[76.7364px] py-[3.83682px] border-b-white border-x-white border-t md:text-[15.5627px] md:leading-[23.344px] md:max-h-[69.1675px] md:min-h-[69.1675px] md:py-[3.45838px]">
                              {typeof value === 'string' ? (
                                <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] min-h-0 min-w-0 md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto]">{value}</div>
                              ) : (
                                <div className="text-[15.3473px] box-border flex leading-[24.9393px] min-h-0 min-w-0 md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:text-white before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:clear-both after:text-white after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px] after:md:min-h-[auto] after:md:min-w-[auto]">
                                  <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-35.svg" alt="Icon" className="text-[15.3473px] box-border h-6 leading-[24.9393px] w-6 md:text-[15.5627px] md:leading-[23.344px]" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-[15.3473px] box-border gap-x-[7.67364px] grid auto-cols-[1fr] grid-cols-[1fr_1fr_1fr] grid-rows-[auto] leading-[24.9393px] min-h-0 min-w-0 gap-y-[7.67364px] md:text-[15.5627px] md:gap-x-[6.91675px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[6.91675px]">
                        {comparisonData.competitors.map((competitor, compIndex) => (
                          <div key={compIndex} className="text-[15.3473px] bg-white box-border leading-[24.9393px] min-h-0 min-w-0 border border-gray-200 mt-[5.75523px] mb-[13.4289px] pt-[23.0209px] px-[15.3473px] rounded-[30.6946px] border-solid md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] md:my-[12.1043px] md:pt-[20.7503px] md:px-[20.7503px] md:rounded-[27.667px]">
                            <div className="text-[15.3473px] items-center box-border flex justify-center leading-[24.9393px] min-h-[53.7155px] text-center mb-[23.0209px] md:text-[15.5627px] md:leading-[23.344px] md:min-h-[48.4173px] md:mb-[20.7503px]">
                              <div className="text-[19.1841px] font-medium box-border tracking-[-0.36px] leading-[28.7762px] min-h-0 min-w-0 md:text-[20.7503px] md:tracking-[-0.96px] md:leading-[25.7303px] md:min-h-[auto] md:min-w-[auto]">{competitor.name}</div>
                            </div>
                            {competitor.values.map((value, index) => (
                              <div key={index} className="text-zinc-500 text-[15.3473px] items-center border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-gray-200 box-border flex justify-center leading-[24.9393px] min-h-[76.7364px] py-[3.83682px] border-t md:text-[15.5627px] md:leading-[23.344px] md:min-h-[69.1675px] md:py-[3.45838px]">
                                {typeof value === 'string' ? (
                                  <div className="text-[17.2657px] box-border tracking-[-0.32px] leading-[25.8985px] min-h-0 min-w-0 md:text-[15.5627px] md:tracking-[-0.36px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto]">{value}</div>
                                ) : value ? (
                                  <div className="text-[15.3473px] box-border flex leading-[24.9393px] min-h-0 min-w-0 md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:text-zinc-500 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:clear-both after:text-zinc-500 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px] after:md:min-h-[auto] after:md:min-w-[auto]">
                                    <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-36.svg" alt="Icon" className="text-[15.3473px] box-border h-6 leading-[24.9393px] w-[25px] md:text-[15.5627px] md:leading-[23.344px]" />
                                  </div>
                                ) : (
                                  <div className="text-[15.3473px] box-border flex leading-[24.9393px] min-h-0 min-w-0 md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:text-zinc-500 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:clear-both after:text-zinc-500 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px] after:md:min-h-[auto] after:md:min-w-[auto]">
                                    <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-37.svg" alt="Icon" className="text-[15.3473px] box-border h-6 leading-[24.9393px] w-[25px] md:text-[15.5627px] md:leading-[23.344px]" />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Tabs */}
                    <div className="text-[15.3473px] box-border block leading-[24.9393px] md:text-[15.5627px] md:hidden md:leading-[23.344px]">
                      <div className="relative text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]">
                        <div role="tablist" className="relative text-[15.3473px] box-border gap-x-[4.79603px] flex leading-[24.9393px] gap-y-[4.79603px] overflow-auto mb-[24.9393px] px-[19.1841px] md:text-[15.5627px] md:gap-x-[normal] md:block md:leading-[23.344px] md:gap-y-[normal] md:overflow-visible md:mb-0 md:px-0">
                          <a 
                            href="#w-tabs-0-data-w-pane-0" 
                            role="tab" 
                            className="relative text-zinc-100 text-[15.3473px] items-center bg-violet-700 box-border flex justify-center leading-[15.3473px] max-w-full min-h-[auto] min-w-[auto] text-left align-top border border-violet-700 px-[23.0209px] py-[19.1841px] rounded-[15.3473px] border-solid md:text-gray-900 md:text-[15.5627px] md:[align-items:normal] md:bg-stone-300 md:inline-block md:justify-normal md:leading-[23.344px] md:min-h-0 md:min-w-0 md:border-gray-900 md:px-[30px] md:py-[9px] md:rounded-none md:border-0 md:border-none"
                            onClick={(e) => { e.preventDefault(); setActiveTab(0); }}
                          >
                            <div className="text-zinc-100 text-[15.3473px] box-border leading-[15.3473px] min-h-[auto] min-w-[auto] md:text-gray-900 md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:min-w-0 before:accent-auto before:text-zinc-100 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[15.3473px] before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-gray-900 before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-zinc-100 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[15.3473px] after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-gray-900 after:md:text-[15.5627px] after:md:leading-[23.344px]">
                              <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-38.svg" alt="Icon" className="text-zinc-100 text-[15.3473px] box-border h-[22px] leading-[15.3473px] w-[72px] md:text-gray-900 md:text-[15.5627px] md:leading-[23.344px]" />
                            </div>
                          </a>
                          {comparisonData.competitors.map((competitor, index) => (
                            <a 
                              key={index}
                              href={`#w-tabs-0-data-w-pane-${index + 1}`} 
                              role="tab" 
                              className="relative text-zinc-500 text-[15.3473px] items-center bg-white box-border flex justify-center leading-[15.3473px] max-w-full min-h-[auto] min-w-[auto] text-left align-top border border-gray-200 px-[23.0209px] py-[19.1841px] rounded-[15.3473px] border-solid md:text-gray-900 md:text-[15.5627px] md:[align-items:normal] md:bg-zinc-300 md:inline-block md:justify-normal md:leading-[23.344px] md:min-h-0 md:min-w-0 md:border-gray-900 md:px-[30px] md:py-[9px] md:rounded-none md:border-0 md:border-none"
                              onClick={(e) => { e.preventDefault(); setActiveTab(index + 1); }}
                            >
                              <div className="text-zinc-500 text-[15.3473px] box-border leading-[15.3473px] min-h-[auto] min-w-[auto] md:text-gray-900 md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:min-w-0">{competitor.name}</div>
                            </a>
                          ))}
                        </div>
                        <div className="relative text-[15.3473px] box-border leading-[24.9393px] overflow-visible md:text-[15.5627px] md:leading-[23.344px] md:overflow-hidden">
                          {/* Magier Tab Content */}
                          {activeTab === 0 && (
                            <div role="tabpanel" className="relative text-[15.3473px] box-border leading-[24.9393px] px-[23.0209px] md:text-[15.5627px] md:leading-[23.344px] md:px-0">
                              <div className="relative text-[15.3473px] box-border gap-x-[7.67364px] grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] leading-[24.9393px] gap-y-[7.67364px] md:static md:text-[15.5627px] md:gap-x-[6.91675px] md:leading-[23.344px] md:gap-y-[6.91675px]">
                                <div className="text-[15.3473px] bg-white box-border leading-[24.9393px] min-h-[auto] min-w-[auto] border border-gray-200 mt-[5.75523px] mb-[13.4289px] pt-[23.0209px] px-[15.3473px] rounded-[30.6946px] border-solid md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:min-w-0 md:my-[12.1043px] md:pt-[20.7503px] md:px-[20.7503px] md:rounded-[27.667px]">
                                  {comparisonData.criteria.map((criterion, index) => (
                                    <div key={index} className="text-[15.3473px] items-center border-b-gray-900 border-l-gray-900 border-r-gray-900 border-t-gray-200 box-border flex justify-start leading-[24.9393px] min-h-[76.7364px] py-[3.83682px] border-t-0 md:text-[15.5627px] md:leading-[23.344px] md:min-h-[69.1675px] md:py-[3.45838px] md:border-t">
                                      <div className="text-[15.3473px] items-center box-border gap-x-[5.75523px] flex justify-start leading-[24.9393px] min-h-[auto] min-w-[auto] gap-y-[5.75523px] md:text-[15.5627px] md:gap-x-[5.18756px] md:leading-[23.344px] md:min-h-0 md:min-w-0 md:gap-y-[5.18756px]">
                                        <div className="text-[15.3473px] items-center box-border flex justify-start leading-[24.9393px] min-h-[auto] min-w-[auto] md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:min-w-0 before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] before:md:min-h-0 before:md:min-w-0 after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px] after:md:min-h-0 after:md:min-w-0">
                                          <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-34.svg" alt="Icon" className="text-[15.3473px] box-border h-6 leading-[24.9393px] w-6 md:text-[15.5627px] md:leading-[23.344px]" />
                                        </div>
                                        <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] min-h-[auto] min-w-[auto] md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:min-w-0">{criterion}</div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div className="text-white text-[15.3473px] bg-violet-700 box-border leading-[24.9393px] min-h-[auto] min-w-[auto] border-indigo-400 pt-[17.2657px] px-[23.0209px] rounded-[40.2866px] border-[7px] border-solid md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:min-w-0 md:pt-[20.7503px] md:px-[20.7503px] md:rounded-[41.5005px] md:border-[12px]">
                                  {comparisonData.magier.map((value, index) => (
                                    <div key={index} className="text-[15.3473px] items-center border-t-indigo-400 box-border flex justify-center leading-[24.9393px] max-h-[76.7364px] min-h-[76.7364px] py-[3.83682px] border-b-white border-x-white border-t md:text-[15.5627px] md:leading-[23.344px] md:max-h-[69.1675px] md:min-h-[69.1675px] md:py-[3.45838px]">
                                      {typeof value === 'string' ? (
                                        <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] min-h-[auto] min-w-[auto] text-center md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:min-w-0 md:text-start">{value}</div>
                                      ) : (
                                        <div className="text-[15.3473px] box-border flex leading-[24.9393px] min-h-[auto] min-w-[auto] md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:min-w-0 before:accent-auto before:text-white before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] before:md:min-h-0 before:md:min-w-0 after:accent-auto after:clear-both after:text-white after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px] after:md:min-h-0 after:md:min-w-0">
                                          <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-35.svg" alt="Icon" className="text-[15.3473px] box-border h-6 leading-[24.9393px] w-6 md:text-[15.5627px] md:leading-[23.344px]" />
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                                <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/675c90ce383bbb7eb9745bc5_pricing_bg_image_mobile.svg" alt="" className="absolute text-[15.3473px] bottom-[-10%] box-border leading-[24.9393px] max-w-full z-[-1] left-[20%] md:static md:text-[15.5627px] md:leading-[23.344px] md:z-auto md:left-auto md:bottom-auto" />
                              </div>
                            </div>
                          )}
                          
                          {/* Competitor Tab Contents */}
                          {comparisonData.competitors.map((competitor, compIndex) => (
                            activeTab === compIndex + 1 && (
                              <div key={compIndex} role="tabpanel" className="relative text-[15.3473px] box-border hidden leading-[24.9393px] px-[23.0209px] md:text-[15.5627px] md:leading-[23.344px] md:px-0">
                                <div className="relative text-[15.3473px] box-border gap-x-[7.67364px] grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] leading-[24.9393px] gap-y-[7.67364px] md:static md:text-[15.5627px] md:gap-x-[6.91675px] md:leading-[23.344px] md:gap-y-[6.91675px]">
                                  <div className="text-[15.3473px] bg-white box-border leading-[24.9393px] border border-gray-200 mt-[5.75523px] mb-[13.4289px] pt-[23.0209px] px-[15.3473px] rounded-[30.6946px] border-solid md:text-[15.5627px] md:leading-[23.344px] md:my-[12.1043px] md:pt-[20.7503px] md:px-[20.7503px] md:rounded-[27.667px]">
                                    {comparisonData.criteria.map((criterion, index) => (
                                      <div key={index} className="text-[15.3473px] items-center border-b-gray-900 border-l-gray-900 border-r-gray-900 border-t-gray-200 box-border flex justify-start leading-[24.9393px] min-h-[76.7364px] py-[3.83682px] border-t-0 md:text-[15.5627px] md:leading-[23.344px] md:min-h-[69.1675px] md:py-[3.45838px] md:border-t">
                                        <div className="text-[15.3473px] items-center box-border gap-x-[5.75523px] flex justify-start leading-[24.9393px] gap-y-[5.75523px] md:text-[15.5627px] md:gap-x-[5.18756px] md:leading-[23.344px] md:gap-y-[5.18756px]">
                                          <div className="text-[15.3473px] items-center box-border flex justify-start leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]">
                                            <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-34.svg" alt="Icon" className="text-[15.3473px] box-border h-6 leading-[24.9393px] w-6 md:text-[15.5627px] md:leading-[23.344px]" />
                                          </div>
                                          <div className="text-[15.3473px] font-medium box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">{criterion}</div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="text-[15.3473px] bg-white box-border leading-[24.9393px] border border-gray-200 mt-[5.75523px] mb-[13.4289px] pt-[23.0209px] px-[15.3473px] rounded-[30.6946px] border-solid md:text-[15.5627px] md:leading-[23.344px] md:my-[12.1043px] md:pt-[20.7503px] md:px-[20.7503px] md:rounded-[27.667px]">
                                    {competitor.values.map((value, index) => (
                                      <div key={index} className="text-zinc-500 text-[15.3473px] items-center border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-gray-200 box-border flex justify-center leading-[24.9393px] min-h-[76.7364px] py-[3.83682px] border-t md:text-[15.5627px] md:leading-[23.344px] md:min-h-[69.1675px] md:py-[3.45838px]">
                                        {typeof value === 'string' ? (
                                          <div className="text-[17.2657px] box-border tracking-[-0.32px] leading-[25.8985px] md:text-[15.5627px] md:tracking-[-0.36px] md:leading-[23.344px]">{value}</div>
                                        ) : value ? (
                                          <div className="text-[15.3473px] box-border flex leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-zinc-500 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-zinc-500 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]">
                                            <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-36.svg" alt="Icon" className="text-[15.3473px] box-border h-6 leading-[24.9393px] w-[25px] md:text-[15.5627px] md:leading-[23.344px]" />
                                          </div>
                                        ) : (
                                          <div className="text-[15.3473px] box-border flex leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-zinc-500 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-zinc-500 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]">
                                            <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-37.svg" alt="Icon" className="text-[15.3473px] box-border h-6 leading-[24.9393px] w-[25px] md:text-[15.5627px] md:leading-[23.344px]" />
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                  <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/675c90ce383bbb7eb9745bc5_pricing_bg_image_mobile.svg" alt="" className="absolute text-[15.3473px] bottom-[-10%] box-border leading-[24.9393px] max-w-full z-[-1] left-[20%] md:static md:text-[15.5627px] md:leading-[23.344px] md:z-auto md:left-auto md:bottom-auto" />
                                </div>
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/675c04232d1f19a80052b882_pricing_bg_svg.svg" alt="" className="absolute text-[15.3473px] box-border hidden left-[-214.862px] leading-[24.9393px] max-w-full top-[-153.473px] z-[-1] md:text-[15.5627px] md:block md:left-[-193.669px] md:leading-[23.344px] md:top-[-138.335px]" />
      <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/675c04239e6248147afb9655_pricing_bg_svg-1.svg" alt="" className="absolute text-[15.3473px] box-border hidden leading-[24.9393px] max-w-full transform-none z-[-1] right-0 bottom-[80%] md:text-[15.5627px] md:block md:leading-[23.344px] md:right-[-110.668px] md:translate-y-[50.0%] md:bottom-2/4" />
      <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/677fe5ae886b1f08a48032fa_pricing_svg_right.svg" alt="" className="absolute text-[15.3473px] box-border hidden leading-[24.9393px] max-w-full right-[0%] top-[132.37px] md:text-[15.5627px] md:block md:leading-[23.344px] md:top-[119.314px]" />
      <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/677fe5ae24a02bace6597e9e_pricing_svg_left.svg" alt="" className="absolute text-[15.3473px] box-border hidden leading-[24.9393px] max-w-full left-[0%] top-[130.452px] md:text-[15.5627px] md:block md:leading-[23.344px] md:top-[117.585px]" />
    </section>
  );
}
