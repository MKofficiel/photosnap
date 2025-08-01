import PagesHeader from "../components/PagesHeader";
import { pageHeaders } from "../constants";
import CTA from "../sections/CTA.jsx";

import FeaturesGrid from "../sections/FeaturesGrid";

const Features = () => {
  return (
    <main>
      {/* <FeaturesHeader /> */}
      <PagesHeader data={pageHeaders.features} />
      <FeaturesGrid />

      <CTA />
    </main>
  );
};

export default Features;
