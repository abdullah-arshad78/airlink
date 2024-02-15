const ServiceCard = ({ children }) => {
  return (
    <div className="flex items-center justify-center multi-coloured-bg rounded-lg shadow-lg ">
      <div className="px-2 py-4 rounded-lg bg-gray-300  w-[98%] h-[97%] flex flex-col items-center -justify-center">
        {children}
      </div>
    </div>
  );
};

export default ServiceCard;
