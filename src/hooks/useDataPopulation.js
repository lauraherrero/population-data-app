import { useEffect } from "react";
import { useState } from "react"

export const useDataPopulation = (filterRegion) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const countries = await response.json();

        let filteredCountries = countries;
        if (filterRegion) {
          filteredCountries = countries.filter((country) => country.region === filterRegion);
        }

        const formattedData = filteredCountries.map((country) => ({
          name: country.name.common,
          region: country.region || 'Unknown',
          population: country.population || 0,
        }));

        setData(formattedData);
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchData();
  }, [filterRegion]);

  return { data, error };
};