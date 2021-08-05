import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import "../App.css";
import InfoCard from "./InfoCard";

export default function Header({
  countries,
  country,
  onCountryChange,
  countryInfo,
}) {
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
        <InfoCard
          title="Caronavirus Cases"
          cases={countryInfo.todayCases}
          total={countryInfo.cases}
        />
        <InfoCard
          title="Recovered"
          cases={countryInfo.todayRecovered}
          total={countryInfo.recovered}
        />
        <InfoCard
          title="Deaths"
          cases={countryInfo.deaths}
          total={countryInfo.deaths}
        />
      </div>
    </div>
  );
}
