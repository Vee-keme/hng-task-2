import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/timbu-logo.svg";
import Search from "../assets/search.svg";
import UK from "../assets/united kingdom.png";
import Bag from "../assets/bag-2.png";
import useMediaQuery from "../hooks/useMediaQuery";
import Hamburger from "../assets/hamburger.svg";
import CloseIcon from "../assets/closeIcon.png";
import forwardArrow from "../assets/forwardArrow.png";
import DownwardArrow from "../assets/downArrow.png";

const Navbar = () => {
  const flexCenter = `flex justify-center items-center`;
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    setCartItemCount(cart.length);
  }, []);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <>
      {isAboveMediumScreens ? (
        <nav className={`w-full ${flexCenter} py-3`}>
          <div className="flex items-center justify-between w-11/12">
            <div>
              <img src={Logo} alt="Timbu shop Logo" />
            </div>

            <div>
              <ul className={`${flexCenter} gap-5`}>
                <li>
                  <a>Register/Sign In</a>
                </li>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Men</a>
                </li>
                <li>
                  <a>Women</a>
                </li>
                <li>
                  <a>Kids</a>
                </li>
                <li>
                  <a>Accessories</a>
                </li>
                <li>
                  <a>More</a>
                </li>
              </ul>
            </div>

            <div className={`${flexCenter} gap-5`}>
              <div
                className={`${flexCenter} gap-2 border border-mediumGray rounded-full w-[60%]`}
              >
                <div className={`${flexCenter} gap-2  px-4 py-2`}>
                  <img src={Search} alt="timbu-search-icon" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent focus:outline-none"
                  />
                </div>
                <div className="bg-primaryGray w-full h-full">
                  <img
                    src={Search}
                    alt="timbu-search-icon"
                    className="invert"
                  />
                </div>
              </div>

              <div className={`${flexCenter} gap-5`}>
                <img src={UK} alt="timbu-i18-currency" />
                <p>EN/Currency</p>
              </div>

              <div className=" bg-primaryGray p-[5px] rounded-full flex items-center justify-center relative">
                <Link to="/cart">
                  <img src={Bag} alt="timbu-bag" />
                </Link>
                {cartItemCount >= 0 && (
                  <div className="right-[-10px] top-[-10px] bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center absolute">
                    <span className="text-sm">{cartItemCount}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      ) : (
        // MOBILE NAVBAR
        <nav className={`w-full ${flexCenter} py-3`}>
          <div className=" flex items-center justify-between w-11/12">
            <div className="w-full flex justify-between items-center gap-5">
              <div>
                <img
                  src={Hamburger}
                  alt="hamburger icon"
                  className="cursor-pointer"
                  onClick={toggleSideMenu}
                />
              </div>

              <div className="w-auto h-auto">
                <img src={Logo} alt="Timbu shop Logo" className="w-[70%]" />
              </div>

              <div
                className={`${flexCenter} gap-2 border border-mediumGray rounded-full w-[60%] px-4 py-2`}
              >
                <img src={Search} alt="timbu-search-icon" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent focus:outline-none"
                />
              </div>

              <div className=" bg-primaryGray p-[5px] rounded-full flex items-center justify-center relative">
                <Link to="/cart">
                  <img src={Bag} alt="timbu-bag" />
                </Link>
                {cartItemCount >= 0 && (
                  <div className="right-[-5px] top-[-5px] bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center absolute">
                    <span className="text-[8px]">{cartItemCount}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* SIDE MENU */}
      <div
        className={`fixed top-0 left-0 w-[75%] h-[75%] bg-white z-50 transform ${
          isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex items-center p-4 border-b-2 border-mediumGray gap-10">
          <img
            src={CloseIcon}
            alt="Close Icon"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleSideMenu}
          />
          <img src={Logo} alt="Timbu Logo" className="w-8" />
        </div>
        <div className="p-4 border-b-2 border-mediumGray flex gap-6">
          <a href="#" className="tracking-widest">
            Register/Sign In
          </a>
          <img src={forwardArrow} alt="icon" />
        </div>
        <ul className="p-4 space-y-4 tracking-wider">
          <li></li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li className="pb-4  flex gap-6">
            <a href="#" className="tracking-widest">
              More
            </a>
            <img src={DownwardArrow} alt="icon" />
          </li>
        </ul>
        <div className="border-t-2 border-mediumGray p-4 flex gap-3">
          <img src={UK} alt="timbu-i18-currency" />
          <p>EN/Currency</p>
          <img src={forwardArrow} alt="icon" />
        </div>
      </div>
      {/* Overlay to close the side menu */}
      {isSideMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSideMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
