import { useState } from "react";
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
  const [sortPrice, setSortPrice] = useState("");
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortPrice((event.target as HTMLInputElement).value);
  };

  const [sport, setSport] = useState(true);
  const handleSport = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSport(event.target.checked);
  };

  const [SVG, setSVG] = useState(true);
  const handleSVG = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSVG(event.target.checked);
  };

  const [MVP, setMVP] = useState(true);
  const handleMVP = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMVP(event.target.checked);
  };

  const [hatchback, sethatchback] = useState(true);
  const handleHatchback = (event: React.ChangeEvent<HTMLInputElement>) => {
    sethatchback(event.target.checked);
  };

  const [stars, setStars] = useState<number | null>(null);

  const [searchCars, setSearchCars] = useState("")

  function handleClick() {
    console.log("asd");
  }

  return (
    <div className="px-2 pt-1">
      <div className="mb-5">
        <FormControl>
          <div className="text-slate-700">Price</div>
          <RadioGroup
            row
            aria-labelledby="price-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={sortPrice}
            onChange={handleChangeRadio}
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
            control={<Checkbox checked={sport} onChange={handleSport} />}
            label="Sport"
          />
          <FormControlLabel
            control={<Checkbox checked={SVG} onChange={handleSVG} />}
            label="SVG"
          />
          <FormControlLabel
            control={<Checkbox checked={MVP} onChange={handleMVP} />}
            label="MVP"
          />
          <FormControlLabel
            control={
              <Checkbox checked={hatchback} onChange={handleHatchback} />
            }
            label="Hatchback"
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
            name="simple-controlled"
            value={stars}
            onChange={(event, newValue) => {
              setStars(newValue);
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
            value={searchCars}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchCars(event.target.value);
            }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleClick}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}
