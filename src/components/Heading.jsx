// Reuseble Components................

const Heading = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <h1 className="text-center text-4xl font-thin">{title}</h1>
      
      <p className="text-center text-neutral font-thin">{subTitle}</p>
    </div>
  );
};

export default Heading;
