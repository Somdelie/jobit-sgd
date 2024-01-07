"use client"
import React, { createContext, useContext, useState } from "react"

// Create a context
const UserContext = createContext()

// Create a provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // Function to set user data
  const setUserData = (userData) => {
    setUser(userData)
    localStorage.setItem("userData", JSON.stringify(userData))
  }

  // Function to clear user data (logout)
  const clearUserData = () => {
    setUser(null)
    localStorage.removeItem("userData")
    localStorage.removeItem("accessToken")
  }

  return (
    <UserContext.Provider value={{ user, clearUserData }}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook to consume the context
export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
