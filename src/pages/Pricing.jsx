import PagesHeader from "../components/PagesHeader";
import { pageHeaders } from "../constants";
import ComparePlans from "../sections/ComparePlans";
import CTA from "../sections/CTA";
import PricingPlans from "../sections/PricingPlans";

const Pricing = () => {
  return (
    <main>
      <PagesHeader data={pageHeaders.pricing} />
      <PricingPlans />
      <ComparePlans />
      <CTA />
    </main>
  );
};

export default Pricing;
