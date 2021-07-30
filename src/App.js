import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState([]);
  console.log(countries, "countries");
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch(`https://disease.sh/v3/covid-19/countries`)
        .then((response) => response.json())
        .then((data) => {
          let countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  return (
    <div className="main-section">
      <Header countries={countries} />
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
