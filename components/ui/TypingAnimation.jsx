"use client"
import { useEffect, useState } from "react"

const TypingAnimation = ({ fullText }) => {
  const [text, setText] = useState("")

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50) // Adjust the duration by changing the interval time (e.g., 100 for slower)

    return () => clearInterval(interval)
  }, [fullText])

  return (
    <h1 className="text-secondaryGreen font-semibold text-[44px]">{text}</h1>
  )
}

export default TypingAnimation
