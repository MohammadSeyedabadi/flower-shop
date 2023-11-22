import { useContext } from "react";
import { FiltersContext } from "@/store/product-context";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormGroup,
  Checkbox,
  Box,
  Rating,
  Typography,
  Paper,
  InputBase,
  IconButton,
  SearchIcon,
} from "../components/index";
export default function Filters() {
  const { filtersState, filtersDispatch } = useContext(FiltersContext);

  return (
    <div className="pt-1">
      <div className="mb-5">
        <FormControl>
          <div className="text-slate-700">Price</div>
          <RadioGroup
            defaultValue="Random"
            aria-labelledby="price-radio-buttons-group-label"
            value={filtersState.price}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if ((event.target as HTMLInputElement).value === "Descending") {
                filtersDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "Descending",
                });
              } else if (
                (event.target as HTMLInputElement).value === "Ascending"
              ) {
                filtersDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "Ascending",
                });
              } else {
                filtersDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "Random",
                });
              }
            }}
          >
            <FormControlLabel
              value="Random"
              control={<Radio size="small" />}
              label="Random"
            />
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
            label="Only Fast Delivery"
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
            label="Include Out Of Stock"
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
          elevation={2}
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
      </div>
    </div>
  );
}
