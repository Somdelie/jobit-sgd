import React from "react"

const SmallCard = ({ data }) => {
  const { title, total, iconBg, icon } = data
  return (
    <div className="rounded-lg shadow-lg border-slate-200 dark:border-dark-light border-2 p-4">
      <div className="flex items-center space-x-4">
        <div
          className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}>
          {icon}
        </div>
        <div className="">
          <p className="text-slate-300">{title}</p>
          <h3 className="text-2xl font-bold">{total}</h3>
        </div>
      </div>
    </div>
  )
}

export default SmallCard
