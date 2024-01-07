/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image"
import React, { useState } from "react"
import { Label } from "flowbite-react"
import { useForm } from "react-hook-form"
import TextInputForm from "@/components/form/TextInput"
import { CircularProgress } from "@mui/material"
import { Save } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const [emailErr, setEmailErr] = useState("")
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  async function onSubmit(data) {
    try {
      setLoading(true)
      const token = localStorage.getItem("accessToken")
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the 'Authorization' header
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const responseData = await response.json()
        const { user, token } = responseData.data

        // Save user data and token to localStorage
        localStorage.setItem("userData", JSON.stringify(user))
        localStorage.setItem("accessToken", token)

        console.log("Response Data:", responseData) // Log the entire responseData
        const newToken = responseData.data.token // Access token from responseData.data.token
        localStorage.setItem("accessToken", newToken) // Store token in localStorage
        // Display success message
        toast.success("Login successful")
        console.log("Login successful")
        console.log(data)
        reset()
        router.push("/")
      } else {
        const errorData = await response.json()
        toast.error("Failed to log in try again later")
        console.log(errorData)
      }
    } catch (error) {
      // Handle other errors like network issues
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center gap-4 mx-auto h-screen lg:py-0">
        <div className="flex items-center">
          <Image width={24} height={24} src="/logo-mobile.png" alt="LOGO" />
          <h1 className="dark:text-white text-[26px] font-semibold">
            SOMDELIE
          </h1>
        </div>
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-dark-card dark:border-dark-light">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-slate-300 text-center">
              Login to continue
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextInputForm
                label="Your email"
                name="email"
                register={register}
                errors={errors}
                type="email"
              />
              <TextInputForm
                label="Your password"
                name="password"
                register={register}
                errors={errors}
                type="password"
              />
              <div className="mt-6">
                {loading ? (
                  <button
                    disabled
                    type="button"
                    className="bg-green-600 text-slate-300 px-5 py-2 rounded-lg mt-4 flex items-center gap-2">
                    <CircularProgress color="inherit" size={16} /> Logging you
                    in please wait...
                  </button>
                ) : (
                  <button className="bg-secondaryGreen rounded-[8px] hover:opacity-60 text-slate-300 px-5 py-2 mt-4 flex items-center gap-2">
                    Log In
                  </button>
                )}
              </div>
              <div className="flex items-center mt-4">
                <div className="w-full bg-slate-500 h-[1px]"></div>
                <span className="mx-2">or</span>
                <div className="w-full bg-slate-500 h-[1px]"></div>
              </div>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-purple-600 hover:underline dark:text-purple-500">
                  Register Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
