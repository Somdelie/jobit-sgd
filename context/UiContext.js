"use client"
import { uiReducer } from "@/reducers/uiReducer"
import { createContext, useContext, useReducer } from "react"

export const UiContext = createContext()

const initialState = {
  isDropdownOpen: false,
  isNotificationsOpen: false,
  isSidebarOpen: false,
  isFilterMenuOpen: false,
  isEventFiltersOpen: false,
}

export const UiProvider = ({ children }) => {
  const [ui, dispatch] = useReducer(uiReducer, initialState)

  return (
    <UiContext.Provider value={{ ...ui, dispatch }}>
      {children}
    </UiContext.Provider>
  )
}

export const useUiContext = () => useContext(UiContext)
