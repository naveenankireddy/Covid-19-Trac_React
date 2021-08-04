import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import "../App.css";
import InfoCard from "./InfoCard";
export default function Header({ countries, country, onCountryChange }) {
  console.log("countries", countries);

  return (
    <div>
      <div className="header-flex">
        <h1>Covid-tracker</h1>
        <FormControl>
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="Worldwide">Worldwide</MenuItem>
            {countries.map((country) => {
              return <MenuItem value={country.value}>{country.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      <div className="app__card">
        <InfoCard title="Carona 1" cases={1234} total={999999} />
        <InfoCard title="Carona 1" cases={1234} total={999999} />
        <InfoCard title="Carona 1" cases={1234} total={999999} />
      </div>
    </div>
  );
}
