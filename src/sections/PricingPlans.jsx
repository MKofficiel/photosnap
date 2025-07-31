import clsx from "clsx";
import { useState } from "react";
import { pricingPlans } from "../constants";
import CountUp from "react-countup";

const PricingPlans = () => {
  const [monthly, setMontly] = useState(true);
  return (
    <section className="py-[64px] md:py-[112px] lg:pt-[120px] lg:pb-[160px]">
      <div className="custom-container px-6">
        <div className="mx-auto mb-[40px] flex max-w-[255px] items-center gap-[32px] text-black/50">
          <span
            className={clsx(
              "block text-[18px] font-bold",
              monthly && "text-black",
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setMontly((prev) => !prev)}
            className={clsx(
              "relative h-[32px] w-full flex-1 cursor-pointer rounded-[16px] p-[4px] transition-all duration-300",
              monthly ? "bg-[#dfdfdf]" : "bg-black",
            )}
          >
            <div
              className={clsx(
                "absolute top-1/2 size-[24px] -translate-y-1/2 rounded-full transition-transform duration-500",
                monthly ? "bg-black" : "translate-x-[32px] bg-white",
              )}
            />
          </button>
          <span
            className={clsx(
              "block text-[18px] font-bold",
              !monthly && "text-black",
            )}
          >
            Yearly
          </span>
        </div>
        {/* PRICING CARD */}

        <div className="grid grid-cols-1 gap-y-[24px] lg:grid-cols-3 lg:items-center lg:gap-x-[24px]">
          {pricingPlans.map(
            ({ name, description, priceMonthly, priceYearly }, index) => (
              <div
                key={name}
                className={clsx(
                  "",
                  index === 1
                    ? "before:bg-accent-primary relative bg-black shadow-2xl before:content-['']"
                    : "bg-[#f5f5f5]",
                )}
              >
                <div
                  className={clsx(
                    "space-y-[40px] px-[40px] pt-[56px] pb-[40px] text-center max-lg:grid-cols-2 max-lg:text-left max-md:text-center md:grid",
                    index === 1 ? "text-white lg:pt-[88px] lg:pb-[71px]" : "",
                  )}
                >
                  <div>
                    <span className="mb-[18px] block text-[24px] leading-[25px] font-bold">
                      {name}
                    </span>
                    <p
                      className={clsx(
                        "text-black/60",
                        index == 1 ? "text-white/60" : "",
                      )}
                    >
                      {description}
                    </p>
                  </div>
                  <div className="max-lg:items-end max-lg:justify-self-end max-md:items-start max-md:justify-self-center md:flex md:flex-col">
                    <div>
                      <p className="text-[40px] leading-[48px] font-bold tracking-[4.17px]">
                        $
                        <CountUp
                          start={priceMonthly}
                          end={monthly ? priceMonthly : priceYearly}
                          duration={0.4}
                          useEasing={false}
                          preserveValue
                          decimals={2}
                        />
                      </p>
                    </div>
                    <div className="md:mr-[8px]">
                      <span
                        className={clsx(
                          "block text-[15px] leading-[25px] text-black/60",
                          index == 1 ? "text-white/60" : "",
                        )}
                      >
                        per {monthly ? "month" : " year"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      className={clsx(
                        "w-full cursor-pointer bg-black py-[12px] text-[12px] font-bold tracking-[2px] text-black uppercase transition-all duration-500",
                        index === 1
                          ? "bg-white text-black hover:bg-[#dfdfdf]"
                          : "text-white hover:bg-[#979797] hover:text-black",
                      )}
                    >
                      pick plan
                    </button>
                  </div>
                </div>
                {index === 1 && (
                  <div className="bg-gradient-main absolute md:bottom-0 md:left-0 md:h-full md:w-[6px] lg:top-0 lg:h-[6px] lg:w-full" />
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
