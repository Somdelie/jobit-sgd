import { TextInput } from "flowbite-react"
import { BiBriefcase, BiMap, BiSearch } from "react-icons/bi"
import React from "react"
import { BiReset } from "react-icons/bi"

const Filters = () => {
  return (
    <div className="mt-16 flex gap-2 mx-auto items-center ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 w-[90%] ">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <span className="w-4 h-4 text-gray-500 dark:text-gray-400">
              <BiSearch />
            </span>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border transition border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondaryGreen focus:border-sering-secondaryGreen block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondaryGreen dark:focus:border-sering-secondaryGreen"
            placeholder="Search by Job Title..."
            required
          />
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <span className="w-4 h-4 text-gray-500 dark:text-gray-400">
              <BiMap />
            </span>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border transition border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondaryGreen focus:border-sering-secondaryGreen block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondaryGreen dark:focus:border-sering-secondaryGreen"
            placeholder="Search by Job Title..."
            required
          />
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <span className="w-4 h-4 text-gray-500 dark:text-gray-400">
              <BiBriefcase />
            </span>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border transition border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondaryGreen focus:border-sering-secondaryGreen block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondaryGreen dark:focus:border-sering-secondaryGreen"
            placeholder="Search by Job Title..."
            required
          />
        </div>
      </div>

      <button className="w-[10%] h-full py-2 flex justify-center items-center gap-1 rounded text-white bg-secondaryGreen hover:opacity-75 transition">
        <BiReset size={20} /> Reset
      </button>
    </div>
  )
}

export default Filters
