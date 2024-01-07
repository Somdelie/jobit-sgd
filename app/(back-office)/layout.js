"use client"
import Navbar from "@/components/admin-panel/Navbar"
import SidebarComp from "@/components/admin-panel/Sidebar"
import React, { useState } from "react"

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className="flex">
      <SidebarComp />
      <div className="w-full">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
