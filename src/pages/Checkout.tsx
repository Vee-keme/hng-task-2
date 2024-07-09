import useMediaQuery from "../hooks/useMediaQuery";
// import Star from "../assets/star.png";
// import Instagram from "../assets/instagram.svg";
// import Whatsapp from "../assets/whatsapp.svg";
// import Twitter from "../assets/twitter.svg";
// import Bag from "../assets/bag-2.png";
// import Bus from "../assets/bus.png";
// import Return from "../assets/return.png";
import PinkShoe from "../assets/pink-shoe.png";

// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import TagProp from "../components/TagProp";
import TextField from "@mui/material/TextField";

const Checkout = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isAboveMediumScreens ? (
        <section className=" w-11/12 text-center space-y-8 py-10 mx-auto">
          <div className="container w-full space-y-4">
            <div className="flex justify-between">
              <div className="left-card w-[69%] bg-white border border-mediumGray rounded-lg p-5 flex flex-col gap-6">
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

              <div className="right-card w-[29%] bg-white border border-mediumGray rounded-lg">
                <div className="text-primaryGray ">
                  <div className="w-full p-3 border-b border-mediumGray ">
                    <p className="text-2xl font-semibold">Order Summary</p>
                  </div>

                  <div className="w-11/12 mx-auto flex flex-col gap-4 py-2 ">
                    <div className="w-full flex gap-3">
                      <div className="bg-lightGray w-[30%] p-1 rounded-lg ">
                        <img src={PinkShoe} alt="pink shoe" />
                      </div>

                      <div className="text-start">
                        <p>Burberry Shine</p>
                        <p>FENDI</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p>Subtotal</p>
                        <span>$150</span>
                      </div>
                      <div className="flex justify-between">
                        <p>Shipping</p>
                        <span>$10</span>
                      </div>
                      <div className="flex justify-between">
                        <p>Tax</p>
                        <span></span>$5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="under-card bg-white border border-mediumGray rounded-lg w-[69%] text-primaryGray">
              <div className=" p-5">
                <div className="flex gap-4">
                  <h3>Payment Method</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>smaller</section>
      )}
    </>
  );
};

export default Checkout;
