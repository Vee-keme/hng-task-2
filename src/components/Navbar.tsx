import Logo from "../assets/timbu-logo.svg";
import Search from "../assets/search.svg";
import UK from "../assets/united kingdom.png";
import Bag from "../assets/bag-2.png";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// type Props = {}

const Navbar = () => {
  const flexCenter = `flex justify-center items-center`;
  return (
    <>
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

            <div>
              <img
                src={Bag}
                alt="timbu-bag"
                className="bg-primaryGray p-1 rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
