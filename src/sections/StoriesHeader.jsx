import Button from "../components/Button";

const StoriesHeader = () => {
  return (
    <section className="mt-[70px]">
      <div className="bg-stories-header max-md:grid max-md:grid-rows-[auto_1fr]">
        {/* IMAGE */}
        <div className="block min-h-[317px] w-full md:hidden">
          <img
            src="/assets/stories/mobile/moon-of-appalacia.jpg"
            className="h-full w-full object-cover md:hidden"
            alt=""
          />
        </div>
        {/* TEXT CONTENT */}
        <div className="max-md:bg-black max-md:px-[24px] max-md:py-[48px] md:px-[40px] md:py-[122px] lg:pl-[112px]">
          <span className="mb-[16px] block text-[12px] tracking-[2px] text-white uppercase lg:mb-[24px]">
            LAST MONTH’S FEATURED STORY
          </span>
          <h1 className="mb-[56px] text-white">
            <span className="block">HAZY FULL MOON</span>
            <span>OF APPALACHIA</span>
          </h1>
          <div className="space-y-[24px]">
            <div className="text-[13px]">
              <span className="text-white/75">March 2nd 2020</span>
              <span className="text-white">by John Appleseed</span>
            </div>
            <p className="max-w-md text-white/60">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>

            <Button
              icon={<img src="/assets/shared/desktop/Arrowwhite.svg" alt="" />}
            >
              read the story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesHeader;
