/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export const ContinentsPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();

        setData(countries);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Continents Page</h1>
      <input type="text" placeholder="Filter by population" />
    </div>
  );
};
