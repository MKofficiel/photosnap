import Button from "../components/Button";
const CTA = () => {
  return (
    <section className="bg-cta relative">
      <div className="relative z-10 px-6 py-[64px] md:px-[40px] md:py-[68px] lg:px-[165px]">
        <div className="flex flex-col max-md:gap-[24px] md:flex-row md:items-center md:justify-between">
          <h1 className="flex-1 text-white lg:max-w-[400px]">
            <span className="block">We’re in beta.</span>
            <span className="block">Get your invite </span>
            today!
          </h1>
          <div className="">
            <Button
              icon={<img src="/assets/shared/desktop/Arrowwhite.svg" alt="" />}
            >
              get an invite
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/51" />
      <div className="gradient-main absolute top-0 left-6 h-[6px] w-[128px] md:left-0 md:h-full md:w-[6px] lg:hidden" />
    </section>
  );
};

export default CTA;
