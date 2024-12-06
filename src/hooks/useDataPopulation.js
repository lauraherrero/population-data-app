import { useEffect } from "react";
import { useState } from "react"
import { fetchCountriesData } from "../helpers/utils";

export const useDataPopulation = (filterRegion) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCountriesData();


        let filteredCountries = response;
        if (filterRegion) {
          filteredCountries = response.filter((country) => country.region === filterRegion);
        }

        const formattedData = filteredCountries.map((country) => ({
          name: country.name.common,
          region: country.region || 'Unknown',
          population: country.population || 0,
          img: country.flags.png,
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