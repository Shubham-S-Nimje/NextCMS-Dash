import React from "react";
import User from "@/components/dashboard/User";
import Chart from "@/components/dashboard/Chart";

async function getData() {
  try {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/entries?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}&content_type=graph`
    );

    if (!response.ok) {
      console.log("Error fetching data");
      return null;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
}

export default async function Home() {
  const chartData = await getData();
  return (
    <div>
      <User />
      <Chart chartdata={chartData} />
    </div>
  );
}
