import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PageWrapper from "../components/PageWrapper";
import FeaturedStories from "../sections/FeaturedStories";
import Features from "../sections/Features";
import Hero from "../sections/Hero";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <PageWrapper>
        <NavBar />
        <Hero />
        <FeaturedStories />
        <Features />
        <Footer />
      </PageWrapper>
    </main>
  );
};

export default Home;
