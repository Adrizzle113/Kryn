import React from 'react';
import { footerData } from '../../data/footerData';

export function Footer() {
  return (
    <div className="text-[15.3473px] box-border leading-[24.9393px] pb-[9.59205px] px-[9.59205px] md:text-[15.5627px] md:leading-[23.344px] md:pb-[20.7503px] md:px-[20.7503px]">
      <div className="relative text-white text-[15.3473px] bg-violet-700 box-border leading-[24.9393px] max-w-[1534.73px] overflow-hidden mx-auto px-[5%] rounded-[23.0209px] md:text-[15.5627px] md:leading-[23.344px] md:max-w-[1383.35px] md:rounded-[27.667px]">
        <div className="relative text-[15.3473px] box-border leading-[24.9393px] max-w-[1298.76px] w-full z-[2] mx-auto md:text-[15.5627px] md:leading-[23.344px] md:max-w-[1170.66px]">
          <div className="text-[15.3473px] box-border leading-[24.9393px] pt-[46.0418px] md:text-[15.5627px] md:leading-[23.344px] md:pt-[69.1675px]">
            <div className="text-[15.3473px] box-border leading-[24.9393px] pb-[15.3473px] md:text-[15.5627px] md:leading-[23.344px] md:pb-[55.334px]">
              <div className="text-[15.3473px] box-border leading-[24.9393px] w-full overflow-hidden md:text-[15.5627px] md:leading-[23.344px]">
                <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/6759501e64c483b637ccb405_logo.svg" alt="" className="text-[15.3473px] font-bold box-border hidden leading-[18.4167px] max-w-full md:text-[15.5627px] md:inline-block md:leading-[18.6752px]" />
                <img 
                  sizes="(max-width: 1439px) 100vw, 1394.005615234375px" 
                  alt="" 
                  src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/675961b738c0181283da3086_logo_mobile.webp" 
                  className="text-[15.3473px] font-bold box-border block leading-[18.4167px] max-w-full md:text-[15.5627px] md:hidden md:leading-[18.6752px]" 
                />
              </div>
            </div>
            <div className="text-[15.3473px] box-border leading-[24.9393px] pb-[38.3682px] md:text-[15.5627px] md:leading-[23.344px] md:pb-[55.334px]">
              <div className="text-[15.3473px] box-border leading-[24.9393px] px-[5%] md:text-[15.5627px] md:leading-[23.344px]">
                <div className="text-[15.3473px] items-start box-border gap-x-[15px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] leading-[24.9393px] max-w-[1151.05px] gap-y-[46.0418px] mx-auto md:text-[15.5627px] md:gap-x-[51.2px] md:grid-cols-[1fr_0.6fr] md:leading-[23.344px] md:max-w-[1037.51px] md:gap-y-4">
                  <div className="text-[15.3473px] items-start box-border gap-x-[23.0209px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] leading-[24.9393px] gap-y-[23.0209px] md:text-[15.5627px] md:gap-x-[27.667px] md:grid-cols-[1fr_1fr_1fr] md:leading-[23.344px] md:gap-y-[13.8335px]">
                    {footerData.sections.map((section) => (
                      <div key={section.id} className="text-[15.3473px] items-start box-border flex flex-col auto-cols-[100%] grid-cols-[100%] grid-rows-[auto] justify-items-start leading-[24.9393px] pb-[15.3473px] border-t-white border-b-white/20 border-x-white border-b md:text-[15.5627px] md:leading-[23.344px] md:pb-0 md:border-b-white md:border-b-0">
                        <div className="text-[15.3473px] box-border leading-[24.9393px] mb-[3.83682px] md:text-[15.5627px] md:leading-[23.344px] md:mb-[3.45838px]">
                          <div className="text-[15.3473px] font-medium box-border tracking-[-0.32px] leading-[23.0209px] md:text-[13.8335px] md:leading-[20.7503px]">{section.title}</div>
                        </div>
                        {section.links.map((link) => (
                          <a 
                            key={link.id} 
                            href={link.href} 
                            className={link.hidden ? "text-white/80 text-[15.3473px] box-border hidden tracking-[-0.32px] leading-[24.9393px] py-[7.67364px] md:text-[13.8335px] md:leading-[20.7503px] md:py-[6.91675px]" : "text-white/80 text-[15.3473px] box-border block tracking-[-0.32px] leading-[24.9393px] py-[7.67364px] md:text-[13.8335px] md:leading-[20.7503px] md:py-[6.91675px]"}
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="text-[15.3473px] items-start box-border flex flex-col justify-start leading-[24.9393px] text-right md:text-[15.5627px] md:items-end md:leading-[23.344px]">
                    <div className="text-[15.3473px] items-start box-border gap-x-[23.0209px] flex flex-col justify-start leading-[24.9393px] gap-y-[23.0209px] md:text-[15.5627px] md:items-end md:gap-x-[25.9378px] md:leading-[23.344px] md:gap-y-[25.9378px]">
                      <a href="https://webflow.com/@magier" className="text-[15.3473px] box-border block leading-[24.9393px] max-w-full md:text-[15.5627px] md:leading-[23.344px]">
                        <img 
                          sizes="(max-width: 479px) 100vw, 298.991455078125px" 
                          alt="magier is a Webflow Premium partner" 
                          src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/67595b7129c860be8e46ca09_webflow_partner_badge.webp" 
                          className="text-[15.3473px] box-border inline-block leading-[24.9393px] max-w-full w-[299px] rounded-[11.5105px] md:text-[15.5627px] md:leading-[23.344px] md:rounded-[10.3751px]" 
                        />
                      </a>
                      <div className="text-gray-900 text-[15.3473px] font-medium items-center bg-white box-border gap-x-[9.59205px] hidden shrink-0 justify-start leading-[24.9393px] gap-y-[9.59205px] px-[15.3473px] py-[7.67364px] rounded-[11.5105px] md:text-[13.8335px] md:gap-x-[8.64594px] md:leading-[20.7503px] md:gap-y-[8.64594px] md:px-[13.8335px] md:py-[6.91675px] md:rounded-[10.3751px]">
                        <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/67595980dab2bcd62c76a033_webflow_logo.svg" alt="" className="text-[15.3473px] box-border inline-block leading-[24.9393px] max-w-full md:text-[13.8335px] md:leading-[20.7503px]" />
                        <div className="text-[15.3473px] bg-gray-200 box-border h-full leading-[24.9393px] min-h-[24.9393px] w-px md:text-[13.8335px] md:leading-[20.7503px] md:min-h-[22.4794px]"></div>
                        <div className="text-[15.3473px] items-center box-border gap-x-[5.75523px] flex justify-start leading-[24.9393px] gap-y-[5.75523px] md:text-[13.8335px] md:gap-x-[5.18756px] md:leading-[20.7503px] md:gap-y-[5.18756px]">
                          <img src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/675959806407c8142b0fe195_webflow-partner_1.svg" alt="" className="text-[15.3473px] box-border leading-[24.9393px] max-w-full md:text-[13.8335px] md:leading-[20.7503px]" />
                          <div className="text-[15.3473px] box-border shrink-0 leading-[24.9393px] md:text-[13.8335px] md:leading-[20.7503px]">Webflow Premium Partner</div>
                        </div>
                      </div>
                      <div className="text-[15.3473px] items-start box-border gap-x-[24.9393px] flex auto-cols-max grid-flow-col grid-cols-[max-content] grid-rows-[auto] justify-end justify-items-start leading-[24.9393px] gap-y-0 md:text-[15.5627px] md:gap-x-[22.4794px] md:leading-[23.344px]">
                        {footerData.socialLinks.map((social) => (
                          <a key={social.id} href={social.href} className="text-[15.3473px] items-center box-border flex tracking-[-0.64px] leading-[24.9393px] md:text-[13.8335px] md:leading-[20.7503px]">
                            {social.text}<br className="text-[15.3473px] box-border block leading-[24.9393px] md:text-[13.8335px] md:leading-[20.7503px]" />
                          </a>
                        ))}
                      </div>
                      <a href="mailto://hi@magier.com" className="text-white/60 text-[15.3473px] box-border block tracking-[-0.32px] leading-[23.0209px] text-left md:text-[13.8335px] md:leading-[20.7503px] md:text-right">
                        hi@magier.com<br className="text-[15.3473px] box-border leading-[23.0209px] text-left md:text-[13.8335px] md:leading-[20.7503px] md:text-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img sizes="100vw" alt="" src="https://c.animaapp.com/mdrg9twxk1hUjD/assets/67595d42e6d89eae486cc2e6_bg.webp" className="absolute text-[15.3473px] box-border h-full leading-[24.9393px] max-w-full w-full z-0 inset-[0%] md:text-[15.5627px] md:leading-[23.344px]" />
    </div>
  );
}
