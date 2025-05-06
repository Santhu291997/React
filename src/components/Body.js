import { Button, IconButton, TextField, Typography } from "@mui/material";
import resData from "../utils/mockData";
import Restaurants, { promotedRestaurant } from "./Restuarant";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import UserContext from "../utils/Context/UserContext";

const Body = () => {
  const [listRes, setListRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);

  const { setUserName, loggedInUser } = useContext(UserContext);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0116039&lng=76.0943011&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const resCardFilter = json?.data?.cards.filter(
      (list) =>
        list?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
    setListRes(resCardFilter);
    setFilteredRest(resCardFilter);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const checkOnlineStatus = useOnlineStatus();

  if (checkOnlineStatus === false) {
    return <h1>You Are Offline!. Please Check Your Internet</h1>;
  }

  const PromotedCard = promotedRestaurant(Restaurants);

  return listRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-container">
      <div className="sub-container">
        <div className="filter-btn">
          <Button
            variant="contained"
            onClick={() => {
              let filteredRes = listRes.filter(
                (res) => res?.card?.card?.info.avgRatingString > 4.4
              );
              setFilteredRest(filteredRes);
            }}
          >
            Top Rated
          </Button>
        </div>
        <div>
          <TextField
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          >
            Search
          </TextField>
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={() => {
              const filteredRes = listRes.filter((items) =>
                items?.card?.card?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRest(filteredRes);
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div>
          <TextField
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRest.map((restaurant) => (
          <Link
            key={restaurant?.card?.card?.info?.id}
            to={`/menu/${restaurant?.card?.card?.info?.id}`}
          >
            {restaurant?.card?.card?.info?.promoted ? (
              <PromotedCard resList={restaurant} />
            ) : (
              <Restaurants resList={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
