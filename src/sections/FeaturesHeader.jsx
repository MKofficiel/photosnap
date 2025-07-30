import ResponsiveImage from "../components/ResponsiveImage";

// public\assets\features\mobile\hero.jpg

const FeaturesHeader = () => {
  return (
    <section className="pt-[72px]">
      <div className="border">
        <div className="grid grid-cols-1 bg-black md:grid-cols-[1fr_43%] md:items-center lg:grid-cols-[43%_1fr]">
          <div className="max-md:after-gradient relative">
            <ResponsiveImage
              mobileSrc="/assets/features/mobile/hero.jpg"
              tabletSrc="/assets/features/tablet/hero.jpg"
              desktopSrc="/assets/features/desktop/hero.jpg"
            />
          </div>

          <div className="bg-black px-[24px] py-[72px] md:-order-1 md:px-[54px]">
            <div>
              <h1 className="mb-[16px] text-white">Features</h1>
              <p className="text-white/60">
                We make sure all of our features are designed to be loved by
                every aspiring and even professional photograpers who wanted to
                share their stories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHeader;
