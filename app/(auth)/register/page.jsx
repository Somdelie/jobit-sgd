/* eslint-disable react/no-unescaped-entities */
"use client"
import TextInputForm from "@/components/form/TextInput"
import { CircularProgress } from "@mui/material"
import { Avatar, Checkbox, Label } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { generateUserCode } from "@/lib/generateUserCode"
import { FolderEdit, Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const RegisterPage = () => {
  const [loading, setLoading] = useState(false)
  const [uploadedImages, setUploadedImages] = useState([])
  const [emailErr, setEmailErr] = useState("")

  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // Existing imports and states remain the same

  async function onSubmit(data) {
    // const prefix = "LFF"
    // const code = generateUserCode(data.firstName, data.lastName, prefix)
    // data.code = code
    console.log(data)
    try {
      setLoading(true) // Set loading state to true before API call

      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // Display success message
        toast.success("User Created Successfully")
        console.log(data)
        reset()
        router.push("/login")
      } else {
        setLoading(false)
        if (response.status === 409) {
          setEmailErr("User with this Email already exists")
          toast.error("User with this Email already exists")
        } else {
          // Handle other errors
          console.error("Server Error:", response.error)
          toast.error("Oops Something Went wrong")
        }
      }
    } catch (error) {
      toast.error("Something Went wrong, Please Try Again")
      // Handle other errors like network issues
    } finally {
      setLoading(false) // Set loading state to false after API call completes
    }
  }

  // Rest of your code remains the same

  // // Function to handle image preview
  // const handleImageChange = (e) => {
  //   const files = e.target.files
  //   const imagesArray = []

  //   // Convert selected files into an array of URL objects for preview
  //   for (let i = 0; i < files.length; i++) {
  //     const imageUrl = URL.createObjectURL(files[i])
  //     imagesArray.push(imageUrl)
  //   }

  //   setUploadedImages(imagesArray)
  //   console.log(imagesArray)
  // }

  //create an upload preset
  //name:somdelie_eshop
  //cloudname:cautious

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center gap-4 mx-auto h-screen lg:py-0">
        <div className="flex items-center">
          <Image width={24} height={24} src="/logo-mobile.png" alt="LOGO" />
          <h1 className="dark:text-white text-[26px] font-semibold">
            SOMDELIE
          </h1>
        </div>
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-4xl xl:p-0 dark:bg-dark-card dark:border-dark-light">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="relative">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-slate-300 text-center">
                Create an account
              </h1>
              {uploadedImages?.map((image, index) => (
                <div className="absolute right-0 top-0" key={index}>
                  <Avatar img={image} rounded size="lg" bordered color="pink" />
                </div>
              ))}
            </div>

            {/* <--------------------------------Register Form----------------------------------------------------> */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-4">
                {" "}
                <TextInputForm
                  label="Your First Name"
                  name="firstName"
                  register={register}
                  errors={errors}
                  addon={<FolderEdit />}
                />
                <TextInputForm
                  label="Your Surname"
                  name="lastName"
                  register={register}
                  errors={errors}
                  addon={<FolderEdit />}
                />
                <TextInputForm
                  label="Your email"
                  name="email"
                  register={register}
                  errors={errors}
                  type="email"
                  addon="@"
                />
                <TextInputForm
                  label="Your password"
                  name="password"
                  register={register}
                  errors={errors}
                  type="password"
                  addon={<Lock />}
                />
                {/* <div id="fileUpload" className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="file" value="Upload file" />
                  </div>
                  <FileInput
                    helperText="A profile picture is useful to confirm your are logged into your account"
                    accept="image/*"
                    name="userProfile"
                    {...register("userProfile", { required: false })}
                  />
                </div> */}
                {/* <---------------------------------------------Profile Picture----------------------------------------> */}
                {/* <input
                  type="file"
                  accept="image/*"
                  name="userProfile"
                  label="Category Image"
                  {...register("userProfile", { required: true })}
                  className=""
               
                /> */}
              </div>

              <div className=" grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="accept" required />
                  <Label htmlFor="accept" className="flex">
                    I agree with the&nbsp;
                    <a
                      href="#"
                      className="text-cyan-600 hover:underline dark:text-cyan-500">
                      terms and conditions
                    </a>
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="age" required />
                  <Label htmlFor="age">I am 18 years or older</Label>
                </div>
              </div>

              <div className="mt-6">
                {loading ? (
                  <button
                    disabled
                    type="button"
                    className="bg-green-600 text-slate-300 px-5 py-2 rounded-lg mt-4 flex items-center gap-2">
                    <CircularProgress color="inherit" size={16} /> Creating your
                    account please wait...
                  </button>
                ) : (
                  <button className="bg-secondaryGreen rounded-[8px] hover:opacity-60 text-slate-300 px-5 py-2 mt-4 flex items-center gap-2">
                    Register
                  </button>
                )}
              </div>
              <div className="flex items-center mt-4">
                <div className="w-full bg-slate-500 h-[1px]"></div>
                <span className="mx-2">or</span>
                <div className="w-full bg-slate-500 h-[1px]"></div>
              </div>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-purple-600 hover:underline dark:text-purple-500">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
