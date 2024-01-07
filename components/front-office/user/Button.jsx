import Link from "next/link"
import React from "react"

const Button = ({ title, icon, setUser, link }) => {
  return (
    <Link
      href={link}
      className="bg-secondaryGreen rounded-xl flex items-center py-1 px-3 gap-1 font-semibold hover:bg-secondaryGreen transition text-button1">
      {icon}
      {title}
    </Link>
  )
}

export default Button
