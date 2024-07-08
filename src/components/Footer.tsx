import FooterLogo from "../assets/footerLogo.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Whatsapp from "../assets/whatsapp.svg";
const Footer = () => {
  return (
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
              <img src={Instagram} alt="" />
              <img src={Whatsapp} alt="" />
              <img src={Twitter} alt="" />
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
  );
};

export default Footer;
