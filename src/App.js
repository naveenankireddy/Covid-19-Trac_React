import { CardContent, Card } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Map from "./components/Map";
import Table from "./components/Table";
import { sortData } from "./utils.js";

function App() {
  //countries list
  const [countries, setCountries] = useState([]);
  //single country
  const [country, setCountry] = useState("Worldwide");

  //country info
  const [countryInfo, setCountryInfo] = useState({});

  //country table list
  const [tableData, setTableData] = useState([]);

  //handle countryChange function
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("countrycode", countryCode);
    setCountry(countryCode);
    let url =
      countryCode === "Worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //data from the country response
        setCountryInfo(data);
      });
  };

  //get worldwide data in the info cards
  useEffect(() => {
    const url = "https://disease.sh/v3/covid-19/all";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountryInfo(data));
  }, []);
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
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="main-section">
        <Header
          countries={countries}
          country={country}
          onCountryChange={onCountryChange}
          countryInfo={countryInfo}
        />

        <Map />
      </div>
      <Card className="side-section">
        <CardContent>
          <h2>Live cases by country</h2>
          <Table countries={tableData} />
          <h2>Worldwide cases</h2>
        </CardContent>
      </Card>
    </div>
  );
}
export default App;
