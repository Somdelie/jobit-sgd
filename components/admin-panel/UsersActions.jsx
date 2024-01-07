"use client"
import { Box, CircularProgress, Fab } from "@mui/material"
import { useEffect, useState } from "react"
import { Check, Save } from "@mui/icons-material"

const UsersActions = ({ params, rowId, setRowId }) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)

    try {
      // Simulating an API call delay of 2 seconds
      setTimeout(() => {
        console.log("Simulated API call - Data: ", {
          /* Your simulated data */
        })
        setSuccess(true)
        setRowId(null)
        setLoading(false)
      }, 2000)
    } catch (error) {
      console.error("Error occurred:", error)
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        m: 1,
        position: "relative",
        color: "white",
      }}>
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: "#0BAB7C",
            "&:hover": { bgcolor: "#393948" },
          }}>
          <Check />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={params.id !== rowId || loading}
          onClick={handleSubmit}>
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: "#0BAB7C",
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  )
}

export default UsersActions
