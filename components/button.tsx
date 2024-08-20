export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative px-3 py-2 font-tomorrow  text-sm font-medium  hover:from-[#000000] hover:to-[#7A1000]  rounded-full bg-gradient-to-b from-[#7A1000] to-[#FE9D00] shadow-[0px_0px_12px_#A92000] transition duration-1000">
      <div className="absolute inset-0">
        <div className=" rounded-full absolute inset-0 border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className=" rounded-full absolute inset-0 border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgba(169,32,0,0.7)_inset] rounded-full"></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};
