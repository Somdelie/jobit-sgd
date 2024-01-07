import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const useUser = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Retrieve user information from localStorage
    const userData = localStorage.getItem("userData")

    // Check if userData exists and set the user state
    if (userData) {
      setUser(JSON.parse(userData)) // Assuming user data is stored as JSON
    }
  }, [])

  // Function to handle user logout
  const handleLogout = () => {
    // Clear user data and token from localStorage
    localStorage.removeItem("userData")
    localStorage.removeItem("accessToken")

    // Reset the user state to empty object
    setUser(null)

    // Additional logout logic if needed, like redirecting to login page
    router.push("/")
  }

  return { user, handleLogout }
}

export default useUser
