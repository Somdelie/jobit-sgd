"use client"
import Filters from "@/components/form/Filters"
import JobSkillTags from "@/components/ui/JobSkillTags"
import { LocationCity } from "@mui/icons-material"
import { Pagination } from "flowbite-react"
import { Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { FaBookmark } from "react-icons/fa"

// List of categories
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

const Talents = () => {
  // State variables
  const [selectedCategories, setSelectedCategories] = useState([])
  const [filterApplied, setFilterApplied] = useState(false)
  const [currentPage, setCurrentPage] = useState(1) // State to keep track of the current page
  const [usersData, setUsersData] = useState([
    {
      id: 1,
      name: "John Doe",
      profileImg: "/avatar-3.png",
      hourly_rate: 30,
      role: "Developer",
      location: "New York",
      num_of_connections: 100,
      overview: "Experienced developer specializing in React and Node.js",
    },
    {
      id: 2,
      name: "Jane Smith",
      profileImg: "/avatar-3.png",
      hourly_rate: 25,
      role: "Designer",
      location: "San Francisco",
      num_of_connections: 80,
      overview: "Creative designer passionate about UX/UI",
    },
    {
      id: 3,
      name: "Alice Johnson",
      profileImg: "/avatar-3.png",
      hourly_rate: 35,
      role: "Project Manager",
      location: "Chicago",
      num_of_connections: 120,
      overview: "Seasoned project manager with Agile expertise",
    },
    // Add more users similarly
    {
      id: 4,
      name: "Bob Williams",
      profileImg: "/avatar-3.png",
      hourly_rate: 28,
      role: "Frontend Developer",
      location: "Seattle",
      num_of_connections: 90,
      overview: "Passionate about crafting responsive web applications",
    },
    {
      id: 5,
      name: "Eva Martinez",
      profileImg: "/avatar-3.png",
      hourly_rate: 32,
      role: "Data Analyst",
      location: "Miami",
      num_of_connections: 110,
      overview: "Analyzing data for actionable insights",
    },
    {
      id: 6,
      name: "Michael Brown",
      profileImg: "/avatar-3.png",
      hourly_rate: 29,
      role: "Software Engineer",
      location: "Los Angeles",
      num_of_connections: 95,
      overview: "Building scalable software solutions",
    },
  ])
  const usersPerPage = 8 // Number of users per page

  // Calculate total pages based on user count and users per page
  const totalPages = Math.ceil(usersData.length / usersPerPage)

  // Function to handle page change
  const onPageChange = (page) => setCurrentPage(page)

  // Calculate the range of users to display on the current page
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser)
  // const visibleUsersCount = indexOfLastUser - indexOfFirstUser

  // Function to handle category change (checkbox selection)
  const handleCategoryChange = (categoryId) => {
    // Update the selected categories based on user interaction
    const isCategorySelected = selectedCategories.includes(categoryId)
    let updatedCategories = []

    if (isCategorySelected) {
      updatedCategories = selectedCategories.filter((id) => id !== categoryId)
    } else {
      updatedCategories = [...selectedCategories, categoryId]
    }

    setSelectedCategories(updatedCategories)
  }

  // Function to apply or clear filters based on selected categories
  const handleApplyFilter = () => {
    // Apply filter logic based on selected categories
    if (selectedCategories.length > 0) {
      console.log("Selected categories:", selectedCategories)
      setFilterApplied(true)
    }
  }

  // Function to clear selected filters
  const handleClearFilters = () => {
    // Clear selected categories and reset filter status
    setSelectedCategories([])
    setFilterApplied(false)
  }

  return (
    <div className="max-w-[80%] mx-auto ">
      {/* ... (Header content) */}
      <h1 className="font-bold text-2xl">Explore Talent</h1>
      <p>Tuesday, 24 Jan 2023</p>
      {/* Filters section */}
      <Filters />
      <div className="flex gap-6 mt-4">
        {/* Categories sidebar */}
        <div className="glass w-[25%] h-[70vh] sticky top-[5rem] overflow-y-auto">
          {/* ... (Category filter UI) */}
          <div className="flex items-center justify-between transition py-2 px-2 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-bold tracking-tight transition dark:text-white">
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
                  className="dark:text-gray-300 transition text-gray-500">
                  {cat.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* Main content area */}
        <div className="w-full">
          {/* Header of the main content area */}
          <div className="flex justify-between items-center py-2">
            {/* Showing count and sorting */}
            <span className="flex">Showing: {currentUsers.length} talents</span>
            {/* Sort by dropdown */}
            <div className="flex">
              {/* ... (Sorting UI) */}
              <div className="max-w-md flex items-center gap-2 ">
                <label>Sort by:</label>
                <select className="block text-base px-4 font-medium py-2 border transition border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="RecentlyPosted">Recently Posted</option>
                  <option value="NearBy">Near By</option>
                  <option value="LowerToHigher">Lower To Higher</option>
                  <option value="HigherToLower">Higher To Lower</option>
                </select>
              </div>
            </div>
          </div>
          {/* User data display */}
          {usersData.length > 0 ? (
            <div className="">
              {/* Display user cards */}
              <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                {/* ... (User card components) */}
                {currentUsers.map((user) => (
                  <div
                    className="card p-4 group flex-1 basis-[25rem] "
                    key={user?.id}>
                    <div className="relative">
                      <div className="relative mx-auto rounded w-full">
                        <span className="absolute top-1 left-[58%] transition transform -translate-y-1/2 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        <Image
                          width={60}
                          height={60}
                          src={user?.profileImg}
                          className="object-cover rounded mx-auto"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-2 items-center justify-between">
                      <h1 className="text-xl font-semibold">{user?.name}</h1>
                      <button className="bg-slate-300 transition px-3 py-1 rounded flex items-center gap-x-2 flex-shrink-0 text-muted hover:bg-slate-200 dark:bg-hover-color dark:hover:bg-[#252532]">
                        <span>Save</span>
                        <FaBookmark />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between ">
                      <p className="text-primary capitalize">{user?.role}</p>
                      <span className="text-sm text-muted flex items-center gap-1">
                        <LocationCity />
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
                      <button className="btn flex-shrink-0 text-text hover:text-secondaryGreen dark:hover:text-text transition bg-secondaryGreen hover:bg-transparent border border-secondaryGreen">
                        message
                      </button>
                      <button className="btn btn-primary flex-shrink-0 border border-secondaryGreen dark:text-text text-secondaryGreen hover:text-text dark:hover:text-text">
                        Hire
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              {usersData.length > usersPerPage && ( // Conditionally rendering pagination
                <div className="flex overflow-x-auto sm:justify-end mt-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                  />
                </div>
              )}
            </div>
          ) : (
            //  {/* No users found */}
            <div className="flex-center-center mt-5">
              {/* ... (No users found UI) */}
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
