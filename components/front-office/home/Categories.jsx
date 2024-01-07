"use client"
import Link from "next/link"
import React from "react"

const categories = [
  {
    name: "Graphics & Design",
  },
  {
    name: "Digital Marketing",
  },
  {
    name: "Writing & Translation",
  },
  {
    name: "Video & Animation",
  },
  {
    name: "Music & Audio",
  },
  {
    name: "Programming & Tech",
  },
  {
    name: "Business",
  },
  {
    name: "Lifestyle",
  },
  {
    name: "Trending",
  },
  {
    name: "freelancers",
  },
]

const Categories = () => {
  return (
    <div className="mx-auto glass overflow-hidden h-[50px] max-w-[80%] rounded-[50px] mt-8 flex sticky z-20 top-16 transition gap-2 dark:text-white items-center">
      <h2 className="px-4 py-2 h-full bg-secondaryLightYellow text-dark-light font-semibold">
        Categories
      </h2>
      <div className="flex items-center gap-4 px-4 overflow-x-auto h-full scrollbar-hide">
        {categories.map((cat, index) => (
          <Link
            href="#"
            key={index}
            className="hover:text-secondaryGreen transition whitespace-nowrap">
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
