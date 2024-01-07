"use client"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const MobileNav = ({ links, pathname }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuOpen = () => {
    setIsOpen(true)
  }
  return (
    <>
      <button
        onClick={handleMenuOpen}
        className={isOpen ? "hidden md:hidden" : "block md:hidden"}>
        <MenuIcon />
      </button>

      <div
        className={
          !isOpen
            ? " block items-center -translate-x-full dark:text-slate-100 text-slate-800 fixed left-0 top-0 h-screen w-[70%] bg-white dark:bg-dark-card overflow-y-auto transition-transform"
            : "block items-center transition shadow bg-white shadow-dark-light dark:text-slate-100 text-slate-800 fixed left-0 top-0 h-screen w-[80%] dark:bg-dark-card overflow-y-auto"
        }>
        <div className="flex items-center p-4 justify-between bg-white dark:bg-dark-light border-b border-gray-200 dark:border-gray-600">
          <Link href="/" className="flex items-center">
            <Image width={24} height={24} src="/logo-mobile.png" alt="LOGO" />
            <h1 className="dark:text-white text-[26px] font-semibold">
              SOMDELIE
            </h1>
          </Link>
          <button
            className="bg-red-500 w-8 h-8 rounded-full p-2 flex text-white items-center justify-center"
            onClick={() => setIsOpen(false)}>
            X
          </button>
        </div>
        <div className="p-6 flex flex-col gap-4 text-[20px]">
          {links?.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className={
                link.link === pathname
                  ? "flex space-x-3 items-center border-lime-500 text-lime-500 transition "
                  : "flex space-x-3 items-center hover:text-lime-500 transition dark:text-slate-100 text-slate-800"
              }
              onClick={() => setIsOpen(false)}>
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileNav
