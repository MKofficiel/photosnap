import { Link } from "react-router";
import { iconsSocials, navLinks } from "../constants/index";
import clsx from "clsx";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="px-[24px] py-[56px] md:px-[40px] lg:px-[165px] lg:py-[64px]">
        {/* CONTENT BOX */}
        <div className="grid max-md:place-items-center md:grid-cols-2 lg:grid-cols-3">
          {/* Logo */}
          <div className="max-lg:mb-[32px]">
            <Link to="/">
              <img
                src="/assets/shared/desktop/LogoWhite.svg"
                alt=""
                width={170}
                height={16}
              />
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-[15px] max-md:mb-[49px] md:row-start-3 md:mt-[72px]">
            {iconsSocials.map(({ name, svg, href }) => (
              <a href={href} key={name} className="group">
                {svg}
              </a>
            ))}
          </div>

          {/* Nav Links */}
          <div className="max-md:mb-[119px] lg:row-span-3 lg:justify-self-start">
            <ul className="flex max-lg:items-center max-md:flex-col max-md:gap-[20px] md:gap-[26px] lg:flex-col lg:gap-[19px]">
              {navLinks
                .filter((link) => !link.isCta)
                .map(({ label, path, isCta }) => (
                  <li key={label}>
                    <Link
                      className={clsx(
                        "text-[12px] font-bold tracking-[2px] uppercase transition-all duration-500 hover:text-white/50",
                        isCta && "flex items-center gap-[20px]",
                      )}
                      to={path}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="max-md:mb-[34px] md:col-start-2 md:col-end-3 md:row-start-1 md:justify-self-end lg:col-start-3">
            <Button
              icon={<img src={`/assets/shared/desktop/Arrowwhite.svg`} />}
            >
              get an invite
            </Button>
          </div>

          {/* Copyright */}
          <div className="md:row-start-3 md:self-end md:justify-self-end lg:col-start-3">
            <p className="text-[15px] text-white/50">
              Copyright 2025. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
