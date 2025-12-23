
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const PriceChart = () => {
  const options: ApexOptions = {
    chart: {
      id: "price-chart",
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
    stroke: {
      curve: "smooth", // обязательно одно из допустимых значений
    },
    title: {
      text: "Price Chart",
      align: "left",
    },
  };

  const series = [
    {
      name: "Price",
      data: [10, 41, 35, 51, 49],
    },
  ];

  return <ReactApexChart options={options} series={series} type="line" height={350} />;
};

export default PriceChart;
