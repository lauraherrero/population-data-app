/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export const ContinentsPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [population, setPopulation] = useState("");
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

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setPopulation(value);
    setFilteredData(data);
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: "Population",
        data,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 210, 220, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
      <div>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};
