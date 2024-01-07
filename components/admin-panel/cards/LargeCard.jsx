import { Layers } from "lucide-react"
import React from "react"

const LargeCard = ({ data }) => {
  return (
    <div className={`rounded-lg text-slate-100 shadow-md p-8 ${data.color}`}>
      <div className="flex items-center justify-between">
        <Layers />
        <h4>{data.period}</h4>
      </div>
      <div className="flex items-center justify-between mt-2">
        <h4>Jobs</h4>
        <h2 className="text-2xl">{data.sales}</h2>
      </div>
    </div>
  )
}

export default LargeCard
