import FooterLogo from "../assets/footerLogo.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Whatsapp from "../assets/whatsapp.svg";
import DownArrow from "../assets/downArrow.png";

import useMediaQuery from "../hooks/useMediaQuery";

const Footer = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  // const isAboveMediumScreens = useMediaQuery("(min-width: 640px)");
  return (
    <>
      {isAboveMediumScreens ? (
        <footer className="w-full h-[60vh] flex justify-center items-center py-10 bg-primaryGray">
          <div className="w-11/12">
            <div className="flex justify-between items-center ">
              <div className="space-y-9 p-4">
                <img
                  src={FooterLogo}
                  alt="Timbu shop Logo"
                  // className="w-[80%] h-[80%]"
                  color="white"
                />

                <div className="flex justify-between">
                  <img src={Instagram} alt="icon" />
                  <img src={Whatsapp} alt="icon" />
                  <img src={Twitter} alt="icon" />
                </div>
              </div>

              <div className="footerLinks w-[40%] text-slate-50 flex self-start justify-between gap-6 items-start p-4">
                <div className="space-y-3">
                  <h3 className="font-bold text-3xl">About</h3>
                  <ul className="space-y-3">
                    <li>About Us</li>
                    <li>News & Blog</li>
                    <li>Location</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-3xl">Products</h3>
                  <ul className="space-y-3">
                    <li>Pricing</li>
                    <li>Store</li>
                    <li>Features</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-3xl">Discover</h3>
                  <ul className="space-y-3">
                    <li>Contact Us</li>
                    <li>Customers</li>
                    <li>Affilates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="w-full flex justify-center items-center py-10 bg-primaryGray">
          <div className="w-11/12">
            <div className="flex flex-col gap-7">
              <div className="footerLinks text-slate-50 flex flex-col gap-6">
                <div className="flex justify-between">
                  <h3 className="">About</h3>
                  <img src={DownArrow} alt="down arrow" className="invert" />
                </div>

                <div className="flex justify-between">
                  <h3 className="">Products</h3>
                  <img src={DownArrow} alt="down arrow" className="invert" />
                </div>

                <div className="flex justify-between">
                  <h3 className="">Discover</h3>
                  <img src={DownArrow} alt="down arrow" className="invert" />
                </div>
              </div>

              <div className="p-4 border-t border-slate-50 mt-10 ">
                <div className="w-[50%] mx-auto flex flex-col items-center justify-center gap-8">
                  <img
                    src={FooterLogo}
                    alt="Timbu shop Logo"
                    className="w-[30%] h-[30%]"
                    color="white"
                  />

                  <div className="w-full flex justify-between">
                    <img src={Instagram} alt="icon" />
                    <img src={Whatsapp} alt="icon" />
                    <img src={Twitter} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
