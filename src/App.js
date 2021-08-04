import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  //countries list
  const [countries, setCountries] = useState([]);
  console.log(countries, "countries");
  //single country
  const [country, setCountry] = useState("Worldwide");

  //handle countryChange function
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("countrycode", countryCode);
    setCountry(countryCode);
  };

  //get the data and map into header input field
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch(`https://disease.sh/v3/covid-19/countries`)
        .then((response) => response.json())
        .then((data) => {
          let countries = data.map((country) => ({
            name: country.country, //united States
            value: country.countryInfo.iso2, //country code
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  return (
    <div className="main-section">
      <Header
        countries={countries}
        country={country}
        onCountryChange={onCountryChange}
      />
      {/* title + select input dropdown */}
      {/* Info Boxes */}
      {/* Info Boxes */}
      {/* Info Boxes */}
      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div>
  );
}
export default App;
