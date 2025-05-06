import { useContext } from "react";
import { ReactComponent as StarIcon } from "../components/svg/star.svg";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/Context/UserContext";

const Restaurants = ({ resList }) => {
  const { name, cuisines, sla, avgRatingString, cloudinaryImageId } =
    resList?.card?.card?.info;

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="res-cards">
      <img className="res-image" src={CDN_URL + cloudinaryImageId} alt="dosa" />
      <h3 className="titles">{name}</h3>
      <h5 className="sub-titles cuisins">{cuisines.join(",")}</h5>
      <h5 className="sub-titles ratings">
        <StarIcon
          style={{
            width: 16,
            height: 16,
            verticalAlign: "middle",
          }}
        />
        {avgRatingString}
      </h5>
      <h5 className="sub-titles">{sla.slaString}</h5>
      <h5>User: {loggedInUser}</h5>
    </div>
  );
};

export const promotedRestaurant = (Restaurants) => {
  return (props) => {
    return (
      <div>
        <label
          style={{
            position: "absolute",
            backgroundColor: "#000",
            color: "#fff",
            margin: "2px",
            padding: "2px",
            borderRadius: "5px",
            zIndex: 1,
          }}
        >
          Promoted
        </label>
        <Restaurants {...props} />
      </div>
    );
  };
};

export default Restaurants;
