import React, { useEffect, useState } from "react";
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
import "./ExpensesComponent.css";

const ExpensesComponent = () => {
  const [data, setData] = useState([]);
  const [money, setMoney] = useState(Number);

  console.log("Esta es la plata", money);

  const calculateTotal = (data) => {
    let totalCount = 0;
    data.forEach((item) => {
      totalCount += item.total;
    });
    let chain = totalCount.toString();
    let removeDecimals = chain.split(".")[0];
    setMoney(removeDecimals);
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
    labels: data.map((item) => item.day),
    datasets: [
      {
        label: "Spending",
        data: data.map((item) => item.total),
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderWidth: 1,
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 20,
          bottomRight: 20,
        },
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
        border: {
          display: true,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    fetch("src/assets/ExpensesComponent/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        calculateTotal(data);
      });
  }, []);

  return (
    <div className="expensescomponent">
      <div className="myBalance">
        <div className="count">
          <h3>My balance</h3>
          <h1>${money}</h1>
        </div>
        <div className="logo"></div>
      </div>

      <div className="cardBalance">
        <h1>Spending - Last 7 days</h1>

        {data.length > 0 ? (
          <Bar data={chartData} options={options} />
        ) : (
          <p>Loading...</p>
        )}

        <hr />
      </div>
    </div>
  );
};

export default ExpensesComponent;