import ResponsiveImage from "./ResponsiveImage";

const PagesHeader = ({ data }) => {
  const { images, title, description } = data;
  return (
    <section className="pt-[72px]">
      <div className="border">
        <div className="grid grid-cols-1 bg-black md:grid-cols-[1fr_43%] md:items-center lg:grid-cols-[43%_1fr]">
          <div className="max-md:after-gradient relative">
            <ResponsiveImage
              mobileSrc={images.mobile}
              tabletSrc={images.tablet}
              desktopSrc={images.desktop}
            />
          </div>

          <div className="bg-black px-[24px] py-[72px] md:-order-1 md:px-[54px]">
            <div>
              <h1 className="mb-[16px] text-white">{title}</h1>
              <p className="text-white/60">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagesHeader;
