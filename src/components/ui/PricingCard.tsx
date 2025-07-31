import React from 'react';
import { PricingPlan } from '../../data/pricingData';

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const getCardClassName = () => {
    switch (plan.id) {
      case 'design':
        return "text-[15.3473px] bg-white box-border gap-x-[30.6946px] flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-between leading-[24.9393px] gap-y-[30.6946px] border border-gray-200 pt-[38.3682px] pb-[23.0209px] px-[23.0209px] rounded-[40.2866px] border-solid md:text-[15.5627px] md:gap-x-[27.667px] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto md:leading-[23.344px] md:gap-y-[27.667px] md:px-[34.5838px] md:py-[41.5005px] md:rounded-[36.313px]";
      case 'webflow':
        return "text-[15.3473px] bg-white box-border gap-x-[30.6946px] flex flex-col justify-between leading-[24.9393px] gap-y-[30.6946px] border border-gray-200 pt-[38.3682px] pb-[23.0209px] px-[23.0209px] rounded-[40.2866px] border-solid md:text-[15.5627px] md:gap-x-[27.667px] md:leading-[23.344px] md:gap-y-[27.667px] md:px-[34.5838px] md:py-[41.5005px] md:rounded-[36.313px]";
      case 'webflow-starter':
        return "text-[15.3473px] box-border gap-x-[30.6946px] hidden basis-[0%] flex-col grow justify-between leading-[24.9393px] gap-y-[30.6946px] md:text-[15.5627px] md:gap-x-[27.667px] md:leading-[23.344px] md:gap-y-[27.667px]";
      case 'design-webflow':
        return "text-white text-[15.3473px] bg-violet-700 box-border gap-x-[30.6946px] flex flex-col justify-between leading-[24.9393px] gap-y-[30.6946px] border border-gray-200 pt-[38.3682px] pb-[23.0209px] px-[23.0209px] rounded-[40.2866px] border-solid md:text-[15.5627px] md:gap-x-[27.667px] md:leading-[23.344px] md:gap-y-[27.667px] md:px-[34.5838px] md:py-[41.5005px] md:rounded-[36.313px]";
      default:
        return "text-[15.3473px] bg-white box-border gap-x-[30.6946px] flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-between leading-[24.9393px] gap-y-[30.6946px] border border-gray-200 pt-[38.3682px] pb-[23.0209px] px-[23.0209px] rounded-[40.2866px] border-solid md:text-[15.5627px] md:gap-x-[27.667px] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto md:leading-[23.344px] md:gap-y-[27.667px] md:px-[34.5838px] md:py-[41.5005px] md:rounded-[36.313px]";
    }
  };

  const getFeatureClassName = (index: number) => {
    if (plan.id === 'design-webflow') {
      return "text-[15.3473px] self-start box-border gap-x-[11.5105px] flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] leading-[24.9393px] gap-y-[11.5105px] md:text-[15.5627px] md:gap-x-[10.3751px] md:leading-[23.344px] md:gap-y-[10.3751px]";
    }
    return "text-zinc-500 text-[15.3473px] self-start box-border gap-x-[11.5105px] flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] leading-[24.9393px] gap-y-[11.5105px] md:text-[15.5627px] md:gap-x-[10.3751px] md:leading-[23.344px] md:gap-y-[10.3751px]";
  };

  const getFeatureIconClassName = () => {
    if (plan.id === 'design-webflow') {
      return "text-[15.3473px] items-center box-border flex justify-start leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-white before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-white after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]";
    }
    return "text-[15.3473px] items-center box-border flex justify-start leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-zinc-500 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-zinc-500 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]";
  };

  const getFeatureTextClassName = () => {
    if (plan.id === 'design-webflow') {
      return "text-white/80 text-[15.3473px] items-center box-border gap-x-[5.75523px] flex justify-start leading-[24.9393px] gap-y-[5.75523px] md:text-[15.5627px] md:gap-x-[5.18756px] md:leading-[23.344px] md:gap-y-[5.18756px]";
    }
    return "text-[15.3473px] items-center box-border gap-x-[5.75523px] flex justify-start leading-[24.9393px] gap-y-[5.75523px] md:text-[15.5627px] md:gap-x-[5.18756px] md:leading-[23.344px] md:gap-y-[5.18756px]";
  };

  const getButtonClassName = () => {
    switch (plan.id) {
      case 'webflow-starter':
        return "text-white text-[15.3473px] font-medium bg-gray-900 box-border inline-block tracking-[-0.32px] leading-[23.9418px] text-center border border-gray-900 px-[30.6946px] py-[13.4289px] rounded-[95.9205px] border-solid md:text-[13.8335px] md:leading-[21.5803px] md:px-[27.667px] md:py-[17.2919px] md:rounded-[86.4594px]";
      case 'design-webflow':
        return "text-gray-900 text-[15.3473px] font-medium bg-white box-border block tracking-[-0.32px] leading-[23.9418px] text-center border px-[30.6946px] py-[13.4289px] rounded-[95.9205px] border-solid border-white md:text-[13.8335px] md:leading-[21.5803px] md:px-[27.667px] md:py-[17.2919px] md:rounded-[86.4594px]";
      default:
        return "text-white text-[15.3473px] font-medium bg-gray-900 box-border block tracking-[-0.32px] leading-[23.9418px] text-center border border-gray-900 px-[30.6946px] py-[13.4289px] rounded-[95.9205px] border-solid md:text-[13.8335px] md:leading-[21.5803px] md:px-[27.667px] md:py-[17.2919px] md:rounded-[86.4594px]";
    }
  };

  return (
    <div className={getCardClassName()}>
      {plan.id === 'webflow' && (
        <div className="text-[15.3473px] items-center box-border flex justify-between leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
          <div className="text-[15.3473px] items-end box-border flex-col justify-center leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
            <img src={plan.icon} alt={plan.title} className="text-[15.3473px] box-border inline-block h-[34.5314px] leading-[24.9393px] max-w-full md:text-[15.5627px] md:h-[31.1254px] md:leading-[23.344px]" />
          </div>
          <div className="text-zinc-500 text-[15.3473px] items-center box-border gap-x-[7.67364px] flex justify-start leading-[24.9393px] gap-y-[7.67364px] md:text-[15.5627px] md:gap-x-[6.91675px] md:leading-[23.344px] md:gap-y-[6.91675px]">
            <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">Starter</div>
            <div className="text-[15.3473px] bg-violet-700 box-border h-[30.6946px] leading-[24.9393px] w-[57.5523px] p-[2.87761px] rounded-[95.9205px] md:text-[15.5627px] md:h-[27.667px] md:leading-[23.344px] md:w-[51.8756px] md:p-[2.59378px] md:rounded-[86.4594px]">
              <div className="text-[15.3473px] bg-white box-border h-full leading-[24.9393px] translate-x-[100.0%] w-6/12 rounded-[505px] md:text-[15.5627px] md:leading-[23.344px]"></div>
            </div>
            <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">Grow</div>
          </div>
        </div>
      )}
      
      <div className="text-[15.3473px] box-border gap-x-[30.6946px] flex basis-[0%] flex-col grow justify-between leading-[24.9393px] gap-y-[30.6946px] md:text-[15.5627px] md:gap-x-[27.667px] md:leading-[23.344px] md:gap-y-[27.667px]">
        <div className="text-[15.3473px] box-border gap-x-[30.6946px] flex flex-col leading-[24.9393px] gap-y-[30.6946px] md:text-[15.5627px] md:gap-x-[27.667px] md:leading-[23.344px] md:gap-y-[27.667px]">
          <div className={plan.id === 'design-webflow' ? "text-[15.3473px] items-start border-b-gray-200/40 box-border gap-x-[38.3682px] flex flex-col justify-between leading-[24.9393px] gap-y-[38.3682px] pb-[30.6946px] border-t-white border-x-white border-b md:text-[15.5627px] md:gap-x-[27.667px] md:leading-[23.344px] md:gap-y-[27.667px] md:pb-[27.667px]" : "text-[15.3473px] items-start border-b-gray-200 border-l-gray-900 border-r-gray-900 border-t-gray-900 box-border gap-x-[38.3682px] flex flex-col justify-between leading-[24.9393px] gap-y-[38.3682px] pb-[30.6946px] border-b md:text-[15.5627px] md:gap-x-[27.667px] md:leading-[23.344px] md:gap-y-[27.667px] md:pb-[27.667px]"}>
            <div className="text-[15.3473px] items-end box-border flex-col justify-center leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
              <img src={plan.icon} alt={plan.title} className="text-[15.3473px] box-border inline-block h-[34.5314px] leading-[24.9393px] max-w-full md:text-[15.5627px] md:h-[31.1254px] md:leading-[23.344px]" />
            </div>
            <div className="text-[15.3473px] box-border gap-x-[11.5105px] flex flex-col leading-[24.9393px] gap-y-[11.5105px] md:text-[15.5627px] md:gap-x-[10.3751px] md:leading-[23.344px] md:gap-y-[10.3751px]">
              <div className="text-[19.1841px] font-medium box-border tracking-[-0.36px] leading-[28.7762px] md:text-[20.7503px] md:tracking-[-0.96px] md:leading-[25.7303px]">{plan.title}</div>
              <div className="text-[30.6946px] font-semibold box-border tracking-[-1.28px] leading-[33.764px] font-alliance md:text-[41.5005px] md:tracking-[-1.92px] md:leading-[45.6506px]">
                {plan.price}€<span className={plan.id === 'design-webflow' ? "text-white/80 text-[15.3473px] font-normal box-border tracking-[-0.32px] leading-[23.0209px] ml-[3px] font-inter md:text-[13.8335px] md:leading-[20.7503px]" : "text-zinc-500 text-[15.3473px] font-normal box-border tracking-[-0.32px] leading-[23.0209px] ml-[3px] font-inter md:text-[13.8335px] md:leading-[20.7503px]"}>/month</span>
              </div>
            </div>
          </div>
          <div className="text-[15.3473px] box-border gap-x-[15.3473px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] leading-[24.9393px] gap-y-[15.3473px] py-[7.67364px] md:text-[15.5627px] md:gap-x-[13.8335px] md:leading-[23.344px] md:gap-y-[13.8335px] md:py-[6.91675px]">
            {plan.features.map((feature, index) => (
              <div key={index} className={getFeatureClassName(index)}>
                <div className="text-[15.3473px] self-center box-border shrink-0 leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
                  <div className={getFeatureIconClassName()}>
                    <img src={feature.icon} alt="Icon" className="text-[15.3473px] box-border h-5 leading-[24.9393px] w-5 md:text-[15.5627px] md:leading-[23.344px]" />
                  </div>
                </div>
                <div className={getFeatureTextClassName()}>
                  <div className="text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">{feature.text}</div>
                  {feature.tooltip && (
                    <div className="relative text-[15.3473px] box-border leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px]">
                      <div className="text-[15.3473px] box-border flex leading-[24.9393px] md:text-[15.5627px] md:leading-[23.344px] before:accent-auto before:text-zinc-500 before:table before:text-[15.3473px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.36px] before:leading-[24.9393px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[15.5627px] before:md:leading-[23.344px] after:accent-auto after:clear-both after:text-zinc-500 after:table after:text-[15.3473px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.36px] after:leading-[24.9393px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[15.5627px] after:md:leading-[23.344px]">
                        <img src={feature.tooltipIcon} alt="Icon" className="text-[15.3473px] box-border h-[18px] leading-[24.9393px] w-[18px] md:text-[15.5627px] md:leading-[23.344px]" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <a href="/book-demo" className={getButtonClassName()}>Book a demo</a>
      </div>
    </div>
  );
}
