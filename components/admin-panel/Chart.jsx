import React from "react"
import Map from "../ui/UserMap"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const data = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
]

const Chart = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="border-2 border-dark-light h-[300px] p-4 text-text">
        <ResponsiveContainer width="100%" height="90%">
          <LineChart width={500} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
            <Legend />
            <Line
              type="monotone"
              dataKey="visit"
              stroke="#8884d8"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="click"
              stroke="#82ca9d"
              strokeDasharray="3 4 5 2"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="border-2 border-dark-light h-[300px] text-text"></div>
    </div>
  )
}

export default Chart
