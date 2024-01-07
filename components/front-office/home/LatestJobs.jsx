/* eslint-disable @next/next/no-img-element */
import { BiBriefcase } from "react-icons/bi"
import { FiClock, FiUsers } from "react-icons/fi"
import Link from "next/link"
import Image from "next/image"

const LatestJobs = ({ jobs }) => {
  return (
    <div className="md:col-span-2 flex flex-wrap gap-3">
      {jobs?.slice(0, 5).map((job) => (
        <div className="card p-3 flex-1 basis-[16rem] group " key={job.id}>
          <Link href="#" className="flex items-center cursor-pointer gap-3">
            <Image width={30} height={30} src={job?.logo_url} alt="" />
            <h1 className="text-lg font-semibold">{job?.title}</h1>
          </Link>
          <hr className="mt-2 border-dotted" />
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              {job?.description.slice(0, 200)}...
            </p>
            <div className="flex items-center gap-x-2 mb-2 mt-4">
              <div className=" bg-slate-200 rounded-sm flex items-center flex-col sm:flex-row gap-2 px-2 py-1 dark:bg-hover-color">
                <BiBriefcase />
                <span className="text-muted sm:text-sm flex-shrink-0">
                  {job?.type_of_employment}
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
                {job?.salary_range}/
                <span className="text-sm text-muted">month</span>
              </h1>
              <Link
                href="#"
                className=" bg-secondaryGreen hover:opacity-80 transition rounded-full px-2 py-1 text-gray-300">
                apply now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LatestJobs
