import NavBar from "../components/NavBar";
import CTA from "../sections/CTA.JSX";
import FeaturesGrid from "../sections/FeaturesGrid";
import FeaturesHeader from "../sections/FeaturesHeader";

const Features = () => {
  return (
    <main>
      <NavBar />
      <FeaturesHeader />
      <FeaturesGrid />
      <CTA />
    </main>
  );
};

export default Features;
