import BarChart from "@/components/front-office/overview/BarChart"
import Stats from "@/components/front-office/overview/Stats"
import React from "react"

const Overview = () => {
  return (
    <div className="max-w-[80%] mx-auto dark:text-text">
      <h1 className="font-bold text-2xl">Welcome, Brian</h1>
      <p>Tuesday, 24 Jan 2023</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <Stats />
        <BarChart />
      </div>
    </div>
  )
}

export default Overview
