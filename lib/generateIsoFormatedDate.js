export const generateIsoFormatedDate = (normalDate) => {
  // Convert the string to a JavaScript Date object
  const dateObject = new Date(normalDate)
  const isoFormattedDate = dateObject.toISOString()

  return isoFormattedDate
}
