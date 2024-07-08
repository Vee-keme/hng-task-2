interface TagPropTypes {
  text: string;
}

const TagProp = ({ text }: TagPropTypes) => {
  return (
    // <button className="border border-mediumGray px-16 py-4 rounded-full text-primaryGray text-xl hover:cursor-pointer active:bg-primaryGray active:text-slate-50">
    <button className="border border-mediumGray px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 xl:px-16 xl:py-4 rounded-full text-primaryGray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:cursor-pointer active:bg-primaryGray active:text-slate-50">
      <p>{text}</p>
    </button>
  );
};

export default TagProp;
