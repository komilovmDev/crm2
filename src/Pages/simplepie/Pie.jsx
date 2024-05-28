import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';


const SimplePieChart = ({color1, color2 , value}) => {

  const data = [
    { name: 'A', value: value, color: color1 },
    { name: 'B', value: 100 - value, color: color2 },
  ];
  
  return (
    <PieChart width={100} height={100}>
      <Pie
        data={data}
        cx={40}
        cy={40}
        innerRadius={25}
        outerRadius={40}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
        <Label value={`${value}%`} position="center"/>
      </Pie>
    </PieChart>
  );
};

export default SimplePieChart;
