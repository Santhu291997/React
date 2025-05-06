import { Button } from "@mui/material";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import UserContext from "../utils/Context/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="ul-items">
          <li className="li-items">
            Online Status:
            {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="li-items">
            <Link className="link-items" to="/">
              Home
            </Link>
          </li>
          <li className="li-items">
            <Link className="link-items" to="/about">
              About Us
            </Link>
          </li>
          <li className="li-items">
            <Link className="link-items" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="li-items">
            <Link className="link-items" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="li-items">Cart</li>
          <Button
            variant="outlined"
            style={{
              width: "80px",
              height: "40px",
              color: "#000",
              borderColor: "#000",
            }}
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </Button>
          <li className="li-items" style={{ fontWeight: "bold" }}>
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
