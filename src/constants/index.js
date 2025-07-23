export const navLinks = [
  { label: "stories", path: "/stories" },
  { label: "features", path: "/features" },
  { label: "pricing", path: "/pricing" },
  { label: "get an invite", path: "/", isCta: true },
];

export const heroContents = [
  {
    id: "hero-1",
    title: ["Create and", "share your", "photo stories."],
    description:
      "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    buttonLabel: "Get an invite",
    buttonVariant: "primary",
    buttonIcon: "/assets/shared/desktop/Arrowwhite.svg",
    image: {
      desktop: "/assets/home/desktop/create-and-share.jpg",
      tablet: "/assets/home/tablet/create-and-share.jpg",
      mobile: "/assets/home/mobile/create-and-share.jpg",
      alt: "Create and share your photo stories",
    },
    gradient: {
      color: "custom-gradient", // classe tailwind ou bg personnalisée
      height: "h-[304px]",
      width: "w-[6px]",
    },
  },

  {
    // public\assets\home\desktop\beautiful-stories.jpg
    id: "hero-2",
    title: ["BEAUTIFUL", "STORIES", "EVERY TIME"],
    description:
      "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    buttonLabel: "VIEW THE STORIES",
    buttonVariant: "secondary",
    buttonIcon: "/assets/shared/desktop/arrow.svg",
    image: {
      desktop: "/assets/home/desktop/beautiful-stories.jpg",
      tablet: "/assets/home/tablet/beautiful-stories.jpg",
      mobile: "/assets/home/mobile/beautiful-stories.jpg",
      alt: "Beautiful stories every time",
    },
    gradient: {
      color: "custom-gradient",
      height: "h-[304px]",
      width: "w-[6px]",
    },
  },
  {
    id: "hero-3",
    title: ["DESIGNED FOR ", "EVERYONE"],
    description:
      "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
    buttonLabel: "VIEW THE STORIES",
    buttonVariant: "secondary",
    buttonIcon: "/assets/shared/desktop/arrow.svg",
    image: {
      // public\assets\home\desktop\designed-for-everyone.jpg
      desktop: "/assets/home/desktop/designed-for-everyone.jpg",
      tablet: "/assets/home/tablet/designed-for-everyone.jpg",
      mobile: "/assets/home/mobile/designed-for-everyone.jpg",
      alt: "Designed for everyone",
    },
    gradient: {
      color: "custom-gradient",
      height: "h-[304px]",
      width: "w-[6px]",
    },
  },
];
