import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import "../App.css";
export default function Header({ countries }) {
  // console.log("countries", countries);
  return (
    <div className="header-flex">
      <h1>Covid-tracker</h1>
      <FormControl>
        <Select variant="outlined" value="abc">
          {countries.map((country) => {
            return <MenuItem value={country.value}>{country.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
