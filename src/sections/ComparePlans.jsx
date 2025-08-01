import { Planfeatures } from "../constants";

const ComparePlans = () => {
  return (
    <section className="md:pb-[112px]">
      <div className="mx-auto max-w-[731px] px-6 md:px-[40px]">
        <h4 className="text-center text-[40px] leading-[48px] font-bold tracking-[4.17px] uppercase max-md:hidden md:mb-[64px]">
          compare
        </h4>
        <div className="mb-[23px] flex w-full justify-between border-b pb-[23px]">
          <h4 className="header-features flex-1">the features</h4>
          <div className="flex flex-1 justify-between max-md:hidden md:grid md:grid-cols-3 md:place-items-center">
            <h4 className="header-features">basic</h4>
            <h4 className="header-features">pro</h4>
            <h4 className="header-features">business</h4>
          </div>
        </div>

        <div className="space-y-[24px]">
          {Planfeatures.map((feature, index) => (
            <div
              key={`${feature.id}-${index}`}
              className="flex w-full border-b border-b-[#dfdfdf] max-md:flex-col md:items-center"
            >
              <div className="flex-1">
                <h4 className="header-features mb-[16.5px]">{feature.name}</h4>
              </div>

              <div className="grid flex-1 grid-cols-3 gap-y-[8px] pb-[25px] md:place-items-center">
                <h4 className="bold text-[10px] tracking-[1.67px] uppercase md:hidden">
                  basic
                </h4>
                <h4 className="bold text-[10px] tracking-[1.67px] uppercase md:hidden">
                  pro
                </h4>
                <h4 className="bold text-[10px] tracking-[1.67px] uppercase md:hidden">
                  business
                </h4>

                {feature.available.map((isAvalaible,index) => (
                  <div key={`${feature.name}-${index}`}>
                    {isAvalaible ? (
                      <img
                        src="/assets/pricing/desktop/check.svg"
                        width={16}
                        height={12}
                        alt="check"
                        className="block object-cover"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
