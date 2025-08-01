import clsx from "clsx";

const StoriesCards = ({ story }) => {
  const {
    title,
    author,

    image: { desktop, alt: imageAlt },
  } = story;

  return (
    <figure
      className={clsx(
        "group relative flex h-[500px] cursor-pointer items-end bg-cover bg-center px-[40px] pb-[40px] transition-transform duration-300 hover:translate-y-[-20px]",
      )}
    >
      <div className="relative z-30 flex-1 text-white">
        <div className="mb-5 border-b border-[#979797] pb-4">
          <h3>{title}</h3>
          <p className="text-[13px]">{author}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[12px] font-bold tracking-[2px] uppercase">
            Read story
          </p>

          <img src="/assets/shared/desktop/Arrowwhite.svg" alt="arrow" />
        </div>
      </div>

      <img
        src={desktop}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="custom-gradient-secondary absolute inset-0" />

      <div className="custom-gradient absolute bottom-0 left-0 z-10 w-full group-hover:h-2" />
    </figure>
  );
};

export default StoriesCards;
