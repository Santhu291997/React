import { ReactComponent as StarIcon } from "../components/svg/star.svg";
import { CDN_URL } from "../utils/constants";

const Restaurants = ({ resList }) => {
  const { name, cuisines, sla, avgRatingString, cloudinaryImageId } =
    resList?.card?.card?.info;
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
    </div>
  );
};

export default Restaurants;
