import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import "./styles.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// import { Container } from './styles';

function Chart({ cases }) {
  const [data, setData] = useState({});

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    setData(cases);
  }, [cases]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Covid-19 confirmed and death cases",
      },
    },
  };

  const lineChart = data[0] ? (
    <Line
      options={options}
      data={{
        labels: data.map((casesCountry) => casesCountry.properties.ADMIN),
        datasets: [
          {
            label: "Confirmed Cases",
            data: data.map((casesCountry) => casesCountry.properties.confirmed),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            fill: true,
          },
          {
            label: "Death Cases",
            data: data.map((casesCountry) => casesCountry.properties.deaths),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Chart</h5>

        {lineChart}
      </div>
    </div>
  );
}

export default Chart;
