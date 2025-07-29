import { Link } from "react-router";
import { navLinks } from "../constants/index";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NavBar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-60 w-full px-[165px] transition-all duration-500 max-xl:px-[39px] max-md:px-6",
        hasScrolled && "bg-white py-2 backdrop-blur-[8px]",
      )}
    >
      <nav className="relative h-[72px] max-md:py-[28px]">
        <div className="flex h-full w-full items-center justify-between">
          {/* Logo */}
          <div className="">
            <Link to="/">
              <img src="/assets/shared/desktop/logo.svg" alt="logo" />
            </Link>
          </div>

          {/* MENU MOBILE ICON */}

          <button
            className="md:hidden"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <img
              src={`assets/shared/mobile/${isOpen ? "close" : "menu"}.svg`}
              alt={`${isOpen ? "icon close" : "icon hamburger"}`}
            />
          </button>

          {/* NAV LINKS DESKTOP */}

          <div className="hidden justify-center md:flex">
            <ul className="flex items-center gap-[37px] max-md:flex-col">
              {navLinks
                .filter((link) => !link.isCta && link.label !== "home")
                .map(({ label, path }) => (
                  <li key={label} className="group">
                    <Link
                      to={path}
                      className="text-[12px] font-bold tracking-[2px] uppercase transition-all duration-300 group-hover:text-black/30"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="hidden justify-end md:flex">
            {navLinks
              .filter((link) => link.isCta)
              .map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className="hover:bg-grey-light bg-black px-6 py-3 text-[12px] font-bold tracking-[2px] text-white uppercase transition-all duration-300 hover:text-black"
                >
                  {label}
                </Link>
              ))}
          </div>
          {/* END NAV LINKS DESKTOP */}
        </div>
      </nav>
      {/* NAV MOBILE */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 z-50 w-full py-4 shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 px-6">
            {navLinks.map(({ label, path, isCta }) => (
              <li key={label} className={clsx(isCta && "w-full")}>
                <Link
                  to={path}
                  className={clsx(
                    "block text-[12px] font-bold tracking-[2px] uppercase",
                    isCta
                      ? "bg-black px-6 py-3 text-center text-white hover:bg-gray-800"
                      : "py-2 text-black",
                  )}
                  onClick={() => setIsOpen(false)} // ferme le menu après clic
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
