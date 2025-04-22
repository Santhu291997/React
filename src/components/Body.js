import { Button, IconButton, TextField } from "@mui/material";
import resData from "../utils/mockData";
import Restaurants from "./Restuarant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import SearchIcon from "@mui/icons-material/Search";

const Body = () => {
  const [listRes, setListRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);

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
      </div>
      <div className="restaurant-container">
        {filteredRest.map((restaurant) => (
          <Restaurants
            key={restaurant?.card?.card?.info?.id || Math.random()}
            resList={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
