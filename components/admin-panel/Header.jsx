import Image from "next/image"
import React from "react"

const Header = ({ title }) => {
  return (
    <div className="flex items-center text-text">
      <span className="bg-dark-light flex items-center rounded-[5px] text-sm p-3 gap-2">
        <h2>Dashboard</h2>
        <Image width={10} height={10} src="/arrow.png" alt="" />
        <h2>{title}</h2>
      </span>
    </div>
  )
}

export default Header
