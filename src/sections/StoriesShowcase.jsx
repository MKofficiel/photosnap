import StoriesCards from "../components/StoriesCards";
import { storyCards } from "../constants";

const StoriesShowcase = () => {
  return (
    <section>
      <div className="grid max-sm:grid-rows-4 md:grid-cols-2 lg:grid-cols-4">
        {storyCards.map((story) => (
          <StoriesCards key={story.title} story={story} />
        ))}
      </div>
    </section>
  );
};

export default StoriesShowcase;
