import NavBar from "../components/NavBar";
import PagesHeader from "../components/PagesHeader";
import { pageHeaders } from "../constants";
import CTA from "../sections/CTA.JSX";
import FeaturesGrid from "../sections/FeaturesGrid";

const Features = () => {
  return (
    <main>
      <NavBar />
      {/* <FeaturesHeader /> */}
      <PagesHeader data={pageHeaders.features} />
      <FeaturesGrid />
      <CTA />
    </main>
  );
};

export default Features;
