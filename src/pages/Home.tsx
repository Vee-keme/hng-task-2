import Shirt from "../assets/shirt.png";

import Shoe from "../assets/shoe.svg";
import Man from "../assets/man.svg";
import Bag from "../assets/bag.png";
import Heart from "../assets/heart.png";
import Star from "../assets/star.png";
// import Hat from "./assets/hat.svg";
import Hat2 from "../assets/heartpng.png";
import BlackShirt from "../assets/shirt.png";

import TagProp from "../components/TagProp";
import SmallCard from "../components/SmallCard";

const Home = () => {
  return (
    <>
      <section className=" w-11/12 text-center space-y-8 py-10">
        <div className="flex justify-between items-center">
          <h2 className="text-8xl font-bold self-start">TIMBU</h2>
          <div className="rounded-full overflow-hidden">
            <img
              src={Man}
              alt="Centered Image"
              className="w-[99%] h-[99%] object-cover"
            />
          </div>
          <div className={`flex flex-col gap-6`}>
            <p className="text-lg max-w-md mx-auto">
              Discover a world of convenience with our user-friendly platform,
              curated collections, and exceptional customer service
            </p>
            <h2 className="text-8xl font-bold self-baseline">SHOP</h2>
          </div>
        </div>

        <div className="w-[80%] m-auto flex justify-center items-center">
          <div className="flex justify-between items-center w-full">
            <div className="rounded-full overflow-hidden">
              <img
                src={Shoe}
                alt="Shoe"
                className="w-[95%] h-[95%] object-cover"
              />
            </div>

            <button className="px-6 py-2 bg-white text-black rounded-md font-semibold">
              Explore Now
            </button>

            <div className="rounded-full overflow-hidden">
              <img
                src={Shirt}
                alt="T-shirt"
                className="w-[90%] h-[90%] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-10">
        <div className="w-11/12 m-auto">
          <div className="w-full flex justify-between items-center text-black">
            <p className="font-bold text-4xl">Latest Collections</p>
            <div className="flex gap-2">
              <button className="flex items-center justify-center bg-primaryGray text-slate-50 px-3 py-1 rounded-l-xl">
                &lt;
              </button>
              <button className="flex items-center justify-center bg-primaryGray text-slate-50 px-3 py-1 rounded-r-xl">
                &gt;
              </button>
            </div>
          </div>

          <div className="cards w-full my-5 flex justify-between items-center gap-4">
            <div className="card w-[30%]">
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
            <div className="card w-[30%]">
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
            <div className="card w-[30%]">
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
          </div>
        </div>
      </section>

      <section className="tagprops w-full py-10 bg-slate-50">
        <div className="w-11/12 m-auto">
          <div className="flex justify-between items-center m-auto ">
            <TagProp text="Men" />
            <TagProp text="Women" />
            <TagProp text="Kids" />
            <TagProp text="Perfumes" />
            <TagProp text="Sport " />
            <TagProp text="Jewelry" />
          </div>

          <div className="tagprop-items ">
            <div className="cards w-full my-5 flex justify-between items-center gap-4 flex-wrap">
              <SmallCard />
              <button className="bg-primaryGray/80 text-slate-50 px-4 py-2 rounded-lg mx-auto">
                See More &gt;&gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 bg-slate-50">
        <div className="w-11/12 m-auto">
          <div className="bg-primaryGreen/50 flex justify-between rounded-2xl overflow-hidden h-[60vh]">
            <div className="p-8 flex flex-col justify-between">
              <div className="w-[60%]">
                <h3 className="text-slate-50 text-5xl font-semibold leading-[60px]">
                  Our Curated Summer Collection
                </h3>
              </div>
              <div className="w-[60%]">
                <p className="font-[400] text-xl leading-10">
                  Explore our curated summer collection featuring trending
                  styles, vibrant colors and lightweight fabrics perfect for
                  long days and nights.
                </p>
              </div>
              <button className="px-6 py-2 bg-white text-black rounded-md font-semibold w-fit">
                Explore Now
              </button>
            </div>

            <img src={Hat2} alt="hat and leaf" />
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-10">
        <div className="w-11/12 m-auto">
          <div className="w-full flex justify-between items-center text-black">
            <p className="font-bold text-4xl">Browse by category</p>
            <div className="flex gap-2">
              <button className="flex items-center justify-center bg-primaryGray text-slate-50 px-3 py-1 rounded-l-xl">
                &lt;
              </button>
              <button className="flex items-center justify-center bg-primaryGray text-slate-50 px-3 py-1 rounded-r-xl">
                &gt;
              </button>
            </div>
          </div>

          <div className="cards w-full my-5 flex justify-between items-center gap-4">
            <div className="lastCard space-y-2">
              <div className="bg-mediumGray w-fit p-6 rounded-lg">
                <img src={BlackShirt} alt="items" />
              </div>
              <h3 className="text-primaryGray text-center font-bold text-xl">
                Causal Wear
              </h3>
              <p className="text-mediumGray text-center text-lg">
                Over 20 categories in stock
              </p>
            </div>
            <div className="lastCard space-y-2">
              <div className="bg-mediumGray w-fit p-6 rounded-lg">
                <img src={BlackShirt} alt="items" />
              </div>
              <h3 className="text-primaryGray text-center font-bold text-xl">
                Causal Wear
              </h3>
              <p className="text-mediumGray text-center text-lg">
                Over 20 categories in stock
              </p>
            </div>
            <div className="lastCard space-y-2">
              <div className="bg-mediumGray w-fit p-6 rounded-lg">
                <img src={BlackShirt} alt="items" />
              </div>
              <h3 className="text-primaryGray text-center font-bold text-xl">
                Causal Wear
              </h3>
              <p className="text-mediumGray text-center text-lg">
                Over 20 categories in stock
              </p>
            </div>
            <div className="lastCard space-y-2">
              <div className="bg-mediumGray w-fit p-6 rounded-lg">
                <img src={BlackShirt} alt="items" />
              </div>
              <h3 className="text-primaryGray text-center font-bold text-xl">
                Causal Wear
              </h3>
              <p className="text-mediumGray text-center text-lg">
                Over 20 categories in stock
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
