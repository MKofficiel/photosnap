import clsx from "clsx";
import Button from "../components/Button";
import ResponsiveImage from "../components/ResponsiveImage";
import { heroContents } from "../constants";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[70px]">
      {heroContents.map(
        (
          {
            id,
            title,
            description,
            buttonLabel,
            buttonVariant,
            buttonIcon,
            image,

            gradient,
          },
          index,
        ) => {
          const isEven = index % 2 === 0;

          const gridClasses = clsx(
            "grid grid-cols-1 items-center",

            {
              // desktop : texte + image (image à 57%)
              // "lg:grid-cols-[4fr_57%] md:grid-cols-[57%_1fr] ": isEven,
              "lg:grid-cols-[43%_1fr] md:grid-cols-[1fr_43%] ": isEven,
              // desktop : image + texte (image à 57%)
              "lg:grid-cols-[1fr_43%] md:grid-cols-[43%_1fr]  ": !isEven,
              "bg-black": index === 0,
              "": index !== 0,
            },
          );

          return (
            <div key={id} className={gridClasses}>
              {/* Texte box */}
              <div
                className={clsx(
                  "flex flex-col justify-center px-6 py-[72px] md:px-[54px] lg:px-[110px]",

                  !isEven && "order-2",
                  index === 0 ? "text-white" : "text-black",
                )}
              >
                <h1 className={clsx("mb-4 text-3xl font-semibold md:text-4xl")}>
                  {title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p
                  className={clsx(
                    "mb-6 text-lg",
                    index === 0 ? "text-white/60" : "text-black/60",
                  )}
                >
                  {description}
                </p>
                <Button
                  variant={buttonVariant}
                  icon={<img src={buttonIcon} alt="arrow icon" />}
                >
                  {buttonLabel}
                </Button>
              </div>

              {/* Image box */}
              <div
                className={clsx(
                  "h-full w-full max-md:-order-1",
                  isEven ? "order-2" : "order-1",
                )}
              >
                <ResponsiveImage
                  desktopSrc={image.desktop}
                  tabletSrc={image.tablet}
                  mobileSrc={image.mobile}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
                {gradient && (
                  <div
                    className={clsx(
                      "pointer-events-none absolute inset-0",
                      gradient,
                    )}
                  />
                )}
              </div>
            </div>
          );
        },
      )}
    </section>
  );
};

export default Hero;
