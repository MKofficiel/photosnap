import { href } from "react-router";

export const navLinks = [
  { label: "home", path: "/" },
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

export const storyCards = [
  {
    date: "April 16th 2020",
    title: "18 Days Voyage",
    author: "by Alexei Borodin",
    image: {
      desktop: "/assets/stories/desktop/18-days-voyage.jpg",
      mobile: "/assets/stories/mobile/18-days-voyage.jpg",
      alt: "18 Days Voyage",
    },
  },

  {
    date: "April 9th 2020",
    title: "Calm Waters",
    author: "by Samantha Brooke",
    image: {
      desktop: "/assets/stories/desktop/calm-waters.jpg",
      mobile: "/assets/stories/mobile/calm-waters.jpg",
      alt: "Calm Waters",
    },
  },
  {
    date: "April 7th 2020",
    title: "Cityscapes",
    author: "by Timothy Wagner",
    image: {
      desktop: "/assets/stories/desktop/cityscapes.jpg",
      mobile: "/assets/stories/mobile/cityscapes.jpg",
      alt: "Cityscapes",
    },
  },
  {
    date: "April 5th 2020",
    title: "Dark Forest",
    author: "by William Malcolm",
    image: {
      desktop: "/assets/stories/desktop/dark-forest.jpg",
      mobile: "/assets/stories/mobile/dark-forest.jpg",
      alt: "Dark Forest",
    },
  },
  {
    date: "April 3rd 2020",
    title: "King on Africa",
    author: "by Tim Hillenburg",
    image: {
      desktop: "/assets/stories/desktop/king-on-africa.jpg",
      mobile: "/assets/stories/mobile/king-on-africa.jpg",
      alt: "King on Africa",
    },
  },
  {
    date: "April 1st 2020",
    title: "Land of Dreams",
    author: "by William Malcolm",
    image: {
      desktop: "/assets/stories/desktop/land-of-dreams.jpg",
      mobile: "/assets/stories/mobile/land-of-dreams.jpg",
      alt: "Land of Dreams",
    },
  },
  {
    date: "March 30th 2020",
    title: "Milky Way",
    author: "by Benjamin Cruz",
    image: {
      desktop: "/assets/stories/desktop/milky-way.jpg",
      mobile: "/assets/stories/mobile/milky-way.jpg",
      alt: "Milky Way",
    },
  },
  {
    date: "March 28th 2020",
    title: "Moon of Appalachia",
    author: "by John Appleseed",
    image: {
      desktop: "/assets/stories/desktop/moon-of-appalacia.jpg",
      mobile: "/assets/stories/mobile/moon-of-appalacia.jpg",
      alt: "Moon of Appalachia",
    },
  },
  {
    date: "March 26th 2020",
    title: "Mountains",
    author: "by John Appleseed",
    image: {
      desktop: "/assets/stories/desktop/mountains.jpg",
      mobile: "/assets/stories/mobile/mountains.jpg",
      alt: "The Mountains",
    },
  },
  {
    date: "March 24th 2020",
    title: "Rage of the Sea",
    author: "by Samantha Brooke",
    image: {
      desktop: "/assets/stories/desktop/rage-of-the-sea.jpg",
      mobile: "/assets/stories/mobile/rage-of-the-sea.jpg",
      alt: "Rage of the Sea",
    },
  },
  {
    date: "March 22nd 2020",
    title: "Running Free",
    author: "by Timothy Wagner",
    image: {
      desktop: "/assets/stories/desktop/running-free.jpg",
      mobile: "/assets/stories/mobile/running-free.jpg",
      alt: "Running Free",
    },
  },
  {
    date: "March 20th 2020",
    title: "Somwarpet’s Beauty",
    author: "by Benjamin Cruz",
    image: {
      desktop: "/assets/stories/desktop/somwarpet.jpg",
      mobile: "/assets/stories/mobile/somwarpet.jpg",
      alt: "Somwarpet’s Beauty",
    },
  },
  {
    date: "March 18th 2020",
    title: "Trip to Nowhere",
    author: "by Samantha Brooke",
    image: {
      desktop: "/assets/stories/desktop/trip-to-nowhere.jpg",
      mobile: "/assets/stories/mobile/trip-to-nowhere.jpg",
      alt: "Trip to Nowhere",
    },
  },
  {
    date: "March 16th 2020",
    title: "Unforeseen Corners",
    author: "by William Malcolm",
    image: {
      desktop: "/assets/stories/desktop/unforeseen-corners.jpg",
      mobile: "/assets/stories/mobile/unforeseen-corners.jpg",
      alt: "Unforeseen Corners",
    },
  },
  {
    date: "March 14th 2020",
    title: "World Tour 2019",
    author: "by Timothy Wagner",
    image: {
      desktop: "/assets/stories/desktop/world-tour.jpg",
      mobile: "/assets/stories/mobile/world-tour.jpg",
      alt: "World Tour 2019",
    },
  },

  {
    date: "March 14th 2020",
    title: "Architecturals",
    author: "by Samantha Brooke",
    image: {
      desktop: "/assets/stories/desktop/architecturals.jpg",
      mobile: "/assets/stories/mobile/architecturals.jpg",
      alt: "World Tour 2019",
    },
  },
];

export const featuresHome = [
  {
    icon: "/assets/features/desktop/responsive.svg",
    title: "100% Responsive",
    description:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    icon: "/assets/features/desktop/no-limit.svg",
    title: "No Photo Upload Limit",
    description:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    icon: "/assets/features/desktop/embed.svg",
    title: "Available to Embed",
    description:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
  },
  {
    icon: "/assets/features/desktop/custom-domain.svg",
    title: "Custom Domain",
    description:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    icon: "/assets/features/desktop/boost-exposure.svg",
    title: "Boost Your Exposure",
    description:
      "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    icon: "/assets/features/desktop/drag-drop.svg",
    title: "Drag & Drop Image",
    description:
      "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
];

export const iconsSocials = [
  {
    name: "facebook",
    href: "https://www.facebook.com",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <defs>
          <linearGradient id="grad1" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="#63AFDB" />
            <stop offset="100%" stop-color="#6028F1" />
          </linearGradient>
        </defs>
        <path
          fill="white"
          className="transition-all duration-800 group-hover:fill-[url(#grad1)]"
          d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
        />
      </svg>
    ),
  },
  {
    name: "youtube",
    href: "https://www.youtube.com",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
        <defs>
          <linearGradient id="grad2" x1="0%" x2="100%" y1="100%" y2="0%">
            <stop offset="0%" stop-color="#D3205A" />
            <stop offset="100%" stop-color="#FF5A5A" />
          </linearGradient>
        </defs>
        <path
          fill="white"
          className="transition-all duration-300 group-hover:fill-[url(#grad2)]"
          d="M43.33 0c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.653.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zm-5.367-6.029l4.098 1.949-4.098 1.955V8.048z"
          transform="translate(-33)"
        />
      </svg>
    ),
  },
  {
    name: "twitter",
    href: "https://twitter.com",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18">
        <defs>
          <linearGradient
            id="grad3"
            x1="100%"
            x2="0%"
            y1="16.979%"
            y2="83.021%"
          >
            <stop offset="0%" stop-color="#65FFEB" />
            <stop offset="100%" stop-color="#27718A" />
          </linearGradient>
        </defs>
        <path
          fill="white"
          className="transition-all duration-300 group-hover:fill-[url(#grad3)]"
          d="M86.66 3.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996 4.096 4.096 0 00-2.995-1.296c-2.65 0-4.596 2.472-3.998 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.901 1.318 3.68 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"
          transform="translate(-66 -1)"
        />
      </svg>
    ),
  },
  {
    name: "pinterest",
    href: "https://www.pinterest.com",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <defs>
          <linearGradient id="grad4" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="#F6C683" />
            <stop offset="100%" stop-color="#DE3838" />
          </linearGradient>
        </defs>
        <path
          fill="white"
          className="transition-all duration-300 group-hover:fill-[url(#grad4)]"
          d="M109.99 0c-5.522 0-10 4.477-10 10 0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.33 1.781.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10s-4.477-10-10-10z"
          transform="translate(-100)"
        />
      </svg>
    ),
  },

  {
    name: "instagram",
    href: "https://www.instagram.com",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
        <defs>
          <linearGradient id="grad5" x1="0%" x2="50%" y1="100%" y2="0%">
            <stop offset="0%" stop-color="#FFC593" />
            <stop offset="51.945%" stop-color="#BC7198" />
            <stop offset="100%" stop-color="#5A77FF" />
          </linearGradient>
        </defs>
        <path
          fill="white"
          className="transition-all duration-300 group-hover:fill-[url(#grad5)]"
          d="M143.32 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802c-2.716 0-3.056.012-4.123.06-3.631.167-5.65 2.182-5.816 5.817-.05 1.067-.061 1.407-.061 4.123s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122c-.163-3.629-2.18-5.65-5.816-5.817C146.377.01 146.036 0 143.32 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
          transform="translate(-133)"
        />
      </svg>
    ),
  },
];

export const pageHeaders = {
  features: {
    title: "Features",
    description:
      "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
    images: {
      mobile: "/assets/features/mobile/hero.jpg",
      tablet: "/assets/features/tablet/hero.jpg",
      desktop: "/assets/features/desktop/hero.jpg",
    },
  },

  pricing: {
    title: "Pricing",
    description:
      "Create stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
    images: {
      mobile: "/assets/pricing/mobile/hero.jpg",
      tablet: "/assets/pricing/tablet/hero.jpg",
      desktop: "/assets/pricing/desktop/hero.jpg",
    },
  },
};

export const pricingPlans = [
  {
    name: "Basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    priceMonthly: 19,
    priceYearly: 190,
  },
  {
    name: "Pro",
    description:
      "More advanced features available. Recommended for photography veterans and professionals.",
    priceMonthly: 39,
    priceYearly: 390,
  },
  {
    name: "Business",
    description:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    priceMonthly: 99,
    priceYearly: 990,
  },
];

export const Planfeatures = [
  {
    name: "Unlimited Story Posting",
    available: [true, true, true], // Basic, Pro, Business
  },
  {
    name: "Unlimited Photo Upload",
    available: [true, true, true],
  },
  {
    name: "Embedding Custom Content",
    available: [false, true, true],
  },
  {
    name: "Customize Metadata",
    available: [false, true, true],
  },
  {
    name: "Advanced Metrics",
    available: [false, false, true],
  },
  {
    name: "Photo Downloads",
    available: [false, false, true],
  },
  {
    name: "Search Engine Indexing",
    available: [false, false, true],
  },
  {
    name: "Custom Analytics",
    available: [false, false, true],
  },
];
