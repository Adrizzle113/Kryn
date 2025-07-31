import React, { useState } from 'react';
import { faqData } from '../../data/faqData';

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="relative text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
      <div className="relative text-[15.3473px] box-border leading-[24.9393px] z-[2] px-[19.1841px] md:text-[15.5627px] md:leading-[23.344px] md:px-[34.5838px]">
        <div className="text-[15.3473px] box-border leading-[24.9393px] max-w-[1151.05px] w-full mx-auto md:text-[15.5627px] md:leading-[23.344px] md:max-w-[1037.51px]">
          <div className="text-[15.3473px] box-border leading-[24.9393px] py-[61.3891px] md:text-[15.5627px] md:leading-[23.344px] md:py-[96.8345px]">
            <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
              <div className="text-[15.3473px] items-start box-border gap-x-[46.0418px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] leading-[24.9393px] gap-y-[38.3682px] md:text-[15.5627px] md:gap-x-[50.1465px] md:grid-cols-[1fr_1.5434fr] md:leading-[23.344px] md:gap-y-[55.334px]">
                <div className="text-[15.3473px] box-border leading-[24.9393px] text-center md:text-[15.5627px] md:leading-[23.344px] md:text-start">
                  <div className="text-[15.3473px] box-border leading-[24.9393px] text-center mb-[11.5105px] md:text-[15.5627px] md:leading-[23.344px] md:text-start md:mb-[13.8335px]">
                    <div className="text-violet-700 text-[15.3473px] font-medium items-center box-border inline-flex h-[30.6946px] justify-center tracking-[-0.32px] leading-[15.3473px] text-center border border-indigo-200 px-[15.3473px] py-[9.59205px] rounded-[40.2866px] border-solid md:text-[13.8335px] md:h-[27.667px] md:leading-[13.8335px] md:text-start md:px-[13.8335px] md:py-[8.64594px] md:rounded-[36.313px]">FAQ</div>
                  </div>
                  <h2 className="text-[32.613px] font-semibold box-border tracking-[-1.36px] leading-[35.8743px] text-center font-alliance md:text-[57.0632px] md:tracking-[-2.64px] md:leading-[62.7695px] md:text-start">
                    Frequently <span className="text-[32.613px] bg-[url('https://cdn.prod.website-files.com/6756af8bdb09e2801688ef7d/675c774765b1ca2f26402dc9_icon%20faq%20mobile.svg')] bg-no-repeat box-border tracking-[-1.36px] leading-[35.8743px] text-center bg-right pr-[42.9724px] md:text-[57.0632px] md:bg-[url('https://cdn.prod.website-files.com/6756af8bdb09e2801688ef7d/6759b2008fee898c6c981f81_icon%20-%20how%20it%20works.svg')] md:tracking-[-2.64px] md:leading-[62.7695px] md:text-start md:pr-[66.4008px]">asked</span> questions
                  </h2>
                </div>
                <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
                  <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
                    <div role="list" className="text-[15.3473px] box-border gap-x-[7.67364px] flex flex-col leading-[24.9393px] gap-y-[7.67364px] md:text-[15.5627px] md:gap-x-[13.8335px] md:leading-[23.344px] md:gap-y-[13.8335px]">
                      {faqData.map((faq) => (
                        <div key={faq.id} role="listitem" className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
                          <div className="text-[15.3473px] items-stretch bg-white shadow-[rgb(229,229,234)_0px_0px_0px_1px_inset] box-border flex-col justify-start leading-[24.9393px] border border-gray-200 overflow-hidden rounded-[23.0209px] border-solid md:text-[15.5627px] md:leading-[23.344px] md:rounded-[20.7503px]">
                            <div 
                              className="text-[15.3473px] items-center box-border gap-x-[23.0209px] flex justify-between leading-[24.9393px] gap-y-[23.0209px] p-[23.0209px] md:text-[15.5627px] md:gap-x-[20.7503px] md:leading-[23.344px] md:gap-y-[20.7503px] md:px-[27.667px] md:py-[20.7503px]"
                              onClick={() => toggleItem(faq.id)}
                            >
                              <div className="text-[19.1841px] font-medium box-border tracking-[-0.8px] leading-[28.7762px] md:text-[17.2919px] md:leading-[25.9378px]">{faq.question}</div>
                              <div className="relative text-[15.3473px] items-center self-start box-border flex h-[30.6946px] justify-center leading-[24.9393px] w-[26.8577px] md:text-[15.5627px] md:h-[27.667px] md:leading-[23.344px] md:w-[27.667px]">
                                <div className="absolute text-[15.3473px] bg-gray-900 box-border h-0.5 leading-[24.9393px] w-[19.1841px] rounded-[7.67364px] md:text-[15.5627px] md:leading-[23.344px] md:w-[17.2919px] md:rounded-[6.91675px]"></div>
                                <div className="text-[15.3473px] bg-gray-900 box-border h-[19.1841px] leading-[24.9393px] w-0.5 rounded-[7.67364px] md:text-[15.5627px] md:h-[17.2919px] md:leading-[23.344px] md:rounded-[6.91675px]"></div>
                              </div>
                            </div>
                            {openItems.includes(faq.id) && (
                              <div className="text-[15.3473px] box-border h-0 leading-[24.9393px] w-full overflow-hidden px-[23.0209px] md:text-[15.5627px] md:leading-[23.344px] md:px-[27.667px]">
                                <div className="text-[15.3473px] box-border leading-[24.9393px] mb-[19.1841px] md:text-[15.5627px] md:leading-[23.344px] md:mb-[20.7503px]">
                                  <div className="text-[15.3473px] box-border leading-[24.9393px] w-full md:text-[15.5627px] md:leading-[23.344px]">
                                    <div className="text-zinc-500 text-[15.3473px] box-border leading-[23.0209px] md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-zinc-500 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[23.0209px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-zinc-500 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[23.0209px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]">
                                      <div 
                                        className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]" 
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img 
        src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/6759d0bfc11e94fe93bdc42e_img.webp" 
        sizes="(max-width: 3360px) 100vw, 3360px" 
        alt="" 
        className="absolute text-[15.3473px] box-border hidden leading-[24.9393px] max-w-full transform-none w-full z-0 top-[153.473px] inset-x-[0%] md:text-[15.5627px] md:block md:leading-[23.344px] md:translate-y-[-50.0%] md:top-[484.173px]" 
      />
      <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/675c97c9d0c2404880bcb6c1_faq_svg_mobile.svg" alt="" className="absolute text-[15.3473px] box-border block leading-[24.9393px] max-w-full w-full z-0 top-[184.167px] inset-x-[0%] md:text-[15.5627px] md:hidden md:leading-[23.344px] md:top-2/4" />
    </section>
  );
}
