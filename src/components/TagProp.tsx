interface TagPropTypes {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const TagProp = ({ text, className = "", style = {} }: TagPropTypes) => {
  // const defaultClasses =
  //   "border border-mediumGray px-3 py-1 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 xl:px-16 xl:py-4 text-primaryGray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  active:bg-primaryGray active:text-slate-50";
  return (
    // <button className="border border-mediumGray px-16 py-4 rounded-full text-primaryGray text-xl hover:cursor-pointer active:bg-primaryGray active:text-slate-50">
    <button
      className={`rounded-full hover:cursor-pointer ${className}`}
      style={style}
    >
      <p>{text}</p>
    </button>
  );
};

export default TagProp;
