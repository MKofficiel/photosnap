import clsx from "clsx";
import { Link } from "react-router";

const Button = ({ children, variant = "primary", className, icon }) => {
  const baseStyle =
    "text-[12px] group inline-flex items-center gap-[18px] font-bold tracking-[2px]  uppercase transition-all duration-300";
  const isPrimary = variant === "primary" ? "after:bg-white" : "after:bg-black";
  const variants = {
    primary: " text-white",
    secondary: "text-black ",
  };
  return (
    <Link className={clsx("", variants[variant], baseStyle, className)}>
      <span
        className={`relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full ${isPrimary}`}
      >
        {children}
      </span>
      <span>{icon}</span>
    </Link>
  );
};

export default Button;
