/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const CountriesPage = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
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
  return (
    <div>
      <h1>Countries Page</h1>
      <input type="text" placeholder="Filter by population" />
    </div>
  );
};
