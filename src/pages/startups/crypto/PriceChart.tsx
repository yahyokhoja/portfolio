import React from "react";
import Chart from "react-apexcharts";

const PriceChart: React.FC = () => {
  const options = {
    chart: { id: "crypto-chart", toolbar: { show: false } },
    xaxis: {
      categories: ["09:00", "10:00", "11:00", "12:00", "13:00"]
    },
    stroke: { curve: "smooth" },
    title: {
      text: "BTC / USDT",
      align: "left"
    }
  };

  const series = [
    {
      name: "Price",
      data: [62000, 62800, 62300, 63500, 64000]
    }
  ];

  return <Chart options={options} series={series} type="line" height={300} />;
};

export default PriceChart;
