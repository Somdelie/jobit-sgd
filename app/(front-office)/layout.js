"use client"
import { Footer } from "@/components/front-office/Footer"
import Navbar from "@/components/front-office/Navbar"
import PageLoader from "@/components/ui/PageLoader"
import React, { useEffect, useState } from "react"

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating a loading delay with setTimeout
    setTimeout(() => {
      setLoading(false) // Set loading to false after the delay
    }, 2000) // You can adjust the delay time as needed
  }, [])

  return (
    <div>
      <Navbar />

      <div className="w-full min-h-screen pt-20">
        <main>{loading ? <PageLoader /> : children}</main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
