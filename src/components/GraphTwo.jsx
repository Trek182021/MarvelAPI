import { useEffect, useState } from "react";
import { CartesianGrid, Line, XAxis, YAxis, Tooltip, AreaChart, Area, Legend, LineChart } from "recharts";

export default function GraphTwo({list}) {
  const newData = {};
  const finalData = [];
  
  if (list) {
    list.forEach( (item, index) => {

      if (newData[item.modified.slice(0,4)]) {
        newData[item.modified.slice(0,4)].push(item)
      } else {
        newData[item.modified.slice(0,4)] = [item];
      };
    })

    // Sort newData
    let count = 0;
    for (const [key, value] of Object.entries(newData)) {
      const tempObj = {Quantity: newData[key].length, Date: key}
      finalData[count] = tempObj
      count++;
    }
  
  }
  
  console.log(finalData)
  return(
    <div className="test-wrapper">
      <h1>Comics Per Year</h1>
      
          <AreaChart
            width={600}
            height={300}
            data={finalData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Quantity" stroke="#f78f3f" fill="#f78f3f" />
          </AreaChart>
      </div>
  ) 
}