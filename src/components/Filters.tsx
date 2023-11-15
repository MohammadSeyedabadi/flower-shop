import { useReducer } from "react";
import { useContext } from "react";
import {FiltersContext} from "@/store/product-context";
import data from "@/utils/data/data";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";



export default function Filters() {
  //  const context = useContext(FiltersContext);
  // const { filtersState } = context
  // console.log(filtersState)
  return (
    <div className="px-2 pt-1">
      {/* <div className="mb-5">
        <FormControl>
          <div className="text-slate-700">Price</div>
          <RadioGroup
            row
            aria-labelledby="price-radio-buttons-group-label"
            value={filtersState.price}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if ((event.target as HTMLInputElement).value === "Descending") {
                filtersDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "Descending",
                });
              } else {
                filtersDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "Ascending",
                });
              }
            }}
          >
            <FormControlLabel
              value="Ascending"
              control={<Radio size="small" />}
              label="Ascending"
            />
            <FormControlLabel
              value="Descending"
              control={<Radio size="small" />}
              label="Descending"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="mb-2">
        <FormGroup>
          <div className="text-slate-700">Type</div>

          <FormControlLabel
            control={
              <Checkbox
                checked={filtersState.fastDelivery}
                onChange={() =>
                  filtersDispatch({
                    type: "FILTER_BY_DELIVERY",
                  })
                }
                name="Fast Delivery"
              />
            }
            label="Fast Delivery"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filtersState.outOfStock}
                onChange={() =>
                  filtersDispatch({
                    type: "FILTER_BY_STOCK",
                  })
                }
              />
            }
            label="Out Of Stock"
          />
        </FormGroup>
      </div>
      <div className="mb-2">
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend">
            <div className="text-slate-700 mb-2">Rating</div>
          </Typography>
          <Rating
            name="ratings"
            value={filtersState.ratings}
            onChange={(event, newValue) => {
              if (newValue == null) {
                filtersDispatch({
                  type: "FILTER_BY_RATINGS",
                  payload: 0,
                });
              } else {
                filtersDispatch({
                  type: "FILTER_BY_RATINGS",
                  payload: newValue,
                });
              }
            }}
          />
        </Box>
      </div>
      <div className="mb-2">
        <Paper
          elevation={3}
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              filtersDispatch({
                type: "FILTER_BY_SEARCH",
                payload: event.target.value,
              })
            }
          />
          <IconButton
            disabled
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div> */}
    </div>
  );
}
