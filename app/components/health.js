import React from "react";
import HeartRate from "./health/heartRate";
import Blood from "./health/blood";
import DailySleep from "./health/dailySleep";

// Health metrics

const Health = () => {
  return (
    <section className="font-mono flex flex-col rounded-lg m-5 bg-[#969C9C]">
      <p>Health Metrics</p>
      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center">
        <HeartRate />
        <Blood />
        <DailySleep />
      </div>
    </section>
  );
};

export default Health;
