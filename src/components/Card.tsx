import Heart from "../assets/heart.png";
import Bag from "../assets/bag.png";
import Star from "../assets/star.png";

interface CardTypes {
  itemTitle: string;
  brand: string;
  gender: string;
  price: string;
}

const Card = ({ itemTitle }: CardTypes) => {
  return (
    <>
      {itemTitle}
      <div className="card flex-1 basis-[30%]">
        <div className="border-2 rounded-lg border-mediumGray p-4 w-full">
          <div className="space-y-2">
            <div className="bg-lightGray rounded-lg ">
              <div className="flex justify-between p-4">
                <div className="bg-slate-50 p-2 rounded-full flex">
                  <img
                    className="h-[90%] w-[90%] self-center"
                    src={Heart}
                    alt="hear-icon"
                  />
                </div>

                <div className="bg-slate-50 px-[10px] py-[5px] rounded-3xl text-primaryGray">
                  <p>In Stock</p>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-0 pt-0">
                <img src={Bag} alt="bag-icon" className="self-center" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="border border-mediumGray px-[10px] py-[5px] rounded-3xl text-mediumGray">
                <p>women</p>
              </div>
              <div className="flex text-primaryGray">
                <span>
                  <img src={Star} alt="star" />
                </span>
                <p>2k rating</p>
              </div>
            </div>
          </div>

          <div className="card-bottom flex justify-between mt-4">
            <div className="space-y-5">
              <div>
                <h3 className="text-primaryGray font-bold text-lg">
                  French Kiss Bag
                </h3>
                <p className="text-mediumGray">ALDO</p>
              </div>
              <h3 className="text-primaryGray font-bold text-lg">$500</h3>
            </div>
            <div className="self-end">
              <button className="bg-primaryGray text-slate-50 py-3 px-6 rounded-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Card;
