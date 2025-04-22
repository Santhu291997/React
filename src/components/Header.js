import { Button } from "@mui/material";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="ul-items">
          <li>Home</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
