import { useEffect, useState } from "react";
import { ChartPopulation } from "../components/ChartPopulation";
import { useDataPopulation } from "../hooks/useDataPopulation";
import { FilterPopulation } from "../components/FilterPopulation";

export const ContinentsPage = () => {
  const { data: countries, error } = useDataPopulation();
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [population, setPopulation] = useState("");
  const [loading, setLoading] = useState(true);

  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    setLoading(true);
    if (countries.length > 0) {
      const groupedData = continents.map((continent) => ({
        region: continent,
        population: countries
        .filter((country) => country.region === continent)
        .reduce((sum, country) => sum + country.population, 0),
      }));

      setOriginalData(groupedData);
      setFilteredData(groupedData);
      setLoading(false);
    }
  }, [countries]);

  const handleFilterChange = (event) => {
    setPopulation(event.target.value);
    const numberValue = Number(event.target.value);
    if (isNaN(numberValue) || numberValue === 0) {
      setFilteredData(originalData);
    } else {
      setFilteredData(
        originalData.filter((continent) => continent.population >= numberValue)
      );
    }
  };

  return (
    <>
      <div>
        <h1 className="fs-2 fw-medium my-5 text-center" style={{ color: '#2c3e50' }}>Continents Page</h1>
        {error ? <h2>Error: {error}</h2> : null}
        {loading ? <h2>Cargando...</h2> : null}
        <FilterPopulation
          placeholder="Filter by population"
          value={population}
          onChange={handleFilterChange}
        />
      </div>
      <ChartPopulation data={filteredData} label="region" value="population" />
    </>
  );
};
