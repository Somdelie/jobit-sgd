export function generateUserCode(firstName, lastName, prefix) {
  // Get initials from the first and last names
  const initials =
    firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()

  // Get the current timestamp
  const now = new Date()
  const timestamp = `${now.getFullYear()}${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now
    .getHours()
    .toString()
    .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}`

  // Generate the unique code
  const uniqueCode = `${prefix}-${initials}-${timestamp}`

  return uniqueCode
}

// Example usage:
const prefix = "LFF"
const fullName = "Mike John"
const [firstName, lastName] = fullName.split(" ")

const code = generateUserCode(firstName, lastName, prefix)
