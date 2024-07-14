import useMediaQuery from "../hooks/useMediaQuery";
// import Star from "../assets/star.png";
// import Instagram from "../assets/instagram.svg";
// import Whatsapp from "../assets/whatsapp.svg";
// import Twitter from "../assets/twitter.svg";
// import Bag from "../assets/bag-2.png";
// import Bus from "../assets/bus.png";
// import Return from "../assets/return.png";
// import PinkShoe from "../assets/pink-shoe.png";

// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import TagProp from "../components/TagProp";
import TextField from "@mui/material/TextField";

import Card from "../assets/card.png";
import Wallet from "../assets/wallet.png";
import Transfer from "../assets/transfer.png";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleProductInstance } from "../config/axiosInstance";

const Checkout = () => {
  const { id } = useParams();

  const [getSingleProduct, setGetSingleProduct] = useState<any[] | any>([]);

  const fetchSingleProduct = async () => {
    try {
      const response = await getSingleProductInstance.get(
        `/${id}?organization_id=9a725124aee14005a5fe6e56003c7e42&Appid=KLXO7WPWG8GUVSW&Apikey=d4dd7d23afe84d4b831a089fd99961b620240713134957786380`
      );
      const data = response.data;
      // console.log("checkout", data.extra_infos[0].value);
      // console.log("image", data.photos);
      setGetSingleProduct(data);
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isAboveMediumScreens ? (
        <section className=" w-11/12 text-center space-y-8 py-10 mx-auto">
          <div className="container w-full space-y-4">
            <div className="flex justify-between">
              <div className="left-card w-[69%] bg-white border-2 border-mediumGray rounded-lg p-5 flex flex-col gap-6">
                {/* left */}
                <div className="flex flex-col gap-3 w-full text-primaryGray">
                  <h3 className="text-start text-2xl font-semibold my-3">
                    Shipping Address
                  </h3>
                  <p className="text-start text-primaryGray font-semibold">
                    Name
                  </p>
                  <FormControl fullWidth>
                    {/* <InputLabel id="Location">Location</InputLabel> */}
                    <TextField
                      id="name"
                      label="First & Last Name"
                      variant="outlined"
                    />
                  </FormControl>

                  <p className="text-start text-primaryGray font-semibold">
                    Address 1
                  </p>
                  <FormControl fullWidth>
                    {/* <InputLabel id="Location">Location</InputLabel> */}
                    <TextField
                      id="Location"
                      label="412, Dubai St"
                      variant="outlined"
                    />
                  </FormControl>

                  <p className="text-start text-primaryGray font-semibold">
                    Address 2
                  </p>
                  <FormControl fullWidth>
                    {/* <InputLabel id="Location">Location</InputLabel> */}
                    <TextField
                      id="Location"
                      label="23rd, Boulevard Ave"
                      variant="outlined"
                    />
                  </FormControl>
                </div>

                <div className="w-full flex justify-between">
                  <div className="space-y-3">
                    <p className="text-primaryGray text-start font-semibold">
                      City
                    </p>
                    <TextField
                      id="city"
                      label="Enter City"
                      variant="outlined"
                    />
                  </div>

                  <div className="space-y-3">
                    <p className="text-primaryGray text-start font-semibold">
                      State
                    </p>
                    <TextField
                      id="state"
                      label="Select State"
                      variant="outlined"
                    />
                  </div>

                  <div className="space-y-3">
                    <p className="text-primaryGray text-start font-semibold">
                      Zip
                    </p>
                    <TextField id="zip" label="Zip Code" variant="outlined" />
                  </div>
                </div>
              </div>

              <div className="right-card w-[29%] bg-white border-2 border-mediumGray rounded-lg">
                <div className="text-primaryGray ">
                  <div className="w-full p-3 border-b border-mediumGray ">
                    <p className="text-2xl font-semibold">Order Summary</p>
                  </div>

                  <div className="w-11/12 mx-auto flex flex-col gap-4 py-2 border-b border-mediumGray">
                    <div className="w-full flex gap-4 mt-4">
                      <div className="bg-lightGray w-[30%] p-1 rounded-lg ">
                        {/* <img src={PinkShoe} alt="pink shoe" /> */}
                        <img
                          src={
                            getSingleProduct?.photos?.length
                              ? `https://api.timbu.cloud/images/${getSingleProduct.photos[0].url}`
                              : ""
                          }
                          alt={getSingleProduct.name}
                        />
                      </div>

                      <div className="text-start">
                        {/* <p className="font-bold text-lg">Burberry Shine</p> */}
                        <p className="font-bold text-lg">
                          {getSingleProduct.name}
                        </p>

                        <p className="font-semibold text-thinborderGray">
                          FENDI
                        </p>
                        {/* <p className="font-semibold text-thinborderGray">
                          {getSingleProduct.extra_infos[0].value
                            ? getSingleProduct.extra_infos[0].value
                            : "Unknown"}
                        </p> */}
                      </div>
                    </div>

                    <div className=" space-y-1">
                      <div className="flex justify-between">
                        <p className="text-thinborderGray font-semibold">
                          Subtotal
                        </p>
                        <span className="text-primaryGray text-lg font-semibold">
                          $150
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-thinborderGray font-semibold">
                          Shipping
                        </p>
                        <span className="text-primaryGray text-lg font-semibold">
                          $10
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-thinborderGray font-semibold">Tax</p>
                        <span className="text-primaryGray text-lg font-semibold">
                          $5
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-11/12 mx-auto space-y-6 py-6">
                    <div className="flex justify-between">
                      <p className="text-primaryGray font-semibold">Total</p>
                      <span className="text-primaryGray text-lg font-semibold">
                        $165
                      </span>
                    </div>

                    <div className="w-full mx-auto">
                      <button className="px-20 py-4 bg-black text-white rounded-lg font-semibold">
                        Place order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="under-card bg-white border-2 border-mediumGray rounded-lg w-[69%] text-primaryGray">
              <div className=" p-5">
                <div className="flex flex-col">
                  <h3 className="text-start text-2xl font-semibold my-3">
                    Payment Method
                  </h3>

                  <div className="flex justify-between py-7">
                    <div className="flex flex-col justify-center items-center gap-4 px-24 py-8 border-2 border-mediumGray rounded-xl bg-primaryGray">
                      <img src={Card} alt="icon" className="" />
                      <p className="text-slate-50">Card</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 px-24 py-8 border-2 border-mediumGray rounded-xl">
                      <img src={Wallet} alt="icon" className="invert" />
                      <p>Wallet</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 px-24 py-8 border-2 border-mediumGray rounded-xl">
                      <img src={Transfer} alt="icon" className="invert" />
                      <p>Bank Transfer</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col gap-3 w-full text-primaryGray">
                      <p className="text-start text-primaryGray font-semibold">
                        Name on Card
                      </p>
                      <FormControl fullWidth>
                        {/* <InputLabel id="Location">Location</InputLabel> */}
                        <TextField
                          id="nameOnCard"
                          label="First & Last Name"
                          variant="outlined"
                        />
                      </FormControl>

                      <p className="text-start text-primaryGray font-semibold">
                        Card number
                      </p>
                      <FormControl fullWidth>
                        {/* <InputLabel id="Location">Location</InputLabel> */}
                        <TextField
                          id="cardNumber"
                          label="0000 0000 0000 0000"
                          variant="outlined"
                        />
                      </FormControl>
                    </div>
                    <div className="w-full flex justify-between items-end mt-4">
                      <div className="space-y-3">
                        <p className="text-primaryGray text-start font-semibold">
                          Expiry
                        </p>
                        <TextField id="expiry" label="MM" variant="outlined" />
                      </div>

                      <div className="space-y-3">
                        <p className="text-primaryGray text-start font-semibold"></p>
                        <TextField
                          id="expiry"
                          label="YYYY"
                          variant="outlined"
                        />
                      </div>

                      <div className="space-y-3">
                        <p className="text-primaryGray text-start font-semibold">
                          CVV
                        </p>
                        <TextField id="cvv" label="CVV" variant="outlined" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className=" w-11/12 text-center space-y-8 py-10 mx-auto">
          <div className="container w-full space-y-4">
            <div className="flex flex-col justify-between">
              <div className="left-card w-full bg-white border-2 border-mediumGray rounded-lg flex flex-col">
                {/* left */}

                <div className="w-full p-5 border-b-2 border-mediumGray text-primaryGray">
                  <p className="text-2xl font-semibold">Order Summary</p>
                </div>

                <div className="w-full mx-auto flex flex-col gap-4 border-b-2 border-mediumGray p-5">
                  <div className="w-full flex gap-4">
                    <div className="bg-lightGray w-[30%] p-1 rounded-lg ">
                      {/* <img src={PinkShoe} alt="pink shoe" /> */}
                      <img
                        src={
                          getSingleProduct?.photos?.length
                            ? `https://api.timbu.cloud/images/${getSingleProduct.photos[0].url}`
                            : ""
                        }
                        alt={getSingleProduct.name}
                      />
                    </div>

                    <div className="text-start">
                      <p className="font-bold text-lg text-primaryGray">
                        {getSingleProduct.name}
                      </p>
                      <p className="font-semibold text-thinborderGray">FENDI</p>
                    </div>
                  </div>

                  <div className=" space-y-1">
                    <div className="flex justify-between">
                      <p className="text-thinborderGray font-semibold">
                        Subtotal
                      </p>
                      <span className="text-primaryGray text-lg font-semibold">
                        $150
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-thinborderGray font-semibold">
                        Shipping
                      </p>
                      <span className="text-primaryGray text-lg font-semibold">
                        $10
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-thinborderGray font-semibold">Tax</p>
                      <span className="text-primaryGray text-lg font-semibold">
                        $5
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full p-5 border-b-2 border-mediumGray text-primaryGray flex justify-center items-center">
                  <h3 className="text-lg font-semibold self-center">
                    Shipping Address
                  </h3>
                </div>

                <div className="flex flex-col gap-1.5 w-full text-primaryGray p-5">
                  <p className="text-start text-primaryGray font-semibold">
                    Name
                  </p>
                  <FormControl fullWidth>
                    {/* <InputLabel id="Location">Location</InputLabel> */}
                    <TextField
                      id="name"
                      label="First & Last Name"
                      variant="outlined"
                    />
                  </FormControl>

                  <p className="text-start text-primaryGray font-semibold">
                    Address 1
                  </p>
                  <FormControl fullWidth>
                    {/* <InputLabel id="Location">Location</InputLabel> */}
                    <TextField
                      id="Location"
                      label="412, Dubai St"
                      variant="outlined"
                    />
                  </FormControl>

                  <p className="text-start text-primaryGray font-semibold">
                    Address 2
                  </p>
                  <FormControl fullWidth>
                    {/* <InputLabel id="Location">Location</InputLabel> */}
                    <TextField
                      id="Location"
                      label="23rd, Boulevard Ave"
                      variant="outlined"
                    />
                  </FormControl>
                </div>

                <div className="w-full flex justify-between flex-wrap p-5 gap-2 border-b-2 border-mediumGray">
                  <div className="space-y-3 w-[45%]">
                    <p className="text-primaryGray text-start font-semibold">
                      City
                    </p>
                    <TextField
                      id="city"
                      label="Enter City"
                      variant="outlined"
                    />
                  </div>

                  <div className="space-y-3 w-[45%]">
                    <p className="text-primaryGray text-start font-semibold">
                      State
                    </p>
                    <TextField
                      id="state"
                      label="Select State"
                      variant="outlined"
                    />
                  </div>

                  <div className="space-y-3 w-[45%]">
                    <p className="text-primaryGray text-start font-semibold">
                      Zip
                    </p>
                    <TextField id="zip" label="Zip Code" variant="outlined" />
                  </div>
                </div>

                <div className="w-full p-5 border-b-2 border-mediumGray text-primaryGray flex justify-center items-center">
                  <h3 className="text-lg font-semibold self-center">
                    Payment Method
                  </h3>
                </div>

                <div className="flex justify-between p-5 gap-2">
                  <div className="flex flex-col justify-center items-center gap-4 px-[10%] py-[2%] border-2 border-mediumGray rounded-xl bg-primaryGray">
                    <img src={Card} alt="icon" className="" />
                    <p className="text-slate-50">Card</p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 px-[10%] py-[2%] border-2 border-mediumGray rounded-xl">
                    <img src={Wallet} alt="icon" className="invert" />
                    <p className="text-mediumGray">Wallet</p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 px-[10%] py-[2%] border-2 border-mediumGray rounded-xl">
                    <img src={Transfer} alt="icon" className="invert" />
                    <p className="text-mediumGray">Transfer</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full text-primaryGray p-5">
                  <p className="text-start text-primaryGray font-semibold">
                    Name on Card
                  </p>
                  <FormControl fullWidth>
                    {/* <InputLabel id="Location">Location</InputLabel> */}
                    <TextField
                      id="nameOnCard"
                      label="First & Last Name"
                      variant="outlined"
                    />
                  </FormControl>

                  <p className="text-start text-primaryGray font-semibold">
                    Card number
                  </p>
                  <FormControl fullWidth>
                    {/* <InputLabel id="Location">Location</InputLabel> */}
                    <TextField
                      id="cardNumber"
                      label="0000 0000 0000 0000"
                      variant="outlined"
                    />
                  </FormControl>
                </div>

                <div className="w-full flex justify-between  flex-wrap items-end p-5 gap-2">
                  <div className="space-y-3 w-[45%]">
                    <p className="text-primaryGray text-start font-semibold">
                      Expiry
                    </p>
                    <TextField id="expiry" label="MM" variant="outlined" />
                  </div>

                  <div className="space-y-3 w-[45%]">
                    <p className="text-primaryGray text-start font-semibold"></p>
                    <TextField id="expiry" label="YYYY" variant="outlined" />
                  </div>

                  <div className="space-y-3 w-[45%]">
                    <p className="text-primaryGray text-start font-semibold">
                      CVV
                    </p>
                    <TextField id="cvv" label="CVV" variant="outlined" />
                  </div>
                </div>

                <div className="p-5">
                  <button className="w-full px-20 py-4 bg-black text-white rounded-lg font-semibold mb-5">
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Checkout;
