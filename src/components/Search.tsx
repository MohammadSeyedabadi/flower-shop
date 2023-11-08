import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled, lighten, darken } from "@mui/material/styles";
import { manufacturers } from "@/constants";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

export default function Search() {
  const [manufacturer, setManufacturers] = useState<null | string | undefined>(
    null
  );
  const options = manufacturers.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  console.log(manufacturer);
  return (
    <Autocomplete
      onChange={(event, value) => setManufacturers(value?.name)}
      size="small"
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Name" />}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
    />
  );
}
