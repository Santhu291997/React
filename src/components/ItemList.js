import { Button } from "@mui/material";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ item }) => {
  return (
    <div>
      {item.map((itemlist) => (
        <div key={itemlist.card.info.id} className="itemlist-main">
          <div className="itemlist-container">
            <span>{itemlist.card.info.name}</span>
            <span>₹ {itemlist.card.info.price / 100}</span>
          </div>
          <div className="img-container-itemlist">
            <Button
              style={{
                position: "absolute",
                display: "flex",
                backgroundColor: "#000",

                padding: "10px",
                width: "100px",
                height: "34px",
              }}
              variant="contained"
            >
              Add +
            </Button>
            <img
              className="img-item"
              src={CDN_URL + itemlist.card.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
