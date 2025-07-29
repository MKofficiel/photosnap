const FeaturesCard = ({ title, icon, description }) => {
  return (
    <div className="h-full">
      <div className="flex h-full flex-col items-center justify-center gap-[48px]">
        <img src={icon} alt={`${title} icon`} />

        <div className="flex flex-1 items-end text-center">
          <div className="max-lg:max-w-[350px]">
            <h3 className="mb-4">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
