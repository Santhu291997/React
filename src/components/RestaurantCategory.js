import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, expanded, handleChange }) => {
  return (
    <div className="category-container">
      <Accordion
        expanded={expanded === data.title}
        onChange={() => handleChange(data.title)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" style={{ fontWeight: "600" }}>
            {data.title} ({data.itemCards.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ItemList item={data?.itemCards} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RestaurantCategory;
