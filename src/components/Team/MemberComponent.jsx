const MemberComponent = ({ img, name = "", position = "" }) => {
  return (
    <div className="w-[calc(20rem - 4vw)] py-4 text-white my-4 mx-4 backdrop-blur-sm z-10 relative border-2 rounded-xl border-primary md:my-6">
      <div className="w-[15rem] mx-3 bg-[#eeedde] rounded-xl border border-primary">
        <img
          src={img}
          alt={name}
          className="w-[90%] mx-auto h-auto hover:-translate-y-8 hover:scale-110 transition-all duration-200 ease-in"
        />
      </div>
      <h2 className="text-xl text-primary font-bold uppercase mt-4">{name}</h2>
      <div className="text-md text-primary/80 font-semibold capitalize">
        {position}
      </div>
    </div>
  );
};

export default MemberComponent;
