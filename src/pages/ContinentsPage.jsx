/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { ChartPopulation } from "../components/ChartPopulation";
import { useDataPopulation } from "../hooks/useDataPopulation";


export const ContinentsPage = () => {
  const { data: countries, error } = useDataPopulation();
  const [filteredData, setFilteredData] = useState([]);
  const [population, setPopulation] = useState("");

  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    if (countries.length > 0) {
      const groupedData = continents.reduce((acc, continent) => {
        acc[continent] = 0;
        return acc;
      }, {});

      countries.forEach((country) => {
        const continent = country.region;
        if (continents.includes(continent)) {
          groupedData[continent] += country.population;
        }
      });

      const formatData = Object.entries(groupedData).map(([region, population]) => ({
        region,
        population,
      }));

      setFilteredData(formatData);
    }
  }, [countries]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setPopulation(value);
    const numberValue = Number(value);
    if(isNaN(numberValue) || numberValue === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((continent) => continent.population >= numberValue));
    }
  };


  return (
    <>
      <div>
        <h1>Continents Page</h1>
        <input
          type="text"
          placeholder="Filter by population"
          value={population}
          onChange={handleFilterChange}
        />
      </div>
      <ChartPopulation data={filteredData} label="region" value="population" />
    </>
  );
};
