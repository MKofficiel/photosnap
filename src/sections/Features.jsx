import FeaturesCard from "../components/FeaturesCard";
import { featuresHome } from "../constants/index";

const Features = () => {
  return (
    <section className="py-[80px] md:py-[120px]">
      <div className="custom-container px-6">
        <div className="grid grid-cols-1 max-lg:gap-y-[80px] max-md:gap-y-[56px] lg:grid-cols-3">
          {featuresHome.slice(0, 3).map((feature) => (
            <FeaturesCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
