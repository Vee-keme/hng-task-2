import Shirt from "../assets/shirt.svg";

import Shoe from "../assets/shoe.svg";
import Man from "../assets/man.svg";

import Hat2 from "../assets/heartpng.png";
// import BlackShirt from "../assets/shirt.png";

import TagProp from "../components/TagProp";
import SmallCard from "../components/SmallCard";
import useMediaQuery from "../hooks/useMediaQuery";
import BottomCard from "../components/BottomCard";
import { Link } from "react-router-dom";
import Card from "../components/Card";

import { axiosInstance } from "../config/axiosInstance";
import { useEffect, useState } from "react";

// interface CardTypes {
//   itemTitle: string;
//   brand: string;
//   gender: string;
//   price: string;
//   inStock: boolean;
// }

// const cardData: CardTypes[] = [
//   {
//     itemTitle: "French Kiss Bag",
//     brand: "FENDI",
//     gender: "Women",
//     price: "500",
//     inStock: true,
//   },
//   {
//     itemTitle: "Burberry Shine",
//     brand: "FENDI",
//     gender: "Kids",
//     price: "150",
//     inStock: false,
//   },
//   {
//     itemTitle: "Alvero Gown",
//     brand: "DIVINE",
//     gender: "Women",
//     price: "300",
//     inStock: false,
//   },
// ];

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const [getProducts, setGetProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(
        "products?organization_id=9a725124aee14005a5fe6e56003c7e42&Appid=KLXO7WPWG8GUVSW&Apikey=d4dd7d23afe84d4b831a089fd99961b620240713134957786380&size=3"
      );
      const data = response.data.items;
      console.log(data);
      setGetProducts(data);
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-primaryGray w-full mx-auto">
        {/* HERO */}

        {isAboveMediumScreens ? (
          <section className=" w-11/12 text-center space-y-8 py-10 mx-auto">
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
                  Discover a world of convenience with our user-friendly
                  platform, curated collections, and exceptional customer
                  service
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

                <Link
                  to="/cart"
                  className="px-6 py-2 bg-white text-black rounded-md font-semibold"
                >
                  Explore Now
                </Link>

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
        ) : (
          <section className=" w-11/12 text-center space-y-8 py-10 mx-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold self-start">TIMBU</h2>
              <div className=" rounded-full overflow-hidden bg-red-300">
                <img src={Man} alt="Centered Image" className=" object-cover" />
              </div>
              <h2 className="text-3xl font-bold self-end">SHOP</h2>
            </div>

            <div className={`flex flex-col gap-6`}>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-md mx-auto text-center">
                Discover a world of convenience with our user-friendly platform,
                curated collections, and exceptional customer service
              </p>
            </div>

            <div className="flex justify-between items-center w-full">
              <button className="px-6 py-2 bg-white text-black rounded-md font-semibold w-full">
                Explore Now
              </button>
            </div>
          </section>
        )}

        {/* LATEST COLLECTIONS */}
        {isAboveMediumScreens ? (
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
                {getProducts.map((product: any, index: any) => {
                  // const url = product.photos.map((photo) => photo.url);
                  // const url = product.photos.length > 0 ? product.photos[0].url : "";

                  const currentPrice = product.current_price?.map(
                    (item: any) => item[0]
                  );
                  console.log(`current ${currentPrice}`);
                  // console.log("imageee", product?.photos[0]?.url);

                  return (
                    <Card
                      itemTitle={product.name}
                      key={index}
                      inStock={product.is_available}
                      id={product.id}
                      image={product?.photos[0]?.url}
                      // price={product?.current_price[0]?.USD[0]}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        ) : (
          <section className="w-full bg-slate-50 py-10">
            <div className="w-11/12 m-auto">
              <div className="w-full flex justify-between items-center text-black">
                <p className="font-bold text- xl">Latest Collections</p>
              </div>

              <div className="cards w-full my-5 flex justify-between items-center gap-4">
                {getProducts.map((product: any, index: any) => {
                  // const currentPrice = product.current_price?.map(
                  //   (item: any) => item[0]
                  // );
                  // // console.log(`current ${currentPrice}`);

                  return (
                    <Card
                      itemTitle={product.name}
                      key={index}
                      inStock={product.is_available}
                      id={product.id}
                      image={product?.photos[0]?.url}
                      // price={product?.current_price[0]?.USD[0]}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* SMALL CARDS */}
        {isAboveMediumScreens ? (
          <section className="tagprops w-full py-10 bg-slate-50 ">
            <div className="w-11/12 m-auto overflow-x-scroll">
              <div className="flex justify-between items-center m-auto overflow-x-scroll">
                <TagProp
                  text="Men"
                  className="border border-mediumGray px-3 py-1 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 xl:px-16 xl:py-4 text-primaryGray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  active:bg-primaryGray active:text-slate-50"
                />
                <TagProp
                  text="Women"
                  className="border border-mediumGray px-3 py-1 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 xl:px-16 xl:py-4 text-primaryGray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  active:bg-primaryGray active:text-slate-50"
                />
                <TagProp
                  text="Kids"
                  className="border border-mediumGray px-3 py-1 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 xl:px-16 xl:py-4 text-primaryGray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  active:bg-primaryGray active:text-slate-50"
                />
                <TagProp
                  text="Perfumes"
                  className="border border-mediumGray px-3 py-1 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 xl:px-16 xl:py-4 text-primaryGray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  active:bg-primaryGray active:text-slate-50"
                />
                <TagProp
                  text="Sport "
                  className="border border-mediumGray px-3 py-1 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 xl:px-16 xl:py-4 text-primaryGray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  active:bg-primaryGray active:text-slate-50"
                />
                <TagProp
                  text="Jewelry"
                  className="border border-mediumGray px-3 py-1 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 xl:px-16 xl:py-4 text-primaryGray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  active:bg-primaryGray active:text-slate-50"
                />
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
        ) : (
          <section className="tagprops w-full py-10 bg-slate-50">
            <div className="w-11/12 m-auto">
              <div className="flex justify-between gap-2 items-center m-auto ">
                <TagProp text="Men" />
                <TagProp text="Women" />
                <TagProp text="Kids" />
                <TagProp text="Perfumes" />
                <TagProp text="Sport " />
                <TagProp text="Jewelry" />
              </div>

              <div className="tagprop-items ">
                <div className="cards w-full my-5 flex justify-between items-center gap-4 flex-wrap ">
                  <SmallCard />

                  <button className="bg-primaryGray/80 text-slate-50 px-4 py-2 rounded-lg mx-auto">
                    See More &gt;&gt;&gt;
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* GREEN CARD */}
        {isAboveMediumScreens ? (
          <section className="w-full py-10 bg-slate-50">
            <div className="w-11/12 m-auto">
              <div className="bg-primaryGreen/50 flex justify-between rounded-2xl overflow-hidden">
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

                <img src={Hat2} alt="hat and leaf" className="object-cover" />
              </div>
            </div>
          </section>
        ) : (
          <section className="w-full py-10 bg-slate-50">
            <div className="w-11/12 m-auto">
              <div className="bg-primaryGreen/50 flex flex-col md:flex-row justify-between rounded-2xl overflow-hidden">
                <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-3">
                  <div className="w-[90%] md:w-[80%]">
                    <h3 className="text-slate-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
                      Our Curated Summer Collection
                    </h3>
                  </div>
                  <div className="w-[90%] md:w-[80%]">
                    <p className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9">
                      Explore our curated summer collection featuring trending
                      styles, vibrant colors, and lightweight fabrics perfect
                      for long days and nights.
                    </p>
                  </div>
                  <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white text-black rounded-md font-semibold w-fit">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {isAboveMediumScreens ? (
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
                <BottomCard />
              </div>
            </div>
          </section>
        ) : (
          <section className="w-full bg-slate-50 py-10 overflow-x-hidden">
            <div className="w-11/12 m-auto">
              <div className="w-full flex justify-between items-center text-black">
                <p className="font-bold text-2xl">Browse by category</p>
              </div>

              <div className="cards w-full my-5 flex justify-between items-center gap-4">
                <BottomCard />
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Home;
