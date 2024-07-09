import useMediaQuery from "../hooks/useMediaQuery";
import PinkShoe from "../assets/pink-shoe.png";
import Heart from "../assets/heart.png";
import Star from "../assets/star.png";
import Instagram from "../assets/instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Twitter from "../assets/twitter.svg";
import Bag from "../assets/bag.png";
import Bus from "../assets/bus.png";
import Return from "../assets/return.png";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TagProp from "../components/TagProp";

const Cart = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <div className="bg-slate-50 text-primaryGray w-[100%] h-[100%]">
        {/* {isAboveMediumScreens && (
          <section className=" w-11/12 top-0 mx-auto">
            <div className="top-0 left-0">
              <p className=" text-nowrap">
                Home <span>&rt;</span> Kids &rt; Shoes &rt; Sneakers
              </p>
            </div>
          </section>
        )} */}

        {isAboveMediumScreens ? (
          <section className=" w-11/12 text-center space-y-8 py-10 mx-auto">
            <div className="container w-full space-y-4">
              <div className="flex justify-between">
                <div className="left-card w-[69%] bg-white border border-mediumGray rounded-lg p-5 flex justify-between gap-6">
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
                    <div className="w-full flex justify-between py-4 ">
                      <div className="border-b-2 border-lightGray w-4/6 text-start space-y-2 pb-2">
                        <h3 className="font-bold text-2xl tracking-[0.2em]">
                          Burberry Shine
                        </h3>
                        <p>
                          Brand: <span>FENDI</span>
                        </p>
                      </div>

                      <div className=" w-7 h-7 bg-primaryGray p-[5px] rounded-full flex items-center justify-center ">
                        <img
                          src={Heart}
                          alt="Heart Image"
                          className="invert w-7"
                        />
                      </div>
                    </div>

                    {/* second div */}

                    <div className="flex flex-col gap-2 border-b-2 border-lightGray pb-4">
                      <div className="flex items-center gap-3 ">
                        <h3 className="font-bold text-xl">$150</h3>
                        <p className="text-mediumGray line-through">$300</p>
                        <p className="text-primaryGreen bg-primaryGreen/20 p-1 rounded-md">
                          -50%
                        </p>
                      </div>

                      <p className="text-start text-primaryGreen">
                        50 units left
                      </p>

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

                      <div className="w-full flex justify-between items-center">
                        <button className="px-12 py-4 border-2 border-black bg-white text-black rounded-lg font-semibold flex items-center gap-3">
                          <img
                            src={Bag}
                            alt="icon"
                            className="w-5 h-5 invert"
                          />
                          <p>Add to cart</p>
                        </button>
                        <button className="px-16 py-4 bg-black text-white rounded-lg font-semibold">
                          Buy now
                        </button>
                      </div>

                      <p className="text-[#006200]">
                        Pickup & Pay on collection available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="right-card w-[29%] bg-white border border-mediumGray rounded-lg">
                  <div className=" ">
                    <div className="w-full p-3 border-b border-mediumGray ">
                      <p className="text-2xl font-semibold">
                        Delivery and Returns
                      </p>
                    </div>

                    <div className="w-11/12 mx-auto flex flex-col gap-4 py-2 ">
                      <div className="space-y-3">
                        <p className="text-start font-semibold text-xl ">
                          Location
                        </p>
                        <FormControl fullWidth>
                          <InputLabel id="Location">Location</InputLabel>
                          <Select
                            labelId="Location"
                            id="Location"
                            // value={age}
                            label="Location"
                            // onChange={handleChange}
                          >
                            <MenuItem value="Abuja">Abuja</MenuItem>
                            <MenuItem value="Lagos">Lagos</MenuItem>
                            <MenuItem value="Ibadan">Ibadan</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl fullWidth>
                          <InputLabel id="Sub-location">
                            Sub-location
                          </InputLabel>
                          <Select
                            labelId="Sub-location"
                            id="Sub-location"
                            // value={age}
                            label="Sub-location"
                            // onChange={handleChange}
                          >
                            <MenuItem value="Abuja">Abuja</MenuItem>
                            <MenuItem value="Lagos">Lagos</MenuItem>
                            <MenuItem value="Ibadan">Ibadan</MenuItem>
                          </Select>
                        </FormControl>
                      </div>

                      <div className="w-full flex justify-between gap-2 text-sm">
                        <div className="w-12">
                          <img src={Bus} alt="icon" className="w-6 h-6" />
                        </div>

                        <div className="text-start space-y-2">
                          <h3 className="font-semibold text-lg">Delivery</h3>
                          <p>Estimated delivery time is 1-12 business days</p>
                          <p>
                            <span className="font-semibold">
                              For Same-Day-Delivery:
                            </span>{" "}
                            Please place your order before 12pm
                          </p>
                          <p>
                            <span className="font-semibold">
                              Next-Day-Delivery:
                            </span>{" "}
                            Orders placed after 12pm will be delivered the next
                            day.
                          </p>
                          <p>
                            <span className="font-semibold">Note:</span>{" "}
                            Availability may vary by location
                          </p>
                        </div>
                      </div>

                      <div className="w-full flex justify-between gap-2  text-sm">
                        <div className="w-12">
                          <img src={Return} alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="text-start space-y-2">
                          <h3 className="font-semibold text-lg">
                            Return Policy
                          </h3>
                          <p className="font-semibold">
                            Guaranteed 7-day return policy
                          </p>
                          <p>
                            For details about return shipping options, please
                            visit our{" "}
                            <span className="font-semibold">Contact page</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="under-card w-full bg-white border border-mediumGray rounded-lg">
                <div className="border-b border-mediumGray p-5">
                  <div className="flex gap-4">
                    <TagProp
                      text="Overview"
                      className="border border-mediumGray px-5 py-2 text-primaryGray text-sm  active:bg-primaryGray active:text-slate-50"
                    />
                    <TagProp
                      text="Description"
                      className="border border-mediumGray px-5 py-2 text-primaryGray text-sm  active:bg-primaryGray active:text-slate-50"
                    />
                    <TagProp
                      text="Warranty"
                      className="border border-mediumGray px-5 py-2 text-primaryGray text-sm  active:bg-primaryGray active:text-slate-50"
                    />
                    <TagProp
                      text="Reviews"
                      className="border border-mediumGray px-5 py-2 text-primaryGray text-sm  active:bg-primaryGray active:text-slate-50"
                    />
                  </div>
                  <ul className="text-start list-disc p-6 text-thinborderGray space-y-2">
                    <li>
                      Available in a wide range of colors, patterns, and
                      patterns and themes to appeal to kids.
                    </li>
                    <li>
                      Rubber outsoles with good traction to prevent slips and
                      falls.
                    </li>
                    <li>
                      Built-in arch support to help maintain healthy foot
                      development.
                    </li>
                    <li>
                      Soft insoles and adequate padding to support growing feet.
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-start">
                    Similar items you may like
                  </h3>

                  <div className="cards w-full my-5 flex items-center gap-6">
                    <div className="card w-[30%] min-w-[300px]">
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
                              <img
                                src={Bag}
                                alt="bag-icon"
                                className="self-center"
                              />
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
                          <div className="space-y-5 text-start">
                            <div>
                              <h3 className="text-primaryGray font-bold text-lg">
                                French Kiss Bag
                              </h3>
                              <p className="text-mediumGray">ALDO</p>
                            </div>
                            <h3 className="text-primaryGray font-bold text-lg">
                              $500
                            </h3>
                          </div>
                          <div className="self-end">
                            <button className="bg-primaryGray text-slate-50 py-3 px-6 rounded-xl">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card w-[30%] min-w-[300px]">
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
                              <img
                                src={Bag}
                                alt="bag-icon"
                                className="self-center"
                              />
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
                          <div className="space-y-5 text-start">
                            <div>
                              <h3 className="text-primaryGray font-bold text-lg">
                                French Kiss Bag
                              </h3>
                              <p className="text-mediumGray">ALDO</p>
                            </div>
                            <h3 className="text-primaryGray font-bold text-lg">
                              $500
                            </h3>
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
              </div>
            </div>
          </section>
        ) : (
          <section>smaller</section>
        )}
      </div>
    </>
  );
};

export default Cart;
