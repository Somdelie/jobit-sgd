// app/components/ThemeSwitcher.tsx
"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center dark:bg-slate-200 w-[50px] bg-dark-main rounded-full h-[20px]">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="dark:translate-x-6 transition text-slate-100 bg-secondaryLightYellow rounded-full w-[34px] flex items-center justify-center h-[34px]">
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  )
}
