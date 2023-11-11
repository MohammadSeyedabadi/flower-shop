import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";

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
          <FormControlLabel control={<Checkbox checked={sport} onChange={handleSport} />} label="Sport" />
          <FormControlLabel control={<Checkbox checked={SVG} onChange={handleSVG} />} label="SVG" />
          <FormControlLabel control={<Checkbox checked={MVP} onChange={handleMVP} />} label="MVP" />
          <FormControlLabel control={<Checkbox checked={hatchback} onChange={handleHatchback} />} label="Hatchback" />
        </FormGroup>
      </div>
    </div>
  );
}
