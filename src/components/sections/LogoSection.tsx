import React from 'react';
import { logoData } from '../../data/logoData';

export function LogoSection() {
  return (
    <section className="text-[15.3473px] box-border leading-[24.9393px] overflow-hidden md:text-[15.5627px] md:leading-[23.344px]">
      <div className="text-[15.3473px] box-border leading-[24.9393px] px-[19.1841px] md:text-[15.5627px] md:leading-[23.344px] md:px-[34.5838px]">
        <div className="text-[15.3473px] box-border leading-[24.9393px] max-w-[1381.26px] w-full mx-auto md:text-[15.5627px] md:leading-[23.344px] md:max-w-[1245.02px]">
          <div className="text-[15.3473px] box-border leading-[24.9393px] py-[28.7762px] md:text-[15.5627px] md:leading-[23.344px] md:py-[25.9378px]">
            <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
              <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
                <div className="text-[15.3473px] items-center box-border gap-x-[61.3891px] hidden justify-center leading-[24.9393px] gap-y-[61.3891px] pt-[15.3473px] pb-[7.67364px] md:text-[15.5627px] md:gap-x-0 md:flex md:justify-between md:leading-[23.344px] md:gap-y-0 md:py-[6.91675px]">
                  {logoData.map((logo) => (
                    <div key={logo.id} className="text-[15.3473px] items-center box-border flex justify-center leading-[24.9393px] min-h-0 min-w-[184.167px] md:text-[15.5627px] md:leading-[23.344px] md:min-h-[auto] md:min-w-[166.002px]">
                      <img src={logo.src} alt={logo.alt} className="text-[15.3473px] box-border leading-[24.9393px] max-h-[46.0418px] max-w-full min-h-0 min-w-0 md:text-[15.5627px] md:leading-[23.344px] md:max-h-[34.5838px] md:min-h-[auto] md:min-w-[auto]" />
                    </div>
                  ))}
                </div>
                <div className="text-[15.3473px] box-border gap-x-[61.3891px] flex leading-[24.9393px] gap-y-[61.3891px] md:text-[15.5627px] md:gap-x-[normal] md:hidden md:leading-[23.344px] md:gap-y-[normal]">
                  <div className="text-[15.3473px] items-center box-border gap-x-[61.3891px] flex justify-center leading-[24.9393px] min-h-[auto] min-w-[auto] gap-y-[61.3891px] translate-x-[-238.108px] pt-[15.3473px] pb-[7.67364px] md:text-[15.5627px] md:gap-x-0 md:justify-between md:leading-[23.344px] md:min-h-0 md:min-w-0 md:gap-y-0 md:transform-none md:py-[6.91675px]">
                    {logoData.map((logo) => (
                      <div key={`mobile-${logo.id}`} className="text-[15.3473px] items-center box-border flex justify-center leading-[24.9393px] min-h-[auto] min-w-[184.167px] md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:min-w-[166.002px]">
                        <img src={logo.src} alt={logo.alt} className="text-[15.3473px] box-border leading-[24.9393px] max-h-[46.0418px] max-w-full min-h-[auto] min-w-[auto] md:text-[15.5627px] md:leading-[23.344px] md:max-h-[34.5838px] md:min-h-0 md:min-w-0" />
                      </div>
                    ))}
                  </div>
                  <div className="text-[15.3473px] items-center box-border gap-x-[61.3891px] flex justify-center leading-[24.9393px] min-h-[auto] min-w-[auto] gap-y-[61.3891px] translate-x-[-242.971px] pt-[15.3473px] pb-[7.67364px] md:text-[15.5627px] md:gap-x-0 md:justify-between md:leading-[23.344px] md:min-h-0 md:min-w-0 md:gap-y-0 md:transform-none md:py-[6.91675px]">
                    {logoData.map((logo) => (
                      <div key={`mobile2-${logo.id}`} className="text-[15.3473px] items-center box-border flex justify-center leading-[24.9393px] min-h-[auto] min-w-[184.167px] md:text-[15.5627px] md:leading-[23.344px] md:min-h-0 md:min-w-[166.002px]">
                        <img src={logo.src} alt={logo.alt} className="text-[15.3473px] box-border leading-[24.9393px] max-h-[46.0418px] max-w-full min-h-[auto] min-w-[auto] md:text-[15.5627px] md:leading-[23.344px] md:max-h-[34.5838px] md:min-h-0 md:min-w-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
