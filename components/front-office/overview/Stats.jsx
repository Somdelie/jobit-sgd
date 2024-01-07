import { stats } from "@/data/stats"
import React from "react"
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi"

const Stats = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4 dark:text-slate-700">
      {stats.map(
        ({ id, icon, number, title, increment, percentage, cardBg }) => (
          <div
            className="p-4 rounded-[5px] shadow dark:shadow-none"
            key={id}
            style={{ backgroundColor: cardBg }}>
            <div className="icon-box bg-dark-light rounded-full h-[36px] w-[36px] items-center justify-center flex hover:bg-dark-main text-white text-muted transition">
              {icon}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-2xl">{number}</h1>
                <p>{title}</p>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  {increment ? (
                    <>
                      <p> +{percentage}</p>
                      <FiTrendingUp />
                    </>
                  ) : (
                    <>
                      <p> +{percentage}</p>
                      <FiTrendingDown />
                    </>
                  )}
                </div>
                <div className="w-full h-2 bg-primary-light mt-2 rounded-lg">
                  <div
                    className={`h-full w-1/2 rounded-full ${
                      increment ? "bg-secondaryGreen" : "bg-secondaryRed"
                    }`}></div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default Stats
