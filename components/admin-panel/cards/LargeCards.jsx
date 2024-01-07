import React from "react"
import LargeCard from "./LargeCard"

const LargeCards = () => {
  const overviewStarts = [
    {
      period: "Today Completed Jobs",
      sales: 700,
      color: "bg-green-600",
    },
    {
      period: "Yesterday Completed Jobs",
      sales: 900,
      color: "bg-blue-600",
    },
    {
      period: "Last Month",
      sales: 1700,
      color: "bg-orange-600",
    },
    {
      period: "All-Time Jobs",
      sales: 88700,
      color: "bg-purple-600",
    },
  ]
  return (
    <div className="grid gap-4 grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {overviewStarts?.map((item, i) => {
        return <LargeCard key={i} data={item} />
      })}
    </div>
  )
}

export default LargeCards
