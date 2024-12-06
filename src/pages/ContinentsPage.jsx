/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { ChartPopulation } from "../components/ChartPopulation";


export const ContinentsPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [population, setPopulation] = useState("");
  const [error, setError] = useState(null);

  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();

        const groupedData = continents.reduce((acc, continent) => {
          acc[continent] = 0;
          return acc;
        }, {});

        countries.forEach((country) => {
          const continent = country.region;
          if(continents.includes(continent)) {
            groupedData[continent] += country.population;
          }
        });

        const formatData = Object.entries(groupedData).map(([region, population]) => ({
          region,
          population,
        }));

        setData(formatData);
        setFilteredData(formatData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

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
      <ChartPopulation data={filteredData} />
    </>
  );
};
