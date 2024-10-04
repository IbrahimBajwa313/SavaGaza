import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';

const data = [
  { Category: 'People Killed', Total: 20000 },
  { Category: 'Children Killed', Total: 29000 },
  { Category: 'Bombs Dropped', Total: 58000 },
  { Category: 'People Displaced', Total: 34000 },
  { Category: 'Buildings Destroyed', Total: 34000 },
];

// Utility function to format numbers with commas
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Custom tick component for wrapping text
const CustomTick = ({ x, y, payload }) => {
  const lines = payload.value.split(' ');
  return (
    <g transform={`translate(${x},${y})`}>
      {lines.map((line, index) => (
        <text
          key={index}
          x={0}
          y={index * 18} // Reduced spacing between lines
          dy={12}
          textAnchor="middle"
          fill="#000"
          className="text-sm font-bold" // Decreased font size and kept bold
        >
          {line}
        </text>
      ))}
    </g>
  );
};

// Custom label component for adding space beneath the text
const CustomLabel = ({ x, y, value }) => {
  return (
    <text
      x={x + 18} // Adjust the x position to add space after the text
      y={y - 12} // Adjust the y position to add space beneath the text
      fill="#000"
      textAnchor="middle"
      className="text-lg font-extrabold"
    >
      {formatNumber(value)}
    </text>
  );
};

const EvacuationChart = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleMouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(-1);
  };

  return (
    <div >
      {/* Bar Chart */}
      <div className="w-full max-w-4xl mx-auto">
        <ResponsiveContainer width="100%" height={300} className="">
          <BarChart 
            data={data} 
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }} 
            barGap={0} // Reduces the gap between bars
            barCategoryGap="10%" // Controls the gap between categories
          >
            <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
            <XAxis 
              dataKey="Category" 
              tick={<CustomTick />} 
              interval={0} 
              axisLine={false} // Hide the X-axis line
              tickLine={false} // Hide the tick lines
            />
            <YAxis
              hide={true} // Hide the Y-axis
              axisLine={false} // Hide the Y-axis line
              tickLine={false} // Hide the tick lines
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#fffe", border: "none", borderRadius: "10px", boxShadow: "0 2px 4px rgba(255,255,255,0.1)" }}  // Tooltip background styling
              wrapperStyle={{ color: "#000" }}  // Wrapper style
              labelStyle={{ fontWeight: "bold", color: "#000" }}  // Label text style
              itemStyle={{ fontWeight: "bold", color: "#d0312d" }}  // Custom style for each data item
              cursor={{ fill: 'rgba(255, 255, 0, 0)' }}  // Custom hover effect on the bars
            />
            {/* Thinner bars with hover effect */}
            <Bar 
              dataKey="Total" 
              fill="#d0312d" 
              barSize={35} 
              radius={[5, 5, 2, 2]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              isAnimationActive={false} // Disable default hover animation
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === activeIndex ? "#b90e0a" : "#d0312d"} // Change color on hover
                  style={{
                    transition: 'fill 0.3s ease-in-out' // Add transition for smooth color change
                  }}
                />
              ))}
              <LabelList dataKey="Total" position="top" content={<CustomLabel />} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EvacuationChart;