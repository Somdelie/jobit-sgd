import Banner from "@/components/front-office/home/Banner"
import Categories from "@/components/front-office/home/Categories"
import Link from "next/link"
import { jobs } from "@/data/jobs"
import FeaturedCompanies from "@/components/front-office/overview/FeaturedCompanies"
import LatestJobs from "@/components/front-office/overview/LatestJobs"
import Recommended from "@/components/front-office/overview/Recommended"
import Schedule from "@/components/front-office/overview/Schedule"
import { FiArrowRight } from "react-icons/fi"
import Featured from "@/components/front-office/home/Featured"

export default function Home() {
  return (
    <div>
      <Categories />
      <Banner />
      <div className="max-w-[80%] mx-auto py-4 dark:text-text">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {/*---------------------------------------- Featured & Latest Jobs------------------------------------- */}
          <div className="md:col-span-2 h-fit sm:sticky top-0">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold">Latest Job Posts</h1>
              <Link
                href="/search"
                className="flex items-center gap-x-2 text-secondaryGreen">
                <span>See All</span>
                <FiArrowRight />
              </Link>
            </div>

            <LatestJobs jobs={jobs} />

            <FeaturedCompanies />
          </div>
          {/*---------------------------------------- Recommended & Schedule------------------------------------- */}
          <div className="md:col-span-1 h-fit sm:sticky top-0">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold">Recommended for you</h1>
                <Link
                  href="#"
                  className="flex items-center gap-x-2 text-secondaryGreen">
                  <span>See All</span>
                  <FiArrowRight />
                </Link>
              </div>
              <Recommended jobs={jobs} />
              <Schedule />
            </div>
          </div>
        </div>
      </div>
      <Featured />
    </div>
  )
}
