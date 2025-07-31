import React, { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="text-[15.3473px] box-border leading-[24.9393px] overflow-hidden md:text-[15.5627px] md:leading-[23.344px]">
      <div className="text-[15.3473px] box-border leading-[24.9393px] px-[19.1841px] md:text-[15.5627px] md:leading-[23.344px] md:px-[34.5838px]">
        <div className="text-[15.3473px] box-border leading-[24.9393px] max-w-[1151.05px] w-full mx-auto md:text-[15.5627px] md:leading-[23.344px] md:max-w-[1037.51px]">
          <div className="text-[15.3473px] box-border leading-[24.9393px] py-[61.3891px] md:text-[15.5627px] md:leading-[23.344px] md:py-[96.8345px]">
            <div className="relative text-[15.3473px] box-border flex flex-col leading-[24.9393px] pb-[306.946px] md:text-[15.5627px] md:leading-[23.344px] md:pb-0">
              <div className="text-[15.3473px] box-border gap-x-[38.3682px] flex flex-col leading-[24.9393px] gap-y-[38.3682px] md:text-[15.5627px] md:gap-x-[69.1675px] md:leading-[23.344px] md:gap-y-[69.1675px]">
                <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
                  <div className="text-[15.3473px] items-center box-border gap-x-[19.1841px] flex auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-center justify-items-stretch leading-[24.9393px] gap-y-[19.1841px] text-center md:text-[15.5627px] md:items-end md:gap-x-[69.1675px] md:grid md:grid-cols-[1.25fr_1fr] md:justify-normal md:leading-[23.344px] md:gap-y-[27.667px] md:text-start">
                    <div className="text-[15.3473px] box-border leading-[24.9393px] max-w-none text-center md:text-[15.5627px] md:leading-[23.344px] md:max-w-[380.421px] md:text-start">
                      <h2 className="text-[32.613px] font-semibold box-border tracking-[-1.36px] leading-[35.8743px] text-center font-alliance md:text-[57.0632px] md:tracking-[-2.64px] md:leading-[62.7695px] md:text-start">
                        What they say <span className="text-[32.613px] bg-[url('https://cdn.prod.website-files.com/6756af8bdb09e2801688ef7d/675c7ab6863f8b46dbaa573c_Feedback%20icon%20mobile.svg')] bg-no-repeat box-border tracking-[-1.36px] leading-[35.8743px] text-center bg-[position:left_50%] pl-[39.9029px] md:text-[57.0632px] md:bg-[url('https://cdn.prod.website-files.com/6756af8bdb09e2801688ef7d/675c0696db2ca3ff3d8ae269_Feedback%20icon.svg')] md:tracking-[-2.64px] md:leading-[62.7695px] md:text-start md:pl-[62.2508px]">about</span> us
                      </h2>
                    </div>
                    <div className="absolute text-[15.3473px] items-center box-border flex justify-center leading-[24.9393px] max-w-none min-h-0 min-w-0 text-center ml-0 bottom-[207.188px] inset-x-[0%] md:static md:text-[15.5627px] md:[align-items:normal] md:block md:justify-normal md:leading-[23.344px] md:max-w-[337.192px] md:min-h-[auto] md:min-w-[auto] md:text-start md:ml-auto md:bottom-auto md:inset-x-auto">
                      <div className="text-[15.3473px] items-center box-border gap-x-[7.67364px] flex justify-center leading-[24.9393px] min-h-[auto] min-w-[auto] gap-y-[7.67364px] text-center md:text-[15.5627px] md:[align-items:normal] md:gap-x-[6.91675px] md:justify-normal md:leading-[23.344px] md:min-h-0 md:min-w-0 md:gap-y-[6.91675px] md:text-start">
                        <a 
                          href="#" 
                          role="button" 
                          aria-label="Previous slide" 
                          className="text-[15.3473px] items-center bg-white box-border flex justify-center leading-[24.9393px] max-w-full min-h-[51.7971px] min-w-[74.818px] text-center border border-gray-200 rounded-[95.9205px] border-solid md:text-[15.5627px] md:leading-[23.344px] md:min-h-[46.6881px] md:min-w-[67.4383px] md:text-start md:rounded-[86.4594px]"
                          onClick={(e) => { e.preventDefault(); prevSlide(); }}
                        >
                          <div className="text-[15.3473px] box-border flex leading-[24.9393px] text-center md:text-[15.5627px] md:leading-[23.344px] md:text-start before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] before:md:text-start after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px] after:md:text-start">
                            <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-28.svg" alt="Icon" className="text-[15.3473px] box-border h-6 leading-[24.9393px] text-center w-6 md:text-[15.5627px] md:leading-[23.344px] md:text-start" />
                          </div>
                        </a>
                        <a 
                          href="#" 
                          role="button" 
                          aria-label="Next slide" 
                          className="text-[15.3473px] items-center bg-white box-border flex justify-center leading-[24.9393px] max-w-full min-h-[51.7971px] min-w-[74.818px] text-center border border-gray-200 rounded-[95.9205px] border-solid md:text-[15.5627px] md:leading-[23.344px] md:min-h-[46.6881px] md:min-w-[67.4383px] md:text-start md:rounded-[86.4594px]"
                          onClick={(e) => { e.preventDefault(); nextSlide(); }}
                        >
                          <div className="text-[15.3473px] box-border flex leading-[24.9393px] text-center md:text-[15.5627px] md:leading-[23.344px] md:text-start before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] before:md:text-start after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px] after:md:text-start">
                            <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-29.svg" alt="Icon" className="text-[15.3473px] box-border h-6 leading-[24.9393px] text-center w-6 md:text-[15.5627px] md:leading-[23.344px] md:text-start" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
                  <div className="relative text-[15.3473px] box-border leading-[24.9393px] list-none z-[1] mx-auto md:text-[15.5627px] md:leading-[23.344px]">
                    <div role="list" className="relative text-[15.3473px] flex h-full leading-[24.9393px] translate-x-[8.594px] w-full z-[1] md:text-[15.5627px] md:leading-[23.344px] md:transform-none">
                      {testimonialsData.slice(currentSlide, currentSlide + 3).map((testimonial, index) => (
                        <div key={testimonial.id} role="group" aria-label={`${index + 1} / 40`} className="relative text-[15.3473px] box-border flex shrink-0 leading-[24.9393px] w-[95%] mr-4 md:text-[15.5627px] md:leading-[23.344px] md:w-[37.5%]">
                          <div className="text-[15.3473px] bg-white shadow-[rgb(229,229,234)_0px_0px_0px_1px_inset] box-border gap-x-[38.3682px] flex flex-col auto-cols-[1fr] grid-cols-[1.25fr] grid-rows-[auto] justify-between leading-[19.1841px] gap-y-[38.3682px] border border-gray-200 p-[30.6946px] rounded-[30.6946px] border-solid md:text-[15.5627px] md:gap-x-[69.1675px] md:grid-cols-[1.25fr_1fr] md:leading-[19.4534px] md:gap-y-[69.1675px] md:p-[41.5005px] md:rounded-[27.667px]">
                            <div className="text-[15.3473px] box-border gap-x-[30.6946px] flex basis-[0%] flex-col grow justify-between leading-[19.1841px] gap-y-[30.6946px] md:text-[15.5627px] md:gap-x-[31.1254px] md:leading-[19.4534px] md:gap-y-[31.1254px]">
                              <div className="text-[15.3473px] items-start box-border gap-x-[30.6946px] flex flex-col justify-start leading-[19.1841px] gap-y-[30.6946px] md:text-[15.5627px] md:gap-x-[34.5838px] md:leading-[19.4534px] md:gap-y-[34.5838px]">
                                <img src={testimonial.companyLogo} alt="" className="text-[15.3473px] box-border leading-[19.1841px] max-h-[23.0209px] max-w-full md:text-[15.5627px] md:leading-[19.4534px] md:max-h-[20.7503px]" />
                                <div className="text-[15.3473px] box-border gap-x-[23.0209px] flex flex-col leading-[19.1841px] gap-y-[23.0209px] md:text-[15.5627px] md:gap-x-[20.7503px] md:leading-[19.4534px] md:gap-y-[20.7503px]">
                                  <div className="text-[19.1841px] font-medium box-border tracking-[-0.36px] leading-[28.7762px] md:text-[20.7503px] md:tracking-[-0.96px] md:leading-[25.7303px]">{testimonial.title}</div>
                                  <p className="text-zinc-500 text-[15.3473px] box-border flow-root leading-[23.0209px] overflow-hidden md:text-[15.5627px] md:leading-[23.344px]">{testimonial.quote}</p>
                                </div>
                              </div>
                              <div className="text-[15.3473px] items-center border-b-gray-900 border-l-gray-900 border-r-gray-900 border-t-gray-200 box-border gap-x-[13.4289px] flex justify-start leading-[19.1841px] gap-y-[13.4289px] pt-[30.6946px] border-t md:text-[15.5627px] md:gap-x-[12.1043px] md:leading-[19.4534px] md:gap-y-[12.1043px] md:pt-[20.7503px]">
                                <img src={testimonial.authorImage} alt="" className="text-[15.3473px] aspect-square box-border h-[46.0418px] leading-[19.1841px] max-w-full object-cover w-[46.0418px] rounded-[50%] md:text-[15.5627px] md:h-[41.5005px] md:leading-[19.4534px] md:w-[41.5005px]" />
                                <div className="text-[15.3473px] box-border gap-x-[7.67364px] flex flex-col leading-[18.4167px] gap-y-[7.67364px] md:text-[15.5627px] md:gap-x-[6.91675px] md:leading-[18.6752px] md:gap-y-[6.91675px]">
                                  <div className="text-[15.3473px] font-medium box-border tracking-[-0.32px] leading-[23.0209px] md:text-[13.8335px] md:leading-[16.6002px]">{testimonial.authorName}</div>
                                  <div className="text-zinc-500 text-[15.3473px] box-border tracking-[-0.32px] leading-[23.0209px] md:text-[13.8335px] md:leading-[16.6002px]">{testimonial.authorTitle}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute text-[15.3473px] items-center box-border gap-x-[23.0209px] flex flex-col flex-nowrap justify-between leading-[24.9393px] min-h-0 min-w-0 gap-y-[23.0209px] text-center mt-[38.3682px] bottom-[0%] inset-x-[0%] md:static md:text-[15.5627px] md:gap-x-[27.667px] md:flex-row md:flex-wrap md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[27.667px] md:text-start md:mt-[51.8756px] md:bottom-auto md:inset-x-auto">
                <div className="text-[26.8577px] font-semibold box-border tracking-[-1.12px] leading-[29.5435px] text-center font-alliance md:text-[27.667px] md:tracking-[-1.28px] md:leading-[30.4337px] md:text-start">Trusted by marketers like you</div>
                <div className="text-[15.3473px] box-border gap-x-[43.1642px] flex flex-wrap leading-[24.9393px] gap-y-[23.0209px] text-center md:text-[15.5627px] md:gap-x-[38.9067px] md:flex-nowrap md:leading-[23.344px] md:gap-y-[38.9067px] md:text-start">
                  <a href="https://www.trustpilot.com/review/www.magier.com" className="text-[15.3473px] box-border block leading-[24.9393px] max-w-full text-center md:text-[15.5627px] md:leading-[23.344px] md:text-start">
                    <div className="text-[15.3473px] items-center box-border gap-x-[11.5105px] flex justify-start leading-[24.9393px] gap-y-[11.5105px] text-center md:text-[13.8335px] md:gap-x-[10.3751px] md:leading-[20.7503px] md:gap-y-[10.3751px] md:text-start">
                      <div className="text-[15.3473px] box-border flex leading-[24.9393px] text-center md:text-[13.8335px] md:leading-[20.7503px] md:text-start before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:leading-[20.7503px] before:md:text-start after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:leading-[20.7503px] after:md:text-start">
                        <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-30.svg" alt="Icon" className="text-[15.3473px] box-border h-11 leading-[24.9393px] text-center w-11 md:text-[13.8335px] md:leading-[20.7503px] md:text-start" />
                      </div>
                      <div className="text-[15.3473px] box-border gap-x-[9.59205px] flex flex-col leading-[24.9393px] gap-y-[9.59205px] text-center md:text-[13.8335px] md:gap-x-[8.64594px] md:leading-[20.7503px] md:gap-y-[8.64594px] md:text-start">
                        <div className="text-[15.3473px] box-border flex leading-[24.9393px] text-center md:text-[13.8335px] md:leading-[20.7503px] md:text-start before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:leading-[20.7503px] before:md:text-start after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:leading-[20.7503px] after:md:text-start">
                          <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-31.svg" alt="Icon" className="text-[15.3473px] box-border h-4 leading-[24.9393px] text-center w-[81px] md:text-[13.8335px] md:leading-[20.7503px] md:text-start" />
                        </div>
                        <div className="text-[15.3473px] box-border leading-[24.9393px] text-center md:text-[13.8335px] md:leading-[20.7503px] md:text-start">
                          <span className="text-[15.3473px] font-bold box-border leading-[24.9393px] text-center md:text-[13.8335px] md:leading-[20.7503px] md:text-start">4.8 stars</span> 50+ Reviews
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="text-[15.3473px] items-center box-border gap-x-[11.5105px] hidden justify-start leading-[24.9393px] gap-y-[11.5105px] text-center md:text-[13.8335px] md:gap-x-[10.3751px] md:leading-[20.7503px] md:gap-y-[10.3751px] md:text-start">
                    <div className="text-[15.3473px] box-border flex leading-[24.9393px] text-center md:text-[13.8335px] md:leading-[20.7503px] md:text-start before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:leading-[20.7503px] before:md:text-start after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:leading-[20.7503px] after:md:text-start">
                      <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-32.svg" alt="Icon" className="text-[15.3473px] box-border h-11 leading-[24.9393px] text-center w-11 md:text-[13.8335px] md:leading-[20.7503px] md:text-start" />
                    </div>
                    <div className="text-[15.3473px] box-border gap-x-[9.59205px] flex flex-col leading-[24.9393px] gap-y-[9.59205px] text-center md:text-[13.8335px] md:gap-x-[8.64594px] md:leading-[20.7503px] md:gap-y-[8.64594px] md:text-start">
                      <div className="text-[15.3473px] box-border flex leading-[24.9393px] text-center md:text-[13.8335px] md:leading-[20.7503px] md:text-start before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[13.8335px] before:md:leading-[20.7503px] before:md:text-start after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[13.8335px] after:md:leading-[20.7503px] after:md:text-start">
                        <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-33.svg" alt="Icon" className="text-[15.3473px] box-border h-[18px] leading-[24.9393px] text-center w-[94px] md:text-[13.8335px] md:leading-[20.7503px] md:text-start" />
                      </div>
                      <div className="text-[15.3473px] box-border leading-[24.9393px] text-center md:text-[13.8335px] md:leading-[20.7503px] md:text-start">
                        <span className="text-[15.3473px] font-bold box-border leading-[24.9393px] text-center md:text-[13.8335px] md:leading-[20.7503px] md:text-start">4.9 stars</span> 2,000 Reviews
                      </div>
                    </div>
                  </div>
                  <div className="text-[15.3473px] box-border hidden leading-[24.9393px] max-w-[45%] min-h-0 min-w-0 text-center md:text-[15.5627px] md:block md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] md:text-start before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] before:md:text-start after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px] after:md:text-start">
                    <div className="text-[15.3473px] box-border leading-[24.9393px] text-center md:text-[15.5627px] md:leading-[23.344px] md:text-start">
                      <iframe 
                        src="https://widget.clutch.co/widgets/get/1?ref_domain=www.magier.com&uid=2290381&rel_nofollow=true&ref_path=/pricing" 
                        title="[iFrameSizer]iframe-0.45301104964301986:40:237:init1" 
                        className="text-[15.3473px] box-border h-0 leading-[24.9393px] text-center w-full md:text-[15.5627px] md:h-10 md:leading-[23.344px] md:text-start"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[15.3473px] box-border hidden leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]"></div>
    </section>
  );
}
