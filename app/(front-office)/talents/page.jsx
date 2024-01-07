"use client"
import Filters from "@/components/form/Filters"
import Paragraph from "@/components/front-office/Paragraph"
import CardComp from "@/components/front-office/cards/Card"
import Categories from "@/components/front-office/home/Categories"
import JobSkillTags from "@/components/ui/JobSkillTags"
import CurrencyConverter from "@/lib/CurrencyConverter"
import { Avatar, Select } from "flowbite-react"
import { Eye, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { BiBriefcase } from "react-icons/bi"
import { FaBookmark } from "react-icons/fa"
import { FiClock, FiUsers } from "react-icons/fi"

const categories = [
  {
    id: 1,
    name: "Graphics & Design",
  },
  {
    id: 2,
    name: "Digital Marketing",
  },
  {
    id: 3,
    name: "Writing & Translation",
  },
  {
    id: 4,
    name: "Video & Animation",
  },
  {
    id: 5,
    name: "Music & Audio",
  },
  {
    id: 6,
    name: "Programming ",
  },
  {
    id: 7,
    name: "Business",
  },
  {
    id: 8,
    name: "Lifestyle",
  },
  {
    id: 9,
    name: "Trending",
  },
  {
    id: 10,
    name: "freelancers",
  },
]

// Assuming you have a 'users' array
const users = [
  {
    id: 1,
    name: "John Doe",
    hourly_rate: 30,
    role: "Developer",
    location: "New York",
    num_of_connections: 100,
    overview: "Experienced developer specializing in React and Node.js",
  },
  // Add more user objects as needed
]

const Talents = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [filterApplied, setFilterApplied] = useState(false)

  const handleCategoryChange = (categoryId) => {
    const isCategorySelected = selectedCategories.includes(categoryId)
    let updatedCategories = []

    if (isCategorySelected) {
      updatedCategories = selectedCategories.filter((id) => id !== categoryId)
    } else {
      updatedCategories = [...selectedCategories, categoryId]
    }

    setSelectedCategories(updatedCategories)
  }

  const handleApplyFilter = () => {
    if (selectedCategories.length > 0) {
      console.log("Selected categories:", selectedCategories)
      setFilterApplied(true)
    }
  }

  const handleClearFilters = () => {
    setSelectedCategories([])
    setFilterApplied(false)
  }

  return (
    <div className="">
      <h1 className="font-bold text-2xl">Explore Talent</h1>
      <p>Tuesday, 24 Jan 2023</p>
      <Categories />
      <Filters />
      <div className="flex max-w-[80%] mx-auto gap-6 mt-4">
        <div className="glass w-[25%] h-[70vh] overflow-y-auto">
          <div className="flex items-center justify-between py-2 px-2 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-bold tracking-tight dark:text-white">
              Categories
            </h3>
            <button
              className={`flex items-center bg-red-200 rounded-[10px] px-3 py-2`}
              onClick={filterApplied ? handleClearFilters : handleApplyFilter}>
              <Filter /> {filterApplied ? "Clear Filters" : "Apply Filters"}
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-2 py-2">
            {categories.map((cat) => (
              <div
                className="flex items-center gap-2 px-6 py-2 text-gray-300 "
                key={cat.id}>
                <input
                  type="checkbox"
                  id={cat.id}
                  checked={selectedCategories.includes(cat.id)}
                  onChange={() => handleCategoryChange(cat.id)}
                />
                <label
                  htmlFor={cat.id}
                  className="dark:text-gray-300 text-gray-500">
                  {cat.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center py-2">
            <span className="flex">Showing: {users.length} talents</span>
            <div className="flex">
              <span></span>
              <h2></h2>
              <div className="max-w-md flex items-center gap-2 ">
                <label>Sort by:</label>
                <Select id="sort">
                  <option>Recently Posted</option>
                  <option>Near By</option>
                  <option>Lower To Higher</option>
                  <option>Higher To Lower</option>
                </Select>
              </div>
            </div>
          </div>
          {users.length > 0 ? (
            <div className="w-full grid sm:grid-cols-4 gap-2">
              <div className="mt-6 flex flex-wrap gap-4">
                {users.map((user) => (
                  <div
                    className="card p-4 group flex-1 basis-[25rem] "
                    key={user.id}>
                    {/* <Avatar
                      img="/avatar-3.png"
                      status="online"
                      rounded
                      statusPosition="top-right"
                      className="-translate-y-10"
                    /> */}
                    <div className="relative">
                      <Image
                        width={60}
                        height={60}
                        src="/avatar-3.png"
                        className="-translate-y-10"
                        alt=""
                      />
                      <span class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-2 justify-between">
                      <h1 className="text-xl font-semibold">{user?.name}</h1>
                      <button className="bg-slate-100 px-3 py-1 rounded flex items-center gap-x-2 flex-shrink-0 text-muted hover:bg-slate-200 dark:bg-hover-color dark:hover:bg-[#252532]">
                        <span>Save</span>
                        <FaBookmark />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between ">
                      <p className="text-primary capitalize">{user?.role}</p>
                      <span className="text-sm text-muted">
                        {user?.location}
                      </span>
                    </div>
                    <div className="mt-3">
                      <JobSkillTags
                        skills={[
                          "Web Development",
                          "JavaScript",
                          "React",
                          "Node.js",
                        ]}
                      />
                    </div>
                    <p className="text-sm mt-3">
                      {user?.overview.length > 60
                        ? `${user?.overview.slice(0, 60)}...`
                        : user?.overview}
                    </p>
                    <div className="flex  items-center justify-between mt-3">
                      <button className="btn flex-shrink-0 text-text dark:bg-secondaryGreen hover:bg-transparent dark:border border-secondaryGreen">
                        message
                      </button>
                      <button className="btn btn-primary flex-shrink-0 border border-secondaryGreen">
                        Hire
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* {talents?.map((talent) => (
                <div
                  className="card p-3 flex-1 basis-[16rem] group "
                  key={talent.id}>
                  <Link
                    href="#"
                    className="flex items-center cursor-pointer gap-3">
                    <Avatar
                      img="/avatar-3.png"
                      status="online"
                      rounded
                      statusPosition="top-right"
                    />
                    <h1 className="text-lg font-semibold">{talent?.title}</h1>
                  </Link>
                  <hr className="mt-2 border-dotted" />
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      {talent?.description.slice(0, 50)}...
                    </p>
                    <div className="flex items-center gap-x-2 mb-2 mt-4">
                      <div className=" bg-slate-200 rounded-sm flex items-center flex-col sm:flex-row gap-2 px-2 py-1 dark:bg-hover-color">
                        <BiBriefcase />
                        <span className="text-muted sm:text-sm flex-shrink-0">
                          {talent?.type_of_employment}
                        </span>
                      </div>
                      <div className=" bg-slate-200 rounded-sm flex items-center flex-col sm:flex-row gap-2 px-2 py-1 dark:bg-hover-color">
                        <FiUsers />
                        <span className="text-muted sm:text-sm flex-shrink-0">
                          45 Applied
                        </span>
                      </div>
                      <div className=" bg-slate-200 rounded-sm flex items-center flex-col sm:flex-row gap-2 px-2 py-1 dark:bg-hover-color">
                        <FiClock />
                        <span className="text-muted  sm:text-sm flex-shrink-0">
                          3 days left
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <h1>
                        {talent?.salary_range}/
                        <span className="text-sm text-muted">month</span>
                      </h1>
                      <Link
                        href="#"
                        className=" bg-secondaryGreen hover:opacity-80 transition rounded-full px-2 py-1 text-gray-300">
                        Hire Me
                      </Link>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          ) : (
            <div className="flex-center-center mt-5">
              <div className="image-wrapper">
                <Image
                  src="/404.png"
                  alt="404"
                  width={500}
                  height={500}
                  className="mx-auto  object-contain h-[350px] w-[350px]"
                />
                <h1 className="text-center mt-5 text-5xl opacity-60">
                  Oops! No talents found
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Talents
