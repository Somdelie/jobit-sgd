import { TextInput } from "flowbite-react"
import { BiBriefcase, BiMap, BiSearch } from "react-icons/bi"
import React from "react"
import { BiReset } from "react-icons/bi"

const Filters = () => {
  return (
    <div className="mt-16 flex gap-2 mx-auto items-center max-w-[80%]">
      <div className="grid grid-cols-3 w-[90%] bg-red-600">
        <TextInput
          id="search"
          type="text"
          icon={BiSearch}
          placeholder="Search by Job Title..."
          className=""
        />
        <TextInput
          id="locate"
          type="text"
          icon={BiMap}
          placeholder="Search by location..."
          className=""
        />
        <TextInput
          id="jobType"
          type="text"
          icon={BiBriefcase}
          placeholder="Search by Job Type..."
          className=""
        />
      </div>

      <button className="w-[10%] h-full py-2 flex justify-center items-center gap-1 rounded text-white bg-secondaryGreen hover:opacity-75 transition">
        <BiReset size={20} /> Reset
      </button>
    </div>
  )
}

export default Filters
