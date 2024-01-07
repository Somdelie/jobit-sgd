import React from "react"

const CurrencyConverter = ({ amountStart, amountEnd }) => {
  const convertToCurrency = (amount) => {
    if (amount === "negotiate") {
      return amount // Return 'negotiate' if it's a negotiation type
    }
    const formattedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
    return formattedAmount
  }

  return (
    <>
      {amountStart === "negotiate" ? (
        <h4>{amountStart}</h4>
      ) : (
        <h4>
          {convertToCurrency(amountStart)} - {convertToCurrency(amountEnd)}
        </h4>
      )}
    </>
  )
}

export default CurrencyConverter
