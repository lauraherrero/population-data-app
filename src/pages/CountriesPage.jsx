import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ChartPopulation } from "../components/ChartPopulation";
import { useDataPopulation } from "../hooks/useDataPopulation";
import { FilterPopulation } from "../components/FilterPopulation";

export const CountriesPage = () => {
  const { name } = useParams();
  const { data, error } = useDataPopulation(name);
  const [population, setPopulation] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!population) {
      setLoading(true);
      setFilteredData(data);
      setLoading(false);
    } else {
      const numberValue = Number(population);
      if (isNaN(numberValue) || numberValue === 0) {
        setFilteredData(data);
      } else {
        setFilteredData(
          data.filter((country) => country.population >= numberValue)
        );
        setLoading(false);
      }
    }
  }, [population, data]);

  const handleFilterChange = (event) => {
    setPopulation(event.target.value);
  };

  return (
    <div>
      <h1>Countries Page</h1>
      {error ? <h2>Error: {error}</h2> : null}
      {loading ? <h2>Cargando...</h2> : null }
      <FilterPopulation
        placeholder="Filter by population"
        value={population}
        onChange={handleFilterChange}
      />
      <ChartPopulation data={filteredData} label="name" value="population" />
    </div>
  );
};
