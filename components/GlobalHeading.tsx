type HeadingProps = {
    title: string;
    subTitle: string;
  };
  
  export const GlobalHeading = ({ title, subTitle }: HeadingProps) => {
    return (
     
        <div className="mb-10">
        <h2 className="mb-3 text-4xl tracking-tighter text-center md:text-4xl font-tomorrow">
          {title}
        </h2>
        <p className="mx-auto text-xs font-normal text-center text-white/50 md:text-sm font-tomorrow w-[60%]">
          {subTitle}
        </p>
        </div>
    );
  };
  