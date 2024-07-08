import Bag from "../assets/bag.png";

// interface Props {
//   itemname: string;
// }

const SmallCard = () => {
  return (
    <>
      {data.map((item, index) => {
        const { itemName } = item;
        return (
          <div className="card flex-1 basis-[15%] " key={index}>
            <div className="border-2 rounded-xl border-mediumGray p-4 w-full flex flex-col items-center justify-center space-y-1">
              <div className=" bg-lightGray rounded-lg flex justify-center py-3 px-4 ">
                <img
                  className="h-[50%] w-[50%] self-center"
                  src={Bag}
                  alt="hear-icon"
                />
              </div>

              <p className="text-primaryGray">{itemName}</p>
              <a
                href="#"
                className="text-xs text-mediumGray text-center text-nowrap "
              >
                See all collections
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SmallCard;

const data = [
  {
    itemName: "Shoes",
  },
  {
    itemName: "Bags",
  },
  {
    itemName: "Jackets",
  },
  {
    itemName: "Lingerie",
  },
  {
    itemName: "Belts",
  },
  {
    itemName: "Street Wear",
  },
  {
    itemName: "Sunglasses",
  },
  {
    itemName: "Sun Wear",
  },
  {
    itemName: "Hats",
  },
  {
    itemName: "Slippers",
  },
  {
    itemName: "Wigs",
  },
  {
    itemName: "Cosmetics",
  },
];
