import React from "react"
import LargeCard from "./LargeCard"
import SmallCard from "./SmallCard"
import { CheckCheck, Loader, ShoppingBag, TruckIcon } from "lucide-react"

const SmallCards = () => {
  const Overviews = [
    {
      title: "Total Users",
      total: 18000,
      iconBg: "bg-orange-600",
      icon: <ShoppingBag />,
    },
    {
      title: "Blocked Users",
      total: 200,
      iconBg: "bg-red-500",
      icon: <Loader />,
    },
    {
      title: "Posted Jobs",
      total: 1700,
      iconBg: "bg-purple-600",
      icon: <TruckIcon />,
    },
    {
      title: "Posted Blogs",
      total: 2700,
      iconBg: "bg-green-600",
      icon: <CheckCheck />,
    },
  ]
  return (
    <div className="grid gap-4 grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Overviews?.map((data, i) => {
        return <SmallCard key={i} data={data} />
      })}
    </div>
  )
}

export default SmallCards
