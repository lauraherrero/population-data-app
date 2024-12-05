/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export const CountriesPage = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        setData(countries);
        } catch (error) {
          setError(error);
          }
        };
        fetchCountries();
  }, []);
  return (
    <div>
      <h1>Countries Page</h1>
      <input type="text" placeholder="Filter by population" />
    </div>
  )
}
