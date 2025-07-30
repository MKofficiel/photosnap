import useResponsiveImage from "../hooks/UseResponsiveImage";

export default function ResponsiveImage({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt,
  className = "w-full object-cover h-full",
}) {
  const screen = useResponsiveImage();

  let src;
  if (screen === "mobile") src = mobileSrc;
  if (screen === "tablet") src = tabletSrc;
  else src = desktopSrc;
  return <img src={src} className={className} alt={alt} />;
}
