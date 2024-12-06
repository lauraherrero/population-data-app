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
      <h1 className="fs-2 fw-medium mt-5 text-center" style={{ color: '#2c3e50' }}>Countries Page</h1>
      <p className="fs-5 text-muted fw-medium text-center" style={{ color: '#2c3e50' }}>Population in {name}</p>
      {error ? <p>Error: {error}</p> : null}
      {loading ? <p>Cargando...</p> : null }
      <FilterPopulation
        placeholder="Filter by population"
        value={population}
        onChange={handleFilterChange}
      />
      <ChartPopulation data={filteredData} label="name" value="population" />
    </div>
  );
};
