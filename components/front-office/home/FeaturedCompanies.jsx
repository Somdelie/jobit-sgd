/* eslint-disable @next/next/no-img-element */
import { companies } from "@/data/companies"
import Image from "next/image"
import { BiBriefcase, BiMap } from "react-icons/bi"
import { FaStar } from "react-icons/fa"

const FeaturedCompanies = () => {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold">Featured Companies</h1>
      <div className="flex gap-3 flex-wrap mt-4">
        {companies.map((company) => (
          <div
            className="flex-1 basis-[12rem] bg-white dark:bg-dark-card transition dark:text-[#cbd5e1] w-[150px] h-[200px] p-3 border dark:border-dark-light rounded-[10px]"
            key={company.id}>
            <div className="flex items-center gap-3">
              <Image width={40} height={40} src="" alt="LOGO" />
              <div>
                <h1>{company?.name}</h1>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500 text-sm" />
                  <span className="text-muted text-sm">4.8k</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <BiMap className="text-muted" />
              <span className="text-muted">{company?.location}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <BiBriefcase className="text-muted" />
              <span className="text-muted ">
                {company?.number_of_vacancies} Job Vacancies
              </span>
            </div>
            <button className="w-full py-2 bg-gray-300 hover:bg-slate-200 dark:bg-dark-light dark:hover:opacity-75 rounded-[5px] capitalize mt-3 transition">
              more details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCompanies
