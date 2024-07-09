import useMediaQuery from "../hooks/useMediaQuery";
import PinkShoe from "../assets/pink-shoe.png";
import Heart from "../assets/heart.png";
import Star from "../assets/star.png";
import Instagram from "../assets/instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Twitter from "../assets/twitter.svg";
import Bag from "../assets/bag-2.png";

const Cart = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  return (
    <div className="bg-slate-50 text-primaryGray w-[100%] h-[100%] absolute">
      {isAboveMediumScreens && (
        <section className=" w-11/12 top-0 mx-auto">
          <div className="top-0 left-0">
            <p className=" text-nowrap">
              Home <span>&rt;</span> Kids &rt; Shoes &rt; Sneakers
            </p>
          </div>
        </section>
      )}

      {isAboveMediumScreens ? (
        <section className=" w-11/12 text-center space-y-8 py-10 mx-auto">
          <div className="container w-full">
            <div className="flex justify-between">
              <div className="left-card w-[70%] bg-white border border-mediumGray rounded-lg p-5 flex justify-between gap-6">
                {/* left */}
                <div className="flex flex-col gap-3 w-[50%]">
                  <div className="bg-lightGray p-6 rounded-lg ">
                    <img src={PinkShoe} alt="pink shoe" />
                  </div>

                  <div className="flex justify-between px-2">
                    <div className="bg-lightGray w-[20%] p-1 rounded-lg ">
                      <img src={PinkShoe} alt="pink shoe" />
                    </div>
                    <div className="bg-lightGray w-[20%] p-1 rounded-lg ">
                      <img src={PinkShoe} alt="pink shoe" />
                    </div>
                    <div className="bg-lightGray w-[20%] p-1 rounded-lg ">
                      <img src={PinkShoe} alt="pink shoe" />
                    </div>
                    <div className="bg-lightGray w-[20%] p-1 rounded-lg ">
                      <img src={PinkShoe} alt="pink shoe" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-start">Share this product</p>
                    <div className="flex gap-3">
                      <img
                        src={Instagram}
                        alt="[instagram logo"
                        className="invert"
                      />
                      <img
                        src={Whatsapp}
                        alt="whatsapp logo"
                        className="invert"
                      />
                      <img
                        src={Twitter}
                        alt="twitter logo"
                        className="invert"
                      />
                    </div>
                  </div>
                </div>

                {/* right */}
                <div className="w-[60%]">
                  {/* first div */}
                  <div className="w-full flex justify-between">
                    <div className="border-b-2 border-lightGray w-4/6 text-start">
                      <h3>Burberry Shine</h3>
                      <p>
                        Brand: <span>FENDI</span>
                      </p>
                    </div>

                    <div>
                      <img src={Heart} alt="Heart Image" />
                    </div>
                  </div>

                  {/* second div */}

                  <div className="flex flex-col border-b-2 border-lightGray">
                    <div className="flex">
                      <h3>$150</h3>
                      <p>$300</p>
                      <p>-50%</p>
                    </div>

                    <p className="text-start">50 units left</p>

                    <p className="text-start">
                      +Shipping fee may vary on location
                    </p>
                    <div className="flex text-primaryGray">
                      <span>
                        <img src={Star} alt="star" />
                      </span>
                      <p>1k+ rating</p>
                    </div>
                  </div>

                  {/* third div */}
                  <div className="flex flex-col gap-5 py-5">
                    <div className="flex items-center gap-4 cursor-pointer">
                      <p>Quantity: </p>

                      <div className=" p-2 rounded-md bg-black">
                        <span className="p-2 bg-black text-white">-</span>
                        <span className="p-2 bg-white">1</span>
                        <span className="p-2 bg-black text-white">+</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <p>Size:</p>

                      <div className="flex gap-3">
                        <span className="px-5 py-3  border border-mediumGray text-primaryGray rounded-md cursor-pointer">
                          20
                        </span>
                        <span className="px-5 py-3 border border-mediumGray text-primaryGray rounded-md cursor-pointer">
                          25
                        </span>
                        <span className="px-5 py-3 border border-mediumGray text-primaryGray rounded-md cursor-pointer">
                          32
                        </span>
                        <span className="px-5 py-3 border border-mediumGray text-primaryGray rounded-md cursor-pointer">
                          37
                        </span>
                      </div>
                    </div>

                    <div className="flex  items-center gap-4">
                      <p>Color:</p>

                      <div className="flex gap-3">
                        <div className="p-[10px] border-2 border-black rounded-lg flex items-center">
                          <span className="p-[20px] bg-red-200 rounded-sm"></span>
                        </div>
                        <span className="p-[10px] border-2 border-gray-400 rounded-lg flex items-center">
                          <span className="p-[20px] bg-blue-600 rounded-sm"></span>
                        </span>
                        <span className="p-[10px] border-2 border-gray-400 rounded-lg flex items-center">
                          <span className="p-[20px] bg-red-500 rounded-sm"></span>
                        </span>
                        <span className="p-[10px] border-2 border-gray-400 rounded-lg flex items-center">
                          <span className="p-[20px] bg-black rounded-sm"></span>
                        </span>
                      </div>
                    </div>

                    <div className="w-full flex justify-between">
                      <button className="px-8 py-2 border border-mediumGray bg-white text-black rounded-md font-semibold flex ">
                        <img
                          src={Bag}
                          alt="icon"
                          className="invert
                        "
                        />{" "}
                        <span>Add to cart</span>
                      </button>
                      <button className="px-8 py-2 bg-primaryGray text-white  rounded-md font-semibold">
                        Buy now
                      </button>
                    </div>

                    <p>Pickup & Pay on collection available</p>
                  </div>
                </div>
              </div>

              <div className="right-card w-[30%]">Delivery and Returns</div>
            </div>
          </div>
        </section>
      ) : (
        <section>smaller</section>
      )}
    </div>
  );
};

export default Cart;
