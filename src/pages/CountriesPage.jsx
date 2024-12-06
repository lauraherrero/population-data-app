/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ChartPopulation } from "../components/ChartPopulation";

export const CountriesPage = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [population, setPopulation] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();

        const filteredCountries = countries.filter(
          (country) => country.region === name
        );
        const formatData = filteredCountries.map((country) => ({
          name: country.name.common,
          population: country.population,
        }));
        setData(formatData);
        setFilteredData(formatData);
      } catch (error) {
        setError(error);
      }
    };
    fetchCountries();
  }, [name]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setPopulation(value);
    const numberValue = Number(value);
    if (isNaN(numberValue) || numberValue === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((continent) => continent.population >= numberValue)
      );
    }
  };

  return (
    <div>
      <h1>Countries Page</h1>
      <input
        type="text"
        placeholder="Filter by population"
        value={population}
        onChange={handleFilterChange}
      />
      <ChartPopulation data={filteredData} />
    </div>
  );
};
