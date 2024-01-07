export const getUserInfoFromCookie = () => {
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim())
  const userDataCookie = cookies.find((cookie) =>
    cookie.startsWith("userData=")
  )

  if (userDataCookie) {
    const userDataString = userDataCookie.split("=")[1]
    const userData = JSON.parse(decodeURIComponent(userDataString))
    return userData
  }
  return null
}
