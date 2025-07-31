import React from 'react';
import { servicesData } from '../../data/servicesData';

export function ServicesSection() {
  return (
    <section className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
      <div className="text-[15.3473px] box-border leading-[24.9393px] px-[19.1841px] md:text-[15.5627px] md:leading-[23.344px] md:px-[34.5838px]">
        <div className="text-[15.3473px] box-border leading-[24.9393px] py-[61.3891px] md:text-[15.5627px] md:leading-[23.344px] md:pt-[138.335px] md:pb-[155.627px]">
          <div className="text-[15.3473px] box-border leading-[24.9393px] max-w-[1151.05px] w-full mx-auto md:text-[15.5627px] md:leading-[23.344px] md:max-w-[1037.51px]">
            <div className="text-[15.3473px] box-border gap-x-[30.6946px] flex flex-col leading-[24.9393px] gap-y-[30.6946px] md:text-[15.5627px] md:gap-x-[83.001px] md:flex-row md:leading-[23.344px] md:gap-y-[83.001px]">
              <div className="text-[15.3473px] items-start box-border gap-x-[15.3473px] flex flex-col justify-between leading-[24.9393px] gap-y-[15.3473px] w-full md:text-[15.5627px] md:gap-x-[13.8335px] md:leading-[23.344px] md:gap-y-[13.8335px]">
                <div className="text-[15.3473px] box-border leading-[24.9393px] text-center mx-auto md:text-[15.5627px] md:leading-[23.344px] md:text-start md:mx-0">
                  <h2 className="text-[32.613px] font-semibold box-border tracking-[-1.36px] leading-[35.8743px] text-center font-alliance md:text-[57.0632px] md:tracking-[-2.64px] md:leading-[62.7695px] md:text-start">
                    All<span className="text-[32.613px] bg-[url('https://cdn.prod.website-files.com/6756af8bdb09e2801688ef7d/67879c0012db59fe318a4b7c_magic0stick.svg')] bg-size-[100%_100%] box-border inline-block h-[46.0418px] tracking-[-1.36px] leading-[35.8743px] text-center translate-y-[8.441px] w-[46.0418px] bg-center md:text-[57.0632px] md:h-[69.1675px] md:tracking-[-2.64px] md:leading-[62.7695px] md:text-start md:translate-y-[13.8335px] md:w-[69.1675px]"></span> services in one subscription
                  </h2>
                </div>
                <div className="relative text-[15.3473px] box-border block h-auto leading-[24.9393px] min-h-[auto] min-w-[auto] w-full overflow-hidden md:text-[15.5627px] md:hidden md:h-[494.548px] md:leading-[23.344px] md:min-h-0 md:min-w-0">
                  <div className="relative text-[15.3473px] box-border h-[500px] leading-[24.9393px] z-0 overflow-hidden md:text-[15.5627px] md:h-auto md:leading-[23.344px]">
                    <div className="text-[15.3473px] box-border h-full leading-[24.9393px] translate-y-[-16.3473px] md:text-[15.5627px] md:leading-[23.344px] md:transform-none">
                      {servicesData.map((service) => (
                        <div key={service.id} className="relative text-[15.3473px] box-border shrink-0 leading-[24.9393px] list-none mb-[15.3473px] md:text-[15.5627px] md:leading-[23.344px] md:mb-0">
                          <div className="text-[15.3473px] items-center bg-white shadow-[rgb(229,229,234)_0px_0px_0px_1px_inset] box-border gap-x-[19.1841px] flex justify-start leading-[24.9393px] gap-y-[19.1841px] border border-gray-200 p-[17.2657px] rounded-[19.1841px] border-solid md:text-[15.5627px] md:gap-x-[17.2919px] md:leading-[23.344px] md:gap-y-[17.2919px] md:p-[20.7503px] md:rounded-[27.667px]">
                            <div className="text-[15.3473px] box-border leading-[24.9393px] min-h-[auto] min-w-[76.7364px] w-[76.7364px] md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:min-w-[69.1675px] md:w-[69.1675px]">
                              <img src={service.icon} alt="" className="text-[15.3473px] box-border leading-[24.9393px] max-w-full align-bottom w-full rounded-[13.4289px] md:text-[15.5627px] md:leading-[23.344px] md:rounded-[12.1043px]" />
                            </div>
                            <div className="text-[15.3473px] box-border gap-x-[5.37155px] flex flex-col leading-[24.9393px] min-h-[auto] min-w-[auto] gap-y-[5.37155px] md:text-[15.5627px] md:gap-x-[6.91675px] md:leading-[23.344px] md:min-h-0 md:min-w-0 md:gap-y-[6.91675px]">
                              <h3 className="text-[19.1841px] font-medium box-border tracking-[-1.25px] leading-[21.1025px] min-h-[auto] min-w-[auto] md:text-[20.7503px] md:leading-[22.8253px] md:min-h-0 md:min-w-0">{service.title}</h3>
                              <p className="text-zinc-500 text-[17.2657px] box-border tracking-[-0.32px] leading-[25.8985px] min-h-[auto] min-w-[auto] md:text-[15.5627px] md:tracking-[-0.36px] md:leading-[23.344px] md:min-h-0 md:min-w-0">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute text-[15.3473px] backdrop-blur-[1px] bg-[linear-gradient(rgb(240,240,241)_22%,rgba(255,255,255,0))] box-border h-[84.41px] leading-[24.9393px] w-full z-50 left-[0%] top-[0%] md:text-[15.5627px] md:h-[76.0843px] md:leading-[23.344px]"></div>
                  <div className="absolute text-[15.3473px] backdrop-blur-[1px] bg-[linear-gradient(rgba(255,255,255,0),rgb(240,240,241)_78%)] box-border h-[84.41px] leading-[24.9393px] w-full z-50 left-[0%] bottom-[0%] md:text-[15.5627px] md:h-[76.0843px] md:leading-[23.344px]"></div>
                </div>
                
                {/* Desktop Carousel */}
                <div role="region" className="relative text-[15.3473px] box-border hidden h-[537.155px] leading-[24.9393px] min-h-0 min-w-0 w-full overflow-hidden md:text-[15.5627px] md:block md:h-[484.173px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto]">
                  <div className="relative text-[15.3473px] box-border leading-[24.9393px] z-0 overflow-hidden md:text-[15.5627px] md:leading-[23.344px]">
                    <div role="presentation" className="text-[15.3473px] box-border h-full leading-[24.9393px] transform-none md:text-[15.5627px] md:leading-[23.344px] md:translate-y-[-978.617px]">
                      {servicesData.slice(2).map((service, index) => (
                        <div key={`desktop-${service.id}`} role="group" aria-label={`${index + 3} of 10`} className="static text-base box-content shrink h-auto leading-[normal] list-disc opacity-100 transform-none mb-0 md:relative md:text-[15.5627px] md:aspect-auto md:box-border md:shrink-0 md:h-[calc(25%_-_7.78135px)] md:leading-[23.344px] md:list-none md:opacity-75 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-[10.3751px] md:scroll-m-0 md:scroll-p-[auto] md:scale-[0.9px]">
                          <div className="[align-items:normal] bg-transparent shadow-none box-content gap-x-[normal] block justify-normal gap-y-[normal] rounded-none md:items-center md:aspect-auto md:bg-white md:shadow-[rgb(229,229,234)_0px_0px_0px_1px_inset] md:box-border md:gap-x-[17.2919px] md:flex md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[17.2919px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:border md:border-gray-200 md:[mask-position:0%] md:bg-left-top md:p-[20.7503px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[27.667px] md:border-solid">
                            <div className="box-content min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[69.1675px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[69.1675px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <img src={service.icon} alt={service.title} className="box-content max-w-none align-middle w-auto rounded-none md:aspect-auto md:box-border md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-bottom md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[12.1043px]" />
                            </div>
                            <div className="box-content gap-x-[normal] block flex-row min-h-0 min-w-0 gap-y-[normal] md:aspect-auto md:box-border md:gap-x-[6.91675px] md:flex md:flex-col md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[6.91675px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <h3 className="text-[18.72px] font-bold box-content tracking-[normal] leading-[normal] min-h-0 min-w-0 md:text-[20.7503px] md:font-medium md:aspect-auto md:box-border md:tracking-[-1.25px] md:leading-[22.8253px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">{service.title}</h3>
                              <p className="text-black box-content min-h-0 min-w-0 md:text-zinc-500 md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Additional carousel items for infinite scroll effect */}
                      {servicesData.slice(0, 2).map((service, index) => (
                        <div key={`desktop-repeat-${service.id}`} role="group" aria-label={`${index + 1} of 10`} className="relative text-[15.3473px] box-border shrink-0 h-auto leading-[24.9393px] list-none opacity-75 transform-none mb-0 md:text-[15.5627px] md:h-[calc(25%_-_7.78135px)] md:leading-[23.344px] md:mb-[10.3751px] md:scale-[0.9px]">
                          <div className="text-[15.3473px] items-center bg-white shadow-[rgb(229,229,234)_0px_0px_0px_1px_inset] box-border gap-x-[19.1841px] flex justify-start leading-[24.9393px] gap-y-[19.1841px] border border-gray-200 p-[17.2657px] rounded-[19.1841px] border-solid md:text-[15.5627px] md:gap-x-[17.2919px] md:leading-[23.344px] md:gap-y-[17.2919px] md:p-[20.7503px] md:rounded-[27.667px]">
                            <div className="text-[15.3473px] box-border leading-[24.9393px] min-h-0 min-w-[76.7364px] w-[76.7364px] md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[69.1675px] md:w-[69.1675px]">
                              <img src={service.icon} alt={service.title} className="text-[15.3473px] box-border leading-[24.9393px] max-w-full align-bottom w-full rounded-[13.4289px] md:text-[15.5627px] md:leading-[23.344px] md:rounded-[12.1043px]" />
                            </div>
                            <div className="text-[15.3473px] box-border gap-x-[5.37155px] flex flex-col leading-[24.9393px] min-h-0 min-w-0 gap-y-[5.37155px] md:text-[15.5627px] md:gap-x-[6.91675px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[6.91675px]">
                              <h3 className="text-[19.1841px] font-medium box-border tracking-[-1.25px] leading-[21.1025px] min-h-0 min-w-0 md:text-[20.7503px] md:leading-[22.8253px] md:min-h-[auto] md:min-w-[auto]">{service.title}</h3>
                              <p className="text-zinc-500 text-[17.2657px] box-border tracking-[-0.32px] leading-[25.8985px] min-h-0 min-w-0 md:text-[15.5627px] md:tracking-[-0.36px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[auto]">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute text-[15.3473px] backdrop-blur-[1px] bg-[linear-gradient(rgb(240,240,241)_22%,rgba(255,255,255,0))] box-border h-[84.41px] leading-[24.9393px] w-full z-50 left-[0%] top-[0%] md:text-[15.5627px] md:h-[76.0843px] md:leading-[23.344px]"></div>
                  <div className="absolute text-[15.3473px] backdrop-blur-[1px] bg-[linear-gradient(rgba(255,255,255,0),rgb(240,240,241)_78%)] box-border h-[84.41px] leading-[24.9393px] w-full z-50 left-[0%] bottom-[0%] md:text-[15.5627px] md:h-[76.0843px] md:leading-[23.344px]"></div>
                </div>
              </div>
              
              <div className="relative text-[15.3473px] items-start bg-white shadow-[rgb(229,229,234)_0px_0px_0px_1px_inset] box-border gap-x-[34.5314px] flex flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-between leading-[24.9393px] gap-y-[34.5314px] w-full border border-gray-200 overflow-hidden px-[23.0209px] py-[38.3682px] rounded-[40.2866px] border-solid md:text-[15.5627px] md:gap-x-[51.8756px] md:leading-[23.344px] md:gap-y-[51.8756px] md:p-[55.334px] md:rounded-[36.313px]">
                <div className="text-[15.3473px] box-border gap-x-[15.3473px] flex flex-col leading-[24.9393px] gap-y-[15.3473px] md:text-[15.5627px] md:gap-x-[20.7503px] md:leading-[23.344px] md:gap-y-[20.7503px]">
                  <div className="text-[15.3473px] box-border leading-[24.9393px] max-w-[351.453px] md:text-[15.5627px] md:leading-[23.344px] md:max-w-[316.787px]">
                    <div className="text-[30.6946px] font-medium box-border tracking-[-1.5px] leading-[39.9029px] md:text-[27.667px] md:leading-[35.9671px]">Get everything you need in one convenient plan.</div>
                  </div>
                  <p className="text-zinc-500 text-[17.2657px] box-border tracking-[-0.32px] leading-[25.8985px] md:text-[15.5627px] md:tracking-[-0.36px] md:leading-[23.344px]">
                    Access a complete suite of services with a single subscription—designed to simplify your workflow and maximize efficiency.
                  </p>
                </div>
                <div className="text-[15.3473px] box-border gap-x-[17.2657px] flex flex-col leading-[24.9393px] gap-y-[17.2657px] md:text-[15.5627px] md:gap-x-[20.7503px] md:leading-[23.344px] md:gap-y-[20.7503px]">
                  {[
                    'Unlimited requests',
                    'Unlimited revisions',
                    '<48h Processing time',
                    'In-House designers',
                    'Monthly cancellable',
                    'Dedicated project manager',
                    'Dashboard access for your team'
                  ].map((feature, index) => (
                    <div key={index} className="text-[15.3473px] items-center box-border gap-x-[11.5105px] flex justify-start leading-[24.9393px] gap-y-[11.5105px] md:text-[15.5627px] md:gap-x-[10.3751px] md:leading-[23.344px] md:gap-y-[10.3751px]">
                      <div className="text-[15.3473px] box-border leading-[24.9393px] min-w-[19.1841px] w-[19.1841px] md:text-[15.5627px] md:leading-[23.344px] md:min-w-[17.2919px] md:w-[17.2919px]">
                        <div className="text-[15.3473px] items-center box-border flex justify-center leading-[24.9393px] w-full md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-gray-900 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-gray-900 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]">
                          <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/icon-26.svg" alt="Icon" className="text-[15.3473px] box-border h-full leading-[24.9393px] w-full md:text-[15.5627px] md:leading-[23.344px]" />
                        </div>
                      </div>
                      <div className="text-zinc-500 text-[17.2657px] box-border tracking-[-0.32px] leading-[25.8985px] md:text-[15.5627px] md:tracking-[-0.36px] md:leading-[23.344px]">{feature}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute text-[15.3473px] box-border leading-[24.9393px] max-w-[122.778px] right-[-39.9029px] rotate-[-3.0000011085596214deg] w-2/5 bottom-[20%] md:text-[15.5627px] md:leading-[23.344px] md:max-w-none md:right-[0%] md:bottom-[0%]">
                  <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/67879c0012db59fe318a4b7b_ill.svg" alt="" className="text-[15.3473px] box-border leading-[24.9393px] max-w-full w-full rounded-[13.4289px] md:text-[15.5627px] md:leading-[23.344px] md:rounded-[12.1043px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
