import { useEffect, useState } from "react";
import { ChartPopulation } from "../components/ChartPopulation";
import { useDataPopulation } from "../hooks/useDataPopulation";
import { FilterPopulation } from "../components/FilterPopulation";

export const ContinentsPage = () => {
  const { data: countries, error } = useDataPopulation();
  const [filteredData, setFilteredData] = useState([]);
  const [population, setPopulation] = useState("");
  const [loading, setLoading] = useState(true);

  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    setLoading(true);
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

      const formatData = Object.entries(groupedData).map(
        ([region, population]) => ({
          region,
          population,
        })
      );

      setFilteredData(formatData);
      setLoading(false);
    }
  }, [countries]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setPopulation(value);
    const numberValue = Number(value);
    if (isNaN(numberValue) || numberValue === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((continent) => continent.population >= numberValue)
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
