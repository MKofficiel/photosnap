import StoriesCards from "../components/StoriesCards";
import { storyCards } from "../constants/index";

const FeaturedStories = () => {
  return (
    <section className="">
      {/* C:\Users\DELL\Desktop\photosnap\public\assets\stories\desktop\18-days-voyage.jpg */}
      <div className="grid max-sm:grid-rows-4 md:grid-cols-2 lg:grid-cols-4">
        {storyCards.slice(0, 4).map((story) => (
          <StoriesCards key={story.title} story={story} />
        ))}
        {/* <figure className="flex h-[360px] cursor-pointer items-end bg-[url('/assets/stories/desktop/18-days-voyage.jpg')] bg-cover bg-center px-[40px] pb-[40px] transition-transform duration-300 hover:translate-y-[-2px]">
          <div className="flex-1 text-white">
            <div className="mb-5 border-b border-[#979797] pb-4">
              <h3>The Mountains</h3>
              <p className="text-[13px]">by John Appleseed</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[12px] font-bold tracking-[2px] uppercase">
                Ready story
              </p>

              <img
                src="/assets/shared/desktop/Arrowwhite.svg"
                alt="arrow icon"
              />
            </div>
          </div>
        </figure> */}
      </div>
    </section>
  );
};

export default FeaturedStories;
