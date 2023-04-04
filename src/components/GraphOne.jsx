import { CartesianGrid, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart } from "recharts";

export default function GraphOne({list}) {
  if (list) {
    list.sort(function(a,b) {
       new Date(a.modified) - new Date(b.modified);
      });
    list.forEach(function (element) {
      element.comicsAvailable = element.comics.available;
    });
  }

  console.log(list)
  return(
    <div className="test-wrapper">
      <h1>Latest Characters</h1>
          <LineChart
            width={600}
            height={300}
            data={list}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="comicsAvailable" stroke="#8884d8" activeDot={{ r: 8 }} />

          </LineChart>
      </div>
  ) 
}