const FeaturesCard = ({ title, icon, description }) => {
  return (
    <div>
      <div className="flex h-full flex-col items-center justify-center gap-[48px]">
        <div className="">
          <img src={icon} alt={`${title} icon`} />
        </div>

        <div className="mt-auto flex flex-1 items-end text-center">
          <div className="md:max-w-[339px]">
            <h3 className="mb-4">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
