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
import stylesExpenses from "./ExpensesComponent.module.css"

const ExpensesComponent = () => {
  const [data, setData] = useState([]);
  const [money, setMoney] = useState(Number);
  const [hoveredTotal, setHoveredTotal] = useState(0);

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
      tooltip: {
        enabled: true,
      },
    },
    onHover: (event, chartElement) => {
      if (chartElement.length) {
        const index = chartElement[0].index;
        setHoveredTotal(data[index].total);
      } else {
        setHoveredTotal(0);
      }
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
    <div className={stylesExpenses.expensescomponent}>
      <div className={stylesExpenses.myBalance}>
        <div className={stylesExpenses.count}>
          <h3>My balance</h3>
          <h1>${money}</h1>
        </div>
        <div className={stylesExpenses.logo}></div>
      </div>

      <div className={stylesExpenses.cardBalance}>
        <h1>Spending - Last 7 days</h1>

        {data.length > 0 ? (
          <Bar data={chartData} options={options} />
        ) : (
          <p>Loading...</p>
        )}

        <hr className={stylesExpenses.separatorExpenses} />

        <div className={stylesExpenses.totalMonth}>
          <div className={stylesExpenses.total}>
            <h3>Total this month</h3>
            <h1>{hoveredTotal}</h1>
          </div>
          <div className={stylesExpenses.percentage}>
            <h3>+2.4%</h3>
            <h3>From last month</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesComponent;
