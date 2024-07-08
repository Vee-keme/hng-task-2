import Logo from "../assets/timbu-logo.svg";
import Search from "../assets/search.svg";
import UK from "../assets/united kingdom.png";
import Bag from "../assets/bag-2.png";
import useMediaQuery from "../hooks/useMediaQuery";
import Hamburger from "../assets/hamburger.svg";

// type Props = {}

const Navbar = () => {
  const flexCenter = `flex justify-center items-center`;

  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
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
              <div className={`${flexCenter} gap-5`}>
                <img src={Search} alt="timbu-search-icon" />
                <input type="text" placeholder="Search" />
              </div>

              <div className={`${flexCenter} gap-5`}>
                <img src={UK} alt="timbu-i18-currency" />
                <p>EN/Currency</p>
              </div>

              <div className=" bg-primaryGray p-[5px] rounded-full flex items-center justify-center">
                <img
                  src={Bag}
                  alt="timbu-bag"

                  // className="w-[90%] h-[90%] bg-primaryGray p-2 rounded-full"
                />
              </div>
            </div>
          </div>
        </nav>
      ) : (
        //MOBILE NAVBAR
        <nav className={`w-full ${flexCenter} py-3`}>
          <div className=" flex items-center justify-between w-11/12">
            <div className="w-full flex justify-between items-center gap-5">
              <div>
                <img src={Hamburger} alt="hamburger icon" className="" />
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

              <div className=" bg-primaryGray p-[5px] rounded-full flex items-center justify-center">
                <img src={Bag} alt="timbu-bag" className="w-6" />
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
