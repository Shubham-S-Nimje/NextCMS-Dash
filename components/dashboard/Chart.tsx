"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReactEcharts from "echarts-for-react";
import { useSession } from "next-auth/react";

interface ChartData {
  items: {
    fields: {
      months: string;
      data: number;
    };
  };
}

const Chart = ({ chartdata }: { chartdata: ChartData }) => {
  const [months, setMonths] = useState<string[]>([]);
  const [gdata, setGdata] = useState<number[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (chartdata.items && Array.isArray(chartdata.items)) {
      const chartMonths: string[] = [];
      const chartGData: number[] = [];

      chartdata.items.forEach((item: any) => {
        chartMonths.push(item.fields.months);
        chartGData.push(item.fields.data);
      });

      setMonths(chartMonths);
      setGdata(chartGData);
    }
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
      {session && <ReactEcharts option={option} style={{ height: "400px" }} />}
    </div>
  );
};

export default Chart;
