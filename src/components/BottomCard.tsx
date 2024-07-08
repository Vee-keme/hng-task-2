import BlackShirt from "../assets/shirt.png";

const BottomCardData = [
  {
    image: BlackShirt,
    title: "Casual Wear",
    categoryNumber: "Over 20 categories in stockr",
  },
  {
    image: BlackShirt,
    title: "Casual Wear",
    categoryNumber: "Over 20 categories in stock",
  },
  {
    image: BlackShirt,
    title: "Casual Wear",
    categoryNumber: "Over 20 categories in stock",
  },
  {
    image: BlackShirt,
    title: "Casual Wear",
    categoryNumber: "Over 20 categories in stock",
  },
];

const BottomCard = () => {
  return BottomCardData.map((card, index) => {
    const { image, title, categoryNumber } = card;
    return (
      <div className="lastCard space-y-2 min-w-[150px]" key={index}>
        <div className="bg-mediumGray w-fit p-6 rounded-lg">
          <img src={image} alt="item image" />
        </div>
        <h3 className="text-primaryGray text-center font-bold text-xl">
          {title}
        </h3>
        <p className="text-mediumGray text-center text-lg">{categoryNumber}</p>
      </div>
    );
  });
};

export default BottomCard;
