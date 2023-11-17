import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "営業部",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    average: 4000
  },
  {
    name: "開発部",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    average: 4000
  },
  {
    name: "hogehoge",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    average: 4000
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    average: 4000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    average: 4000
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    average: 4000
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    average: 4000
  }
];

export default function App() {
  return (
    <BarChart
      width={500}
      height={300}
      layout="vertical"
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="uv" type="number" />
      <YAxis
        yAxisId="left"
        orientation="left"
        stroke="#8884d8"
        dataKey="name"
        type="category"
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        stroke="#82ca9d"
        dataKey="amt"
        type="category"
      />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="amt" fill="#8884d8" stackId="a" />
      <Bar yAxisId="left" dataKey="average" fill="#ccc" stackId="a" />
    </BarChart>
  );
}
