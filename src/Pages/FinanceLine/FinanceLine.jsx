import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export default function FinanceLine() {
  const dataset = [
    { month: 'Yan', revenue: 49999 },
    { month: 'Feb', revenue: 99999 },
    { month: 'Mar', revenue: 49999 },
    { month: 'Apr', revenue: 59999 },
    { month: 'May', revenue: 69999 },
    { month: 'June', revenue: 39999 },
    { month: 'July', revenue: 99999 },
    { month: 'Aug', revenue: 89999 },
    { month: 'Sept', revenue: 69999 },
    { month: 'Oct', revenue: 59999 },
    { month: 'Nov', revenue: 68999 },
    { month: 'Dec', revenue: 49999 },
    // Add more data if needed
  ];

  const valueFormatter = (value) => `${value}som`;

  const chartSetting = {
    series: [
      {
        dataKey: 'revenue',
        valueFormatter,
        color: '#005EEB',
        argumentsField: 'month',
        valueField: 'month',
      },
    ],
    height: 350,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: 'translateX(-10px)',
      },
    },
    slotProps: {
      bar: {
        clipPath: `inset(5px round 10px 10px 10px 10px)`,
      },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month' },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
