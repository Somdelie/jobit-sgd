"use client"
import React from "react"

const Animation = () => {
  return (
    <div>
      <div className="glass absolute -left-10 bottom-4 w-[400px] rounded-[10px] animate-bounce p-4">
        <h3>58M+ Happy Clients</h3>
        <div className="flex"></div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translatex(0);
          }
          50% {
            transform: translatex(-20px);
          }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  )
}

export default Animation
