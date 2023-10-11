"use client";

import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

const Chart = ({ chartdata }) => {
  const [months, setMonths] = useState<string[]>([]);
  const [gdata, setGdata] = useState<number[]>([]);

  useEffect(() => {
    console.log(chartdata);

    const chartMonths: string[] = [];
    const chartGData: number[] = [];

    chartdata.items.forEach((item: any) => {
      chartMonths.push(item.fields.months);
      chartGData.push(item.fields.data);
    });

    setMonths(chartMonths);
    setGdata(chartGData);
  }, [chartdata]);

  const option = {
    xAxis: {
      type: "category",
      data: months,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: gdata,
        type: "bar",
      },
    ],
  };

  return (
    <div>
      <ReactEcharts option={option} style={{ height: "400px" }} />
    </div>
  );
};

export default Chart;
