import React from "react";

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from "@nivo/pie";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const PieChart = ({ data }) => {
  const d = [
    {
      id: data[0].name,
      label: data[0].name + ` (${data[0].score}%)`,
      value: data[0].score,
      color: "hsla(36, 100%, 54%, 1)",
    },
    {
      id: data[1].name,
      label: data[1].name + ` (${data[1].score}%)`,
      value: data[1].score,
      color: "hsla(36, 100%, 67%, 1)",
    },
    {
      id: data[2].name,
      label: data[2].name + ` (${data[2].score}%)`,
      value: data[2].score,
      color: "hsla(36, 100%, 80%, 1)",
    },
  ];

  return (
    <div style={{ height: "160px" }}>
      <ResponsivePie
        data={d}
        margin={{ top: 15, right: 150, bottom: 15, left: 0 }}
        activeOuterRadiusOffset={5}
        colors={{ datum: "data.color" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["opacity", "0"]] }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#000000"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", "0"]] }}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 0,
            translateY: 0,
            itemWidth: -10,
            itemHeight: 40,
            itemsSpacing: -10,
            symbolSize: 10,
            itemDirection: "left-to-right",
          },
        ]}
      />
    </div>
  );
};

export default PieChart;
