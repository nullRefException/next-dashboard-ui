"use client";
import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import Image from "next/image";

// #region Sample data
const data = [
  {
    name: "Total",
    count: 106,
    fill: "#CFCEFF",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
];

// #endregion
const style = {
  transform: "translate(0%, 100%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1>Students</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      {/* CHART */}
      <div className="w-full h-[75%]">
        <RadialBarChart
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: 1.618,
          }}
          responsive
          cx="50%"
          cy="50%"
          innerRadius="30%"
          outerRadius="100%"
          barSize={32}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#00000" }}
            background
            dataKey="count"
          />
          <Tooltip />
          {/* <Legend
            iconSize={10}
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            wrapperStyle={style}
          /> */}
          <RechartsDevtools />
        </RadialBarChart>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full">
            <h1 className="font-bold">1,234</h1>
            <h2 className="text-xs text-gray-300">Boys (55%)</h2>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full">
            <h1 className="font-bold">1,234</h1>
            <h2 className="text-xs text-gray-300">Boys (55%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
