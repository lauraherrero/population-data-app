/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ChartPopulation } from "../components/ChartPopulation";
import { useDataPopulation } from "../hooks/useDataPopulation";

export const CountriesPage = () => {
  const { name } = useParams();
  const { data, error } = useDataPopulation(name); 
  const [population, setPopulation] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!population) {
      setFilteredData(data);
    } else {
      const numberValue = Number(population);
      if (isNaN(numberValue) || numberValue === 0) {
        setFilteredData(data);
      } else {
        setFilteredData(data.filter((country) => country.population >= numberValue));
      }
    }
  }, [population, data]);

  const handleFilterChange = (event) => {
    setPopulation(event.target.value);
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
      <ChartPopulation data={filteredData} label="name" value="population" />
    </div>
  );
};
