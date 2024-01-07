import TypingAnimation from "@/components/ui/TypingAnimation"
import Image from "next/image"
import React from "react"
import CardComp from "../cards/Card"
import Animation from "./Animation"
import Paragraph from "../Paragraph"
import { Avatar } from "flowbite-react"
import Link from "next/link"

const Banner = () => {
  // const fullText = "Hire the best freelancers for any job, online."
  return (
    <div className="flex mt-4 items-center justify-center min-h-[60vh] gap-40 mx-auto max-w-[80%] ">
      <div>
        <TypingAnimation fullText="Hire the best freelancers for any job, online." />

        <p className="text-md ">
          Millions of people use somdelie.com to turn their ideas into reality.
        </p>

        <div className="flex items-center gap-4 mt-16">
          <button className="group rounded relative h-12 w-48 overflow-hidden bg-secondaryGreen text-lg shadow">
            <div className="absolute inset-0 w-1 bg-white transition-all duration-300 ease-out group-hover:w-full"></div>
            <span className="relative text-white group-hover:text-secondaryGreen">
              Find Work
            </span>
          </button>
          <button className="group rounded relative h-12 w-48 overflow-hidden border-2 text-secondaryGreen border-secondaryGreen bg-white text-lg shadow">
            <div className="absolute inset-0 w-1 bg-secondaryGreen transition-all duration-300 ease-out group-hover:w-full"></div>
            <span className="relative group-hover:text-white">Find Talent</span>
          </button>
        </div>
      </div>
      <div className="relative">
        <Image width={700} height={700} src="/about-1.png" alt="" />
        <div className="glass absolute left-1/4 top-1/4 rounded-[10px] animate-bounce3 py-2 px-3 gap-3 flex items-center">
          <div className="flex items-center justify-center rounded-full bg-secondaryLightGreen h-[50px] w-[50px]">
            <Image width={24} height={24} src="/review.png" alt="" />
          </div>

          <div className="">
            <h3>Proof of quality</h3>
            <Paragraph title="Lorem Ipsum Dolar Amet" />
          </div>
        </div>
        <div className="glass absolute -left-0 bottom-4 rounded-[10px] flex items-center gap-3 animate-bounce p-4">
          <h3 className="whitespace-nowrap">58M+ Happy Clients</h3>
          <div class="flex -space-x-3 rtl:space-x-reverse">
            <Image
              width={50}
              height={50}
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="/avatar-3.png"
              alt=""
            />
            <Image
              width={50}
              height={50}
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="/avatar-3.png"
              alt=""
            />
            <Image
              width={50}
              height={50}
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="/avatar-3.png"
              alt=""
            />
            <Link
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#">
              +99
            </Link>
          </div>
        </div>
        <div className="glass absolute bottom-1/3 -right-8 rounded-[10px] animate-bounce2 py-2 px-3 gap-3 flex items-center">
          <div className="flex items-center justify-center rounded-full bg-secondaryLightGreen h-[50px] w-[50px]">
            <Image width={24} height={24} src="/review.png" alt="" />
          </div>
          <div>
            <h3>Safe and secure</h3>
            <Paragraph title="Lorem Ipsum Dolar Amet" />
          </div>
          <div className="flex">{/* <Animation /> */}</div>
        </div>
      </div>
    </div>
  )
}

export default Banner
