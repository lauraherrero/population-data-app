/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const ChartPopulation = ({ data, label, value }) => {
  const chartData = {
    labels: data.map((d) => d[label]),
    datasets: [
      {
        label: "Population",
        data: data.map((d) => d[value]),
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
    <div
      className="col-md-12 d-flex justify-content-center align-items-center"
      style={{ height: "calc(100vh - 450px)", width: "calc(100% - 50px)", marginTop: "120px" }}
    >
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};
