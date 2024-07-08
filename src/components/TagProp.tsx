interface TagPropTypes {
  text: string;
}

const TagProp = ({ text }: TagPropTypes) => {
  return (
    <button className="border border-mediumGray px-16 py-4 rounded-full text-primaryGray text-xl hover:cursor-pointer active:bg-primaryGray active:text-slate-50">
      <p>{text}</p>
    </button>
  );
};

export default TagProp;
