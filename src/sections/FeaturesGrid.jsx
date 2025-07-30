import FeaturesCard from "../components/FeaturesCard";
import { featuresHome } from "../constants";

const FeaturesGrid = () => {
  return (
    <section className="py-[54px] lg:py-[160px]">
      <div className="custom-container px-6">
        <div className="grid h-full grid-cols-1 gap-y-[72px] max-md:gap-y-[56px] md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[30px]">
          {featuresHome.map((feature) => (
            <FeaturesCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
