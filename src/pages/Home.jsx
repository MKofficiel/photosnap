import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FeaturedStories from "../sections/FeaturedStories";
import Features from "../sections/Features";
import Hero from "../sections/Hero";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <Hero />
      <FeaturedStories />
      <Features />
      <Footer />
    </main>
  );
};

export default Home;
