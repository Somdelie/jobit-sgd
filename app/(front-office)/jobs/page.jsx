"use client"
import { useState } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Categories from "@/components/front-office/home/Categories"
import { Avatar, Card, Checkbox, Label, Select } from "flowbite-react"
import { Eye, Filter, MoveUpRight } from "lucide-react"
import Paragraph from "@/components/front-office/Paragraph"
import CurrencyConverter from "@/lib/CurrencyConverter"
import Filters from "@/components/form/Filters"

const jobs = [
  {
    id: 1,
    title: "School Driver",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    createdAt: "6 hours ago",
    location: "Pretoria Gauteng",
    postedBy: "cautie",
    amountStart: 20000,
    amountEnd: 25000,
    rateType: "Monthly Rate",
  },
  {
    id: 2,
    title: "Painter Needed",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    createdAt: "2 days ago",
    location: "Pretoria Gauteng",
    postedBy: "cautie",
    amountStart: 100,
    amountEnd: 150,
    rateType: "Hourly Rate",
  },
  {
    id: 3,
    title: "4 Cleaners Needed",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    createdAt: "2 minutes ago",
    location: "Tembisa Gauteng",
    postedBy: "cautie",
    amountStart: 300,
    amountEnd: 450,
    rateType: "Daily Rate",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    createdAt: "2 hours ago",
    location: "Soweto Gauteng",
    postedBy: "cautie",
    amountStart: "negotiate",
    amountEnd: "",
    rateType: "Negotiate",
  },
]

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

const JobsPage = () => {
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
            <span className="flex">Showing: {jobs.length} Jobs</span>
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
          {jobs.length > 0 ? (
            <div className="w-full flex flex-col gap-2">
              {jobs?.map((job) => (
                <Card key={job.id} className="bg-white">
                  <div className="flex-3 p-2 flex gap-2">
                    <div className="flex gap-3 items-start">
                      <Avatar
                        img="/avatar-3.png"
                        status="online"
                        statusPosition="top-right"
                      />
                    </div>
                    <div className="flex w-[75%] px-6 flex-col gap-2 border-r-2 border-gray-200 dark:border-gray-600">
                      <h5 className="text-2xl font-bold tracking-tight dark:text-white">
                        {job.title}
                      </h5>
                      <div className="flex items-center gap-6 text-gray-400 text-[12px] capitalize">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/map.png"
                            alt="map"
                            width={20}
                            height={20}
                            className="mx-auto  object-contain"
                          />

                          <Paragraph title={job?.location} />
                        </div>
                        <div className="flex items-center gap-2">
                          <Image
                            src="/schedule.png"
                            alt="map"
                            width={20}
                            height={20}
                            className="mx-auto  object-contain"
                          />
                          <Paragraph title={job?.createdAt} />
                        </div>
                        <div className="flex items-center gap-2">
                          <Image
                            src="/working.png"
                            alt="map"
                            width={20}
                            height={20}
                            className="mx-auto  object-contain"
                          />
                          <Paragraph title={"posted by: " + job?.postedBy} />
                        </div>
                      </div>
                      <Paragraph
                        title={job.description + "."}
                        className="text-sm text-gray-500 max-w-[100%]"
                      />
                    </div>
                    <div className="flex w-[25%] flex-col gap-4 items-end">
                      <CurrencyConverter
                        amountStart={job.amountStart}
                        amountEnd={job.amountEnd}
                      />
                      <Paragraph
                        title={job?.rateType}
                        className="text-sm text-gray-500"
                      />
                      <Link
                        href={`/jobs/${job?.id}`}
                        className="flex items-center bg-green-200 px-4 py-2 rounded text-secondaryGreen hover:opacity-75">
                        <Eye />
                        View Details
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
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
                  Oops! No jobs found
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default JobsPage
