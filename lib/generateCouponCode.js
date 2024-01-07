export const generateCouponCode = (title = "", expiryDate = "") => {
  // Convert title to uppercase and remove spaces
  const formattedTitle = title.toUpperCase().replace(/\s/g, "")

  // Format expiry date (assuming expiryDate is in YYYY-MM-DD format)
  const formattedExpiryDate = expiryDate.split("-").reverse().join("")

  // Generate coupon code by combining formatted title and expiry date
  const couponCode = `${formattedTitle}-${formattedExpiryDate}`

  return couponCode
}
