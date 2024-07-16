import { useEffect, useState } from "react";
// import Bag from "../assets/bag.png";
import { axiosInstance } from "../config/axiosInstance";

// import Bag from "../assets/bag.png";

import { useNavigate } from "react-router-dom";

const SmallCard = () => {
  const navigate = useNavigate();
  const [getProducts, setGetProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(
        "products?organization_id=9a725124aee14005a5fe6e56003c7e42&Appid=KLXO7WPWG8GUVSW&Apikey=d4dd7d23afe84d4b831a089fd99961b620240713134957786380&size=30"
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

  // const handleCardClick = () => {
  //   navigate(`/checkout/${id}`);
  // };

  return (
    <>
      {getProducts.map((item: any, index: number) => {
        // console.log("item", item.photos[0].url);

        return (
          <div
            className="card flex-1 basis-[15%] "
            key={index}
            onClick={() => navigate(`/checkout/${item?.id}`)}
          >
            <div className="border-2 rounded-xl border-mediumGray p-4 w-full flex flex-col items-center justify-center space-y-1">
              <div className=" bg-lightGray rounded-lg flex justify-center py-3 px-4 ">
                {/* <img
                  className="h-[50%] w-[50%] self-center"
                  src={Bag}
                  alt="hear-icon"
                /> */}
                <img
                  className="h-[50%] w-[50%] self-center"
                  src={`https://api.timbu.cloud/images/${item?.photos[0]?.url}`}
                  alt="hear-icon"
                />
              </div>

              <p className="text-primaryGray text-xs font-semibold">
                {item.name}
              </p>
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

// const data = [
//   {
//     itemName: "Shoes",
//   },
//   {
//     itemName: "Bags",
//   },
//   {
//     itemName: "Jackets",
//   },
//   {
//     itemName: "Lingerie",
//   },
//   {
//     itemName: "Belts",
//   },
//   {
//     itemName: "Street Wear",
//   },
//   {
//     itemName: "Sunglasses",
//   },
//   {
//     itemName: "Sun Wear",
//   },
//   {
//     itemName: "Hats",
//   },
//   {
//     itemName: "Slippers",
//   },
//   {
//     itemName: "Wigs",
//   },
//   {
//     itemName: "Cosmetics",
//   },
// ];
